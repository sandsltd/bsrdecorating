'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';

/* eslint-disable @typescript-eslint/no-explicit-any */
// Type assertion for Mapbox GL JS when loaded via script tag

// Function to extract and count project locations
const getProjectLocations = () => {
  const locationCounts: { [key: string]: { count: number; coords: [number, number] } } = {};
  
  // For now, we have data for Honiton (Fenny Bridges)
  // In the future, this can be expanded as more projects are added
  const locationMap: { [key: string]: [number, number] } = {
    'Fenny Bridges, Honiton': [-3.1889, 50.8088], // Approximate coordinates for Fenny Bridges near Honiton
    'Honiton': [-3.1889, 50.8088],
    'Dawlish': [-3.4648, 50.5775],
    'Newton Abbot': [-3.6093, 50.5233],
    'Exeter': [-3.5339, 50.7184],
    'Exmouth': [-3.4139, 50.6195],
    'Teignmouth': [-3.4978, 50.5458],
    'Harbourton, Totnes': [-3.6945, 50.4318], // Coordinates for Harbourton, Totnes
    'Totnes': [-3.6945, 50.4318],
    'Kenton': [-3.4648, 50.5989], // Coordinates for Kenton, Devon
    'Torquay': [-3.5339, 50.4619], // Coordinates for Torquay, Devon
    'Bovey Tracey': [-3.6778, 50.5922], // Coordinates for Bovey Tracey, Devon
    'Salcombe': [-3.7694, 50.2389], // Coordinates for Salcombe, Devon
    'Cheriton Bishop': [-3.6889, 50.7556], // Coordinates for Cheriton Bishop, Devon
  };

  projects.forEach(project => {
    const location = project.location;
    
    // Handle multiple locations separated by &, and, or commas
    const locationParts = location.split(/\s*&\s*|\s*,\s*|\s+and\s+/).map(part => part.trim()).filter(part => part.length > 0);
    
    locationParts.forEach(locationPart => {
      let coords: [number, number] | undefined;
      let locationKey = '';
      
      // Try direct match first
      if (locationMap[locationPart]) {
        coords = locationMap[locationPart];
        locationKey = locationPart;
      } else {
        // Try to extract town name (e.g., "Fenny Bridges, Honiton" -> "Honiton")
        const subParts = locationPart.split(',').map(part => part.trim());
        for (const subPart of subParts) {
          if (locationMap[subPart]) {
            coords = locationMap[subPart];
            locationKey = subPart;
            break;
          }
        }
      }

      if (coords && locationKey) {
        if (locationCounts[locationKey]) {
          locationCounts[locationKey].count++;
        } else {
          locationCounts[locationKey] = { count: 1, coords };
        }
      }
    });
  });

  return locationCounts;
};

const ProjectLocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const mapboxApiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    
    if (!mapboxApiKey) {
      console.error('Mapbox API key not found');
      return;
    }

    // Handle map resize for mobile responsiveness  
    const handleResize = () => {
      if (map.current) {
        setTimeout(() => {
          map.current!.resize();
          // Adjust zoom based on new screen size
          const isMobile = window.innerWidth < 768;
          const newZoom = isMobile ? 7.8 : 8.3;
          map.current!.setZoom(newZoom);
        }, 100);
      }
    };

    // Load Mapbox GL JS with error handling
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js';
    script.onerror = (error) => {
      console.error('Failed to load Mapbox GL JS:', error);
    };
    script.onload = () => {
      try {
        // Load CSS
        const link = document.createElement('link');
        link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Initialize map after both script and CSS are loaded
        setTimeout(() => {
          try {
            if (!(window as any).mapboxgl) {
              console.error('Mapbox GL JS not loaded');
              return;
            }

            const isMobile = window.innerWidth < 768;
            
            map.current = new (window as any).mapboxgl.Map({
              container: mapContainer.current!,
              style: 'mapbox://styles/mapbox/dark-v11',
              center: [-3.57, 50.50], // Center to include Salcombe in the south
              zoom: isMobile ? 7.8 : 8.3,
              accessToken: mapboxApiKey,
              attributionControl: false
            });
            map.current!.on('load', () => {
              try {
          // Get project locations with counts
          const projectLocations = getProjectLocations();

          // Add project location markers
          Object.entries(projectLocations).forEach(([locationName, data]) => {
            const { count, coords } = data;
            
            // Check if this is Dawlish (our HQ location) - use gold styling
            const isDawlish = locationName === 'Dawlish';
            
            // Create container for marker and label
            const markerContainer = document.createElement('div');
            markerContainer.style.cssText = `
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: pointer;
            `;

            // Create marker element with number
            const markerEl = document.createElement('div');
            markerEl.style.cssText = `
              width: 30px;
              height: 30px;
              background: ${isDawlish ? '#FFD700' : '#E801F8'};
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 3px 9px rgba(${isDawlish ? '255, 215, 0' : '232, 1, 248'}, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              color: ${isDawlish ? '#000' : 'white'};
              transition: transform 0.2s ease;
            `;
            markerEl.textContent = count.toString();

            markerContainer.appendChild(markerEl);

            // Add hover effect
            markerContainer.addEventListener('mouseenter', () => {
              markerEl.style.transform = 'scale(1.1)';
            });
            markerContainer.addEventListener('mouseleave', () => {
              markerEl.style.transform = 'scale(1)';
            });

            const marker = new (window as any).mapboxgl.Marker(markerContainer)
              .setLngLat(coords)
              .addTo(map.current!);

            // Add popup for project details
            const popup = new (window as any).mapboxgl.Popup({ offset: 15 })
              .setHTML(`
                <div style="text-align: center; padding: 12px; font-family: Arial, sans-serif;">
                  <h4 style="margin: 0; color: ${isDawlish ? '#FFD700' : '#E801F8'}; font-weight: bold; font-size: 18px;">
                    ${locationName}${isDawlish ? ' - BSR HQ' : ''}
                  </h4>
                  <p style="margin: 4px 0 0 0; font-size: 14px; color: #333; font-weight: 500;">
                    ${count} ${count === 1 ? 'Project' : 'Projects'} Completed
                  </p>
                  ${isDawlish ? '<p style="margin: 4px 0 0 0; font-size: 12px; color: #666; font-style: italic;">BSR Decorating Headquarters</p>' : ''}
                </div>
              `);
            
            marker.setPopup(popup);
          });


              } catch (error) {
                console.error('Error setting up map markers:', error);
              }
            });

            // Add resize listener
            window.addEventListener('resize', handleResize);
          } catch (mapError) {
            console.error('Error initializing Mapbox map:', mapError);
          }
        }, 100);
      } catch (scriptError) {
        console.error('Error in script onload:', scriptError);
      }
    };

    document.body.appendChild(script);

    // Cleanup function for the effect
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('resize', handleResize);
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Map Container */}
      <div 
        ref={mapContainer} 
        className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-bsr-gray-light"
      />
      
      {/* Map Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-bsr-highlight rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs">
            1
          </div>
          <span className="text-gray-300">Project Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-bsr-yellow rounded-full border-2 border-white flex items-center justify-center text-black font-bold text-xs">
            HQ
          </div>
          <span className="text-gray-300">BSR Headquarters</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectLocationMap;

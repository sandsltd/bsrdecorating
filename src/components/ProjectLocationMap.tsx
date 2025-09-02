'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';

declare global {
  interface Window {
    mapboxgl: typeof import('mapbox-gl');
  }
}

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
  };

  projects.forEach(project => {
    const location = project.location;
    
    // Handle multiple locations separated by &, and, or commas
    const locationParts = location.split(/[&,]|and/).map(part => part.trim());
    
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
          const newZoom = isMobile ? 7.5 : 8.5;
          map.current!.setZoom(newZoom);
        }, 100);
      }
    };

    // Load Mapbox GL JS
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js';
    script.onload = () => {
      // Load CSS
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Initialize map after both script and CSS are loaded
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        
        map.current = new window.mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/dark-v11',
          center: [-3.5, 50.7], // Center on Devon
          zoom: isMobile ? 7.5 : 8.5,
          accessToken: mapboxApiKey,
          attributionControl: false
        });

        map.current!.on('load', () => {
          // Get project locations with counts
          const projectLocations = getProjectLocations();

          // Add project location markers
          Object.entries(projectLocations).forEach(([locationName, data]) => {
            const { count, coords } = data;
            
            // Create marker element
            const markerEl = document.createElement('div');
            markerEl.style.cssText = `
              width: 32px;
              height: 32px;
              background: #E801F8;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 4px 12px rgba(232, 1, 248, 0.4);
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              color: white;
              position: relative;
            `;
            markerEl.textContent = count.toString();

            const marker = new window.mapboxgl.Marker(markerEl)
              .setLngLat(coords)
              .addTo(map.current!);

            // Add label below the marker
            const labelEl = document.createElement('div');
            labelEl.style.cssText = `
              position: absolute;
              background: rgba(232, 1, 248, 0.9);
              color: white;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 12px;
              font-weight: bold;
              white-space: nowrap;
              pointer-events: none;
              transform: translate(-50%, 10px);
              border: 1px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            `;
            labelEl.textContent = locationName;

            new window.mapboxgl.Marker({
              element: labelEl,
              anchor: 'top'
            })
            .setLngLat(coords)
            .addTo(map.current!);

            // Add popup for project details
            const popup = new window.mapboxgl.Popup({ offset: 15 })
              .setHTML(`
                <div style="text-align: center; padding: 12px; font-family: Arial, sans-serif;">
                  <h4 style="margin: 0; color: #E801F8; font-weight: bold; font-size: 18px;">${locationName}</h4>
                  <p style="margin: 4px 0 0 0; font-size: 14px; color: #333; font-weight: 500;">
                    ${count} ${count === 1 ? 'Project' : 'Projects'} Completed
                  </p>
                </div>
              `);
            
            marker.setPopup(popup);
          });

          // Add BSR headquarters marker
          const hqEl = document.createElement('div');
          hqEl.style.cssText = `
            width: 40px;
            height: 40px;
            background: #FFD700;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            color: #000;
          `;
          hqEl.textContent = 'HQ';

          const hqMarker = new window.mapboxgl.Marker(hqEl)
            .setLngLat([-3.4648, 50.5775]) // Dawlish coordinates
            .addTo(map.current!);

          // Add HQ label
          const hqLabelEl = document.createElement('div');
          hqLabelEl.style.cssText = `
            position: absolute;
            background: rgba(255, 215, 0, 0.9);
            color: black;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
            pointer-events: none;
            transform: translate(-50%, 10px);
            border: 1px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          `;
          hqLabelEl.textContent = 'BSR Decorating HQ';

          new window.mapboxgl.Marker({
            element: hqLabelEl,
            anchor: 'top'
          })
          .setLngLat([-3.4648, 50.5775])
          .addTo(map.current!);

          // Add HQ popup
          const hqPopup = new window.mapboxgl.Popup({ offset: 15 })
            .setHTML(`
              <div style="text-align: center; padding: 12px; font-family: Arial, sans-serif;">
                <h4 style="margin: 0; color: #FFD700; font-weight: bold; font-size: 18px;">BSR Decorating</h4>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #333; font-weight: 500;">Headquarters - Dawlish</p>
              </div>
            `);
          
          hqMarker.setPopup(hqPopup);
        });

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          if (map.current) {
            map.current.remove();
            map.current = null;
          }
        };
      }, 100);
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
          <div className="w-6 h-6 bg-bsr-highlight rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs">
            1
          </div>
          <span className="text-gray-300">Project Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-bsr-yellow rounded-full border-2 border-white flex items-center justify-center text-black font-bold text-xs">
            HQ
          </div>
          <span className="text-gray-300">BSR Headquarters</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectLocationMap;

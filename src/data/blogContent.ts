export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'image' | 'link' | 'colorPalette' | 'quoteCTA';
  content?: string | string[] | ColorSwatch[];
  level?: number; // for headings (1-6)
  imageAlt?: string; // for images
  href?: string; // for links
  linkText?: string; // for links
}

export interface BlogContentData {
  sections: BlogSection[];
}

export const blogContent: Record<string, BlogContentData> = {
  'decorator-exeter-reviews-what-to-look-for': {
    sections: [
      {
        type: 'paragraph',
        content: 'With over 50 painting and decorating businesses serving Exeter, choosing the right one can feel overwhelming. Online reviews are often the first place homeowners look, but not all decorator Exeter reviews are created equal. Some tell you everything you need to know about quality, reliability and expertise. Others are vague, outdated or fail to reflect the specific challenges of decorating in a city with 994 listed buildings and 20 conservation areas. This guide will help you separate genuine insight from marketing noise and make an informed choice for your Exeter property.',
      },
      {
        type: 'heading',
        content: 'Why Reviews Matter More for Exeter Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter is not a standard market for decorators. The city centre alone contains 380 listed buildings in the St David\'s ward, with entire streets of Georgian and Victorian properties in areas like St Leonard\'s, Pennsylvania and Southernhay. Topsham adds another 228 listed buildings, many of them waterfront homes facing unique humidity and weather challenges. This means your decorator needs more than basic painting skills. They need to understand breathable paints, lime plaster, sash window detailing and conservation area restrictions. A five-star review from someone who had their new-build lounge painted tells you nothing about whether that decorator can handle your 1840s terraced house in Newtown.',
      },
      {
        type: 'paragraph',
        content: 'When reading decorator Exeter reviews, look for evidence that the reviewer\'s property type matches yours. Did they mention period features? Conservation area consent? Damp issues common to older Devon homes? These details reveal whether the decorator has relevant experience for your project.',
      },
      {
        type: 'heading',
        content: 'Red Flags in Decorator Reviews',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Generic Praise With No Specifics',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Reviews that say \'great job\' or \'very professional\' without describing what was actually done are next to useless. What you want to see are specifics: rooms decorated, techniques used, problems solved. A review that mentions \'replastered the bay window reveal and matched the original moulding profile\' tells you the decorator has heritage skills. A review that says \'painted the living room, looks nice\' tells you nothing.',
      },
      {
        type: 'subheading',
        content: 'No Mention of Timeline or Budget',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Reliable decorators stick to quoted prices and agreed timelines. Reviews should mention whether the job was completed on schedule and within budget. In Exeter, where the median decorating cost for a full house is around £2,360 and a single room averages £412, you need confidence that quotes are accurate. If reviews never mention cost or timing, it suggests either highly variable performance or potentially fabricated feedback.',
      },
      {
        type: 'subheading',
        content: 'All Five Stars With No Variation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Paradoxically, a decorator with 50 five-star reviews and nothing else may be less trustworthy than one with a mix of fours and fives. Genuine review profiles show some variation. Homeowners have different standards and priorities. What matters is how the decorator responds to anything less than perfect feedback and whether issues were resolved professionally.',
      },
      {
        type: 'heading',
        content: 'What Good Reviews Should Tell You',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Evidence of Local Knowledge',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Does the decorator understand Exeter? Reviews should reference specific areas: Heavitree, St Leonard\'s, Topsham, Pennsylvania. They should mention local property challenges like Devon\'s coastal humidity, the prevalence of solid-wall Victorian terraces, or the need for breathable paints on pre-1919 homes. A decorator who works across Devon will have reviews mentioning different towns and property types. This local expertise matters when you are choosing paint systems that need to withstand salt-laden south-westerlies or dealing with listed building consent in one of Exeter\'s conservation areas.',
      },
      {
        type: 'subheading',
        content: 'Problem-Solving Examples',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The best decorator Exeter reviews describe challenges overcome. Did the decorator identify damp issues before painting? Recommend breathable lime-based paints for an old property? Source period-appropriate colours for a listed building? Match existing woodwork finishes perfectly after repairs? These details demonstrate technical knowledge and professional integrity. Any decorator can apply paint to a sound surface. The skill lies in preparation, diagnosis and choosing the right materials for Exeter\'s demanding building stock.',
      },
      {
        type: 'subheading',
        content: 'Communication and Professionalism',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Look for mentions of clear quotes, prompt responses, tidy work practices and respect for the homeowner\'s property. Decorating is intrusive work. You are letting someone into your home for days or weeks. Reviews should confirm that the decorator protected floors and furniture, cleaned up daily, and communicated any unexpected issues before proceeding. This matters especially in Exeter\'s higher-value areas like Topsham, where average property prices exceed £506,000 and homes often contain valuable period features.',
      },
      {
        type: 'heading',
        content: 'Where to Find Reliable Reviews',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Google Reviews are the most visible and hardest to fake, especially when accompanied by photos. Check the reviewer\'s profile: do they have a history of reviews across different businesses, or is this their only one? Facebook reviews can be useful but are easier to curate. Checkatrade and Trustatrader reviews are valuable because they require proof of completed work. Word of mouth remains powerful in Exeter\'s more established neighbourhoods. Ask neighbours in St Leonard\'s or Topsham who they have used. Local knowledge often reveals which decorators genuinely understand period properties versus those who talk a good game.',
      },
      {
        type: 'paragraph',
        content: 'For commercial work, look for case studies and references rather than consumer reviews. A decorator experienced in [commercial decorating in Exeter](/commercial) should be able to provide examples of completed projects: offices, shops, hospitality venues. Business clients expect detailed quotes, minimal disruption and professional project management. Reviews or references should reflect these priorities.',
      },
      {
        type: 'heading',
        content: 'Questions to Ask Beyond Reviews',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Reviews are a starting point, not the full picture. Once you have shortlisted decorators based on positive feedback, ask specific questions relevant to your project:',
      },
      {
        type: 'list',
        content: [
          'Have you worked on listed buildings or properties in conservation areas? Can you provide examples in Exeter?',
          'What paint systems do you recommend for period properties, and why?',
          'Do you understand the difference between modern vinyl paints and breathable alternatives for pre-1919 homes?',
          'Can you provide references from projects similar to mine in size, property type and location?',
          'What is your approach to preparation work, especially on older plaster and woodwork?',
          'How do you protect furnishings and flooring during work?',
          'What is included in your quote, and what might be considered an extra?',
          'Do you carry public liability insurance?',
        ],
      },
      {
        type: 'paragraph',
        content: 'A decorator with genuine expertise will answer these questions confidently and specifically. Vague or evasive responses suggest limited experience with the challenges common to Exeter\'s housing stock.',
      },
      {
        type: 'heading',
        content: 'The Exeter Heritage Challenge',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If you own a period property in areas like St Leonard\'s, Topsham or the city centre, standard decorator reviews may not address your needs. Heritage decorating requires different skills: working with lime-based materials, understanding historic colour palettes, repairing rather than replacing original features, and navigating listed building consent. In December 2025, a Topsham property owner was fined £38,000 for unauthorised alterations to a listed building. This underlines why specialist knowledge matters. Reviews for [heritage decorating work](/areas/exeter/heritage-property-painting) should mention specific period features: sash windows, ornate plasterwork, original panelling, lime wash finishes. If a decorator\'s reviews are all about modern homes and new builds, they are probably not the right choice for your Georgian terrace.',
      },
      {
        type: 'heading',
        content: 'Specialist Services Require Specialist Reviews',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If you are considering [kitchen cabinet spraying](/areas/exeter/kitchen-spraying) rather than replacement, look for reviews that specifically mention this service. Kitchen spraying is a different skill set from traditional brush-and-roller painting. It requires HVLP spray equipment, proper extraction, meticulous masking and multiple thin coats for a factory-finish result. Generic decorator reviews will not tell you whether someone can deliver this. Look for before-and-after photos, mentions of finish quality, and confirmation that the kitchen was usable again within the promised timeframe. In Exeter, kitchen spraying typically costs around £750 for a full kitchen, compared to £5,000 to £15,000 for replacement units. The reviews should reflect this value and the quality that justifies it.',
      },
      {
        type: 'heading',
        content: 'Making Your Final Decision',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'After reading decorator Exeter reviews, visiting websites and asking questions, trust your instincts. Does the decorator understand your property and your priorities? Do they offer solutions rather than just quotes? Are they interested in your home\'s history and character, or just treating it as another job? The best decorators in Exeter combine technical skill with genuine care for the city\'s remarkable building stock. They know the difference between a 1730s listed building in Topsham and a 1980s estate house in Pinhoe, and they adjust their approach accordingly.',
      },
      {
        type: 'paragraph',
        content: 'Look for reviews that mention pride in finished work, attention to detail and a collaborative approach. These qualities matter more than speed or the lowest quote. In a city where 57.2 percent of homes are owner-occupied and median property values sit at £285,000, your decorator is helping to maintain significant assets. Choose someone whose reviews demonstrate that they understand this responsibility.',
      },
      {
        type: 'quote',
        content: 'The right decorator does not just follow your brief. They bring expertise, suggest improvements and deliver results that exceed expectations. Reviews should tell you whether a decorator is capable of this, not just whether they turned up on time.',
      },
      {
        type: 'paragraph',
        content: 'Reviews are one piece of the decision-making puzzle. Combine them with site visits, detailed quotes and your own judgment. When you find a decorator who understands Exeter\'s unique challenges, delivers quality work and communicates professionally, you have found someone worth keeping for future projects. In a city with 994 listed buildings, 20 conservation areas and tens of thousands of period properties, that expertise is genuinely valuable.',
      },
      {
        type: 'quoteCTA',
        content: 'BSR Decorating has over 20 years of experience working on domestic, commercial and heritage properties across Exeter, Topsham and Dawlish. We understand the specific challenges of Devon\'s period housing stock and use breathable, eco-friendly paint systems tailored to your property\'s needs. Contact us today for a free, no-obligation quote and see why our clients recommend us.',
      },
    ],
  },
  'exterior-painter-exeter-summer-booking-guide-render-timber-masonry': {
    sections: [
      {
        type: 'paragraph',
        content: 'Summer in Exeter brings the ideal conditions for exterior painting, but it also brings intense competition for decorator availability. If you\'re planning to refresh your home\'s render, timber or masonry surfaces this year, understanding the booking timeline, surface-specific requirements and material choices can mean the difference between a rushed job in poor conditions and a professionally executed finish that lasts for years. With properties ranging from Victorian terraces in St Leonard\'s to modern renders in Cranbrook, finding an exterior painter in Exeter who understands your specific surface type is essential.',
      },
      {
        type: 'heading',
        content: 'Why Summer Booking Requires Early Planning',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exterior painting in Devon follows a predictable seasonal pattern. Demand peaks between May and August when weather conditions are most stable, but this creates a booking bottleneck. Professional decorators typically schedule exterior work 4-6 weeks in advance during peak season, and the best contractors book even earlier. In Exeter, where we have approximately 56,000 households and 994 listed buildings requiring specialist knowledge, competition for skilled exterior painters intensifies every spring.',
      },
      {
        type: 'paragraph',
        content: 'The challenge isn\'t just availability. Rushing to book last-minute often means compromising on weather windows, working with contractors who have gaps in their schedule for concerning reasons, or attempting exterior work in marginal conditions that compromise longevity. A professionally planned exterior painting project accounts for surface preparation time, optimal weather windows, material curing periods and the specific demands of your substrate.',
      },
      {
        type: 'heading',
        content: 'Understanding Your Exterior Surface Type',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Render: The Most Common Exeter Exterior',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Rendered exteriors dominate Exeter\'s housing stock, from traditional lime renders on period properties in Pennsylvania to modern cement renders on newer developments. Each render type demands different preparation and paint systems. Traditional lime render requires breathable masonry paint that allows moisture vapour to escape, preventing the render from trapping dampness and deteriorating. Modern cement renders are less porous but still benefit from flexible masonry coatings that accommodate minor movement.',
      },
      {
        type: 'paragraph',
        content: 'Preparation is critical. Rendered surfaces must be clean, dry and stable before painting. This means treating any loose or blown render, washing down to remove algae and dirt accumulation, and allowing adequate drying time. In coastal areas closer to Dawlish and Exmouth, salt contamination requires thorough washing with clean water before paint application. An experienced [exterior painter in Exeter](/areas/exeter/exterior-painting) will inspect your render type and recommend appropriate primers and topcoats.',
      },
      {
        type: 'subheading',
        content: 'Timber: Cladding, Windows and Fascias',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Timber exteriors in Exeter range from decorative cladding on contemporary extensions to traditional sash windows and fascia boards on Victorian and Edwardian properties. Timber requires different treatment depending on exposure, condition and whether it\'s hardwood or softwood. South-facing timber in full sun experiences more UV degradation and moisture cycling than north-facing surfaces sheltered by neighbouring buildings.',
      },
      {
        type: 'paragraph',
        content: 'Preparation determines longevity. Flaking paint must be removed, bare timber primed with appropriate wood primer, and any rot or damage repaired before coating. For properties in Topsham\'s conservation area or among Exeter\'s 994 listed buildings, paint colour and finish type may be restricted, requiring breathable microporous coatings in approved heritage colours. Modern high-performance exterior wood paints offer 8-10 year durability on properly prepared surfaces, but only if applied in suitable conditions with correct primer systems.',
      },
      {
        type: 'subheading',
        content: 'Masonry: Brick and Stone',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exposed brick and stone feature prominently in Exeter\'s historic properties, particularly in the St David\'s ward with its 380 listed buildings. While many owners prefer natural brick, painted masonry requires specialist knowledge to avoid moisture trapping and deterioration. Stone and brick are porous materials that must breathe, making paint system selection critical.',
      },
      {
        type: 'paragraph',
        content: 'Previously painted masonry presents challenges. Removing old paint from brick or stone is labour-intensive and sometimes impossible without damaging the substrate. The better approach involves assessing the existing coating condition, removing loose material, treating the surface and overcoating with compatible breathable masonry paint. Some conservation areas prohibit painting unpainted masonry entirely, making professional advice essential before proceeding.',
      },
      {
        type: 'heading',
        content: 'Exeter\'s Weather Window: Planning for Devon Conditions',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s maritime climate creates specific challenges for exterior painting. Our proximity to the coast means higher humidity, salt-laden air in some areas, and rapid weather changes that can catch inexperienced decorators unprepared. Successful exterior painting in Exeter requires monitoring forecasts carefully and understanding that manufacturer temperature and humidity specifications aren\'t optional guidelines but critical requirements for paint curing and adhesion.',
      },
      {
        type: 'paragraph',
        content: 'Most modern masonry and exterior wood paints require minimum temperatures of 5-10 degrees Celsius and must remain above this threshold during the entire curing period, typically 4-6 hours for water-based systems. Humidity matters equally. Paint applied in high humidity or when rain threatens may not cure properly, leading to poor adhesion, slow drying and compromised durability. This makes summer the preferred window, but even summer in Devon brings sudden showers and foggy mornings that delay work.',
      },
      {
        type: 'paragraph',
        content: 'Our [spring exterior painting guide](/blog/spring-exterior-painting-devon-complete-guide) covers seasonal timing in detail, but summer offers the most reliable weather windows and longest working days. However, this reliability comes with the trade-off of highest demand and premium scheduling. Early booking secures your preferred dates during optimal conditions rather than squeezing work into marginal September weather when decorators have capacity but conditions deteriorate.',
      },
      {
        type: 'heading',
        content: 'Material Selection for Longevity',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Paint specification dramatically affects lifespan and maintenance frequency. Budget masonry paint might cost half the price of premium systems, but if it lasts four years instead of ten, you\'re repainting more than twice as often with all the associated disruption and scaffolding costs. For a typical Exeter semi-detached house exterior, the cost difference between budget and premium paint might be £300-500, but the longevity difference is substantial.',
      },
      {
        type: 'list',
        content: [
          'Premium masonry paint with high dirt resistance: 10-15 year lifespan on render in good condition',
          'Mid-range exterior wood systems: 6-8 years on windows and cladding with proper preparation',
          'Specialist heritage breathable paints: Variable lifespan but essential for period properties to prevent moisture damage',
          'Coastal-grade systems for properties near the seafront: Enhanced salt and UV resistance',
        ],
      },
      {
        type: 'paragraph',
        content: 'For properties in conservation areas or listed buildings, material choice isn\'t purely performance-based. Many historic properties require breathable lime-based paints or specific mineral coatings that allow the building fabric to function as designed. Using modern impermeable coatings on traditional construction can trap moisture, leading to deterioration that costs thousands to repair. Our [heritage property painting service](/areas/exeter/heritage-property-painting) addresses these specialist requirements with appropriate materials and application techniques.',
      },
      {
        type: 'heading',
        content: 'The True Cost of Exterior Painting in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding exterior painting costs helps set realistic budgets and identify suspiciously cheap quotes that indicate cut corners. For a typical Exeter house exterior, expect to pay around £1,728 for a terraced or semi-detached property, with detached homes and those requiring extensive preparation costing more. These figures reflect proper preparation, quality materials and professional application.',
      },
      {
        type: 'paragraph',
        content: 'What drives the cost? Scaffolding or access equipment represents a significant portion of any exterior project. For two-storey properties, safe access is non-negotiable, and scaffolding hire for 1-2 weeks adds £500-800 to the project. Preparation time often exceeds painting time. Washing down, treating defects, filling, priming and masking can take twice as long as applying the finish coats, but this preparation determines whether your paint job lasts two years or twelve.',
      },
      {
        type: 'paragraph',
        content: 'Our detailed [exterior painting cost guide](/blog/exterior-painting-costs-exeter-what-affects-quote-2026) breaks down these variables by property type and condition, helping you understand what\'s included in professional quotes and where cost savings make sense versus where they create future problems.',
      },
      {
        type: 'heading',
        content: 'What to Expect from a Professional Exterior Painter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Professional exterior painting follows a systematic process that protects your property while delivering lasting results. Initial consultation should include site assessment, substrate identification, defect recording and discussion of colour schemes and finish types. For period properties or those in conservation areas, this includes advising on planning requirements and appropriate materials.',
      },
      {
        type: 'paragraph',
        content: 'Preparation standards separate professional decorators from those cutting corners. Expect thorough cleaning, defect treatment, appropriate priming and careful masking. Windows, doors, paths and planting all require protection. Modern masonry paints can stain concrete and stone permanently if overspray isn\'t controlled, and damage to established plants from chemical wash-down solutions creates unnecessary conflict.',
      },
      {
        type: 'paragraph',
        content: 'Application technique matters. Brush, roller and spray each suit different surfaces and situations. Masonry paint typically applies best by roller or airless spray for even coverage and texture. Timber benefits from brush application for detail work combined with roller for larger flat areas. A professional exterior painter in Exeter adjusts technique to substrate and conditions rather than using one method for everything.',
      },
      {
        type: 'heading',
        content: 'Timing Your Project for Best Results',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Ideal booking timeline for summer exterior painting starts with initial enquiries in March or April. This allows site visits, quotations, colour selection and material specification before peak season begins. Scheduling work for June or July provides optimal weather while avoiding the holiday season disruption of August when many families are away and prefer not to have contractors on site.',
      },
      {
        type: 'paragraph',
        content: 'For larger projects requiring scaffolding, consider splitting interior and exterior work across seasons. Scaffolding provides excellent access to upper-floor interiors, making it cost-effective to address bedroom ceilings and window frames while access is in place. This approach maximises the value of scaffolding hire and reduces the total number of times your property needs major access equipment.',
      },
      {
        type: 'paragraph',
        content: 'Late summer and early autumn can offer good conditions and better availability as demand eases. September often provides stable weather in Devon, though days shorten and weather becomes less predictable. For straightforward render refresh on modern properties, autumn works well. For complex timber restoration or heritage masonry requiring extended drying times between coats, summer remains preferable.',
      },
      {
        type: 'heading',
        content: 'Questions to Ask Before Booking',
        level: 2,
      },
      {
        type: 'list',
        content: [
          'What preparation is included in the quote? Vague answers about \'preparing as necessary\' create disputes later',
          'Which specific paint system will be used and why? Product names and technical data sheets should be available',
          'How do you handle weather delays? Professional contractors build contingency into schedules',
          'What guarantees cover the work? Reputable decorators stand behind their work with clear warranty terms',
          'Are you insured for exterior work and scaffolding? Public liability insurance is essential, not optional',
          'Can you provide references for similar properties in Exeter? Local experience with your surface type matters',
        ],
      },
      {
        type: 'paragraph',
        content: 'For properties in Topsham, Heavitree, St Leonard\'s or other conservation areas, also ask about experience with planning requirements and heritage-appropriate materials. The £38,000 fine issued to a Topsham property owner in December 2025 for unauthorised alterations demonstrates that conservation area regulations have teeth. Professional decorators working regularly in these areas understand the requirements and can advise on compliance.',
      },
      {
        type: 'heading',
        content: 'Planning Your Exeter Exterior Painting Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Successful exterior painting combines proper material selection, experienced application and optimal timing. Whether you\'re refreshing a modern render in Pennsylvania, restoring timber windows on a St David\'s terrace, or maintaining masonry on a listed Topsham property, the principles remain consistent: understand your substrate, choose appropriate materials, prepare thoroughly and work within suitable weather windows.',
      },
      {
        type: 'paragraph',
        content: 'Summer offers the best conditions for exterior work in Exeter, but this makes early booking essential. Starting your search now for work in the coming months gives you access to experienced contractors, optimal weather windows and time to plan properly rather than rushing decisions under pressure.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning exterior painting for your Exeter property? BSR Decorating brings over 20 years of experience with render, timber and masonry across Devon\'s diverse housing stock. From modern developments to heritage properties requiring specialist approaches, we provide detailed assessments, appropriate material specification and professional execution. Contact us for a free site visit and comprehensive quote tailored to your property\'s specific needs.',
      },
    ],
  },
  'dawlish-decorator-guide-coastal-homes-exterior-paint-maintenance': {
    sections: [
      {
        type: 'paragraph',
        content: 'Dawlish presents unique decorating challenges that demand local expertise. As a coastal town exposed to salt air, strong winds, and Devon\'s unpredictable weather, properties here face accelerated paint degradation and moisture issues that homeowners in inland areas rarely encounter. Whether you own a Victorian terrace near the seafront, a family home in the Secmaton Lane area, or a period property overlooking the Dawlish Water, understanding how coastal conditions affect paintwork is essential for maintaining your investment.',
      },
      {
        type: 'paragraph',
        content: 'Having worked as a decorator in Dawlish for over 20 years, I\'ve learned that successful coastal decorating isn\'t just about choosing attractive colours. It\'s about selecting the right materials, timing work to avoid weather disruption, and understanding how salt spray and humidity affect different surfaces. This guide shares practical advice to help Dawlish homeowners make informed decisions about their property maintenance.',
      },
      {
        type: 'heading',
        content: 'Why Dawlish Homes Need Specialist Decorating Attention',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Coastal properties deteriorate faster than inland homes. Salt particles carried on the wind settle on exterior surfaces, drawing moisture into paintwork and accelerating breakdown. Properties within 500 metres of the seafront face the most aggressive conditions, but even homes further inland experience these effects to varying degrees.',
      },
      {
        type: 'subheading',
        content: 'The Coastal Environment Impact',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Salt crystallisation beneath paint layers causes bubbling and flaking within 2-3 years on poorly prepared surfaces',
          'Higher humidity levels mean exterior surfaces dry more slowly after rain, extending the risk period for mould and algae growth',
          'Strong southwesterly winds drive rain into areas that would remain protected in sheltered locations',
          'UV exposure is intensified by reflection off the sea, causing colour fading on south and east facing elevations',
          'Winter storms deposit salt spray across entire properties, not just seafront walls',
        ],
      },
      {
        type: 'paragraph',
        content: 'I\'ve seen brand new paint jobs fail within 18 months when standard masonry paint was used without proper preparation. The key is understanding that Dawlish homes need more robust systems than properties in Exeter or inland Devon towns.',
      },
      {
        type: 'heading',
        content: 'Choosing the Right Exterior Paint for Dawlish Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not all exterior paint performs equally in coastal conditions. The products that work well in sheltered locations often prove inadequate when facing salt air and driving rain. For Dawlish homes, I recommend focusing on three key properties: breathability, flexibility, and durability.',
      },
      {
        type: 'subheading',
        content: 'Breathable Masonry Paint Systems',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Breathable paints allow moisture vapour to escape from masonry while preventing liquid water penetration. This is crucial for older Dawlish properties built with solid walls that naturally manage moisture through evaporation. Modern plastic-based paints can trap moisture inside walls, leading to damp problems and internal decoration failure.',
      },
      {
        type: 'paragraph',
        content: 'For period properties and traditional builds, silicate-based masonry paints or quality breathable acrylics provide the best long-term performance. These systems bond chemically with mineral substrates and allow walls to breathe while offering excellent weather resistance. They\'re particularly effective on the rendered Victorian and Edwardian homes common throughout Dawlish.',
      },
      {
        type: 'subheading',
        content: 'Timber Protection in Coastal Locations',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Wooden windows, doors, and bargeboards face severe stress in Dawlish\'s climate. Salt draws moisture into timber, causing expansion and contraction cycles that crack conventional paint films. Oil-based exterior systems generally outperform water-based alternatives for timber in coastal locations, though modern hybrid systems are closing this gap.',
      },
      {
        type: 'paragraph',
        content: 'The key is thorough preparation and quality primer application. I always ensure bare timber receives at least one coat of aluminium wood primer before undercoats and topcoats. This creates a moisture barrier that significantly extends paint life. For properties near the seafront, using a microporous paint system allows trapped moisture to escape while still protecting the timber.',
      },
      {
        type: 'heading',
        content: 'Timing Exterior Painting Work in Dawlish',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Weather timing is more critical in Dawlish than inland areas. The extended coastal painting season that benefits properties in sheltered locations doesn\'t fully apply here. Understanding seasonal patterns helps avoid costly failures and ensures work progresses smoothly.',
      },
      {
        type: 'subheading',
        content: 'The Ideal Painting Windows',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Late spring through early autumn offers the most reliable conditions. May through September provides the longest dry spells and warmest temperatures, allowing paint to cure properly. However, even during these months, Dawlish can experience sudden weather changes that disrupt work.',
      },
      {
        type: 'list',
        content: [
          'May to June: Excellent conditions before peak summer humidity. Temperature and moisture levels are ideal for most paint systems',
          'July to August: Peak season but higher humidity can extend drying times. Early morning starts are essential to complete coats before afternoon moisture increases',
          'September: Often the best month. Lower humidity, stable temperatures, and fewer tourists mean easier access and more consistent conditions',
          'October: Weather becomes unpredictable. Only undertake urgent repairs or small projects',
          'November to March: Exterior painting largely unsuitable except for emergency repairs using specialised cold-weather systems',
        ],
      },
      {
        type: 'paragraph',
        content: 'I schedule most Dawlish exterior projects between May and September, with September bookings often experiencing the smoothest progress. This seasonal demand means planning ahead is essential. Homeowners who contact me in March or April secure the best time slots for summer work.',
      },
      {
        type: 'subheading',
        content: 'Weather Monitoring During Projects',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Coastal weather forecasting requires more attention than inland predictions. I monitor detailed marine forecasts rather than general regional predictions, as conditions at the seafront often differ significantly from forecasts based on Exeter Airport data. A project might pause for a day if strong onshore winds are predicted, even when inland areas remain calm.',
      },
      {
        type: 'heading',
        content: 'Maintenance Schedules for Dawlish Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Proactive maintenance prevents expensive remedial work. Coastal properties need inspection and touch-up more frequently than inland homes. Establishing a regular maintenance routine protects your investment and avoids the deterioration that leads to full redecoration every 3-4 years.',
      },
      {
        type: 'subheading',
        content: 'Annual Inspection Points',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Every autumn, after summer\'s UV exposure and before winter storms, inspect your property systematically. Look for paint flaking around window frames, cracks in render, and any areas where moisture might penetrate. Small touch-ups in October prevent water ingress that causes major problems by spring.',
      },
      {
        type: 'list',
        content: [
          'Window frames and sills: Check for paint breakdown where timber meets glass and at joints',
          'Doors and thresholds: Examine bottom rails and threshold areas where water pools',
          'Render and masonry: Look for cracks, particularly around windows and at wall-roof junctions',
          'Gutters and downpipes: Ensure clear drainage to prevent overflow staining decorated surfaces',
          'South and west elevations: These face the harshest weather and need most frequent attention',
        ],
      },
      {
        type: 'paragraph',
        content: 'Addressing minor issues promptly typically costs a few hundred pounds. Ignoring them leads to full redecoration projects costing several thousand. The average exterior painting cost for a Dawlish property ranges from £1,500 for a small terrace to £4,000-plus for larger detached homes, so preventive maintenance offers significant savings.',
      },
      {
        type: 'heading',
        content: 'Common Dawlish Decorating Problems and Solutions',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Certain issues appear repeatedly in coastal properties. Understanding these helps homeowners identify problems early and brief decorators effectively.',
      },
      {
        type: 'subheading',
        content: 'Salt Bloom and Efflorescence',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'White crystalline deposits often appear on masonry surfaces, particularly on older properties. This efflorescence occurs when soluble salts within masonry are drawn to the surface by moisture movement. Simply painting over these deposits leads to rapid paint failure. Proper treatment involves identifying and addressing moisture sources, removing deposits with appropriate treatments, and allowing surfaces to dry thoroughly before decoration.',
      },
      {
        type: 'subheading',
        content: 'Algae and Mould Growth',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'North-facing walls and shaded areas develop green or black biological growth more quickly in Dawlish\'s humid climate. Modern fungicidal washes treat existing growth, while biocidal paint additives help prevent recurrence. However, these treatments work best when combined with improved drainage and, where possible, increased air circulation around affected areas.',
      },
      {
        type: 'subheading',
        content: 'Coastal Weathering on Timber',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Wooden windows and doors show accelerated weathering, with paint failure typically starting at joints and end grain. Comprehensive timber preparation, including resin removal, knot treatment, and flexible filler application, is essential. Cutting corners on preparation guarantees premature failure in coastal conditions.',
      },
      {
        type: 'quote',
        content: 'In over 20 years decorating Dawlish properties, I\'ve learned that preparation time directly correlates with paint longevity. Spending an extra day on thorough surface preparation can double the lifespan of a paint system.',
      },
      {
        type: 'heading',
        content: 'Interior Decorating Considerations for Coastal Homes',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Coastal conditions affect interior decoration too. Higher ambient humidity levels mean bathrooms and kitchens need more robust paint specifications, and properties without adequate ventilation experience condensation problems that damage decoration.',
      },
      {
        type: 'paragraph',
        content: 'Modern breathable interior paints help manage moisture in older properties without mechanical ventilation. For newer homes, ensuring extractor fans work effectively and trickle vents remain unblocked prevents the moisture accumulation that leads to mould growth and decoration failure. Our [interior decorating services](/areas/exeter/interior-painting) address these coastal-specific challenges with appropriate material specifications.',
      },
      {
        type: 'heading',
        content: 'Working with a Local Dawlish Decorator',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Choosing a decorator with coastal experience makes a measurable difference to project outcomes. Local knowledge of Dawlish\'s microclimates, understanding of which materials perform in specific locations, and relationships with suppliers who stock appropriate products all contribute to successful results.',
      },
      {
        type: 'paragraph',
        content: 'A decorator familiar with Dawlish knows that properties on Barton Terrace face different challenges than homes in Oakfield, even though they\'re less than a mile apart. They understand that the Victorian terraces near the station require different approaches than the newer developments at Gatehouse or Secmaton. This local knowledge prevents the generic solutions that often fail in coastal environments.',
      },
      {
        type: 'paragraph',
        content: 'When selecting a decorator, ask about their coastal experience specifically. How do they prepare salt-affected surfaces? What paint systems do they recommend for seafront properties versus those further inland? How do they schedule work around weather conditions? The answers reveal whether they understand coastal decorating\'s unique demands.',
      },
      {
        type: 'heading',
        content: 'Planning Your Dawlish Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Successful coastal decorating starts with realistic planning. Projects take longer than equivalent inland work because weather windows are more restricted and preparation is more extensive. Budget 15-20% more time and approximately 10-15% more cost compared to similar projects in sheltered locations.',
      },
      {
        type: 'paragraph',
        content: 'For exterior work, contact decorators in early spring to secure summer slots. Flexibility helps too. Being able to accommodate schedule changes when weather interferes keeps projects moving rather than stalling for weeks. Most professional decorators juggle multiple projects to manage weather disruption, so understanding this reality leads to better working relationships.',
      },
      {
        type: 'paragraph',
        content: 'Interior work faces fewer weather constraints but still benefits from planning around seasons. Winter months suit interior redecoration well, as heating systems are running and homes dry more quickly after work. This also leaves summer free for essential exterior maintenance.',
      },
      {
        type: 'paragraph',
        content: 'As a Dawlish-based decorator serving the town and surrounding areas including [Exeter](/areas/exeter), [Topsham](/areas/topsham), and the wider South Devon coast, I\'ve developed working methods that account for our unique climate. Every project begins with thorough surface assessment, honest discussion about realistic timescales, and material recommendations based on specific exposure and property type.',
      },
      {
        type: 'paragraph',
        content: 'Coastal decorating demands more than standard approaches. It requires understanding how salt, moisture, and weather interact with different materials, choosing appropriate systems, and timing work to maximise success. Dawlish homeowners who recognise these factors and work with experienced local professionals protect their properties effectively while maintaining the character that makes coastal living so appealing.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning decorating work for your Dawlish property? Contact BSR Decorating for expert advice and a free, no-obligation quote. With over 20 years\' experience in coastal decorating, we understand exactly what Dawlish homes need.',
      },
    ],
  },
  'painting-listed-buildings-exeter-breathable-paint-consent-mistakes': {
    sections: [
      {
        type: 'paragraph',
        content: 'Exeter is home to 994 listed buildings spanning centuries of architectural history, from medieval timber frames in St David\'s to Georgian townhouses in Southernhay and Victorian villas in Pennsylvania. If you own or maintain one of these properties, decorating work requires careful consideration of both planning regulations and appropriate materials. Get it wrong, and you could face enforcement action like the £38,000 fine issued to a Topsham property owner in December 2025 for unlawful alterations. Get it right, and you\'ll protect your building\'s historic fabric whilst creating a beautiful, healthy home.',
      },
      {
        type: 'paragraph',
        content: 'This guide explains everything you need to know about painting listed buildings in Exeter, from when you need consent to which paint systems work best for period properties.',
      },
      {
        type: 'heading',
        content: 'Understanding Listed Building Consent in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Listed building consent is separate from planning permission and is required for any work that affects the special architectural or historic interest of a listed building. In Exeter, this applies to 994 properties across the city, with the highest concentrations in St David\'s (380 buildings), Topsham (228 buildings), and the Newtown and St Leonard\'s ward (120 buildings).',
      },
      {
        type: 'subheading',
        content: 'When You Need Consent for Painting Work',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Not all painting work requires listed building consent, but the rules can be complex. Generally, you need consent for:',
      },
      {
        type: 'list',
        content: [
          'Removing or painting over original decorative schemes, particularly historic wallpapers, painted panelling, or plasterwork',
          'Changing the colour of external joinery, render, or masonry in a way that alters the building\'s character',
          'Stripping paint from surfaces that were historically painted, or painting surfaces that were historically unpainted',
          'Using modern paint systems that could trap moisture and damage historic fabric',
        ],
      },
      {
        type: 'paragraph',
        content: 'Routine redecoration in established colours using appropriate materials typically doesn\'t require consent. However, if your property is Grade I or II* listed, or if you\'re uncertain, it\'s always worth checking with Exeter City Council\'s conservation team before starting work. A quick conversation can save you from costly mistakes and potential enforcement action.',
      },
      {
        type: 'heading',
        content: 'Why Breathable Paint Matters for Listed Buildings',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The single most important consideration when painting a listed building in Exeter is breathability. Most period properties built before 1919 were constructed using lime-based materials: lime mortar, lime plaster, and lime render. These materials are porous and designed to allow moisture to move through the building\'s fabric, evaporating naturally.',
      },
      {
        type: 'paragraph',
        content: 'Modern plastic-based paints create an impermeable barrier that traps this moisture inside the wall. Over time, this causes damp problems, timber decay, plaster failure, and damage to the historic fabric. In Exeter\'s climate, where humidity from the River Exe and Exe Estuary affects properties in Topsham, Alphington, and the quayside areas, breathability is particularly critical.',
      },
      {
        type: 'subheading',
        content: 'Breathable Paint Systems for Period Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Several paint systems work well on listed buildings:',
      },
      {
        type: 'list',
        content: [
          'Limewash: The most breathable option and historically accurate for many Exeter buildings. Needs reapplication every 3-5 years but provides excellent vapour permeability',
          'Mineral silicate paints: Very breathable and durable, bonding chemically with lime substrates. Popular for external render and masonry',
          'Clay paints: Highly breathable for internal walls, available in soft heritage colours',
          'Traditional distemper: Suitable for internal ceilings and walls, though requires specialist application',
          'Modern breathable emulsions: Some manufacturers produce vinyl-free formulations suitable for period properties',
        ],
      },
      {
        type: 'paragraph',
        content: 'For detailed guidance on specific breathable paint systems, see our guide to [breathable paint for old houses](/blog/breathable-paint-old-houses-complete-guide), which explains the science behind moisture movement and product selection.',
      },
      {
        type: 'heading',
        content: 'Common Mistakes When Painting Listed Buildings',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Over 20 years of decorating heritage properties in Exeter, we\'ve seen the same mistakes repeated across the city. Here are the most damaging:',
      },
      {
        type: 'subheading',
        content: 'Using Modern Masonry Paint on Historic Render',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Plastic-based masonry paints trap moisture and cause render to fail. This is particularly common on Victorian properties in Heavitree and Pennsylvania, where well-meaning owners apply modern paint systems to lime render. Within 5-10 years, the render begins to crack, bubble, and detach from the wall. Removal and replacement can cost £8,000-£15,000 for a typical terraced house.',
      },
      {
        type: 'subheading',
        content: 'Stripping Original Paint Schemes',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Many listed buildings in Exeter retain original or early paint schemes beneath later layers. Georgian properties in Southernhay and Cathedral Close often have decorative paintwork on panelling and joinery. Stripping these without investigation can destroy irreplaceable historic evidence. Always investigate what lies beneath before starting removal work, and consider exposing small test areas for conservation officers to assess.',
      },
      {
        type: 'subheading',
        content: 'Choosing Inappropriate Colours',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Whilst colour choice rarely requires listed building consent for internal work, inappropriate colours can harm a building\'s character. Many Exeter properties have been subjected to bright white throughout, when historical research would reveal that softer, more nuanced colours were originally used. For guidance on period-appropriate colours for different architectural periods, see our guide to [heritage paint colours for Topsham homes](/blog/heritage-paint-colours-topsham-homes-guide).',
      },
      {
        type: 'subheading',
        content: 'Poor Surface Preparation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period properties require more careful preparation than new builds. Uneven lime plaster surfaces, historic joinery with multiple paint layers, and walls affected by past damp all need specialist approaches. Rushing preparation leads to poor adhesion, early failure, and repeated repainting costs.',
      },
      {
        type: 'heading',
        content: 'Listed Buildings by Exeter Location',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The type of listed building varies significantly across Exeter, which affects appropriate paint systems:',
      },
      {
        type: 'list',
        content: [
          'St David\'s (380 listed buildings): Medieval timber frames, 17th-century merchants\' houses, and early commercial buildings. Often require specialist timber treatment and breathable finishes',
          'Topsham (228 listed buildings): Georgian and Victorian maritime properties, many exposed to humidity from the Exe Estuary. Breathability and salt-resistant finishes critical',
          'Newtown and St Leonard\'s (120 listed buildings): Victorian and Edwardian terraces with lime plaster and render. Most benefit from mineral paint systems',
          'Alphington (59 listed buildings): Village properties ranging from medieval cottages to Georgian houses. Often feature cob walls requiring specialist breathable treatments',
          'Southernhay and Cathedral Close: High-grade Georgian townhouses with decorative plasterwork and joinery requiring conservation-standard work',
        ],
      },
      {
        type: 'paragraph',
        content: 'Understanding your property\'s construction type and location helps determine the most appropriate paint system. Our [heritage property painting service in Exeter](/areas/exeter/heritage-property-painting) includes a detailed assessment of your building\'s construction and condition before any work begins.',
      },
      {
        type: 'heading',
        content: 'Working with Conservation Officers',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter City Council\'s conservation team provides pre-application advice for listed building works. If your project requires consent, submitting a clear application with samples, photographs, and details of proposed materials significantly speeds approval. Conservation officers want to see that you understand your building and have chosen appropriate materials.',
      },
      {
        type: 'paragraph',
        content: 'Key information to include in applications:',
      },
      {
        type: 'list',
        content: [
          'Detailed photographs of existing finishes and condition',
          'Paint analysis results if available, showing historic colour schemes',
          'Specifications for proposed paint systems, including breathability ratings',
          'Sample boards showing proposed colours on actual building materials',
          'Details of surface preparation methods, particularly for historic substrates',
        ],
      },
      {
        type: 'paragraph',
        content: 'Professional decorators experienced in heritage work can often provide much of this information and liaise with conservation officers on your behalf.',
      },
      {
        type: 'heading',
        content: 'The Cost of Getting It Right',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Painting a listed building properly costs more than decorating a new build. Breathable paint systems are more expensive than standard emulsions, preparation takes longer, and specialist knowledge commands premium rates. Heritage specialist decorators in Exeter typically charge £31-£40 per hour compared to £25-£30 for general domestic work.',
      },
      {
        type: 'paragraph',
        content: 'However, getting it right first time is always cheaper than remedial work. We\'ve seen cases where inappropriate painting has led to £15,000+ repair bills for render replacement, timber decay treatment, and replastering. Spending an extra £500-£1,000 on appropriate materials and expertise protects both your property and your investment.',
      },
      {
        type: 'quote',
        content: 'The most expensive paint job is the one that needs redoing. Investing in appropriate breathable systems and specialist knowledge protects Exeter\'s listed buildings for future generations whilst creating healthier, more beautiful homes today.',
      },
      {
        type: 'heading',
        content: 'Professional Heritage Painting in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Painting a listed building requires understanding of historic construction methods, appropriate materials, and planning requirements. At BSR Decorating, we\'ve worked on heritage properties across Exeter for over 20 years, from medieval timber frames in St David\'s to Georgian townhouses in Southernhay and Victorian villas in Pennsylvania.',
      },
      {
        type: 'paragraph',
        content: 'We understand that every listed building is different. Our approach starts with a detailed assessment of your property\'s construction, condition, and any existing consent requirements. We specify appropriate breathable paint systems, prepare surfaces carefully to preserve historic fabric, and liaise with conservation officers when needed. We\'re also proud to use eco-friendly paint systems wherever possible, protecting both your building and the environment.',
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re planning external redecoration, internal restoration, or dealing with damp and paint failure caused by previous inappropriate work, we can help you make informed decisions about materials and methods.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning painting work on a listed building in Exeter? Get expert advice and a free, no-obligation quote from BSR Decorating. Call us or visit bsrdecorating.co.uk to discuss your project.',
      },
    ],
  },
  'landlord-painting-exeter-fast-turnaround-rental-refresh': {
    sections: [
      {
        type: 'paragraph',
        content: 'Every day your Exeter rental property sits empty costs you money. With average rents in Exeter ranging from £950 per month for a one-bedroom flat to £1,400 for a three-bedroom house, a two-week void period can easily cost £450-£650 in lost income. For landlords managing properties across Heavitree, St Thomas, or the student areas around Pennsylvania Road, minimising turnaround time between tenancies isn\'t just convenient, it\'s essential to maintaining healthy rental yields. As professional decorators serving Exeter\'s rental market for over 20 years, we\'ve developed a systematic approach that gets properties back on the market fast without compromising on quality. Here\'s what every landlord needs to know about efficient rental property painting in Exeter.',
      },
      {
        type: 'heading',
        content: 'Why Speed Matters in Rental Property Decorating',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s rental market is competitive. With approximately 14,200 private rental properties across the city and steady demand from students, young professionals, and families, properties in good condition rent quickly. The difference between a tired-looking property and a freshly decorated one isn\'t just aesthetic, it directly impacts your void period and achievable rent. Properties with fresh, neutral decoration typically let 30-40% faster than those showing wear and tear, and can command 5-10% higher monthly rents in desirable areas like Topsham or St Leonard\'s.',
      },
      {
        type: 'paragraph',
        content: 'Time is money in the rental business. If you\'re a landlord painter in Exeter managing multiple properties, you need decorators who understand this urgency and can work to tight schedules whilst maintaining professional standards that satisfy both letting agents and incoming tenants.',
      },
      {
        type: 'heading',
        content: 'The Essential Landlord Painting Checklist',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Pre-Decoration Assessment',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Before any paintwork begins, a thorough assessment saves time and prevents delays. Walk through the property systematically, noting damage beyond normal wear and tear. Check for damp patches, particularly in older Exeter properties near the river or in St Thomas where Victorian terraces can have historic moisture issues. Identify any repairs needed to plasterwork, particularly around radiators and windows where students or families may have caused accidental damage.',
      },
      {
        type: 'paragraph',
        content: 'Document everything with dated photographs. This protects you in deposit disputes and provides a clear brief for your decorator. Note which rooms genuinely need full repainting versus those that might only need touching up, particularly if the previous tenancy was short or the tenants were particularly careful.',
      },
      {
        type: 'subheading',
        content: 'The Fast Turnaround Painting Sequence',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional landlord painters in Exeter follow a specific sequence to maximise efficiency. The process typically runs as follows, with timing based on a standard two-bedroom terraced house common across Pennsylvania, Mount Pleasant, or Polsloe areas:',
      },
      {
        type: 'list',
        content: [
          'Day 1: Preparation work. Fill holes, sand surfaces, mask off areas. This foundation work determines the quality of the final finish and cannot be rushed.',
          'Day 2: First coat throughout. Ceilings first, then walls. Using quick-drying, low-VOC paints means rooms are ready for second coats within 4-6 hours rather than overnight.',
          'Day 3: Second coat and woodwork. Doors, skirting boards, and window frames receive attention once walls are complete.',
          'Day 4: Final touches and quality check. Touch-ups, removing masking tape, cleaning splashes, and ensuring everything meets professional standards.',
        ],
      },
      {
        type: 'paragraph',
        content: 'A well-organised team can complete a typical two-bedroom Exeter rental in 3-4 days. Larger properties or those requiring more extensive preparation take proportionally longer, but the principle remains: systematic working minimises wasted time.',
      },
      {
        type: 'heading',
        content: 'Choosing the Right Paint for Rental Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not all paint is equal when it comes to rental properties. You need products that balance three priorities: durability, cost-effectiveness, and quick turnaround time. For Exeter rental properties, we typically recommend contract matt emulsion for walls and ceilings. These professional-grade paints offer superior coverage, meaning fewer coats and faster completion, whilst being more resistant to scuffs and marks than standard retail paints.',
      },
      {
        type: 'paragraph',
        content: 'For high-traffic areas like hallways and stairs in Exeter student houses near Pennsylvania or St David\'s, consider scrubbable vinyl matt. Yes, it costs 20-30% more than standard emulsion, but it withstands repeated cleaning and typically lasts two tenancies rather than one. Over a five-year period, this actually reduces your total decorating costs whilst minimising void periods. Our guide to [cost-effective decorating for rental properties](/blog/cost-effective-decorating-rental-properties-hmos) explores these trade-offs in detail.',
      },
      {
        type: 'subheading',
        content: 'Colour Choices That Rent Properties Faster',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Stick to neutral colours. Magnolia, soft whites, and light greys appeal to the broadest range of tenants and photograph well for online listings. Bold colours might reflect your personal taste, but they significantly narrow your potential tenant pool and often result in longer void periods. The time and money spent repainting in neutral tones when a tenant with different tastes views the property negates any decorating savings.',
      },
      {
        type: 'paragraph',
        content: 'For Exeter properties targeting professional couples or families in areas like Topsham or Pennsylvania, slightly warmer neutrals create an inviting atmosphere. For student properties, stick to brilliant white throughout, it\'s the most cost-effective, fastest to apply, and easiest to touch up between tenancies.',
      },
      {
        type: 'heading',
        content: 'Common Rental Property Painting Challenges in Exeter',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Dealing with Damp in Period Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Many Exeter rental properties, particularly Victorian and Edwardian terraces in St Thomas, Heavitree, and St Leonard\'s, experience damp issues. Never paint over damp patches without addressing the underlying cause. Using breathable paints helps but doesn\'t solve structural moisture problems. If you\'re seeing repeated damp issues in solid-wall properties, the problem needs professional diagnosis before any decorating begins. Our article on [solving damp and paint problems in Exeter homes](/blog/solving-damp-paint-problems-exeter-homes) provides detailed guidance on identifying and addressing these issues.',
      },
      {
        type: 'subheading',
        content: 'Student Property Wear and Tear',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Properties near the University of Exeter campuses at Streatham and St Luke\'s take more punishment than typical rentals. Blu-tack marks, picture hook holes, and scuffed doorframes are inevitable. Rather than full repaints annually, we recommend a two-year cycle for student properties with annual touch-ups to the worst-affected areas. This balances cost against presentation whilst keeping void periods minimal.',
      },
      {
        type: 'paragraph',
        content: 'For walls that consistently show marks, consider upgrading to higher-spec paints with stain resistance. The upfront cost is higher, typically £350-£400 versus £280-£320 for a student bedroom, but reduces your annual maintenance substantially.',
      },
      {
        type: 'heading',
        content: 'Coordinating Painting with Other Maintenance',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Efficient landlords coordinate all maintenance during the void period. Schedule carpet cleaning or replacement before painting begins to avoid paint splashes on new carpets. Book boiler servicing, electrical inspections, and any appliance repairs for the same period. This minimises the number of separate contractor visits and ensures everything is completed before new tenants move in.',
      },
      {
        type: 'paragraph',
        content: 'Professional decorators experienced with rental properties understand these coordination requirements. We work around other trades, protect finished surfaces when boiler engineers or electricians need access, and maintain schedules even when other contractors run late. This project management experience is worth the modest premium over sole traders who may lack the flexibility to accommodate changing timelines.',
      },
      {
        type: 'heading',
        content: 'Cost Management for Multi-Property Landlords',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If you manage multiple rental properties across Exeter, establishing a relationship with a reliable decorator delivers significant advantages. Regular customers typically receive preferential rates, priority scheduling during busy periods, and the efficiency gains of decorators who already know your properties and standards.',
      },
      {
        type: 'paragraph',
        content: 'Current market rates for landlord painting in Exeter typically run £280-£350 per room for a standard redecoration including preparation, two coats to walls and ceiling, and woodwork touching-up. Full house refreshes for typical two-bedroom properties range from £950-£1,400 depending on condition and specification. For detailed pricing information, see our comprehensive guide to [painter and decorator costs in Exeter](/blog/how-much-painter-decorator-cost-exeter).',
      },
      {
        type: 'paragraph',
        content: 'Budget approximately 8-12% of your annual rental income for maintenance including decorating, though this varies significantly based on property age, tenant type, and turnover frequency.',
      },
      {
        type: 'heading',
        content: 'Legal Considerations for Rental Property Decoration',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter rental properties must meet legal standards regardless of decoration schedules. Use low-VOC paints to ensure properties are safe for immediate occupation without off-gassing concerns. Maintain adequate ventilation during painting and ensure all surfaces are fully dry before tenants move in.',
      },
      {
        type: 'paragraph',
        content: 'If your property is listed (Exeter has 994 listed buildings including numerous rental properties in St David\'s, Topsham, and St Leonard\'s), you must comply with conservation requirements even for internal decoration. Most internal painting requires no consent, but speak to Exeter City Council planning department if you\'re uncertain. Our experience with [heritage property painting in Exeter](/areas/exeter/heritage-property-painting) means we understand these requirements and can advise accordingly.',
      },
      {
        type: 'heading',
        content: 'Maximising Return on Your Decorating Investment',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Strategic decoration decisions directly impact your rental returns. Freshly decorated properties command higher rents, attract better-quality tenants who tend to stay longer and take better care of the property, and suffer shorter void periods. These factors compound over time into significantly better financial performance compared to properties allowed to deteriorate.',
      },
      {
        type: 'paragraph',
        content: 'Consider the maths: if fresh decoration increases achievable rent by £50 monthly and reduces your average void period by one week, that\'s £650 additional annual income from a £1,200 investment, a 54% return in year one alone. The decoration lasts 2-3 years in most rental properties, delivering continued returns throughout that period.',
      },
      {
        type: 'paragraph',
        content: 'For HMO properties or student houses requiring more frequent attention, the calculation differs but the principle holds: good decoration pays for itself through reduced voids and better tenant quality.',
      },
      {
        type: 'quote',
        content: 'Time is money in the rental business. Every day a property sits empty between tenants costs you rental income. Professional decoration that minimises void periods whilst maintaining quality standards is an investment, not an expense.',
      },
      {
        type: 'heading',
        content: 'Working with Professional Decorators vs DIY',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Some landlords consider DIY painting to save money, but the calculation rarely works in your favour. Professional decorators complete in 3-4 days what typically takes a DIY landlord 2-3 weekends. If your rental achieves £1,000 monthly, every additional week of void costs £230. The £950 you save doing it yourself becomes a £920 loss when you factor in extended void periods, not to mention the value of your own time.',
      },
      {
        type: 'paragraph',
        content: 'Professional work also delivers superior results that last longer and present better to prospective tenants. The difference between adequate DIY and professional finish is immediately visible in property photographs and viewings, directly impacting how quickly your property lets.',
      },
      {
        type: 'heading',
        content: 'Get Your Exeter Rental Property Back on the Market Fast',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Efficient rental property turnaround requires planning, professional execution, and understanding that decoration is an investment in rental income rather than a grudge expense. Whether you manage a single buy-to-let property in Heavitree or a portfolio across Exeter, working with decorators who understand landlord timelines and priorities makes the difference between profitable rentals and problematic ones.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve worked with Exeter landlords and letting agents for over 20 years. We understand rental market standards, work to tight turnaround schedules, and deliver decoration that helps properties let faster and for better returns. Our systematic approach minimises void periods whilst maintaining the quality standards that satisfy both letting agents and tenants.',
      },
      {
        type: 'quoteCTA',
        content: 'Need your Exeter rental property decorated quickly between tenancies? Contact BSR Decorating for a fast, detailed quote. We specialise in rapid turnaround work that gets properties back on the market without compromising on quality. Call us today or request a free quote through our website.',
      },
    ],
  },
  'exterior-painting-costs-exeter-what-affects-quote-2026': {
    sections: [
      {
        type: 'paragraph',
        content: 'When planning exterior painting work in Exeter, understanding the factors that influence your quote helps you budget accurately and avoid surprises. From the weathered render of a St Leonard\'s Victorian terrace to the timber cladding on a Topsham waterfront property, every project has unique considerations that affect the final cost. In 2026, the average exterior painting project in Exeter ranges from £1,200 for a small terraced house to over £4,000 for a large detached property, but dozens of variables can shift that figure significantly.',
      },
      {
        type: 'paragraph',
        content: 'This guide breaks down exactly what professional decorators assess when pricing exterior work, helping you understand your quote and make informed decisions about your Exeter home.',
      },
      {
        type: 'heading',
        content: 'Property Size and Type: The Foundation of Your Quote',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The most obvious factor affecting exterior painting costs in Exeter is the size and type of your property. A two-bedroom terraced house in Heavitree requires far less paint, scaffolding and labour than a four-bedroom detached home in Pennsylvania.',
      },
      {
        type: 'subheading',
        content: 'Typical Exeter Property Costs',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Small terraced house (2 bed): £1,200–£1,800',
          'Medium semi-detached (3 bed): £1,800–£2,500',
          'Large detached house (4 bed): £2,800–£4,500',
          'Period property with architectural details: Add 20–40%',
        ],
      },
      {
        type: 'paragraph',
        content: 'These figures reflect standard masonry or render work. Timber cladding, weatherboarding or mixed materials change the calculation significantly. Properties along the Exe Estuary in Topsham, for example, often feature timber elements that require specialist coatings and preparation, increasing both material and labour costs.',
      },
      {
        type: 'heading',
        content: 'Surface Condition and Preparation Requirements',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Preparation typically accounts for 60–70% of exterior painting time and directly impacts your quote. A well-maintained property painted three years ago needs minimal prep. A neglected Victorian terrace with flaking paint, damaged render and biological growth requires extensive work before the first coat goes on.',
      },
      {
        type: 'subheading',
        content: 'Common Preparation Factors in Exeter',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s coastal climate creates specific challenges. Salt-laden air in areas like Exmouth and Topsham accelerates paint degradation. Properties near the Exe Estuary face humidity and wind exposure that requires thorough surface preparation and high-performance coatings.',
      },
      {
        type: 'list',
        content: [
          'Pressure washing and fungicide treatment: £200–£400',
          'Render repairs and patching: £300–£800 depending on extent',
          'Rotten timber replacement: £150–£400 per window frame or board',
          'Full timber strip and sand: Add 30–50% to timber painting costs',
        ],
      },
      {
        type: 'paragraph',
        content: 'Properties in Exeter\'s 20 conservation areas, particularly St Leonard\'s and St David\'s with their concentration of Victorian and Edwardian housing, often reveal hidden issues during preparation. Quotes that seem high typically reflect realistic assessments of the work needed to achieve a lasting finish. As we explored in our guide to [the best exterior paint for Devon\'s coastal weather](/blog/best-exterior-paint-devon-coastal-weather), proper preparation and quality materials make the difference between a five-year finish and a fifteen-year finish.',
      },
      {
        type: 'heading',
        content: 'Access and Scaffolding Costs',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Access requirements significantly affect exterior painting costs in Exeter. A bungalow might need only ladders and trestles. A three-storey Victorian terrace in Pennsylvania or Newtown requires full scaffolding.',
      },
      {
        type: 'subheading',
        content: 'Scaffolding in Your Quote',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Two-storey terraced house: £600–£900 for two weeks',
          'Three-storey semi-detached: £900–£1,400',
          'Large detached property: £1,200–£2,000',
          'Difficult access (narrow streets, limited parking): Add 15–25%',
        ],
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s older neighbourhoods present unique access challenges. The narrow streets of St David\'s, restricted parking in St Leonard\'s, and terraced rows with no rear access all affect scaffolding costs. Properties bordering conservation areas may require licensed scaffolding that doesn\'t damage historic street surfaces, adding to expenses.',
      },
      {
        type: 'paragraph',
        content: 'Mobile elevated work platforms can sometimes reduce costs for properties with clear access, but most Exeter homes with sash windows, decorative mouldings or three-storey elevations need traditional scaffolding for safe, thorough work.',
      },
      {
        type: 'heading',
        content: 'Paint Quality and Specification',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Paint quality dramatically affects both immediate costs and long-term value. Trade-quality masonry paint costs £40–£70 per 10 litres. Premium breathable systems for period properties cost £80–£120 per 10 litres. Specialist coatings for coastal exposure or timber protection can exceed £150 per 10 litres.',
      },
      {
        type: 'subheading',
        content: 'Why Specification Matters in Exeter',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'With 994 listed buildings across Exeter, including 228 in Topsham alone, many properties require breathable, vapour-permeable coatings that allow historic masonry to function properly. Standard vinyl masonry paint traps moisture in old walls, causing long-term damage that costs far more to remedy than the initial saving.',
      },
      {
        type: 'list',
        content: [
          'Standard masonry paint (10-year life): £40–£50 per 10L',
          'Premium exterior emulsion (12–15 year life): £60–£80 per 10L',
          'Breathable mineral paint for period properties: £80–£120 per 10L',
          'High-performance timber coatings: £50–£100 per 5L',
        ],
      },
      {
        type: 'paragraph',
        content: 'Professional decorators specify paint systems based on your property\'s age, construction and exposure. A rendered 1960s semi in Whipton needs different products than a lime-rendered Georgian terrace in Southernhay. Quotes should detail the paint specification, not just list \'two coats of masonry paint\'.',
      },
      {
        type: 'heading',
        content: 'Architectural Details and Complexity',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s architectural heritage means many properties feature details that increase painting time and skill requirements. Victorian and Edwardian homes in St Leonard\'s, Pennsylvania and Heavitree typically include decorative brickwork, stone window surrounds, ornate bargeboards and intricate woodwork that demands careful attention.',
      },
      {
        type: 'paragraph',
        content: 'Each architectural feature adds time and therefore cost to your project. A plain rendered box might take three days to paint. An identical-sized Victorian house with sash windows, decorative eaves, cast iron guttering and stone quoins could take six or seven days.',
      },
      {
        type: 'subheading',
        content: 'Common Detail Work in Exeter Properties',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Sash window painting (per window): £80–£150 including preparation',
          'Cast iron guttering and downpipes: £15–£25 per metre',
          'Decorative bargeboards and fascias: £200–£400 per elevation',
          'Stone or brick detailing (masking and cutting in): Adds 20–30% to time',
        ],
      },
      {
        type: 'paragraph',
        content: 'If you\'re working on a period property, our dedicated guide to [heritage paint colours for Topsham homes](/blog/heritage-paint-colours-topsham-homes-guide) explores how to choose colours that complement architectural features whilst meeting any conservation requirements.',
      },
      {
        type: 'heading',
        content: 'Timing and Seasonality',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'When you book exterior painting affects both availability and sometimes cost. Spring and early summer (April to June) represent peak season in Devon. Decorators are busy, lead times extend to six or eight weeks, and some adjust pricing for high-demand periods.',
      },
      {
        type: 'paragraph',
        content: 'Autumn (September to early November) offers excellent painting conditions in Exeter. Temperatures remain moderate, rainfall is manageable, and decorators have slightly more availability. Winter exterior work is possible but weather-dependent, with shorter working days and potential delays adding to project timelines.',
      },
      {
        type: 'subheading',
        content: 'Seasonal Considerations',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Book spring/summer work by February for best availability',
          'Autumn projects often offer more flexible scheduling',
          'Winter quotes may include contingency for weather delays',
          'Urgent work (property sale, rental turnaround) may carry premium pricing',
        ],
      },
      {
        type: 'paragraph',
        content: 'Our [spring exterior painting guide](/blog/spring-exterior-painting-devon-complete-guide) explores optimal timing for Devon\'s climate in detail, helping you plan projects around weather patterns and decorator availability.',
      },
      {
        type: 'heading',
        content: 'Conservation Areas and Planning Considerations',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Properties in Exeter\'s 20 conservation areas sometimes face additional considerations that affect painting costs. Whilst most repainting doesn\'t require planning permission, changing colours significantly from the existing scheme might need conservation area consent, particularly for prominent elevations.',
      },
      {
        type: 'paragraph',
        content: 'Listed building owners face stricter requirements. Any external redecoration of a listed property technically requires listed building consent, though most local authorities adopt pragmatic approaches to routine maintenance in appropriate colours. However, using inappropriate modern paints or changing heritage colours can result in enforcement action. A Topsham property owner faced a £38,000 fine in December 2025 for unauthorised alterations, demonstrating that Exeter City Council takes conservation seriously.',
      },
      {
        type: 'paragraph',
        content: 'Professional decorators experienced in heritage work understand these requirements and specify appropriate materials. The modest additional cost of breathable mineral paints and traditional colour schemes is negligible compared to potential enforcement action or long-term building damage.',
      },
      {
        type: 'heading',
        content: 'Getting Accurate Quotes for Your Exeter Property',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding what affects exterior painting costs in Exeter helps you evaluate quotes intelligently. The lowest price rarely represents the best value. Look for detailed quotes that specify preparation methods, paint systems, access solutions and timescales.',
      },
      {
        type: 'subheading',
        content: 'Questions to Ask When Comparing Quotes',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'What preparation work is included (washing, repairs, primers)?',
          'Which specific paint products will be used?',
          'Is scaffolding included or additional?',
          'What\'s the expected project duration?',
          'Does the quote cover making good any minor defects discovered during preparation?',
          'What guarantee is offered on workmanship?',
        ],
      },
      {
        type: 'paragraph',
        content: 'Vague quotes listing \'exterior painting\' with a single figure tell you nothing about the work quality you\'ll receive. Detailed specifications protect both you and the decorator, ensuring everyone understands exactly what\'s included.',
      },
      {
        type: 'paragraph',
        content: 'For properties requiring [commercial decorating](/commercial) standards, specifications become even more critical, particularly for insurance, warranty and maintenance scheduling purposes.',
      },
      {
        type: 'heading',
        content: 'Investment in Quality: Long-Term Value',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exterior painting costs in Exeter might seem substantial, but proper work protects your largest asset. A thorough job using quality materials lasts 12–15 years. Cheap work using budget materials fails in five or six years, requiring complete redoing rather than simple refreshing.',
      },
      {
        type: 'paragraph',
        content: 'Consider the annual cost rather than just the upfront figure. A £3,000 project lasting twelve years costs £250 annually. A £1,800 project lasting six years costs £300 annually, plus the disruption and expense of twice as much scaffolding, preparation and decoration over the same period.',
      },
      {
        type: 'paragraph',
        content: 'For period properties, using appropriate breathable systems protects the building fabric itself. Trapped moisture in historic masonry causes frost damage, timber decay and interior damp problems that cost thousands to remedy. The premium for correct materials and methods is negligible compared to structural repair costs.',
      },
      {
        type: 'heading',
        content: 'Professional Exterior Painting in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding what influences exterior painting costs helps you plan projects realistically and evaluate quotes intelligently. Whether you\'re refreshing a Victorian terrace in St Leonard\'s, protecting a coastal property in Topsham, or maintaining a modern home in Pinhoe, the same principles apply: thorough preparation, appropriate materials and skilled application create lasting results that protect your investment.',
      },
      {
        type: 'paragraph',
        content: 'BSR Decorating brings over 20 years of experience to exterior projects across Exeter, from straightforward render repainting to complex heritage work on listed buildings. We provide detailed quotes that explain exactly what we\'ll do, the materials we\'ll use, and the results you can expect. Every project begins with a thorough assessment of your property\'s condition, exposure and any conservation considerations.',
      },
      {
        type: 'paragraph',
        content: 'We specialise in Devon\'s architectural heritage, understanding the specific requirements of period properties whilst offering modern, efficient solutions for contemporary homes. Our commitment to quality materials and thorough preparation means our exterior work typically lasts well over a decade, providing exceptional long-term value.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning exterior painting for your Exeter property? Contact BSR Decorating for a detailed, no-obligation quote that explains exactly what your project needs and why. Call us or visit bsrdecorating.co.uk to arrange your free assessment.',
      },
    ],
  },
  'wallpaper-hanging-exeter-costs-preparation-best-rooms': {
    sections: [
      {
        type: 'paragraph',
        content: 'Wallpaper is experiencing a major revival across Exeter, from Georgian townhouses in St Leonard\'s to Victorian terraces in Heavitree and modern developments in Cranbrook. Whether you\'re restoring a listed building in Topsham or adding character to a rental property, professional wallpaper hanging delivers a level of finish and durability that transforms a room. But what does it cost to hire a wallpaper hanger in Exeter, how should you prepare, and which rooms benefit most from wallpaper over paint?',
      },
      {
        type: 'paragraph',
        content: 'This guide covers everything Exeter homeowners need to know about professional wallpaper hanging, from selecting the right paper for Devon\'s climate to understanding why preparation matters more than the hanging itself.',
      },
      {
        type: 'heading',
        content: 'What Does Wallpaper Hanging Cost in Exeter?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Professional wallpaper hanging in Exeter typically costs between £280 and £350 per room, depending on the size of the space, the complexity of the pattern, and the condition of your walls. These figures align with local pricing data for standard bedrooms and living rooms with straightforward layouts.',
      },
      {
        type: 'paragraph',
        content: 'Several factors influence the final cost. Large-scale patterns or geometric designs requiring precise matching add time and material waste. Feature walls cost less than full rooms, typically £150 to £200 depending on the wall size. Wallpaper removal before hanging new paper adds approximately £336 per room, particularly if you\'re dealing with multiple layers or vinyl paper that doesn\'t strip cleanly.',
      },
      {
        type: 'paragraph',
        content: 'Period properties across Exeter often require additional preparation work. Uneven plaster, cracked cornicing, or damp patches in older homes in Pennsylvania or Newtown need addressing before any wallpaper hanger in Exeter can guarantee a quality finish. This preparation work is separate from the hanging cost but essential for longevity.',
      },
      {
        type: 'quote',
        content: 'In heritage properties, 60% of a successful wallpaper project is preparation. The hanging itself is the easy part when walls are properly prepared.',
      },
      {
        type: 'heading',
        content: 'Why Wall Preparation Matters More Than You Think',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The most common reason wallpaper fails within months is inadequate surface preparation. Even the most expensive designer wallpaper will bubble, peel, or show every imperfection if hung on unprepared walls.',
      },
      {
        type: 'subheading',
        content: 'What Professional Preparation Involves',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Complete removal of old wallpaper, including any backing paper that might trap moisture',
          'Washing walls with sugar soap to remove paste residue, grease, and dust that prevents adhesion',
          'Filling cracks, holes, and imperfections with flexible filler that won\'t crack as walls move seasonally',
          'Sanding filled areas and any rough plaster to create a smooth, level surface',
          'Applying primer or size to seal porous surfaces and ensure even paste absorption',
          'Checking for damp or mould, particularly common in Exeter properties near the waterfront or in poorly ventilated bathrooms',
        ],
      },
      {
        type: 'paragraph',
        content: 'In Exeter\'s period properties, particularly the 994 listed buildings scattered across St David\'s, Topsham, and St Leonard\'s, walls are rarely perfectly flat. Lime plaster expands and contracts with humidity. Historic alterations often leave uneven surfaces. Professional wallpaper hangers in Exeter account for these characteristics, sometimes using lining paper as an intermediate layer to create the smooth surface modern wallpapers require.',
      },
      {
        type: 'paragraph',
        content: 'If you\'re planning work on a heritage property, understanding the specific requirements for [listed buildings and conservation areas](/blog/topsham-conservation-area-decorating-guide) helps avoid costly mistakes.',
      },
      {
        type: 'heading',
        content: 'Which Rooms Suit Wallpaper Best?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not every room benefits equally from wallpaper. Some spaces showcase it beautifully, while others present practical challenges that make paint a smarter choice.',
      },
      {
        type: 'subheading',
        content: 'Best Rooms for Wallpaper',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Living rooms and dining rooms are ideal candidates. These spaces benefit from the texture, pattern, and depth wallpaper provides. In period properties across Pennsylvania or St Leonard\'s, historically appropriate wallpaper restores character stripped by decades of magnolia paint. Feature walls behind fireplaces or chimney breasts create focal points without overwhelming smaller Victorian reception rooms.',
      },
      {
        type: 'paragraph',
        content: 'Bedrooms suit wallpaper particularly well. Lower traffic means less wear, and the decorative impact justifies the investment. In rental properties popular with Exeter\'s student population, one wallpapered feature wall elevates an otherwise basic bedroom without dramatically increasing turnover costs.',
      },
      {
        type: 'paragraph',
        content: 'Hallways and staircases benefit from wallpaper\'s durability. Quality papers withstand knocks and scuffs better than painted walls in these high-traffic areas. The vertical emphasis of stairwell wallpaper draws the eye upward, making Georgian townhouses in the Cathedral Quarter feel more spacious.',
      },
      {
        type: 'subheading',
        content: 'Rooms Requiring Special Consideration',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Bathrooms and kitchens require moisture-resistant wallpapers and expert hanging. Standard wallpaper fails quickly in these environments. Vinyl or specially treated papers work in well-ventilated bathrooms away from direct water contact, but expect shorter lifespans than in dry rooms. Many professional wallpaper hangers in Exeter recommend paint or tiles for areas around baths, showers, and sinks.',
      },
      {
        type: 'paragraph',
        content: 'Kitchens pose similar challenges. Grease, steam, and temperature fluctuations degrade adhesive over time. If you\'re set on wallpaper in a kitchen, restrict it to dining areas away from cooking zones, and choose wipeable vinyl papers. For kitchen transformations on a budget, [kitchen cabinet spraying](/blog/kitchen-spraying-exeter-what-homeowners-should-know) delivers more impact per pound spent.',
      },
      {
        type: 'heading',
        content: 'Pattern Matching and Material Waste',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'One aspect of wallpaper hanging that surprises many Exeter homeowners is material waste, particularly with patterned papers. Unlike paint, where you buy exactly what you need, wallpaper requires overage for pattern matching.',
      },
      {
        type: 'paragraph',
        content: 'A small geometric pattern with a short repeat might waste 10-15% of each roll. Large-scale damasks or botanicals with repeats of 60cm or more can waste 25-30%. This isn\'t inefficiency on your decorator\'s part but a mathematical necessity of aligning patterns across seams.',
      },
      {
        type: 'paragraph',
        content: 'Professional wallpaper hangers in Exeter calculate these requirements accurately before ordering. They account for pattern repeats, room dimensions, and obstacles like windows and radiators. This precision prevents the frustration of running short mid-project or over-ordering expensive designer papers.',
      },
      {
        type: 'heading',
        content: 'Wallpaper Choices for Exeter\'s Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s coastal climate influences which wallpapers perform well in Exeter homes. Humidity from the Exe estuary affects properties in Topsham and along the waterfront. Morning condensation is common in poorly insulated period properties during winter months.',
      },
      {
        type: 'subheading',
        content: 'Breathable vs Non-Breathable Papers',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'In older properties built before 1919, breathable wallpapers work with the building\'s natural moisture management. Traditional papers allow water vapour to pass through walls, preventing the trapped moisture that causes damp patches and mould. Vinyl papers, while tough and wipeable, seal walls completely. In a Georgian townhouse with solid stone walls, this traps moisture and causes problems.',
      },
      {
        type: 'paragraph',
        content: 'Modern homes with cavity walls and damp-proof courses tolerate vinyl papers better, but ventilation still matters. In bathrooms and kitchens, even vinyl wallpaper struggles without adequate extraction.',
      },
      {
        type: 'paragraph',
        content: 'For more on managing moisture in Exeter\'s older properties, read our guide to [solving damp and paint problems in Exeter homes](/blog/solving-damp-paint-problems-exeter-homes).',
      },
      {
        type: 'heading',
        content: 'How Long Does Wallpaper Last?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Professionally hung wallpaper in a suitable room should last 10-15 years before requiring replacement. This longevity makes it cost-effective compared to repainting every 5-7 years, particularly in hallways and living rooms where decorative impact matters.',
      },
      {
        type: 'paragraph',
        content: 'Lifespan depends on several factors. Quality of the paper itself matters tremendously. Designer papers from established brands use better inks and substrates that resist fading. Preparation quality determines whether paper adheres permanently or begins lifting within months. Environmental conditions like direct sunlight, humidity, and temperature fluctuations all accelerate ageing.',
      },
      {
        type: 'paragraph',
        content: 'In rental properties, wallpaper\'s durability often justifies higher initial costs. A well-chosen, professionally hung paper withstands tenant turnover better than painted walls that mark and scuff easily.',
      },
      {
        type: 'heading',
        content: 'DIY vs Professional Wallpaper Hanging',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Wallpaper hanging looks straightforward until you attempt it. Air bubbles, misaligned patterns, visible seams, and paste marks plague amateur attempts. In period properties with uneven walls, out-of-plumb corners, and irregular ceiling heights, DIY wallpapering becomes exponentially harder.',
      },
      {
        type: 'paragraph',
        content: 'Professional wallpaper hangers in Exeter bring experience reading walls, adjusting for imperfections, and achieving invisible seams. They know which adhesives suit which papers, how much time to allow for paste to activate, and how to handle delicate materials that tear easily. For expensive designer papers costing £80-150 per roll, professional hanging is insurance against costly mistakes.',
      },
      {
        type: 'paragraph',
        content: 'Simple papers in small, square rooms suit confident DIY enthusiasts. Complex patterns, large rooms, stairwells, or valuable period properties warrant professional expertise.',
      },
      {
        type: 'heading',
        content: 'Wallpaper Trends in Exeter Homes',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Across Exeter\'s diverse housing stock, certain wallpaper trends dominate. In period properties, historically appropriate patterns are resurging. William Morris designs, Georgian stripes, and Victorian florals restore authenticity stripped by mid-century modernisation. In Topsham\'s 228 listed buildings, owners increasingly research appropriate papers for their property\'s era.',
      },
      {
        type: 'paragraph',
        content: 'In modern homes and new developments like Cranbrook, bold feature walls provide personality in otherwise uniform builder-grade interiors. Dark, moody botanicals create drama in open-plan living areas. Textured grasscloths and linens add depth without pattern.',
      },
      {
        type: 'paragraph',
        content: 'For rental properties, neutral geometric patterns offer broad appeal without the blandness of plain walls. Subtle patterns hide minor wall imperfections better than flat paint, reducing maintenance between tenancies.',
      },
      {
        type: 'heading',
        content: 'Questions to Ask Your Wallpaper Hanger',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before hiring a wallpaper hanger in Exeter, ask specific questions that reveal their expertise and approach.',
      },
      {
        type: 'list',
        content: [
          'How will you prepare the walls, and what condition do they need to be in before hanging?',
          'How do you calculate material requirements for my chosen pattern?',
          'What adhesive do you recommend for this specific wallpaper and wall type?',
          'Have you worked with this style of property before? (Particularly important for period buildings)',
          'Can you provide references from similar projects in Exeter?',
          'What warranty or guarantee do you offer on your work?',
          'How long will the project take, and will you protect flooring and furniture?',
        ],
      },
      {
        type: 'paragraph',
        content: 'Experienced professionals answer these questions confidently and specifically. Vague responses or dismissiveness about preparation are warning signs.',
      },
      {
        type: 'heading',
        content: 'Transform Your Exeter Home with Professional Wallpaper Hanging',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Professional wallpaper hanging transforms rooms in ways paint alone cannot. The texture, pattern, and depth create spaces with character and personality, whether you\'re restoring a Victorian terrace in Heavitree or adding interest to a modern home in Cranbrook.',
      },
      {
        type: 'paragraph',
        content: 'Success depends on three elements: choosing appropriate paper for your room and property type, thorough wall preparation, and expert hanging technique. Cut corners on any of these, and the results disappoint within months.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve hung wallpaper in properties across Exeter for over 20 years, from listed Georgian townhouses in the Cathedral Quarter to modern apartments along the Quay. We understand how Exeter\'s period properties behave, which papers suit Devon\'s climate, and how to achieve seamless results that last.',
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re planning a single feature wall or papering an entire home, we provide honest advice about what will work in your specific property. Our preparation is thorough, our pattern matching precise, and our finish invisible.',
      },
      {
        type: 'quoteCTA',
        content: 'Ready to explore wallpaper for your Exeter home? Contact BSR Decorating for a free, no-obligation quote and expert advice on which papers will work best in your property.',
      },
    ],
  },
  'topsham-painter-decorator-guide-period-riverside-homes': {
    sections: [
      {
        type: 'paragraph',
        content: 'Topsham presents unique decorating challenges that demand specialist knowledge. With 228 listed buildings, a prominent conservation area, and riverside properties exposed to the Exe Estuary\'s humidity and salt air, choosing the right painter and decorator in Topsham requires careful consideration. Whether you\'re restoring a Georgian townhouse on Fore Street, maintaining a Victorian villa in higher Topsham, or protecting a waterfront property from the elements, understanding what makes Topsham different is essential for successful decorating work.',
      },
      {
        type: 'heading',
        content: 'Why Topsham Properties Need Specialist Decorating Expertise',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s architectural heritage and waterfront location create decorating requirements that differ significantly from other Devon towns. The combination of period building techniques, conservation area regulations, and challenging coastal weather means standard decorating approaches often fail.',
      },
      {
        type: 'subheading',
        content: 'The Listed Building Factor',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Topsham contains 228 listed buildings, making it one of the most historically significant areas in Exeter. These properties, concentrated along Fore Street, Monmouth Street, and the Strand, require breathable paints and traditional techniques. Modern vinyl emulsions trap moisture in lime mortar and plaster, causing damp problems and paint failure. A December 2025 case saw a Topsham property owner fined £38,000 for unauthorised alterations to a listed building, demonstrating how seriously conservation regulations are enforced. Your painter and decorator in Topsham must understand these requirements before work begins.',
      },
      {
        type: 'subheading',
        content: 'Riverside Climate Challenges',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Properties near the Exe Estuary face constant humidity, salt air, and temperature fluctuations. Woodwork expands and contracts more than inland properties, paint coatings must resist salt corrosion, and exterior surfaces endure harsher weathering. The Strand, Retreat Hill, and properties backing onto the estuary require [specialist paint systems designed for coastal exposure](/blog/topsham-waterfront-homes-best-paints-humidity-salt-air-weather). Standard decorating schedules don\'t account for these conditions, leading to premature paint failure and costly redecorating cycles.',
      },
      {
        type: 'subheading',
        content: 'Conservation Area Restrictions',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Topsham Conservation Area covers the historic town centre, imposing restrictions on exterior colour changes, window treatments, and visible alterations. While internal decorating generally doesn\'t require consent, exterior work often does. Planning applications take 8-12 weeks, and unauthorised work can result in enforcement notices requiring reinstatement at your expense. An experienced Topsham decorator understands which colours and finishes comply with conservation guidelines, saving time and avoiding costly mistakes.',
      },
      {
        type: 'heading',
        content: 'What to Look for When Choosing a Painter and Decorator in Topsham',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not all decorators have the specialist knowledge Topsham properties demand. When evaluating potential contractors, ask specific questions that reveal their experience with period and riverside homes.',
      },
      {
        type: 'subheading',
        content: 'Period Property Experience',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Ask whether they\'ve worked on listed buildings or properties in conservation areas. Request examples of lime plaster preparation, breathable paint systems, and traditional joinery finishing. Decorators experienced with [heritage properties](/areas/exeter/heritage-property-painting) understand that surface preparation differs fundamentally from modern homes. They\'ll identify whether your walls are lime or gypsum plaster before selecting appropriate paints, and they\'ll know which primers prevent tannin bleed-through on old pine or oak woodwork.',
      },
      {
        type: 'subheading',
        content: 'Understanding of Coastal Conditions',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Riverside and estuary-facing properties require specific paint specifications. Ask which exterior paint systems they recommend for salt air exposure and how they prepare surfaces affected by previous moisture ingress. Experienced decorators working near the [waterfront](/areas/topsham) select paints with high water vapour permeability, use corrosion-inhibiting primers on metalwork, and understand when to recommend dehumidification before decorating damp-affected rooms.',
      },
      {
        type: 'subheading',
        content: 'Local Knowledge and Planning Awareness',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'A decorator familiar with Topsham Conservation Area knows which exterior colour changes require planning consent and can advise on historically appropriate colour schemes. They should be able to discuss whether your proposed cream front door needs approval, or whether repainting existing colours in the same shade is permitted development. This knowledge prevents delays and ensures compliance from the outset.',
      },
      {
        type: 'heading',
        content: 'Planning Your Topsham Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Successful decorating in Topsham requires more planning than standard projects. Factor in additional time for surveys, materials specification, and potentially planning applications.',
      },
      {
        type: 'subheading',
        content: 'Pre-Work Property Assessment',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period and riverside properties benefit from thorough assessment before work begins. A professional decorator should inspect for damp, identify plaster types, test existing paint for lead content, and assess the condition of substrates. This prevents mid-project discoveries that delay completion and increase costs. For properties with ongoing damp issues, decorating should wait until causes are remedied, otherwise paint failure is inevitable.',
      },
      {
        type: 'subheading',
        content: 'Materials Selection for Longevity',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Lime-based paints for lime plaster walls and breathable heritage properties',
          'Clay paints for superior breathability and low environmental impact',
          'Specialist masonry paints with fungicidal additives for north-facing exterior walls',
          'Microporous wood finishes for external joinery in humid conditions',
          'Low-sheen finishes that hide imperfections in uneven period plasterwork',
        ],
      },
      {
        type: 'paragraph',
        content: 'Material costs in Topsham reflect the higher specification required. Where standard projects might use contract emulsion at £15-20 per 10 litres, breathable heritage paints cost £40-80 for equivalent coverage. However, correct specification prevents costly redecoration cycles, making premium materials economically sensible for long-term property care.',
      },
      {
        type: 'subheading',
        content: 'Timing and Seasonal Considerations',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exterior decorating in Topsham requires careful timing. Spring and early summer offer optimal conditions, with lower humidity and warmer temperatures allowing proper paint curing. Autumn can work if weather holds, but winter decorating risks condensation problems and extended drying times. Riverside properties face additional constraints, as estuary fog and morning mist affect surface preparation and coating application. Interior work can proceed year-round, though winter heating must be managed to prevent condensation during paint drying.',
      },
      {
        type: 'heading',
        content: 'Common Topsham Decorating Challenges and Solutions',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Certain decorating problems recur frequently in Topsham properties. Understanding these helps set realistic expectations and ensures your chosen decorator addresses them properly.',
      },
      {
        type: 'subheading',
        content: 'Damp and Salt Efflorescence',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Ground floor rooms in older Topsham properties often show damp patches and white salt deposits. This occurs when groundwater or tidal influence brings salts through solid walls without damp-proof courses. Simply painting over these areas fails within months. Proper treatment requires diagnosis of moisture sources, salt neutralisation, breathable render systems, and lime-based paints that allow continued moisture evaporation. Competent decorators refuse to paint over active damp, instead recommending remediation first.',
      },
      {
        type: 'subheading',
        content: 'Uneven Historic Surfaces',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period plasterwork often shows undulations, cracks, and previous repair patches. Modern expectations of smooth walls conflict with historic fabric that shouldn\'t be over-plastered. Experienced decorators use appropriate filler techniques, select paint finishes that minimise imperfection visibility, and help owners understand that some character should be retained rather than eliminated. Lime plaster in particular should never be over-plastered with gypsum products, as this traps moisture and causes deterioration.',
      },
      {
        type: 'subheading',
        content: 'Listed Building Paint Removal',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Removing multiple paint layers from Georgian or Victorian joinery requires patience and appropriate techniques. Heat guns risk scorching delicate mouldings, while aggressive chemical strippers can damage patina and raise grain excessively. Professional decorators assess whether complete stripping is necessary or whether repainting over sound existing coatings is acceptable. For valuable hardwood features, they may recommend specialist hot air stripping or infrared systems that minimise damage whilst achieving thorough paint removal.',
      },
      {
        type: 'heading',
        content: 'Costs for Decorating Work in Topsham',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'With average property values in Topsham around £506,000, reflecting the area\'s desirability and period housing stock, decorating budgets tend towards quality rather than economy. Typical costs for common projects include:',
      },
      {
        type: 'list',
        content: [
          'Single period room with preparation and two coats: £450-550',
          'Three-bedroom house full interior refresh: £2,800-3,500',
          'Heritage-specification exterior painting for terrace house: £2,200-3,000',
          'Kitchen cabinet spraying to refresh dated units: £750-950',
          'Riverside property exterior with specialist coastal paint systems: £2,500-3,800',
        ],
      },
      {
        type: 'paragraph',
        content: 'These figures reflect the higher material costs, additional preparation requirements, and specialist knowledge that Topsham properties demand. Budget decorators using standard specifications often produce work that fails prematurely, making apparent savings false economy.',
      },
      {
        type: 'heading',
        content: 'Questions to Ask Your Topsham Decorator',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before committing to a contractor, ask these specific questions to gauge their suitability for Topsham properties:',
      },
      {
        type: 'list',
        content: [
          'Have you worked on listed buildings in Topsham or elsewhere? Can you provide examples?',
          'What paint systems do you recommend for lime plaster, and why?',
          'How do you prepare surfaces affected by damp or salt efflorescence?',
          'Are you familiar with Topsham Conservation Area requirements for exterior colour changes?',
          'What\'s your approach to dealing with uneven period plasterwork?',
          'Which primers do you use to prevent tannin staining from old pine or oak?',
          'How do you protect period features like cornicing, dado rails, and architraves during work?',
          'What insurance coverage do you carry for working on heritage properties?',
        ],
      },
      {
        type: 'paragraph',
        content: 'Vague or generic answers suggest insufficient experience. Specialists will provide detailed, specific responses that demonstrate practical knowledge of period and coastal property challenges.',
      },
      {
        type: 'heading',
        content: 'Getting the Best Results from Your Topsham Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Clear communication and realistic expectations ensure successful outcomes. Discuss exactly what\'s included in quotations, from preparation standards to the number of coats, materials specifications, and protection measures for furnishings and flooring. Agree on start dates with some flexibility for weather delays on exterior work, and establish payment schedules tied to project milestones rather than upfront payments.',
      },
      {
        type: 'paragraph',
        content: 'For period properties, accept that some surface imperfections add character rather than detracting from quality. A skilled painter and decorator in Topsham will help you distinguish between acceptable historic character and problems requiring attention. They\'ll advise when further structural work is needed before decorating, and won\'t proceed with cosmetic treatments that hide underlying issues.',
      },
      {
        type: 'quote',
        content: 'The combination of Topsham\'s heritage architecture and challenging riverside climate means choosing the right decorator isn\'t just about price, it\'s about protecting your property investment for years to come.',
      },
      {
        type: 'paragraph',
        content: 'BSR Decorating brings over 20 years of experience working on period and coastal properties throughout Devon, including extensive work in Topsham\'s conservation area and listed buildings. We understand the specific challenges riverside properties face, specify appropriate heritage paint systems, and take time to prepare surfaces properly for lasting results. Our eco-conscious approach aligns with the values of Topsham\'s community, and our knowledge of local planning requirements ensures your project proceeds smoothly from start to finish.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning decorating work on your Topsham property? Contact BSR Decorating for expert advice and a free, detailed quote that addresses your home\'s specific requirements.',
      },
    ],
  },
  'heritage-decorator-exeter-listed-buildings-st-leonards-st-davids': {
    sections: [
      {
        type: 'paragraph',
        content: 'Exeter\'s architectural heritage is extraordinary. With 994 listed buildings spread across the city and 20 designated conservation areas, our historic properties tell the story of centuries of craftsmanship. St Leonard\'s alone contains 120 listed buildings, whilst St David\'s ward boasts an impressive 380. If you own one of these remarkable properties, choosing the right paint and decorator isn\'t just about aesthetics—it\'s about preservation, compliance, and protecting your investment for generations to come.',
      },
      {
        type: 'paragraph',
        content: 'As a heritage decorator in Exeter with over 20 years of experience working on [period properties across Devon](/areas/exeter/heritage-property-painting), I\'ve seen firsthand what happens when modern paints are applied to old buildings. I\'ve also witnessed the transformation when the right materials and techniques are used. This guide will help you understand what makes decorating a listed building different, and why specialist knowledge matters.',
      },
      {
        type: 'heading',
        content: 'Why Listed Buildings Need Different Paint',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The fundamental difference between a Georgian townhouse in St Leonard\'s and a modern home in Cranbrook comes down to one word: breathability. Buildings constructed before 1919 were built using lime mortar, lime plaster, and porous materials that allow moisture to move through the walls naturally. This vapour permeability is essential to the building\'s health.',
      },
      {
        type: 'paragraph',
        content: 'Modern vinyl emulsions and acrylic paints create an impermeable barrier. When applied to old walls, they trap moisture inside the structure. Over months and years, this causes lime plaster to fail, timber to rot, and salt deposits to form on the surface—a white crystalline bloom called efflorescence that signals serious problems beneath.',
      },
      {
        type: 'paragraph',
        content: 'I\'ve been called to properties on Sidwell Street and around the Cathedral Close where well-meaning decorators have painted beautiful period interiors with standard trade emulsion. Within two years, the paint was bubbling and peeling, and the plaster underneath was crumbling. The cost of remedial work far exceeded what the owners would have paid for breathable alternatives in the first place.',
      },
      {
        type: 'heading',
        content: 'Paint Types for Heritage Properties in Exeter',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Limewash: The Traditional Choice',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Limewash is the oldest form of wall coating, used on buildings throughout Exeter for centuries. It\'s made from slaked lime and water, sometimes with natural pigments added. Limewash is highly breathable, naturally antibacterial, and develops a beautiful matte patina over time. It\'s ideal for historic exteriors and lime-plastered interiors, particularly in damp-prone areas like cellars and north-facing walls.',
      },
      {
        type: 'paragraph',
        content: 'The trade-off is durability. Limewash wears gradually and needs reapplication every 5-7 years on exteriors. Many owners of Victorian terraces in Pennsylvania and Edwardian properties around Polsloe find this maintenance schedule suits their approach to stewardship—they\'re caring for a building, not just decorating it.',
      },
      {
        type: 'subheading',
        content: 'Clay and Mineral Paints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Clay paints like those from Earthborn and Clayworks, along with mineral paints from brands such as Keim and Graphenstone, offer excellent breathability with better durability than limewash. These paints create a microporous surface that allows water vapour to pass through whilst resisting liquid water penetration—exactly what a listed building needs.',
      },
      {
        type: 'paragraph',
        content: 'We specify these paints frequently for interior work in [Topsham\'s riverside period properties](/areas/topsham) and Exeter\'s conservation areas. They\'re available in an extensive colour range, apply similarly to conventional emulsion, and the finish improves with age. The initial cost is higher—roughly double that of standard emulsion—but the longevity and performance justify the investment.',
      },
      {
        type: 'subheading',
        content: 'Traditional Distemper',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Distemper was the standard interior finish throughout the Georgian and Victorian periods. Made from chalk, water, and animal glue, it creates a soft, chalky surface with unmatched breathability. Original distemper can still be found on ceilings in older properties around the Cathedral Quarter and St David\'s.',
      },
      {
        type: 'paragraph',
        content: 'Modern alternatives like Farrow & Ball\'s Casein Distemper offer similar properties with better durability. Distemper isn\'t washable, which makes it impractical for kitchens and bathrooms, but for bedrooms, hallways, and formal rooms, it creates an authentic period finish that vinyl emulsion simply cannot replicate.',
      },
      {
        type: 'subheading',
        content: 'Specialist Masonry Paints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For external render and masonry, breathable silicate or lime-based masonry paints are essential. Standard acrylic masonry paint will cause the same moisture-trapping problems as vinyl emulsion does internally. Brands like Keim Granital and Dulux Heritage Masonry are formulated specifically for historic buildings and comply with conservation requirements.',
      },
      {
        type: 'heading',
        content: 'Colour Choices and Conservation Area Requirements',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s conservation areas each have their own character, and whilst there\'s no prescriptive palette, planning officers do pay attention to colour choices—particularly on external elevations visible from the street. The December 2025 case where a Topsham property owner was fined £38,000 for unauthorised alterations to a listed building shows how seriously enforcement is taken.',
      },
      {
        type: 'paragraph',
        content: 'In St Leonard\'s, the prevailing palette reflects the area\'s Victorian and Edwardian character: warm creams, soft greys, and muted heritage colours. Properties around Newtown and Mont le Grand often feature darker, richer tones—deep reds, forest greens, and traditional blue-greys. St David\'s, with its older building stock, tends toward lighter limewash shades and traditional ochres.',
      },
      {
        type: 'list',
        content: [
          'For Georgian properties (pre-1837): Stone colours, off-whites, soft greys, and period greens',
          'For Victorian properties (1837-1901): Deeper heritage colours, terracottas, and rich creams',
          'For Edwardian properties (1901-1910): Lighter shades returning to fashion—soft greens, pale blues, warm whites',
        ],
      },
      {
        type: 'paragraph',
        content: 'If you\'re planning external colour changes on a listed building or within a conservation area, it\'s worth consulting Exeter City Council\'s planning department early. A brief conversation can save months of complications. We can arrange this on your behalf as part of our heritage decorating service.',
      },
      {
        type: 'heading',
        content: 'Common Mistakes to Avoid',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Over two decades working as a heritage decorator in Exeter, I\'ve seen several recurring mistakes that compromise historic buildings:',
      },
      {
        type: 'list',
        content: [
          'Painting over original lime plaster with vinyl emulsion, trapping moisture and causing deterioration',
          'Using cement-based fillers on lime plaster walls, creating hard spots that crack and fail',
          'Applying modern masonry paint to soft lime render, leading to blistering and spalling',
          'Stripping original features like dado rails and cornicing rather than carefully restoring them',
          'Choosing inappropriate colours that clash with the building\'s period and the streetscape',
          'Failing to obtain Listed Building Consent for works that require it—even interior painting can need approval in some cases',
        ],
      },
      {
        type: 'paragraph',
        content: 'The last point is particularly important. Listed Building Consent is legally required for any works that affect a building\'s special architectural or historic interest. For most internal redecoration using appropriate materials, consent isn\'t needed—but if you\'re changing colours significantly, removing paint layers to expose original finishes, or working on particularly significant interiors, it\'s essential to check first.',
      },
      {
        type: 'heading',
        content: 'Why Specialist Knowledge Matters',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Decorating a listed building isn\'t just about applying paint carefully. It requires understanding historic construction methods, recognising signs of underlying problems, and knowing which modern materials can safely be used alongside traditional ones. A heritage decorator brings this knowledge—accumulated through years of working specifically with old buildings.',
      },
      {
        type: 'paragraph',
        content: 'When we survey a Georgian townhouse near Southernhay or a Victorian terrace in Heavitree, we\'re looking beyond the surface. Is that crack in the plaster caused by settlement, moisture movement, or inappropriate repairs? Is the existing paint layer vinyl that needs removing, or original distemper that should be preserved? Does the substrate need consolidation before any decoration begins?',
      },
      {
        type: 'paragraph',
        content: 'These questions matter because the wrong decisions lead to repeated failures and escalating costs. [Our approach to heritage property painting](/areas/exeter/heritage-property-painting) starts with understanding what we\'re working with, then specifying appropriate materials and methods. It takes longer than slapping on trade emulsion, but it\'s how these buildings have survived centuries—and how they\'ll survive centuries more.',
      },
      {
        type: 'heading',
        content: 'Costs and Long-Term Value',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Heritage painting specification typically costs 30-50% more than standard decoration, reflecting specialist materials and the additional time required for proper preparation. For a typical Victorian room in St Leonard\'s, expect to pay £600-800 rather than £400-500 for standard work. For whole-house projects, the premium might add £2,000-4,000 to the total.',
      },
      {
        type: 'paragraph',
        content: 'But consider the alternative. Inappropriate decoration fails within 3-5 years, requiring complete stripping and redoing—often with remedial plaster work needed as well. Proper heritage specification lasts 10-15 years or more, protects the building fabric, and maintains property value. For homes in conservation areas where the average price exceeds £500,000 in areas like Topsham and £350,000-700,000 in St Leonard\'s, protecting that investment is paramount.',
      },
      {
        type: 'paragraph',
        content: 'There\'s also the question of authenticity. Period properties command premium prices partly because of their character. Strip out that character with inappropriate decoration, and you diminish what makes the building valuable. Preserve it thoughtfully, and you maintain what buyers in these areas specifically seek.',
      },
      {
        type: 'heading',
        content: 'Finding the Right Heritage Decorator in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not every painter and decorator has heritage experience. When interviewing potential contractors for your listed building project, ask specific questions: What breathable paint systems do they use? Have they worked in your conservation area before? Can they provide references from similar period properties? Do they understand Listed Building Consent requirements?',
      },
      {
        type: 'paragraph',
        content: 'Ask to see examples of completed heritage work—not just photographs, but ideally buildings you can visit. A decorator experienced with Victorian terraces in Heavitree should be able to point to multiple completed projects nearby. Someone claiming heritage expertise but unable to discuss lime plaster, breathability, or period-appropriate colours probably doesn\'t have the specialist knowledge your property needs.',
      },
      {
        type: 'paragraph',
        content: 'Professional accreditations matter too. Membership of organisations like the Painting & Decorating Association, or specific heritage training from institutions like the Society for the Protection of Ancient Buildings, demonstrates commitment to proper standards.',
      },
      {
        type: 'quote',
        content: 'Exeter\'s 994 listed buildings represent centuries of architectural evolution. Decorating them properly isn\'t just about following regulations—it\'s about understanding why those regulations exist and caring enough to do the work right.',
      },
      {
        type: 'paragraph',
        content: 'Whether you own a Georgian townhouse overlooking the Cathedral, a Victorian terrace in St Leonard\'s, or a merchant\'s house in St David\'s, your property deserves decoration that respects its heritage whilst meeting your practical needs for a comfortable, beautiful home. The right materials, applied by someone who understands historic buildings, make all the difference.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve spent over 20 years working with period properties across Exeter and Topsham. We understand the specific requirements of listed buildings and conservation areas, we use breathable paint systems as standard on historic properties, and we can guide you through colour choices and consent requirements. Most importantly, we care about getting it right—because these buildings matter, and they deserve decorators who understand that.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning work on your listed building or period property in Exeter? Contact BSR Decorating for specialist advice and a free, no-obligation quote. We\'re based in Dawlish and work throughout Exeter, Topsham, and the surrounding area.',
      },
    ],
  },
  'kitchen-spraying-exeter-what-homeowners-should-know': {
    sections: [
      {
        type: 'paragraph',
        content: 'Kitchen cabinet spraying has become one of the fastest-growing decorating services across Exeter, from the Victorian terraces of St Leonard\'s to the modern developments at Cranbrook. It\'s not difficult to see why. With full kitchen replacements costing upwards of £8,000 to £15,000, professional spraying offers a fraction of the cost whilst delivering a completely transformed appearance. But as with any specialist service, understanding what\'s involved before you book makes all the difference between a successful project and a disappointing one.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve been spraying kitchens across Devon for over 20 years, and we\'ve learned that the homeowners who are happiest with their results are those who knew what to expect from the start. This guide answers the questions we\'re asked most often about [kitchen spraying in Exeter](/areas/exeter/kitchen-spraying), from preparation and timing to realistic costs and how long your newly sprayed kitchen will last.',
      },
      {
        type: 'heading',
        content: 'What Is Kitchen Cabinet Spraying?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen spraying involves applying specialist paint to your existing kitchen cabinets, doors, drawer fronts and sometimes worktops using professional spray equipment. Unlike brush or roller application, spraying creates an ultra-smooth, factory-finish appearance without visible brush marks or texture. The process requires significant preparation, specialist equipment, and considerable skill to achieve durable, professional results.',
      },
      {
        type: 'paragraph',
        content: 'Most professional kitchen spraying uses either water-based or solvent-based paints specifically formulated for durability. These aren\'t standard wall paints. They\'re designed to withstand the daily wear that kitchen surfaces endure: heat from cooking, steam, frequent cleaning, and constant handling. The best finishes cure to a hard, resilient surface that can last ten years or more with proper care.',
      },
      {
        type: 'heading',
        content: 'How Much Does Kitchen Spraying Cost in Exeter?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'According to current local pricing data, professional kitchen cabinet spraying in Exeter typically costs around £750 for a full kitchen, though this varies considerably based on kitchen size, condition, and finish requirements. This compares favourably with the £364 average for brush-painting cabinets, and dramatically undercuts the £8,000 to £15,000 cost of complete kitchen replacement.',
      },
      {
        type: 'subheading',
        content: 'What Affects the Price?',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Kitchen size: A small galley kitchen in a Heavitree terrace will cost less than a large open-plan kitchen in a Pennsylvania Road property',
          'Number of units: More doors and drawer fronts mean more preparation and spraying time',
          'Current condition: Kitchens requiring repair work, deep cleaning, or significant preparation will cost more',
          'Finish type: Some finishes require multiple coats or specialist primers',
          'Colour changes: Changing from dark wood to pale colours, or vice versa, often requires additional coats',
          'Hardware: Whether you\'re keeping or replacing handles affects preparation time',
          'Access and protection: Larger homes may require more extensive masking and protection work',
        ],
      },
      {
        type: 'paragraph',
        content: 'For accurate pricing specific to your Exeter kitchen, it\'s worth requesting a detailed quote. Professional decorators will typically visit to assess the work before providing a fixed price. You can read more about typical decorating costs in our comprehensive [Exeter pricing guide](/blog/how-much-painter-decorator-cost-exeter).',
      },
      {
        type: 'heading',
        content: 'The Kitchen Spraying Process: What to Expect',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding the process helps you prepare properly and set realistic expectations about timing and disruption. Professional kitchen spraying isn\'t a quick job. Done properly, it takes several days and requires your kitchen to be largely out of action during that time.',
      },
      {
        type: 'subheading',
        content: 'Step 1: Preparation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Preparation accounts for roughly 60 to 70 per cent of the total work. Cabinet doors and drawer fronts are removed, labelled, and taken to a dedicated spray area. All hardware is removed and stored safely. Fixed cabinet frames are thoroughly cleaned to remove grease, which is particularly important in older Exeter properties where years of cooking residue may have built up.',
      },
      {
        type: 'paragraph',
        content: 'Surfaces are then sanded to create a key for the new paint to adhere to. Any damage, chips, or imperfections are filled and sanded smooth. The kitchen itself is extensively masked and protected. Floors, worktops, appliances, and walls all need covering to prevent overspray damage.',
      },
      {
        type: 'subheading',
        content: 'Step 2: Priming',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'A specialist primer is applied to all surfaces. This is crucial for adhesion and longevity. The primer is left to dry completely, which can take several hours depending on temperature and humidity. Devon\'s coastal climate, particularly in properties closer to the Exe estuary, can affect drying times.',
      },
      {
        type: 'subheading',
        content: 'Step 3: Spraying',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Multiple thin coats of paint are applied using professional HVLP or airless spray equipment. Each coat is allowed to dry before the next is applied. Most kitchens require at least two to three topcoats for full coverage and durability. The spray technique requires considerable skill to achieve an even, smooth finish without runs, sags, or orange-peel texture.',
      },
      {
        type: 'subheading',
        content: 'Step 4: Curing and Reassembly',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Once the final coat is applied, surfaces need time to cure fully. This isn\'t the same as drying to touch. Full curing, where the paint reaches its maximum hardness and durability, can take up to two weeks. Doors and drawers are carefully reassembled, hardware is refitted, and all protection is removed.',
      },
      {
        type: 'heading',
        content: 'How Long Will Your Kitchen Be Out of Action?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Most professional kitchen spraying projects take three to five days from start to finish. During this time, your kitchen will be largely unusable. You won\'t have access to cabinets, and appliances may be difficult or impossible to use safely. Many Exeter families plan spraying work around holidays, or arrange temporary kitchen facilities elsewhere in the home.',
      },
      {
        type: 'paragraph',
        content: 'The work generates minimal dust compared to a full kitchen renovation, but there will be strong paint odours, particularly if solvent-based paints are used. Good ventilation is essential, which can be challenging in winter months.',
      },
      {
        type: 'heading',
        content: 'Will Spraying Work on Your Kitchen?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not every kitchen is suitable for spraying, though most are. The best candidates are kitchens with solid cabinet doors in reasonable structural condition. MDF, solid wood, and laminate can all be sprayed successfully with the right preparation and paint systems.',
      },
      {
        type: 'subheading',
        content: 'Good Candidates for Spraying',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Solid MDF or wood doors in good structural condition',
          'Flat or simple shaker-style doors',
          'Laminate cabinets that are firmly adhered',
          'Kitchens with outdated colours but sound construction',
          'Well-maintained kitchens needing a style refresh',
          'Oak kitchens where you want to change the tone or cover the grain',
        ],
      },
      {
        type: 'subheading',
        content: 'Poor Candidates for Spraying',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Doors with damaged or peeling laminate',
          'Heavily damaged or water-damaged cabinets',
          'Thermofoil or vinyl-wrapped doors, which can be difficult to prepare',
          'Kitchens with structural issues that need addressing first',
          'Very high-gloss finishes that show every imperfection',
        ],
      },
      {
        type: 'paragraph',
        content: 'A professional decorator will assess your kitchen honestly and advise whether spraying is the right solution. If structural issues need addressing, it\'s worth resolving those first. In some older Exeter properties, particularly Victorian and Edwardian homes in St Leonard\'s or Newtown, underlying damp issues should be resolved before any decorating work. Our guide to [solving damp and paint problems](/blog/solving-damp-paint-problems-exeter-homes) covers this in more detail.',
      },
      {
        type: 'heading',
        content: 'Choosing Colours and Finishes',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen spraying offers almost unlimited colour options. You\'re not limited to standard kitchen ranges. Any colour can be matched, though lighter colours tend to be more forgiving and require fewer coats. Popular choices in Exeter currently include soft greys, sage greens, navy blues, and classic whites and off-whites.',
      },
      {
        type: 'paragraph',
        content: 'Finish options typically include matt, satin, and gloss. Satin is most popular for kitchens, offering a subtle sheen that\'s elegant without being too reflective. It\'s also practical, as it\'s easier to clean than matt and less likely to show fingerprints than high gloss.',
      },
      {
        type: 'paragraph',
        content: 'For period properties in conservation areas like Topsham or St David\'s, colour choices may need consideration alongside the property\'s character. Heritage colours can work beautifully in sprayed kitchens whilst respecting the building\'s history.',
      },
      {
        type: 'heading',
        content: 'How Long Does Sprayed Kitchen Paint Last?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'With proper preparation and high-quality materials, a professionally sprayed kitchen should last ten years or more. This assumes normal domestic use and reasonable care. The longevity depends heavily on the quality of preparation, the paint system used, and how the kitchen is maintained.',
      },
      {
        type: 'paragraph',
        content: 'Kitchens sprayed with specialist two-pack paints, which cure through chemical reaction rather than just drying, offer exceptional durability. These create an extremely hard, chemical-resistant surface that can withstand decades of use. However, they\'re more expensive and require more technical expertise to apply.',
      },
      {
        type: 'heading',
        content: 'Caring for Your Newly Sprayed Kitchen',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Newly sprayed cabinets need gentle treatment during the first few weeks whilst the paint fully cures. Avoid harsh cleaning for at least two weeks. After that, regular cleaning with mild detergent and a soft cloth will keep surfaces looking fresh. Avoid abrasive cleaners, scourers, or harsh chemicals, which can damage even the most durable finishes.',
      },
      {
        type: 'paragraph',
        content: 'Steam is the biggest long-term enemy of kitchen paint. Using extractor fans when cooking, particularly when boiling or steaming food, significantly extends the life of your finish. This is especially important in older Exeter properties where ventilation may be limited.',
      },
      {
        type: 'heading',
        content: 'DIY Kitchen Spraying vs Professional Service',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'DIY kitchen spraying is technically possible and might save money, but it\'s considerably more difficult than it appears. Professional results require specialist spray equipment, proper extraction and ventilation, extensive preparation skills, and considerable experience in paint application techniques.',
      },
      {
        type: 'paragraph',
        content: 'Most DIY attempts result in disappointing finishes: runs, sags, orange-peel texture, or adhesion problems that appear within months. The equipment investment alone, for quality spray guns, extraction, and masking materials, approaches the cost of professional work for a single kitchen.',
      },
      {
        type: 'paragraph',
        content: 'For most Exeter homeowners, professional spraying offers better value. The finish quality, durability, and guaranteed results justify the cost, particularly when compared with full kitchen replacement.',
      },
      {
        type: 'heading',
        content: 'Questions to Ask Before Booking',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before committing to kitchen spraying, ask potential decorators these important questions:',
      },
      {
        type: 'list',
        content: [
          'What paint system do you use, and why?',
          'How many coats will be applied?',
          'What preparation is included in the price?',
          'How long will the work take?',
          'Do you have insurance for the work?',
          'Can you provide references or examples of similar work?',
          'What guarantee or warranty do you offer?',
          'How should I prepare my kitchen before you start?',
          'What aftercare will the finish require?',
        ],
      },
      {
        type: 'paragraph',
        content: 'Professional decorators should answer these questions clearly and provide detailed quotations breaking down exactly what\'s included.',
      },
      {
        type: 'heading',
        content: 'When Is the Best Time to Spray Your Kitchen?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen spraying can be done year-round, but timing affects both the process and your convenience. Spring and autumn are ideal: temperatures are moderate, helping paint cure properly, and you\'re less likely to need windows closed against cold or open in high summer heat.',
      },
      {
        type: 'paragraph',
        content: 'Book well in advance if you have a specific timeframe. Experienced kitchen spraying specialists often have waiting lists of several weeks or months, particularly during peak periods in spring and early summer.',
      },
      {
        type: 'heading',
        content: 'Transform Your Exeter Kitchen with Professional Spraying',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen spraying offers an economical, environmentally conscious alternative to complete kitchen replacement. For Exeter homeowners with structurally sound kitchens that simply need a style refresh, it\'s an excellent investment. The key to success lies in choosing an experienced professional who understands the technical requirements and can deliver durable, beautiful results.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve been transforming kitchens across Exeter, Topsham, and surrounding areas for over 20 years. We use premium paint systems, prepare surfaces properly, and work efficiently to minimise disruption to your home. Every project includes a detailed quote, clear timescales, and aftercare advice to help your kitchen look perfect for years to come.',
      },
      {
        type: 'quoteCTA',
        content: 'Ready to transform your kitchen? Contact BSR Decorating today for a free, no-obligation quote and expert advice on whether kitchen spraying is right for your Exeter home.',
      },
    ],
  },
  'commercial-repainting-timelines-exeter-offices-shops-hospitality': {
    sections: [
      {
        type: 'paragraph',
        content: 'When you run a business in Exeter, every hour of disruption costs money. Whether you manage a Fore Street shop, a Queen Street office, or a Quayside hospitality venue, understanding realistic commercial repainting timelines helps you plan effectively, minimise downtime, and maintain your professional image without unnecessary business interruption.',
      },
      {
        type: 'paragraph',
        content: 'After over 20 years decorating commercial properties across Exeter, from the modern offices near Exeter Business Park to Grade II listed retail spaces in the Cathedral Quarter, we have learned that proper timeline planning makes the difference between a smooth project and a stressful experience. This guide explains what affects commercial decorating schedules and how to plan repainting work around your business operations.',
      },
      {
        type: 'heading',
        content: 'Why Commercial Decorating Takes Longer Than Residential Work',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Commercial properties present unique challenges that extend timelines compared to domestic decorating. Understanding these factors helps set realistic expectations from the start.',
      },
      {
        type: 'subheading',
        content: 'Access and Business Hours Constraints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Unlike residential properties where decorators can work standard hours, commercial projects often require evening, weekend, or overnight work to avoid disrupting trading hours. A retail unit on Exeter High Street that takes three days to paint during closed hours might only require two days if decorators could work continuously without access restrictions.',
      },
      {
        type: 'paragraph',
        content: 'Professional [commercial decorator Exeter](/commercial) services factor these constraints into project planning, but clients should understand that restricted access naturally extends timelines and can increase costs due to unsociable hours premiums.',
      },
      {
        type: 'subheading',
        content: 'Health and Safety Requirements',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Commercial decorating requires comprehensive health and safety procedures that add time to projects. Risk assessments, method statements, COSHH documentation, and coordination with building management all take time before any paintwork begins. For multi-tenant buildings near Southernhay or the Princesshay development, coordinating with facilities management and other businesses adds further scheduling complexity.',
      },
      {
        type: 'subheading',
        content: 'Fire Safety and Building Regulations',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Commercial properties must comply with stricter fire safety regulations than domestic homes. Paint specifications often require specific fire ratings, particularly for escape routes and communal areas. Some projects require intumescent coatings or fire-resistant paint systems that need longer drying times between coats, extending overall timelines.',
      },
      {
        type: 'heading',
        content: 'Typical Commercial Repainting Timelines by Property Type',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Every commercial property differs, but these timelines provide realistic benchmarks for planning based on common Exeter business types.',
      },
      {
        type: 'subheading',
        content: 'Small Offices and Consulting Rooms',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional offices between 500 and 1,500 square feet, common around Southernhay Gardens or the medical consulting rooms near the Royal Devon University Hospital, typically require three to five working days for complete repainting. This includes preparation, two coats throughout, and minimal disruption to daily operations if work is scheduled during evenings or weekends.',
      },
      {
        type: 'paragraph',
        content: 'Professional practices often prefer staged approaches where different rooms are decorated sequentially, allowing the business to continue operating. This extends the calendar timeline to two or three weeks but reduces daily disruption.',
      },
      {
        type: 'subheading',
        content: 'Retail Units and Shop Fronts',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'High Street retail units present particular scheduling challenges. Interior repainting of a typical 1,000 to 2,000 square foot shop requires four to seven days of work, but this usually needs splitting across multiple weeks to work around trading hours.',
      },
      {
        type: 'paragraph',
        content: 'Exterior shopfront painting requires careful coordination with pedestrian traffic and often needs completed in sections to maintain access. Heritage retail properties in conservation areas like the Cathedral Quarter may require specialist paint specifications and Listed Building Consent, adding two to four weeks to planning timelines before work begins.',
      },
      {
        type: 'subheading',
        content: 'Restaurants, Cafes and Bars',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Hospitality venues around the Quayside or Gandy Street face the tightest scheduling constraints. Most restaurants cannot close for extended periods, so decorating work typically happens during closed days or overnight after service ends.',
      },
      {
        type: 'paragraph',
        content: 'A typical restaurant interior requires seven to ten working days spread across three to four weeks, working nights and Mondays when many establishments close. Kitchen areas need specialist paint systems and longer drying times to meet hygiene standards, while dining areas require odour-free paint systems that do not affect the customer experience.',
      },
      {
        type: 'paragraph',
        content: 'Licensed premises also require coordination with Environmental Health, particularly for kitchen repainting, adding administrative time to projects.',
      },
      {
        type: 'subheading',
        content: 'Larger Office Buildings and Commercial Spaces',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Multi-floor office buildings like those near Exeter Science Park or Sowton Industrial Estate require project management approaches with phased programmes. A 10,000 square foot office building typically needs four to eight weeks to complete, working floor by floor or zone by zone to minimise disruption.',
      },
      {
        type: 'paragraph',
        content: 'Common areas including reception, corridors, and stairwells often need decorating during evenings or weekends, while individual office spaces can sometimes be painted during working hours with appropriate dust protection and ventilation.',
      },
      {
        type: 'heading',
        content: 'What Extends Commercial Decorating Timelines',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Several factors can significantly extend commercial decorating projects beyond baseline estimates. Knowing these helps with realistic planning.',
      },
      {
        type: 'list',
        content: [
          'Extensive preparation work: Commercial properties with years of wear, damaged plasterwork, or previous poor decorating require substantial preparation. What appears a straightforward repaint can double in timeline once walls need filling, sanding, and stabilising.',
          'Heritage and listed building constraints: Exeter has 994 listed buildings including many in commercial use around the Cathedral Quarter, Southernhay, and Topsham. Listed Building Consent can add four to eight weeks before work begins, and approved paint specifications may require specialist products with longer application times.',
          'Discovery of underlying issues: Once decorating begins, hidden problems like damp, failing plaster, or structural issues may emerge. Addressing these properly extends timelines but prevents future problems. Victorian and Edwardian commercial buildings around St David\'s Station commonly reveal such issues.',
          'Specification changes: Client requests to change colours, finishes, or scope mid-project inevitably extend timelines. Clear specifications agreed before work starts prevent delays.',
          'Weather delays for exterior work: Exeter\'s coastal climate affects exterior commercial painting. Rain, high humidity, or cold temperatures prevent proper paint adhesion and drying. Winter exterior projects routinely face weather delays.',
          'Access coordination in mixed-use buildings: Buildings with residential flats above commercial premises, common throughout central Exeter, require coordinating with residents, building managers, and sometimes multiple commercial tenants, adding scheduling complexity.',
        ],
      },
      {
        type: 'heading',
        content: 'How to Minimise Disruption During Commercial Repainting',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Strategic planning significantly reduces business disruption during commercial decorating projects.',
      },
      {
        type: 'subheading',
        content: 'Schedule Around Quiet Periods',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Most Exeter businesses have quieter trading periods ideal for decorating work. Retail businesses often schedule major work in January or February after Christmas trading. Hospitality venues use quieter winter months. Professional offices schedule work during August or the Christmas break when many staff take leave.',
      },
      {
        type: 'paragraph',
        content: 'For businesses serving the university, align decorating with academic holidays when student footfall drops. Properties near the University of Exeter or Streatham Campus benefit from scheduling work during university holidays.',
      },
      {
        type: 'subheading',
        content: 'Use Phased Approaches',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Rather than closing entirely, many businesses prefer phased decorating where different areas are completed sequentially. A Fore Street shop might have the ground floor decorated one week and upper floors the following week, maintaining some trading throughout.',
      },
      {
        type: 'paragraph',
        content: 'Offices can often remain operational by decorating one floor or zone at a time, with staff temporarily relocating to other areas. This extends calendar timelines but maintains business continuity.',
      },
      {
        type: 'subheading',
        content: 'Choose Low-Odour, Fast-Drying Paint Systems',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Modern low-VOC and odour-free paint systems allow businesses to continue operating during decorating work. Water-based systems dry faster than traditional oil-based paints, reducing the time each area remains out of use. This proves particularly important for hospitality venues and healthcare facilities where strong paint odours affect customers and patients.',
      },
      {
        type: 'subheading',
        content: 'Plan Comprehensive Preparation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Thorough preparation before painting begins minimises later delays. Professional commercial decorators conduct detailed surveys, identify potential issues, and plan comprehensive preparation schedules. Spending an extra day on preparation often saves three days during painting by ensuring smooth surfaces and good adhesion.',
      },
      {
        type: 'heading',
        content: 'Planning Permissions and Conservation Area Considerations',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Many commercial properties in Exeter face additional planning requirements that affect timelines significantly.',
      },
      {
        type: 'paragraph',
        content: 'Exeter has 20 conservation areas including the Cathedral Quarter, St Leonard\'s, Topsham, and Southernhay. External changes to commercial buildings in conservation areas often require planning permission or Listed Building Consent, even for repainting if colours change significantly from existing schemes.',
      },
      {
        type: 'paragraph',
        content: 'Applications typically take eight to twelve weeks for determination. For listed commercial buildings, applications require heritage statements and sometimes specialist paint analysis to determine historically appropriate colour schemes. A Topsham waterfront commercial property owner was fined £38,000 in December 2025 for unauthorised alterations to a listed building, demonstrating that [proper consent is essential](/blog/conservation-area-painting-rules-devon-planning-permission).',
      },
      {
        type: 'paragraph',
        content: 'Professional commercial decorators familiar with [Exeter heritage properties](/areas/exeter/heritage-property-painting) can advise on consent requirements and liaise with conservation officers, but business owners should factor consent timelines into project planning from the outset.',
      },
      {
        type: 'heading',
        content: 'Cost Implications of Timeline Choices',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Timeline decisions directly affect commercial decorating costs. Evening and weekend work typically incurs 25 to 50 percent premium rates compared to standard hours. Rushed projects requiring additional decorators to compress timelines increase costs further.',
      },
      {
        type: 'paragraph',
        content: 'However, extended business closures cost money too. A High Street retail unit losing £2,000 daily revenue during closure often finds that paying premium rates for concentrated out-of-hours work costs less overall than extended closure during trading hours.',
      },
      {
        type: 'paragraph',
        content: 'Phased approaches spread costs across longer periods, helping businesses manage cash flow while avoiding revenue loss from complete closure.',
      },
      {
        type: 'heading',
        content: 'Working With Professional Commercial Decorators',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Experienced commercial decorators understand business needs and plan projects accordingly. Key questions to ask when obtaining quotes include:',
      },
      {
        type: 'list',
        content: [
          'Can you provide a detailed timeline showing preparation, painting, and drying time for each area?',
          'What scheduling flexibility do you offer for out-of-hours work?',
          'How will you minimise disruption to our business operations?',
          'What health and safety procedures and insurance coverage do you have?',
          'Can you provide references from similar commercial projects in Exeter?',
          'How do you handle unexpected delays or issues discovered during work?',
          'What guarantees or warranties cover the completed work?',
        ],
      },
      {
        type: 'paragraph',
        content: 'Professional decorators provide written project programmes, maintain clear communication throughout, and adapt to business needs. They understand that commercial clients prioritise reliability, minimal disruption, and completion to agreed timelines above all else.',
      },
      {
        type: 'heading',
        content: 'Planning Your Commercial Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Successful commercial decorating projects start with realistic timeline planning. For most Exeter commercial properties, the planning process should begin three to six months before desired completion dates, particularly for work requiring planning consents or scheduled during busy trading periods.',
      },
      {
        type: 'paragraph',
        content: 'Start by identifying your quietest trading period, considering seasonal business patterns, staff holiday periods, and upcoming events that might be disrupted by decorating work. Obtain detailed quotes from professional commercial decorators who understand business constraints and can provide comprehensive project timelines.',
      },
      {
        type: 'paragraph',
        content: 'For heritage commercial properties in Exeter\'s conservation areas, consult with experienced decorators early to understand consent requirements and add appropriate lead time for applications. The investment in proper planning prevents rushed projects, unexpected costs, and extended business disruption.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning commercial decorating for your Exeter business? BSR Decorating has over 20 years\' experience with offices, shops, and hospitality venues across Exeter, Topsham, and surrounding areas. We specialise in minimising disruption, working around your business needs, and delivering projects on time. Contact us for a free consultation and detailed project timeline tailored to your business.',
      },
    ],
  },
  'interior-decorating-exeter-room-by-room-planning': {
    sections: [
      {
        type: 'paragraph',
        content: 'Interior decorating in Exeter requires a thoughtful approach that respects the character of your home whilst creating spaces that work for modern living. Whether you own a Victorian terrace in St Leonard\'s, a Georgian property in Southernhay, or a contemporary home in one of Exeter\'s newer developments, each room presents unique opportunities and challenges. With over 994 listed buildings across the city and 20 conservation areas, Exeter\'s housing stock is wonderfully diverse, and understanding how to approach each space makes all the difference to the final result.',
      },
      {
        type: 'paragraph',
        content: 'After more than 20 years decorating homes throughout Exeter, we\'ve learned that successful interior projects begin with proper planning. The homes we work on range from £285,000 properties in Heavitree to £700,000 period houses in Pennsylvania, and whilst budgets vary, the principles of good planning remain constant. This guide walks you through room-by-room considerations to help you make informed decisions about your interior decorating project.',
      },
      {
        type: 'heading',
        content: 'Understanding Your Exeter Home\'s Character',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before planning individual rooms, it\'s essential to understand your property\'s architectural character. Exeter\'s housing stock includes everything from medieval buildings in the Cathedral Quarter to brand new homes in Cranbrook. Each era brings different features that influence decorating decisions.',
      },
      {
        type: 'paragraph',
        content: 'Period properties, particularly common in areas like St Leonard\'s with its 120 listed buildings, often feature high ceilings, ornate cornicing, picture rails, and sash windows. These architectural details deserve careful consideration during decorating. Modern homes in developments like those appearing through the Liveable Exeter programme typically have lower ceilings, larger windows, and open-plan layouts that require different approaches.',
      },
      {
        type: 'paragraph',
        content: 'The age and construction of your home also affects paint selection. Older properties built with lime mortar need [breathable paints](/blog/breathable-paint-old-houses-complete-guide) to allow moisture movement, whilst newer homes can accommodate modern acrylic systems. Understanding these fundamentals prevents costly mistakes and ensures lasting results.',
      },
      {
        type: 'heading',
        content: 'Living Rooms: Creating the Heart of Your Home',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The living room sets the tone for your entire home and typically receives the most attention from visitors. In Exeter, living room decorating costs average £674, though this varies significantly based on room size, ceiling height, and the condition of existing surfaces.',
      },
      {
        type: 'subheading',
        content: 'Period Property Living Rooms',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Victorian and Edwardian living rooms in areas like Newtown and Mount Pleasant often feature beautiful original details. Picture rails, ceiling roses, and deep skirting boards all deserve highlighting rather than disguising. Consider using slightly different tones to pick out these features, a technique that was historically common and adds depth to the space.',
      },
      {
        type: 'paragraph',
        content: 'High ceilings in period properties can make rooms feel grand but sometimes cold. Warmer paint colours on walls, combined with a lighter ceiling, help balance the proportions. If your Victorian home has original floorboards, consider how wall colours will work with exposed wood or rugs rather than fitted carpets.',
      },
      {
        type: 'subheading',
        content: 'Modern Home Living Rooms',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Contemporary Exeter homes, particularly those in newer developments around Monkerton or the expanding Cranbrook area, often feature open-plan living spaces. These require careful colour planning to define different zones without using walls. Slightly different tones or an accent wall can delineate the living area from dining or kitchen spaces.',
      },
      {
        type: 'paragraph',
        content: 'Lower ceilings in modern homes benefit from lighter colours that reflect natural light. Matt finishes work well on walls, whilst woodwork in eggshell or satin provides subtle contrast without overwhelming the space.',
      },
      {
        type: 'heading',
        content: 'Kitchens: Balancing Practicality and Style',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen decorating in Exeter involves more than just wall colour. Cabinet painting and [kitchen spraying](/areas/exeter/kitchen-spraying) has become increasingly popular as homeowners choose to refresh rather than replace, with full kitchen spraying typically costing around £750 compared to £15,000-25,000 for replacement.',
      },
      {
        type: 'paragraph',
        content: 'Wall preparation is crucial in kitchens. Cooking generates moisture and grease that affect paint adhesion. Proper surface preparation, including degreasing and appropriate primers, ensures paint lasts. Wipeable finishes like eggshell or satin are more practical than matt in kitchens, particularly behind hobs and food preparation areas.',
      },
      {
        type: 'paragraph',
        content: 'Period kitchens often occupy what were originally separate sculleries or back rooms. These spaces might have lower ceilings or less natural light than other rooms. Lighter colours maximise available light, whilst quality paint helps resist the inevitable wear that kitchens endure. The average cost to paint a kitchen, including walls and ceilings but excluding cabinets, is £364 in Exeter.',
      },
      {
        type: 'heading',
        content: 'Bedrooms: Creating Restful Spaces',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Bedroom decorating focuses on creating calm, restful environments. Average costs for painting a bedroom in Exeter run around £498, though this varies with room size and ceiling height common in different property types.',
      },
      {
        type: 'paragraph',
        content: 'Colour psychology matters more in bedrooms than anywhere else. Cooler tones, soft greys, and muted blues generally promote better sleep than vibrant or warm colours. That said, personal preference trumps general guidance, it\'s your space and should reflect what makes you comfortable.',
      },
      {
        type: 'paragraph',
        content: 'Period bedrooms, particularly in Victorian properties around Pennsylvania or Heavitree, often feature original fireplaces even if they\'re no longer functional. These make natural focal points and deserve consideration in your colour scheme. Highlighting the surround in a contrasting tone can add character without dominating the room.',
      },
      {
        type: 'paragraph',
        content: 'Modern bedrooms in newer Exeter developments typically have built-in wardrobes that affect wall space. Consider whether these should blend with walls or provide contrast. Built-in furniture painted to match walls can make rooms feel larger, whilst contrasting colours define the furniture as a feature.',
      },
      {
        type: 'heading',
        content: 'Hallways, Stairs, and Landings: Connecting Your Spaces',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Hall, stairs, and landing decorating costs average £814 in Exeter, making it one of the more significant interior projects. These transitional spaces connect your home and deserve careful attention despite not being rooms where you spend much time.',
      },
      {
        type: 'paragraph',
        content: 'Hallways in period properties are often narrow with limited natural light. This presents a decorating challenge, dark colours can feel oppressive, but very light colours may show marks quickly in these high-traffic areas. Mid-tones in wipeable finishes offer a practical compromise.',
      },
      {
        type: 'paragraph',
        content: 'Stairs present particular challenges. In two-storey Victorian terraces common throughout Exeter, stairwells often feature the tallest walls in the house. Decorating these requires proper equipment and expertise. The height makes preparation difficult, and poor brushwork shows clearly. Many homeowners find that bringing in [professional interior decorators](/areas/exeter/interior-painting) for stairwells makes sense even if they tackle other rooms themselves.',
      },
      {
        type: 'paragraph',
        content: 'Modern homes with open-plan stairs that form part of living spaces need particularly careful colour coordination. The stairs become a visual feature rather than a separate utility space, so colour choices should complement adjacent rooms.',
      },
      {
        type: 'heading',
        content: 'Bathrooms: Managing Moisture and Ventilation',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Bathroom decorating involves specific challenges around moisture and ventilation. Average costs for painting a bathroom in Exeter run around £332, though period bathrooms with higher ceilings and more decorative features cost more.',
      },
      {
        type: 'paragraph',
        content: 'Paint selection matters enormously in bathrooms. Modern bathroom paints include fungicides that resist mould growth, essential in Exeter\'s relatively humid climate. Period properties without modern ventilation particularly need these specialist paints.',
      },
      {
        type: 'paragraph',
        content: 'Many Victorian and Edwardian homes in areas like St Leonard\'s have bathrooms created by converting bedrooms or box rooms. These spaces often lack purpose-built ventilation, making paint choice and surface preparation crucial. Properly primed surfaces with quality bathroom paint last significantly longer than standard emulsion.',
      },
      {
        type: 'heading',
        content: 'Planning Across Multiple Rooms: Creating Flow',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Whilst each room has individual requirements, successful interior decorating creates flow throughout your home. This doesn\'t mean every room needs the same colour, but colours should relate to create a cohesive feel as you move through the house.',
      },
      {
        type: 'list',
        content: [
          'Consider sightlines between rooms. What you see through doorways matters. Colours don\'t need to match, but they should complement each other.',
          'Woodwork colour creates continuity. Many Exeter homes use the same woodwork colour throughout, typically white or off-white, which ties spaces together even when wall colours vary.',
          'Natural light changes throughout the day. North-facing rooms in Victorian properties receive cooler light than south-facing rooms, affecting how colours appear.',
          'Architectural features deserve consistency. If you\'re highlighting cornicing in one period room, consider doing the same in others to create rhythm.',
          'Think about furniture and belongings. Colours that look perfect in empty rooms might clash with your furniture, rugs, and artwork.',
        ],
      },
      {
        type: 'heading',
        content: 'Timing Your Interior Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Interior work can happen year-round, unlike exterior painting which depends on weather. However, timing still matters. Many Exeter homeowners schedule interior decorating for autumn and winter when they\'re spending more time indoors anyway and summer holidays are finished.',
      },
      {
        type: 'paragraph',
        content: 'Period properties benefit from decorating during drier months when possible. High humidity affects drying times and can cause problems with traditional materials. Modern homes with better environmental control are less affected by seasonal timing.',
      },
      {
        type: 'paragraph',
        content: 'If you\'re planning multiple rooms, consider the order carefully. Decorating from top to bottom (starting with upper floors) prevents damage to newly decorated spaces below. Similarly, completing halls and stairs last protects them from wear during work on other rooms.',
      },
      {
        type: 'heading',
        content: 'Working with Period Features',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s wealth of period properties means many interior decorating projects involve [working with historical features](/blog/decorating-tips-exeter-period-homes). Original features like cornicing, ceiling roses, picture rails, and panelling add character but require different approaches than flat, modern walls.',
      },
      {
        type: 'paragraph',
        content: 'Preparation takes longer with ornate features. Cornicing and ceiling roses need careful cleaning and repair before painting. Picture rails require steady brushwork or precise cutting in. These details separate adequate decoration from excellent results.',
      },
      {
        type: 'paragraph',
        content: 'In conservation areas or listed buildings, which cover significant portions of central Exeter and all of Topsham\'s historic core, some interior works may require consent. Whilst painting generally doesn\'t, removing or altering original features might. Understanding these requirements before starting prevents complications.',
      },
      {
        type: 'heading',
        content: 'Choosing Between DIY and Professional Decorating',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Some homeowners enjoy decorating and have the skills for excellent results. Others prefer to employ professionals. Understanding which rooms benefit most from professional expertise helps make informed decisions.',
      },
      {
        type: 'paragraph',
        content: 'High, difficult spaces like stairwells almost always benefit from professional work. The equipment needed and the consequences of mistakes make these spaces challenging for DIY. Similarly, period rooms with ornate features show quality of workmanship clearly, making professional results worthwhile.',
      },
      {
        type: 'paragraph',
        content: 'Simple, modern rooms with flat walls and minimal features are most suitable for competent DIY. A spare bedroom in a newer property presents fewer challenges than a Victorian living room with cornicing and picture rails.',
      },
      {
        type: 'paragraph',
        content: 'Many Exeter homeowners take a mixed approach: tackling straightforward rooms themselves whilst employing [experienced interior decorators](/areas/exeter) for challenging spaces. This balances budget considerations with getting professional results where they matter most.',
      },
      {
        type: 'quote',
        content: 'Good interior decorating respects your home\'s character whilst creating spaces that work for how you live today. Whether you own a period property in St Leonard\'s or a modern home in Cranbrook, proper planning ensures results you\'ll enjoy for years.',
      },
      {
        type: 'paragraph',
        content: 'The diversity of Exeter\'s housing stock means no two interior decorating projects are quite the same. Victorian terraces in Heavitree have different requirements than Georgian townhouses in Southernhay or contemporary apartments near the Quay. Understanding your specific property type, its architectural features, and how you use each space creates the foundation for successful decorating that enhances your home and your daily life.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning an interior decorating project in Exeter? BSR Decorating brings over 20 years of experience working with period and modern properties throughout the city. We offer free, no-obligation quotes and can discuss your room-by-room requirements in detail. Contact us today to discuss how we can help transform your Exeter home.',
      },
    ],
  },
  'spring-exterior-painting-exeter-complete-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'As spring arrives in Devon, homeowners across Exeter start thinking about refreshing their properties. After months of winter weather, your exterior paintwork has endured rain, cold temperatures, and coastal winds. Spring offers the perfect window for exterior painting work, combining ideal weather conditions with practical timing for summer enjoyment. Whether you own a Victorian terrace in St Leonard\'s, a riverside property in Topsham, or a modern home in the Liveable Exeter developments, understanding when and how to approach spring exterior painting in Exeter can save you money and ensure results that last for years.',
      },
      {
        type: 'heading',
        content: 'Why Spring is the Best Season for Exterior Painting in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The timing of exterior painting work matters enormously in Devon\'s maritime climate. Spring provides a sweet spot between winter\'s cold, damp conditions and summer\'s intense heat and occasional storms.',
      },
      {
        type: 'subheading',
        content: 'Temperature and Weather Considerations',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional exterior painting requires consistent temperatures between 10 and 25 degrees Celsius for proper paint adhesion and curing. In Exeter, this typically means late March through May offers the most reliable conditions. Morning dew has usually evaporated by mid-morning, and the longer daylight hours allow painters to complete more work safely. Spring rainfall in Devon tends to be lighter and more predictable than autumn\'s heavy downpours, allowing experienced decorators to work around showers rather than facing prolonged delays.',
      },
      {
        type: 'subheading',
        content: 'Booking Ahead for Summer Demand',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Summer represents peak demand for professional decorators across Exeter. By planning your exterior painting for spring, you avoid the 4 to 6 week lead times common in June and July. You also gain the benefit of enjoying your freshly painted home throughout the summer months when you\'re most likely to use garden spaces and entertain outdoors. For the 32,600 owner-occupied homes in Exeter, spring exterior painting means maximum enjoyment of your investment.',
      },
      {
        type: 'heading',
        content: 'Preparing Your Exeter Property for Spring Exterior Painting',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Proper preparation determines the longevity of any exterior painting project. In Exeter\'s climate, with its proximity to the coast and exposure to Devon weather patterns, preparation becomes even more critical.',
      },
      {
        type: 'subheading',
        content: 'Surface Assessment and Repairs',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Before any paint touches your walls, a professional decorator will assess substrate condition. This matters particularly for Exeter\'s older properties. With 994 listed buildings across the city and numerous period homes in areas like Pennsylvania and Heavitree, many Exeter properties have original render, traditional timber work, or historic masonry that requires specialist attention. Spring reveals winter damage clearly. Look for cracked render, loose paint, signs of damp penetration, or timber rot. These issues must be addressed before painting begins, or you\'re simply covering problems that will resurface within months. For guidance on addressing moisture issues before painting, see our [guide to solving damp and paint problems in Exeter homes](/blog/solving-damp-paint-problems-exeter-homes).',
      },
      {
        type: 'subheading',
        content: 'Cleaning and Preparation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s location means properties accumulate salt deposits from coastal air, biological growth from Devon\'s damp climate, and pollution from urban traffic. Professional preparation includes pressure washing to remove dirt, algae, and loose material, followed by treatment of any biological growth. For properties near the Exe Estuary or in Topsham, this step proves particularly important as salt deposits can prevent proper paint adhesion.',
      },
      {
        type: 'list',
        content: [
          'Pressure wash all surfaces to be painted, allowing 48 hours drying time',
          'Scrape away loose or flaking paint back to sound substrate',
          'Fill cracks and gaps with appropriate exterior filler',
          'Sand rough areas and feather edges of existing paint',
          'Apply fungicidal wash to areas with biological growth',
          'Prime bare wood and metal with appropriate undercoats',
        ],
      },
      {
        type: 'heading',
        content: 'Choosing the Right Paint for Devon\'s Coastal Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not all exterior paints perform equally in Exeter\'s environment. The combination of salt air, rainfall, and UV exposure requires paint systems designed for coastal and maritime climates. Our [guide to the best exterior paint for Devon\'s coastal weather](/blog/best-exterior-paint-devon-coastal-weather) explores this in detail, but key considerations include breathability for older properties, weather resistance for exposed locations, and appropriate finish for your property type.',
      },
      {
        type: 'subheading',
        content: 'Masonry Paint for Rendered and Brick Surfaces',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Modern masonry paints offer excellent weather protection for Exeter homes. Quality masonry paint systems typically last 10 to 15 years in Devon\'s climate when properly applied. For the Victorian and Edwardian terraces common in St Leonard\'s and Newtown, breathable masonry paint allows moisture to escape from solid walls whilst providing weather protection. Smooth finishes suit urban properties, whilst textured finishes can hide minor imperfections on older render.',
      },
      {
        type: 'subheading',
        content: 'Timber Paint and Stain Systems',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Timber elements including doors, windows, fascias, and cladding require different paint systems. Modern microporous paints allow timber to breathe whilst preventing water penetration, essential for managing moisture in Devon\'s climate. For period properties in Topsham\'s conservation area or across Exeter\'s 20 conservation areas, [traditional paint systems and conservation requirements](/blog/conservation-area-painting-rules-devon-planning-permission) may be required or preferred. These often involve oil-based primers and undercoats topped with durable gloss or eggshell finishes.',
      },
      {
        type: 'heading',
        content: 'The Professional Exterior Painting Process',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding what professional exterior painting involves helps you appreciate the value of expert work and recognise quality when you see it.',
      },
      {
        type: 'subheading',
        content: 'Access and Safety',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional decorators use appropriate access equipment including scaffold towers, extending ladders, and sometimes full scaffolding for larger properties. This matters particularly for the tall Victorian terraces in areas like Mount Pleasant or the substantial period properties in Pennsylvania. Safe, stable access allows proper preparation and application, particularly at height where shortcuts show most obviously.',
      },
      {
        type: 'subheading',
        content: 'Application Technique',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional application makes the difference between paint that lasts years and paint that fails within seasons. Experienced decorators apply the correct number of coats, typically a primer or stabilising solution, followed by two full coats of finish paint. They work systematically, maintaining wet edges to avoid lap marks, and timing work to avoid rain and extreme temperatures. For larger projects, we use airless spray equipment for walls, followed by careful cutting-in around windows, doors, and details. This combination delivers speed without sacrificing quality.',
      },
      {
        type: 'heading',
        content: 'Special Considerations for Exeter Property Types',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s diverse housing stock means different properties require different approaches to exterior painting.',
      },
      {
        type: 'subheading',
        content: 'Period and Listed Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For the 228 listed buildings in Topsham and the 994 across Exeter, exterior painting often requires conservation area consent or listed building consent. Traditional paint systems, appropriate colours, and breathable paints become essential rather than optional. [Our heritage property painting service](/areas/exeter/heritage-property-painting) specialises in these requirements, ensuring your work complies with [conservation area painting rules](/blog/conservation-area-painting-rules-devon-planning-permission) whilst protecting your property appropriately.',
      },
      {
        type: 'subheading',
        content: 'Modern Homes and New Builds',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The thousands of new homes being built through the Liveable Exeter programme and at Cranbrook present different challenges. New render requires proper curing time before painting, typically 6 to 12 months depending on the render type. Modern materials including uPVC, composite cladding, and render board systems each require specific primers and paint types. Rushing exterior painting on new builds leads to poor adhesion and early failure.',
      },
      {
        type: 'heading',
        content: 'Cost and Investment for Spring Exterior Painting',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Investment in professional exterior painting varies depending on property size, condition, and specification. In Exeter, typical costs for painting a house exterior average around £1,728, though this varies significantly. A small terraced house might cost £1,200 to £1,800, whilst a large detached period property could require £3,000 to £5,000 or more. This investment protects your property value, with median Exeter house prices at £285,000 and significantly higher in areas like Topsham at £506,000. Regular exterior maintenance preserves and enhances this investment.',
      },
      {
        type: 'paragraph',
        content: 'Spring booking can sometimes offer better value than peak summer scheduling, as decorators balance their workload across the season. It also provides time to properly plan the work, select colours, and prepare the property without the pressure of summer deadlines.',
      },
      {
        type: 'heading',
        content: 'Maintaining Your Exterior Paintwork After Spring Application',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Professional exterior painting should last 10 to 15 years in Devon\'s climate, but simple maintenance extends this lifespan further. Annual checks for minor damage, cleaning gutters to prevent overflow staining, removing vegetation growth from walls, and addressing small areas of damage before they spread all contribute to longevity. Properties in exposed coastal locations or those facing prevailing south-westerly weather may need more frequent attention to vulnerable areas like gable ends and exposed elevations.',
      },
      {
        type: 'heading',
        content: 'Get Your Exeter Property Ready for Spring',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Spring exterior painting in Exeter offers the perfect combination of ideal weather conditions, practical timing, and maximum enjoyment of results. Whether you\'re refreshing a Victorian terrace in Heavitree, maintaining a riverside property in Topsham, or protecting a modern home in one of Exeter\'s new developments, professional exterior painting protects your investment and enhances your home\'s appearance.',
      },
      {
        type: 'paragraph',
        content: 'With over 20 years of experience working across Exeter, from listed buildings in conservation areas to modern commercial properties, BSR Decorating understands the specific requirements of Devon\'s climate and Exeter\'s diverse property types. We use breathable, weather-resistant paint systems suited to coastal conditions, and our thorough preparation ensures results that last.',
      },
      {
        type: 'quoteCTA',
        content: 'Ready to transform your Exeter property this spring? Contact BSR Decorating for a free, no-obligation quote. We\'ll assess your property, recommend the right paint systems for your needs, and provide clear pricing for professional exterior painting that protects and enhances your home.',
      },
    ],
  },
  'conservation-area-painting-rules-devon-planning-permission': {
    sections: [
      {
        type: 'paragraph',
        content: 'If you own a property in one of Exeter\'s 20 conservation areas or Topsham\'s historic centre, you might assume that painting your home is a straightforward decision. However, conservation area painting rules can be surprisingly complex, and getting them wrong can result in enforcement action and costly fines. In December 2025, a Topsham property owner was fined £38,000 for unlawful alterations to a listed building, demonstrating just how seriously local authorities take these regulations.',
      },
      {
        type: 'paragraph',
        content: 'The good news is that most routine exterior painting work doesn\'t require planning permission, even in conservation areas. However, there are important exceptions and considerations that every homeowner should understand before picking up a paintbrush or hiring a [professional decorator in Exeter](/areas/exeter).',
      },
      {
        type: 'heading',
        content: 'Understanding Conservation Areas in Devon',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Conservation areas are designated by local planning authorities to protect areas of special architectural or historic interest. Exeter has 20 conservation areas, including well-known neighbourhoods like Topsham, St Leonard\'s, Pennsylvania Park, Baring Crescent, Southernhay, Heavitree, and Alphington. These areas contain some of Devon\'s most beautiful period properties, with Topsham alone housing 228 listed buildings.',
      },
      {
        type: 'paragraph',
        content: 'Conservation area status doesn\'t prevent change, but it does mean that certain alterations require planning permission that wouldn\'t be needed elsewhere. The key principle is preserving the character and appearance of the area, which includes protecting original architectural features and maintaining appropriate colour schemes that complement the historic streetscape.',
      },
      {
        type: 'heading',
        content: 'When You Don\'t Need Planning Permission',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Most external painting and repainting work in conservation areas is considered \'permitted development\' and doesn\'t require planning permission. This includes:',
      },
      {
        type: 'list',
        content: [
          'Repainting rendered or plastered walls in similar colours to the existing finish',
          'Painting or repainting wooden windows, doors, and fascias',
          'Repainting existing railings, gates, and other decorative ironwork',
          'Maintaining existing painted brickwork in similar colours',
          'Routine maintenance painting of any previously painted surface',
        ],
      },
      {
        type: 'paragraph',
        content: 'The crucial word here is \'similar\'. If you\'re repainting your Pennsylvania Park Victorian terrace in a shade close to its existing colour, you\'re generally fine. If you want to change from cream to bright pink, you\'ll need to think more carefully about whether permission is required.',
      },
      {
        type: 'heading',
        content: 'When You Might Need Planning Permission',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Dramatic Colour Changes',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Whilst repainting in similar colours is usually acceptable, dramatic changes that would significantly alter the appearance of a building or the character of the conservation area may require planning permission. This is particularly true for properties that are prominently visible from public viewpoints or that contribute significantly to the streetscape.',
      },
      {
        type: 'paragraph',
        content: 'In Topsham\'s conservation area, for example, where Georgian and Victorian properties create a harmonious palette of subtle colours, painting a previously cream cottage in vibrant contemporary colours could be considered harmful to the area\'s character. The same applies to St Leonard\'s conservation area, where 120 listed buildings set the tone for appropriate colour choices.',
      },
      {
        type: 'subheading',
        content: 'Painting Previously Unpainted Masonry',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'One of the most important conservation area painting rules concerns previously unpainted brickwork or stonework. Painting bare brick or stone for the first time often constitutes a \'material alteration\' to the appearance of the building and typically requires planning permission in a conservation area.',
      },
      {
        type: 'paragraph',
        content: 'This is because original unpainted masonry is considered an important architectural feature. Devon\'s period properties often feature beautiful red sandstone or local stone that contributes significantly to the area\'s character. Once painted, returning masonry to its original condition is extremely difficult and sometimes impossible without causing damage.',
      },
      {
        type: 'subheading',
        content: 'Removing Existing Paint from Historic Masonry',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Paradoxically, removing paint from previously painted historic masonry can also require planning permission if the paint itself has become part of the building\'s historic character. Additionally, inappropriate paint removal methods can cause irreversible damage to soft masonry, which is why planning authorities want to control this work.',
      },
      {
        type: 'heading',
        content: 'Listed Buildings: Stricter Rules Apply',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If your property is one of Exeter\'s 994 listed buildings, you face stricter regulations. Listed building consent is required for any works that affect the character of a listed building, which usually includes external painting if it involves:',
      },
      {
        type: 'list',
        content: [
          'Any colour change to external walls, even subtle ones',
          'Painting previously unpainted surfaces',
          'Changing the finish type (such as from gloss to matt)',
          'Any work affecting original architectural features',
        ],
      },
      {
        type: 'paragraph',
        content: 'The £38,000 fine issued to a Topsham property owner in 2025 demonstrates the serious consequences of carrying out unauthorised works to listed buildings. If you own a [listed or heritage property in Topsham](/areas/topsham) or elsewhere in Exeter, always consult with a specialist before beginning any external decoration project.',
      },
      {
        type: 'heading',
        content: 'Article 4 Directions: Extra Restrictions',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Some conservation areas have Article 4 Directions, which remove certain permitted development rights. These directions can require planning permission for works that would normally be allowed, including some types of painting and decorating.',
      },
      {
        type: 'paragraph',
        content: 'Article 4 Directions vary by location, so it\'s essential to check with Exeter City Council whether your specific property is affected. These restrictions are typically applied to protect particularly sensitive or well-preserved conservation areas where even small changes could cumulatively damage the area\'s special character.',
      },
      {
        type: 'heading',
        content: 'Choosing Appropriate Colours',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Even when planning permission isn\'t legally required, choosing sympathetic colours is important for maintaining good relationships with neighbours and conservation officers. Many conservation areas have published guidance on appropriate colour palettes.',
      },
      {
        type: 'paragraph',
        content: 'For Topsham properties, traditional colours typically include soft creams, subtle greys, warm stone colours, and muted pastels. St Leonard\'s Victorian terraces suit the period\'s characteristic colour schemes, including deep reds, dark greens, and rich browns for woodwork. Our guide to [heritage paint colours for Topsham homes](/blog/heritage-paint-colours-topsham-homes-guide) explores historically appropriate options in detail.',
      },
      {
        type: 'paragraph',
        content: 'Working with a [decorator experienced in heritage properties](/areas/exeter/heritage-property-painting) ensures that colour choices complement both your property and its setting. Professional decorators familiar with Exeter\'s conservation areas understand local expectations and can advise on appropriate schemes that satisfy both your preferences and planning considerations.',
      },
      {
        type: 'heading',
        content: 'The Process: Getting Permission When You Need It',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If your proposed works do require planning permission or listed building consent, the process involves:',
      },
      {
        type: 'list',
        content: [
          'Submitting a formal application to Exeter City Council with detailed proposals including colour samples',
          'Paying the relevant application fee (currently around £206 for householder planning applications)',
          'Waiting for the council\'s decision, typically 8 weeks for planning applications',
          'Implementing the works strictly in accordance with any approved plans and conditions',
        ],
      },
      {
        type: 'paragraph',
        content: 'For minor works where you\'re uncertain whether permission is needed, it\'s often worth requesting pre-application advice from the council\'s conservation officer. This informal service (usually chargeable) can save time and money by clarifying requirements before you commit to a formal application.',
      },
      {
        type: 'heading',
        content: 'Breathable Paints and Technical Considerations',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Conservation area painting rules aren\'t just about colours and permissions. Period properties require appropriate paint systems that allow masonry to breathe and manage moisture correctly. Modern plastic-based paints can trap moisture in old walls, leading to damp problems and deterioration of historic fabric.',
      },
      {
        type: 'paragraph',
        content: 'Traditional lime-based paints, mineral paints, and breathable modern alternatives are usually more suitable for historic buildings. These products may cost more initially but protect your property\'s long-term condition. Properties in Topsham\'s waterfront locations face additional challenges from humidity and salt air, making appropriate paint selection even more critical.',
      },
      {
        type: 'heading',
        content: 'What Happens If You Get It Wrong',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Carrying out unauthorised works in a conservation area or to a listed building can result in enforcement action from the local planning authority. Consequences may include:',
      },
      {
        type: 'list',
        content: [
          'Enforcement notices requiring you to reverse the changes',
          'Fines of up to £20,000 in magistrates\' court or unlimited fines in crown court',
          'Criminal records for serious breaches',
          'Difficulty selling the property due to breach of planning control',
          'Retrospective application costs and potential refusal',
        ],
      },
      {
        type: 'paragraph',
        content: 'The 2025 Topsham case, where a £38,000 fine was issued for unauthorised alterations, serves as a stark reminder that conservation area and listed building rules are rigorously enforced. With property values in Topsham averaging £506,000 and conservation area properties often commanding premium prices, protecting these assets through proper compliance makes financial as well as legal sense.',
      },
      {
        type: 'heading',
        content: 'Practical Steps Before Starting Your Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before beginning any external decorating work on a property in an Exeter conservation area, follow these steps:',
      },
      {
        type: 'list',
        content: [
          'Check whether your property is listed using the Historic England website or Exeter City Council\'s online maps',
          'Review any Article 4 Directions that might apply to your conservation area',
          'If planning major colour changes or painting previously unpainted masonry, contact the council\'s conservation officer for advice',
          'Consider hiring a decorator with specific experience in conservation area and heritage property work',
          'Document the existing condition with photographs before starting work',
          'Keep records of all products used and application methods for future reference',
        ],
      },
      {
        type: 'heading',
        content: 'Working With Heritage Decorating Specialists',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Professional decorators experienced in conservation area and heritage work bring valuable knowledge to your project. They understand local planning expectations, appropriate materials for historic buildings, and techniques that protect period features whilst achieving beautiful results.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve worked extensively with period properties across Exeter\'s conservation areas, from Georgian townhouses in Southernhay to Victorian terraces in St Leonard\'s and waterfront properties in Topsham. Our 20 years of experience includes navigating planning requirements, selecting appropriate paint systems, and delivering finishes that enhance rather than compromise historic character.',
      },
      {
        type: 'paragraph',
        content: 'We can advise on whether your proposed works require permission, suggest historically appropriate colour schemes, and use breathable paint systems designed for period properties. Our understanding of Devon\'s coastal climate ensures that exterior finishes withstand local weather conditions whilst remaining sympathetic to conservation area requirements.',
      },
      {
        type: 'quote',
        content: 'Understanding conservation area painting rules protects both your property investment and Devon\'s architectural heritage. When in doubt, seek professional advice before starting work.',
      },
      {
        type: 'paragraph',
        content: 'Conservation area regulations might seem complex, but they exist to protect the special character that makes neighbourhoods like Topsham, St Leonard\'s, and Pennsylvania Park such desirable places to live. Property values in these areas reflect their protected status, with Topsham properties averaging £506,000 and St Leonard\'s ranging from £350,000 to £700,000.',
      },
      {
        type: 'paragraph',
        content: 'By understanding the rules, choosing appropriate colours and materials, and working with experienced professionals when needed, you can enhance your home whilst respecting its historic context and maintaining compliance with local regulations.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning exterior decoration for your conservation area property? Contact BSR Decorating for expert advice and a free, no-obligation quote. We specialise in heritage properties across Exeter and Topsham, with 20 years of experience in conservation area work.',
      },
    ],
  },
  'heritage-paint-colours-topsham-homes-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'With 228 listed buildings and one of Devon\'s most strictly protected conservation areas, Topsham demands careful consideration when choosing exterior and interior paint colours. Get it wrong, and you could face enforcement action—in December 2025, a Topsham property owner was fined £38,000 for unauthorised alterations to a listed building. Get it right, and you\'ll enhance both your home\'s character and its market value whilst respecting the architectural heritage that makes this historic port town so special.',
      },
      {
        type: 'paragraph',
        content: 'Whether you own a Georgian merchant\'s house along the Strand, a Victorian villa near Monmouth Hill, or a period cottage in one of Topsham\'s narrow lanes, this guide will help you select historically appropriate paint colours that satisfy conservation officers whilst creating a home that feels authentically period yet comfortable for modern living. As specialist [painter and decorators serving Topsham](/areas/topsham), we\'ve worked on dozens of listed and conservation area properties—here\'s what two decades of experience has taught us about getting heritage colours right.',
      },
      {
        type: 'heading',
        content: 'Do You Need Permission to Paint in Topsham?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before selecting colours, understand the rules. If your property is listed (Grade I, II*, or II), you need Listed Building Consent for any external painting that alters the appearance. This includes changing colours on render, woodwork, doors, or windows. Even repainting in a similar colour technically requires consent, though enforcement varies.',
      },
      {
        type: 'paragraph',
        content: 'If you\'re in the Topsham Conservation Area but your building isn\'t listed, you generally don\'t need consent to repaint in similar colours—but you do need planning permission to paint previously unpainted brick or render, or to make dramatic colour changes. East Devon District Council\'s conservation team can advise on your specific property before you commit to colour choices.',
      },
      {
        type: 'paragraph',
        content: 'For listed buildings, we recommend obtaining a schedule of colours approved by your conservation officer before starting work. This protects you legally and ensures your decorator knows exactly what\'s permitted. Our [heritage property painting service in Exeter and Topsham](/areas/exeter/heritage-property-painting) includes guidance on navigating the consent process.',
      },
      {
        type: 'heading',
        content: 'Understanding Topsham\'s Architectural Periods',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s prosperity as a port from the 17th to 19th centuries created distinct architectural styles, each with its own appropriate colour palette. Identifying your property\'s period is the first step to choosing colours that enhance rather than jar with its original character.',
      },
      {
        type: 'subheading',
        content: 'Georgian Topsham (1714-1830)',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The finest Georgian properties line the Strand, Fore Street, and Monmouth Street—elegant townhouses built by wealthy merchants and sea captains. Georgian colour palettes were bolder than many people assume, influenced by archaeological discoveries at Pompeii and the Grand Tour. These weren\'t timid pastels—they were confident, saturated colours that made statements about wealth and taste.',
      },
      {
        type: 'list',
        content: [
          'Exterior render: Warm off-whites, soft ochres, subtle pinks, or pale stone colours—never brilliant white',
          'External woodwork: Deep Prussian blue, dark olive green, chocolate brown, black, or stone colour to match render',
          'Front doors: Traditionally painted to match window frames, not as a contrasting feature',
          'Interior walls: Pea green, salmon pink, primrose yellow, sky blue, grey-green, or warm terracottas',
          'Interior woodwork: Often painted in contrasting darker shades—verdigris green, deep red, or grained to imitate expensive hardwoods',
        ],
      },
      {
        type: 'paragraph',
        content: 'Georgian paint had a distinctive flat, chalky finish created by natural pigments bound with linseed oil. Modern heritage paint ranges from Farrow & Ball (their Georgian palette), Little Greene (Georgian-inspired colours), and Papers and Paints offer authentic period shades with improved durability for our coastal Devon climate.',
      },
      {
        type: 'subheading',
        content: 'Victorian and Edwardian Topsham (1837-1914)',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Victorian builders favoured red brick, decorative tile-hanging, and polychromatic effects. By the late Victorian and Edwardian periods, the Arts and Crafts movement influenced colour choices towards more naturalistic, muted tones. Many of Topsham\'s Victorian villas sit in roads like Higher Shapter Street, Elm Grove Road, and the Strand\'s eastern end.',
      },
      {
        type: 'list',
        content: [
          'Exterior brickwork: Generally left unpainted unless already painted historically',
          'External woodwork: Dark greens, burgundy, chocolate brown, cream, or black—rarely white before 1900',
          'Decorative details: Sometimes picked out in contrasting colours (terracotta, deep red, olive)',
          'Interior halls and stairs: Deep reds, greens, or William Morris-inspired colours',
          'Living rooms: Lighter tones—sage green, soft terracotta, pale olive, dusty pink',
          'Later Edwardian interiors: Softer palette—cream, pale green, soft grey, gentle yellows',
        ],
      },
      {
        type: 'paragraph',
        content: 'Victorian and Edwardian properties often had different colour schemes on each floor, reflecting the transition from formal public spaces (entrance hall, drawing room) to more private family areas upstairs. This creates opportunities for varied colour schemes that feel historically appropriate whilst suiting modern use.',
      },
      {
        type: 'heading',
        content: 'Heritage Paint Colours That Work in Topsham\'s Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s location on the Exe estuary means your paint faces salt-laden winds, high humidity, and driving rain. Not all heritage colours withstand these conditions equally well. After painting dozens of [waterfront properties in Topsham](/blog/topsham-waterfront-homes-best-paints), here\'s what we\'ve learned about which period colours perform best.',
      },
      {
        type: 'subheading',
        content: 'Best Exterior Heritage Colours for Topsham',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Stone colours and warm off-whites: Farrow & Ball\'s \'Pointing\', \'String\', or \'Old White\' age beautifully in Topsham\'s climate',
          'Soft ochres and pinks: Little Greene\'s \'Portland Stone\' or \'Clay\' suit Georgian render and weather well',
          'Dark greens for woodwork: \'Invisible Green\' (Little Greene) or \'Studio Green\' (Farrow & Ball) resist fading better than blues',
          'Black for period windows: Never goes out of style and maintains crisp edges in salt air',
          'Traditional greys: Papers and Paints\' \'Lamp Black\' or Farrow & Ball\'s \'Down Pipe\' suit both Georgian and Victorian properties',
        ],
      },
      {
        type: 'paragraph',
        content: 'Avoid brilliant whites on Georgian properties—they\'re historically incorrect and show every speck of dirt in our coastal environment. Equally, very pale blues and lilacs fade quickly in strong sunlight and salt air. Choosing colours with good pigment density from heritage paint specialists ensures longevity.',
      },
      {
        type: 'subheading',
        content: 'Interior Heritage Colours for Modern Living',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Interior heritage colours need to work harder in modern homes—we live differently to our Georgian and Victorian predecessors. Open-plan living, modern lighting, and contemporary furniture all influence how period colours perform. Here\'s how to adapt historical palettes for 2026 living.',
      },
      {
        type: 'list',
        content: [
          'Use darker heritage colours on feature walls rather than entire rooms—it prevents period schemes feeling oppressive',
          'Pair bold Georgian colours (deep greens, terracottas) with warm off-white on ceilings and woodwork for balance',
          'In south-facing rooms with strong light, richer colours work beautifully—try \'Eating Room Red\' or \'Churlish Green\' from Farrow & Ball',
          'North-facing rooms need warmer undertones—avoid grey-based heritage colours that can feel cold',
          'Kitchens and bathrooms suit softer Victorian colours like sage green or pale olive rather than bold Georgian schemes',
          'Use one period colour palette throughout connected spaces for visual flow in modern open-plan areas',
        ],
      },
      {
        type: 'paragraph',
        content: 'Remember that Georgian and Victorian homes originally had much smaller windows and relied on candlelight or gas lamps—colours that looked warm and rich in soft light can appear quite different under modern LED bulbs. Always test sample pots in your actual rooms before committing.',
      },
      {
        type: 'heading',
        content: 'Recommended Heritage Paint Ranges for Topsham Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not all \'heritage\' paints are equal. Based on two decades painting period properties in Topsham and across East Devon, these are the ranges we trust for authentic colours, appropriate finish, and durability in our coastal climate.',
      },
      {
        type: 'subheading',
        content: 'Farrow & Ball',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Their Traditional Neutrals and Archive collection offer extensively researched period colours. The estate emulsion has a chalky, flat finish perfect for Georgian interiors, while their Modern Emulsion works better for high-traffic areas. Exterior Eggshell and Estate Eggshell for woodwork both perform excellently in Topsham\'s climate. Premium price but exceptional colour depth and coverage.',
      },
      {
        type: 'subheading',
        content: 'Little Greene',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The Colours of England collection includes beautifully researched Georgian, Victorian and Arts and Crafts palettes. Particularly good for less common period colours like soft pinks, warm greys, and muted greens. Their Intelligent Eggshell is hardwearing for woodwork. Generally slightly more affordable than Farrow & Ball whilst maintaining quality.',
      },
      {
        type: 'subheading',
        content: 'Papers and Paints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Specialists in historic paint colours with an impressive archive. Excellent for very specific period matching when working with conservation officers on listed buildings. They can match surviving paint layers from your property for absolute authenticity. More expensive and less readily available but unmatched for serious restoration.',
      },
      {
        type: 'subheading',
        content: 'Traditional Paint (Holkham Collection)',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'An increasingly popular range offering authentic period colours at more accessible prices. Their breathable distemper and limewash options suit solid-walled period properties where breathability matters. Good middle-ground between premium and budget heritage paints.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning to redecorate your Topsham period property? We offer specialist heritage painting services with full understanding of conservation requirements. Get a free quote today.',
      },
      {
        type: 'heading',
        content: 'Common Mistakes to Avoid with Heritage Colours',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'After two decades painting listed buildings and properties in conservation areas around Topsham and Exeter, we\'ve seen these mistakes repeatedly. Avoid them and your heritage colour scheme will succeed.',
      },
      {
        type: 'list',
        content: [
          'Painting Georgian windows white: Historically incorrect and draws conservation officer attention—use black, dark green, or stone colour instead',
          'Using modern brilliant white anywhere on Georgian properties: It didn\'t exist before the 1920s and looks jarringly wrong',
          'Matching paint colours to phone photos or screens: Heritage colours shift dramatically in different lights—always use physical samples',
          'Painting previously unpainted brick: This requires planning permission in conservation areas and is usually refused',
          'Choosing colours room-by-room without considering flow: Period homes often had cohesive schemes throughout each floor',
          'Using modern vinyl silk in period interiors: The shiny finish is historically inappropriate—use estate or modern emulsion instead',
          'Forgetting about breathability: Many Topsham properties have solid cob or stone walls requiring breathable paints, not modern acrylics',
          'Copying heritage colours from other regions: Scottish or Cotswold colours often look wrong in Devon\'s softer, warmer light',
        ],
      },
      {
        type: 'heading',
        content: 'Getting Professional Heritage Painting in Topsham',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Choosing appropriate heritage colours is only half the challenge—applying them correctly matters just as much. Period properties require [specialist painting techniques](/blog/decorating-tips-exeter-period-homes) that differ significantly from decorating modern homes. Original lath-and-plaster walls, single-glazed sash windows, solid walls without damp-proof courses, and historic woodwork all need careful preparation and suitable primers.',
      },
      {
        type: 'paragraph',
        content: 'We\'ve worked on dozens of listed buildings and conservation area properties across Topsham, from Georgian townhouses on the Strand to Victorian villas in Higher Shapter Street. Our approach always starts with understanding your property\'s age, construction, and any conservation restrictions before recommending colours and paint systems. We can liaise with conservation officers, prepare Listed Building Consent applications, and ensure all work meets both heritage requirements and modern durability standards.',
      },
      {
        type: 'paragraph',
        content: 'For properties facing the estuary or in exposed locations, we also provide specialist advice on [protecting period paintwork from Topsham\'s challenging climate](/blog/topsham-waterfront-homes-best-paints)—salt air, driving rain, and high humidity all require specific preparation and paint specification to ensure your heritage colour scheme lasts.',
      },
      {
        type: 'paragraph',
        content: 'Based in nearby Dawlish and working throughout East Devon, we understand the specific challenges of decorating historic properties in this part of the county. Whether you\'re planning [interior decorating in Exeter](/areas/exeter/interior-painting) or exterior work on a Topsham period home, we\'d be happy to discuss your project and recommend appropriate heritage colours that respect your property\'s character whilst meeting your practical needs.',
      },
      {
        type: 'paragraph',
        content: 'Contact BSR Decorating today for specialist advice on heritage paint colours and professional period property decorating throughout Topsham and the surrounding area. We\'ll help you choose colours that satisfy conservation requirements, enhance your home\'s character, and stand up to Devon\'s coastal weather for years to come.',
      },
    ],
  },
  'preparing-devon-home-winter-maintenance-checklist': {
    sections: [
      {
        type: 'paragraph',
        content: 'Winter in Devon brings its own unique challenges for property owners. With average rainfall exceeding 900mm annually in Exeter and exposure to Atlantic weather systems, our homes face constant assault from wind-driven rain, temperature fluctuations, and high humidity. Whether you own a Victorian terrace in St Leonard\'s, a riverside property in Topsham, or a modern family home in Pennsylvania, proper winter property maintenance in Devon is essential to protect your investment and avoid costly repairs.',
      },
      {
        type: 'paragraph',
        content: 'After more than 20 years decorating homes across Exeter, Topsham, and the surrounding areas, we\'ve seen firsthand what happens when winter maintenance is neglected. A small issue in November becomes a major problem by March. This comprehensive guide covers everything Devon homeowners need to know about preparing their properties for winter, with specific advice for our region\'s unique coastal climate and the 994 listed buildings scattered across Exeter\'s conservation areas.',
      },
      {
        type: 'heading',
        content: 'External Paintwork and Weatherproofing',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Your home\'s external paintwork is the first line of defence against Devon\'s winter weather. Paint isn\'t just decorative—it\'s a protective barrier that prevents moisture penetration, timber rot, and structural damage.',
      },
      {
        type: 'subheading',
        content: 'Inspect Before the First Frost',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'October and early November offer the last practical window for [exterior painting work](/areas/exeter/exterior-painting) before winter sets in. Walk around your property and check for these warning signs:',
      },
      {
        type: 'list',
        content: [
          'Flaking or peeling paint on window frames, doors, or fascias',
          'Bare timber exposed to the elements',
          'Cracking or blistering on rendered surfaces',
          'Discolouration indicating water ingress',
          'Failed sealant around windows and door frames',
        ],
      },
      {
        type: 'paragraph',
        content: 'In Topsham\'s waterfront properties along the Exe estuary, salt air accelerates paint degradation. Properties in exposed locations like Exwick or the hills around Pennsylvania face additional challenges from wind-driven rain. Even minor paint failures can allow water to penetrate timber substrates, leading to rot that\'s expensive to repair.',
      },
      {
        type: 'subheading',
        content: 'Emergency Repairs vs Full Repainting',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'If you discover significant paint failures in late autumn, you face a decision. Full exterior repainting typically requires temperatures above 10°C and dry conditions for several consecutive days—increasingly difficult to guarantee after November in Devon. However, targeted repairs can protect vulnerable areas through winter.',
      },
      {
        type: 'paragraph',
        content: 'Professional decorators can apply spot treatments to bare timber, reglaze failed putty, and apply emergency weatherproofing to see your property safely through to spring. The average cost to paint a house exterior in Exeter is around £1,728, but winter preparation work typically costs £300-600 depending on the extent of repairs needed.',
      },
      {
        type: 'heading',
        content: 'Guttering, Drainage and Water Management',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s winter rainfall puts enormous pressure on guttering and drainage systems. A blocked gutter doesn\'t just overflow—it directs thousands of litres of water exactly where you don\'t want it: down your walls, into foundations, and through vulnerable points in your property\'s envelope.',
      },
      {
        type: 'subheading',
        content: 'The Autumn Gutter Clear',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Clear gutters before leaf fall is complete, typically late October or early November. In areas like Heavitree with mature tree cover, or along Topsham\'s leafy residential streets, this is absolutely critical. Remove all debris from gutters and downpipes, and flush with water to check for blockages and leaks.',
      },
      {
        type: 'paragraph',
        content: 'Pay particular attention to valley gutters on Victorian and Edwardian properties—these hidden gutters between roof slopes are notorious failure points. Many of Exeter\'s 120 listed buildings in the Newtown and St Leonard\'s conservation area have original valley gutters that require specialist maintenance.',
      },
      {
        type: 'subheading',
        content: 'Check External Ground Drainage',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Ensure ground-level drains are clear of leaves and debris',
          'Check that downpipes discharge into proper drainage, not directly against walls',
          'Verify that garden drainage slopes away from the property',
          'Look for standing water near foundations after heavy rain',
        ],
      },
      {
        type: 'paragraph',
        content: 'Properties in Alphington and parts of Topsham with high water tables are particularly vulnerable to drainage issues. Poor drainage combined with Devon\'s clay soils can lead to subsidence issues that manifest as cracking in interior walls and ceilings.',
      },
      {
        type: 'heading',
        content: 'Interior Preparation and Damp Prevention',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Winter property maintenance in Devon isn\'t just about external work. The combination of cold weather and high humidity creates perfect conditions for condensation, mould, and internal damp issues.',
      },
      {
        type: 'subheading',
        content: 'Improve Ventilation Before Winter',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Modern double glazing and improved insulation make homes more energy-efficient but can trap moisture if ventilation is inadequate. This is particularly problematic in period properties where traditional lime plaster and breathable walls have been covered with modern materials.',
      },
      {
        type: 'paragraph',
        content: 'If you\'ve noticed condensation on windows, musty smells, or mould spots in previous winters, address ventilation before temperatures drop. Trickle vents in windows should be kept open, extractor fans should be functioning properly, and loft spaces need adequate ventilation to prevent condensation in roof spaces.',
      },
      {
        type: 'subheading',
        content: 'Check for Existing Damp Issues',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Inspect your home for signs of damp that will worsen over winter. Common indicators include discoloured patches on walls or ceilings, peeling wallpaper, tide marks at skirting level, or a persistent musty smell. Our guide to [solving damp and paint problems in Exeter homes](/blog/solving-damp-paint-problems-exeter-homes) covers the main causes and solutions in detail.',
      },
      {
        type: 'paragraph',
        content: 'Rising damp is particularly common in older properties throughout Exeter\'s conservation areas. Many Victorian terraces in Heavitree and Newtown were built without damp-proof courses, relying instead on lime plaster and adequate ventilation. When these properties are renovated with impermeable modern materials, damp becomes trapped.',
      },
      {
        type: 'heading',
        content: 'Windows, Doors and Draughtproofing',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Gaps around windows and doors account for significant heat loss and can allow wind-driven rain to penetrate your property during winter storms.',
      },
      {
        type: 'subheading',
        content: 'Inspect and Repair Window Putty',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Traditional sash windows in period properties use linseed oil putty to seal glass panes. This putty hardens and shrinks over time, creating gaps that allow water penetration and draughts. Failed putty is one of the most common issues we encounter when working on Exeter\'s listed buildings.',
      },
      {
        type: 'paragraph',
        content: 'Replacing window putty is skilled work, particularly in conservation areas where planning restrictions apply. The glazing compound must be properly primed and painted to create a weather-resistant seal. This is essential winter property maintenance in Devon for any home with traditional windows.',
      },
      {
        type: 'subheading',
        content: 'Check Door Seals and Thresholds',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Replace worn brush strips and rubber seals around external doors',
          'Check that door thresholds create a weathertight seal when closed',
          'Inspect the bottom rail of external doors for rot or paint failure',
          'Ensure letterboxes have functioning internal draught excluders',
        ],
      },
      {
        type: 'paragraph',
        content: 'The average cost to paint a front door in Exeter is £123—a worthwhile investment if the existing finish is failing. A properly painted and sealed external door will last 5-7 years in Devon\'s climate when high-quality exterior paint systems are used.',
      },
      {
        type: 'heading',
        content: 'Heating System and Interior Environment',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'A well-maintained heating system isn\'t just about comfort—it\'s essential for preventing damp and protecting your decorative finishes through winter.',
      },
      {
        type: 'subheading',
        content: 'Service Your Boiler Before Winter Demand',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Book boiler servicing in September or October before heating engineers become fully booked. A serviced boiler runs more efficiently, reducing heating costs and ensuring consistent interior temperatures that prevent condensation.',
      },
      {
        type: 'paragraph',
        content: 'Maintain interior temperatures above 15°C throughout winter, even when the property is unoccupied. This is particularly important for landlords with rental properties in Exeter\'s student areas or for second homes in coastal locations. Low temperatures combined with poor ventilation create ideal conditions for mould growth that can damage recently decorated interiors.',
      },
      {
        type: 'subheading',
        content: 'Protect Recently Decorated Rooms',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'If you\'ve had [interior decorating work](/areas/exeter/interior-painting) completed during autumn, take extra care through the first winter. Newly applied paint and wallpaper need time to fully cure and can be vulnerable to moisture damage.',
      },
      {
        type: 'list',
        content: [
          'Maintain consistent heating in decorated rooms',
          'Ensure adequate ventilation to allow moisture to escape',
          'Avoid drying washing on radiators in recently decorated rooms',
          'Wipe down any condensation from windows promptly',
        ],
      },
      {
        type: 'heading',
        content: 'Special Considerations for Period Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s 994 listed buildings and properties within 20 conservation areas require specialised winter maintenance approaches. Traditional construction methods rely on breathability—the ability of walls, lime plaster, and lime mortar to absorb and release moisture naturally.',
      },
      {
        type: 'paragraph',
        content: 'Modern interventions like cement repointing, impermeable renders, or vinyl paints can trap moisture within historic fabric, causing accelerated decay that\'s often invisible until major damage has occurred. If you own a period property in areas like Topsham (228 listed buildings), St David\'s (380 listed buildings), or the Pennsylvania conservation area, specialist advice is essential.',
      },
      {
        type: 'paragraph',
        content: 'Our experience with [heritage property decoration in Topsham](/blog/heritage-property-restoration-topsham) and across Exeter\'s conservation areas demonstrates the importance of using appropriate materials. Lime-based paints, breathable masonry treatments, and traditional linseed oil paint systems may cost more initially but provide long-term protection that modern alternatives cannot match.',
      },
      {
        type: 'heading',
        content: 'Emergency Preparedness',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon winter storms can cause sudden damage requiring immediate attention. Keep contact details for emergency tradespeople readily available, including a trusted decorator who can provide emergency weatherproofing.',
      },
      {
        type: 'paragraph',
        content: 'Take photos of your property\'s exterior before winter. If storm damage occurs, these provide valuable documentation for insurance claims. Pay particular attention to areas that could become vulnerable—loose roof tiles, damaged flashing, or compromised chimney stacks.',
      },
      {
        type: 'paragraph',
        content: 'Properties in exposed locations like coastal areas around Dawlish, hilltop locations in Pennsylvania, or the Exe estuary in Topsham face higher risks from winter storms. Additional precautions may include securing garden furniture, checking that all external fixtures are properly secured, and ensuring that insurance covers storm damage.',
      },
      {
        type: 'heading',
        content: 'Professional Winter Property Maintenance in Devon',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'While many winter preparation tasks are within the scope of competent homeowners, some require professional expertise. External painting in challenging weather conditions, work at height, or repairs to listed buildings all benefit from experienced contractors who understand Devon\'s specific challenges.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve spent over 20 years helping Devon homeowners protect their properties through winter. We understand which repairs are urgent, which can wait until spring, and how to balance immediate protection with long-term preservation—particularly for the period properties and listed buildings that give areas like Topsham, St Leonard\'s, and Pennsylvania their distinctive character.',
      },
      {
        type: 'paragraph',
        content: 'Early assessment is key. If you\'re concerned about your property\'s readiness for winter, a professional inspection in October or early November allows time to complete necessary work before weather conditions deteriorate. What might seem like a minor issue—a small area of failed paint, a blocked gutter, or inadequate ventilation—can develop into serious problems when subjected to months of Devon winter weather.',
      },
      {
        type: 'quote',
        content: 'Proper winter property maintenance in Devon isn\'t an expense—it\'s an investment in protecting your home from our region\'s challenging climate. A few hundred pounds spent on preparation can prevent thousands in emergency repairs.',
      },
      {
        type: 'paragraph',
        content: 'Don\'t wait until the first winter storm exposes vulnerabilities in your property\'s defences. Whether you need emergency weatherproofing, comprehensive external painting, or specialist advice for a period property in one of Exeter\'s conservation areas, professional help is available.',
      },
      {
        type: 'quoteCTA',
        content: 'Concerned about your property\'s winter readiness? Contact BSR Decorating for a free, no-obligation assessment. With over 20 years\' experience across Exeter, Topsham, and Devon\'s coastal areas, we\'ll identify any vulnerabilities and recommend practical solutions to protect your home through winter and beyond.',
      },
    ],
  },
  'breathable-paint-old-houses-complete-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Walk down any street in Topsham\'s conservation area or through St Leonard\'s in Exeter, and you\'ll see hundreds of period properties with one thing in common: walls that were built to breathe. Yet thousands of these historic homes across Devon are suffocating under layers of modern plastic paint, trapping moisture and causing damage that costs homeowners thousands to repair.',
      },
      {
        type: 'paragraph',
        content: 'With 994 listed buildings in Exeter alone and 228 in Topsham, understanding breathable paint isn\'t optional for period property owners—it\'s essential. After more than 20 years decorating heritage properties across Devon, we\'ve seen countless examples where the wrong paint choice has led to damp problems, blown plaster, and peeling paint within months. This guide explains everything you need to know about breathable paint for old houses, from the science behind it to specific product recommendations for our coastal climate.',
      },
      {
        type: 'heading',
        content: 'What Actually Makes Paint Breathable?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Breathable paint allows water vapour to pass through the paint film whilst still protecting walls from rain and weather. This breathability is measured by vapour permeability, typically expressed as an SD value (the lower the number, the more breathable the paint). Traditional mineral paints might have an SD value below 0.05, whilst standard modern emulsions can exceed 2.0—effectively creating a plastic barrier.',
      },
      {
        type: 'paragraph',
        content: 'Traditional buildings constructed before 1919 were designed as complete breathable systems. Lime mortar, cob walls, lath and plaster, and soft Devon sandstone bricks all work together to manage moisture. This isn\'t just about humidity from cooking and bathing—in older properties throughout Heavitree, Pennsylvania, and St David\'s, moisture also rises from the ground through walls that lack damp-proof courses.',
      },
      {
        type: 'paragraph',
        content: 'When you seal these walls with modern vinyl or acrylic emulsion, you create a moisture trap. Water vapour can\'t escape, so it condenses inside the wall structure. The paint starts to bubble and peel, plaster becomes damp and crumbly, and in severe cases, hidden timber joists begin to rot. We\'ve remedied dozens of properties in Topsham where previous decorators used standard vinyl emulsion on lime plaster—the damage can be extensive and expensive to reverse.',
      },
      {
        type: 'heading',
        content: 'Does Your Exeter Property Need Breathable Paint?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not every older property requires breathable paint systems throughout, but certain characteristics are clear indicators you should use them:',
      },
      {
        type: 'list',
        content: [
          'Built before 1919 with solid walls (no cavity)',
          'Constructed using lime mortar rather than cement',
          'Traditional materials: cob, wattle and daub, or soft Devon sandstone bricks',
          'Listed building status or located within one of Exeter\'s 20 conservation areas',
          'Lime plaster on internal walls (common in properties around Southernhay and The Close)',
          'No damp-proof course, typical of pre-1875 construction',
          'Previous damp problems or paint failure, especially if modern paints were used',
          'North-facing walls or areas with limited ventilation',
        ],
      },
      {
        type: 'paragraph',
        content: 'Interestingly, we sometimes recommend breathable systems in newer properties too—particularly in poorly ventilated rooms or where there\'s a history of condensation problems. Modern new-build estates like those in Cranbrook can benefit from breathable paint in bathrooms and kitchens where moisture levels run high.',
      },
      {
        type: 'heading',
        content: 'Types of Breathable Paint Systems',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Several types of paint qualify as \'breathable,\' but they\'re not all equally suitable for Devon\'s coastal climate or for every type of old building.',
      },
      {
        type: 'heading',
        content: 'Mineral Paints (Silicate Paint)',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The gold standard for breathability. Mineral paints bond chemically with the substrate through a process called silification, creating a permanent, highly breathable finish. Brands like KEIM and Earthborn Silicate Masonry are excellent for exterior work on listed buildings and properties in conservation areas.',
      },
      {
        type: 'paragraph',
        content: 'We specify mineral paints for many projects in Topsham\'s waterfront properties where salt-laden air and high humidity demand the most breathable system available. The downside? They\'re more expensive (typically £40-60 per litre) and require specific application techniques—this isn\'t a DIY product.',
      },
      {
        type: 'heading',
        content: 'Lime Paint and Limewash',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Traditional lime-based paints are highly breathable and authentic for properties built before 1850. Limewash creates a soft, chalky finish that weathers beautifully on cob cottages and lime-rendered buildings throughout Devon villages. However, limewash requires regular maintenance—expect to refresh it every 3-5 years depending on exposure.',
      },
      {
        type: 'paragraph',
        content: 'Modern lime paints (like Earthborn Claypaint or Little Greene Limewash) offer better durability whilst maintaining excellent breathability. These work particularly well on internal lime plaster in period properties around St Leonard\'s and Pennsylvania.',
      },
      {
        type: 'heading',
        content: 'Clay Paints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Clay-based paints offer very good breathability combined with a beautiful matt finish. Earthborn Claypaint is our go-to for interior work in period properties—it\'s more forgiving than mineral paint, available in an excellent range of heritage colours, and suitable for DIY application with proper preparation.',
      },
      {
        type: 'paragraph',
        content: 'At around £35 per 2.5 litres, clay paints sit between budget emulsion and premium mineral paint on price, offering excellent value for breathability.',
      },
      {
        type: 'heading',
        content: 'Natural Emulsions',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Some modern \'breathable emulsions\' marketed for period properties don\'t match the performance of mineral or lime systems. Products vary widely—some are genuinely breathable (like Farrow & Ball Estate Emulsion), whilst others simply have slightly higher permeability than standard vinyl paint.',
      },
      {
        type: 'paragraph',
        content: 'Always check the technical data sheet and look for SD values below 0.5 if you\'re considering these products for sensitive period properties.',
      },
      {
        type: 'heading',
        content: 'Exterior vs Interior: Different Requirements',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The most breathable paint isn\'t always necessary or appropriate everywhere in your property. We typically take a targeted approach based on the specific conditions of each room and surface.',
      },
      {
        type: 'paragraph',
        content: 'For exterior masonry on listed buildings or solid-walled properties, we almost always recommend mineral paint or lime systems. Devon\'s coastal weather—particularly in Dawlish, Exmouth, and coastal areas of Topsham—demands paint that can handle salt air, driving rain, and high humidity whilst allowing the wall to dry between weather events.',
      },
      {
        type: 'paragraph',
        content: 'For interior walls, clay paint or natural emulsion often provides sufficient breathability in bedrooms and living areas. Bathrooms and kitchens in older properties benefit from the highest-spec breathable systems you can afford—these rooms generate the most moisture. We\'ve seen too many Victorian bathrooms in Heavitree and St Leonard\'s where standard bathroom emulsion has trapped steam, leading to mould growth behind the paint film.',
      },
      {
        type: 'quoteCTA',
        content: 'Not sure which breathable paint system your period property needs? We provide free site surveys and detailed specifications for heritage properties throughout Exeter and Topsham.',
      },
      {
        type: 'heading',
        content: 'Common Mistakes with Breathable Paint',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Even expensive breathable paint will fail if applied incorrectly. These are the mistakes we see most often when remedying failed paint jobs:',
      },
      {
        type: 'heading',
        content: 'Painting Over Modern Emulsion',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Breathable paint can\'t work if it\'s sitting on top of a plastic barrier. If your walls currently have vinyl or acrylic emulsion, you must remove it before applying mineral paint or lime systems. We typically use chemical strippers or steam for this—it\'s labour-intensive but essential.',
      },
      {
        type: 'heading',
        content: 'Using Cement-Based Filler',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Hard cement-based fillers create impermeable patches that force moisture around them, causing damage at the edges. For lime plaster walls, we use lime-based fillers that match the breathability of the substrate.',
      },
      {
        type: 'heading',
        content: 'Inadequate Surface Preparation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Mineral paints in particular require clean, sound, slightly porous surfaces. Any loose material, efflorescence, or organic growth must be removed. We often use fungicidal wash on north-facing exterior walls in Topsham where algae growth is common.',
      },
      {
        type: 'heading',
        content: 'Wrong Primer Choice',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Each breathable paint system requires compatible primers. Using standard acrylic primer under mineral paint defeats the entire purpose. Always use the manufacturer\'s recommended primer system.',
      },
      {
        type: 'heading',
        content: 'Recommended Products for Devon Period Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Based on two decades of experience with Devon\'s climate and building stock, these are the products we most frequently specify:',
      },
      {
        type: 'paragraph',
        content: '**For exterior masonry (listed buildings and solid walls):** KEIM Soldalit or Earthborn Silicate Masonry Paint. Premium price but exceptional durability—expect 15-20 years on south-facing elevations, longer on north-facing walls.',
      },
      {
        type: 'paragraph',
        content: '**For internal lime plaster:** Earthborn Claypaint offers the best balance of performance, availability, and colour choice. The Topsham location works beautifully in period properties, and the finish improves with age.',
      },
      {
        type: 'paragraph',
        content: '**For traditional cob or lime render:** Traditional limewash from suppliers like Lime Green Products or Mike Wye & Associates. These specialist suppliers understand Devon\'s vernacular buildings and can advise on appropriate mixes.',
      },
      {
        type: 'paragraph',
        content: '**For heritage colour matching:** Little Greene\'s Limewash range provides excellent breathability with a carefully researched palette suitable for Georgian and Victorian properties throughout Exeter\'s conservation areas.',
      },
      {
        type: 'heading',
        content: 'Cost Considerations',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Breathable paint systems cost more than standard emulsion—typically 2-3 times as much for materials. A typical bedroom using Earthborn Claypaint might cost £120-150 in paint versus £40-50 for standard emulsion. Mineral paint systems for exterior work can cost £500-800 for a modest cottage.',
      },
      {
        type: 'paragraph',
        content: 'However, consider the lifespan and protection offered. Standard emulsion on inappropriate substrates might last 2-3 years before problems appear. Quality breathable systems should last 10-15 years internally and 15-25 years externally, whilst actually protecting your property rather than damaging it.',
      },
      {
        type: 'paragraph',
        content: 'The labour cost for proper application is higher too—mineral paints require specific techniques, and proper preparation takes longer. For a typical Victorian terrace in Heavitree, expect to pay around £4,000-6,000 for a full internal redecoration using appropriate breathable systems, versus £2,500-3,500 using standard paint. The difference represents proper preparation, suitable materials, and expertise.',
      },
      {
        type: 'heading',
        content: 'Planning Permission and Listed Building Consent',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If your property is listed or within a conservation area, check requirements before repainting. Grade I and Grade II* listed buildings typically require Listed Building Consent for any external repainting. Grade II listings may not require consent if you\'re repainting in the same colour scheme, but rules vary.',
      },
      {
        type: 'paragraph',
        content: 'Exeter City Council\'s conservation officers generally welcome breathable paint systems on traditional buildings—these align with best practice for heritage conservation. We work regularly with the planning department on projects in Topsham and Exeter\'s conservation areas and can advise on the consent process.',
      },
      {
        type: 'paragraph',
        content: 'One Topsham property owner received a £38,000 fine in December 2025 for unauthorised alterations to a listed building. Taking the time to understand requirements and seek proper consent protects both your property and your finances.',
      },
      {
        type: 'heading',
        content: 'When to Call a Professional',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Whilst some breathable paint systems suit DIY application, we recommend professional specification and application for listed buildings, properties with active damp problems, or anywhere mineral paints are appropriate. The initial cost of specialist paint makes poor application an expensive mistake.',
      },
      {
        type: 'paragraph',
        content: 'A professional heritage decorator can assess your property\'s construction, identify the underlying substrate, specify appropriate systems, and ensure proper preparation. For properties in Exeter\'s conservation areas or listed buildings in Topsham, this expertise often pays for itself in avoided problems and preserved property value.',
      },
      {
        type: 'paragraph',
        content: 'We provide detailed specifications for breathable paint systems, including substrate analysis, appropriate product selection for Devon\'s climate, and written quotations that explain exactly what we\'re proposing and why. For period property owners who want to understand their options before committing, we offer free site surveys throughout Exeter, Topsham, and surrounding areas.',
      },
      {
        type: 'quoteCTA',
        content: 'Own a period property in Exeter or Topsham? We specialise in heritage painting using appropriate breathable systems. Get expert advice and a detailed quote for your project.',
      },
    ],
  },
  'how-long-exterior-paint-last-devon-climate': {
    sections: [
      {
        type: 'paragraph',
        content: 'If you\'re planning to paint your Devon home\'s exterior, one of the first questions you\'ll ask is: how long will it last? The answer isn\'t straightforward, because Devon\'s unique coastal climate presents specific challenges that can significantly affect paint durability. From the salt-laden winds sweeping in from Torbay to the persistent drizzle that characterises our winters, understanding these factors is essential for making informed decisions about your property\'s exterior maintenance.',
      },
      {
        type: 'paragraph',
        content: 'As professional decorators based in Dawlish with over 20 years of experience working across Exeter, Topsham, and the surrounding areas, we\'ve seen firsthand how Devon\'s weather tests exterior paintwork. In this guide, we\'ll explain exactly how long exterior paint lasts in our local climate, what factors influence longevity, and how you can maximise your investment.',
      },
      {
        type: 'heading',
        content: 'The Standard Lifespan of Exterior Paint',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Under ideal conditions, quality exterior paint typically lasts between 5 and 15 years, depending on several factors including paint type, surface preparation, and environmental exposure. However, Devon\'s coastal climate means we\'re rarely dealing with ideal conditions.',
      },
      {
        type: 'subheading',
        content: 'Paint Types and Their Expected Longevity',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Different paint types offer varying levels of durability in Devon\'s climate:',
      },
      {
        type: 'list',
        content: [
          'Masonry paint on rendered walls: 5-10 years, though quality breathable masonry paints can last up to 15 years with proper application',
          'Exterior wood paint on doors and windows: 4-8 years depending on exposure and wood condition',
          'Traditional lime-based paints on period properties: 5-7 years, though they\'re often preferred for properties in Topsham\'s conservation area or among Exeter\'s 994 listed buildings due to their breathability',
          'Modern acrylic paints: 7-10 years with good UV and weather resistance',
          'Oil-based paints: 6-9 years, offering excellent adhesion but longer drying times in Devon\'s humidity',
        ],
      },
      {
        type: 'paragraph',
        content: 'These timescales assume professional application with proper surface preparation. DIY jobs or rushed preparation can reduce longevity by 30-50 percent.',
      },
      {
        type: 'heading',
        content: 'How Devon\'s Climate Affects Exterior Paint Longevity',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s weather is beautiful but demanding on exterior paintwork. Understanding these local challenges helps explain why some homes in Exeter and Topsham need repainting sooner than expected.',
      },
      {
        type: 'subheading',
        content: 'Coastal Salt and Wind Exposure',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Properties in coastal areas like Dawlish, Topsham\'s waterfront, or Exmouth face constant exposure to salt-laden air. Salt is hygroscopic, meaning it draws moisture into painted surfaces, accelerating deterioration. Waterfront homes in Topsham, where the average property value is £506,000, often need repainting 1-2 years sooner than inland properties in areas like Heavitree or Pennsylvania.',
      },
      {
        type: 'paragraph',
        content: 'Wind-driven rain is particularly problematic for south and west-facing walls, which receive the brunt of Devon\'s prevailing weather. These elevations may need attention 2-3 years before north-facing walls on the same property.',
      },
      {
        type: 'subheading',
        content: 'High Humidity and Persistent Moisture',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s climate is characterised by high humidity levels year-round, with frequent drizzle rather than heavy downpours. This persistent moisture prevents painted surfaces from drying properly, creating conditions where mould, algae, and lichen can establish themselves on exterior walls.',
      },
      {
        type: 'paragraph',
        content: 'Properties with north-facing walls or those shaded by trees in leafy areas like St Leonard\'s or Pennsylvania are particularly vulnerable. Algae growth isn\'t just unsightly; it actually breaks down paint film and reduces its protective qualities.',
      },
      {
        type: 'subheading',
        content: 'Temperature Fluctuations and UV Exposure',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'While Devon doesn\'t experience extreme temperature swings, the cycle of warm days and cool nights causes painted surfaces to expand and contract repeatedly. Over time, this movement creates microscopic cracks where water can penetrate, leading to peeling and flaking.',
      },
      {
        type: 'paragraph',
        content: 'UV radiation, even on cloudy days, gradually degrades paint binders, causing chalking and colour fading. Darker colours fade more noticeably, which is why heritage properties in Exeter\'s 20 conservation areas often stick to traditional lighter shades that age more gracefully.',
      },
      {
        type: 'heading',
        content: 'Factors That Influence Paint Longevity on Your Property',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Beyond climate, several property-specific factors determine how long exterior paint lasts on your home.',
      },
      {
        type: 'subheading',
        content: 'Surface Preparation and Paint Quality',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The single most important factor in paint longevity is thorough surface preparation. Professional decorators spend 60-70 percent of project time on preparation because it\'s what makes the difference between paint that lasts 5 years and paint that lasts 10.',
      },
      {
        type: 'paragraph',
        content: 'Proper preparation includes removing all loose and flaking paint, treating any damp issues, filling cracks, sanding smooth, and applying appropriate primers. Skipping these steps to save money is false economy. We regularly see properties where previous DIY jobs failed within 2-3 years simply because preparation was inadequate.',
      },
      {
        type: 'paragraph',
        content: 'Paint quality matters enormously. Premium paints cost 40-60 percent more than budget options but typically last twice as long. For a typical Exeter home exterior painting project costing around £1,728, investing in quality paint adds perhaps £200-300 but extends the repainting interval from 5 years to 8-10 years, representing significant long-term savings.',
      },
      {
        type: 'subheading',
        content: 'Property Age and Construction Type',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Older properties, particularly the Victorian and Edwardian homes common in areas like St Leonard\'s and Newtown, were built with breathable lime mortar and often lack damp-proof courses. Modern masonry paints can trap moisture in these walls, leading to paint failure and potential structural issues.',
      },
      {
        type: 'paragraph',
        content: 'For period properties among Topsham\'s 228 listed buildings or Exeter\'s extensive heritage stock, breathable paints like mineral paints or traditional limewash are essential. While they may need repainting slightly more frequently, they protect the building\'s fabric and comply with conservation area requirements.',
      },
      {
        type: 'paragraph',
        content: 'Modern rendered properties with cavity walls and damp-proof courses can use modern acrylic or silicone-based masonry paints that offer longer protection, typically 10-15 years with quality products and application.',
      },
      {
        type: 'subheading',
        content: 'Ongoing Maintenance',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Regular maintenance significantly extends paint life. Simple actions make a substantial difference:',
      },
      {
        type: 'list',
        content: [
          'Annual washing down of painted surfaces to remove salt deposits and organic growth',
          'Clearing gutters and downpipes to prevent water overflow onto walls',
          'Trimming back vegetation to improve air circulation and reduce moisture retention',
          'Touching up minor damage promptly before water penetration causes larger problems',
          'Inspecting and maintaining window and door seals to prevent water ingress behind paintwork',
        ],
      },
      {
        type: 'paragraph',
        content: 'Properties that receive this basic annual maintenance routinely achieve paint lifespans at the upper end of expected ranges, sometimes lasting 12-15 years between full repainting.',
      },
      {
        type: 'heading',
        content: 'Signs Your Exterior Paint Needs Attention',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Knowing when to repaint prevents minor issues becoming major problems. Watch for these warning signs:',
      },
      {
        type: 'list',
        content: [
          'Chalking: Paint surface feels powdery when touched, indicating UV degradation of binders',
          'Flaking or peeling: Paint lifting away from the surface, usually starting at edges and joints',
          'Cracking or crazing: Fine cracks forming across painted surfaces, allowing water penetration',
          'Fading: Noticeable colour loss, particularly on south-facing elevations',
          'Mould or algae growth: Green or black discolouration, common on north-facing walls in Devon',
          'Bare patches: Areas where paint has completely worn away, exposing substrate to weather',
        ],
      },
      {
        type: 'paragraph',
        content: 'If you notice multiple signs, it\'s time to consider repainting. Addressing issues promptly prevents water damage to underlying materials, which can transform a straightforward painting job into a costly repair project.',
      },
      {
        type: 'heading',
        content: 'Maximising Paint Longevity in Devon\'s Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'While you can\'t change the weather, you can make choices that maximise how long exterior paint lasts on your Devon property.',
      },
      {
        type: 'subheading',
        content: 'Choose the Right Paint System',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Working with experienced local decorators who understand Devon\'s specific challenges ensures you get paint recommendations tailored to your property type, location, and exposure. For coastal properties, this might mean specialist marine-grade paints. For heritage properties in conservation areas, it means breathable mineral paints or traditional materials.',
      },
      {
        type: 'paragraph',
        content: 'Our guide to the [best exterior paint for Devon\'s coastal weather](/blog/best-exterior-paint-devon-coastal-weather) provides detailed recommendations for different property types and locations.',
      },
      {
        type: 'subheading',
        content: 'Time Your Painting Project Carefully',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exterior painting should ideally be carried out in dry conditions with temperatures between 10-25 degrees Celsius. In Devon, this typically means late spring through early autumn. However, even summer painting requires careful weather monitoring to avoid painting before rain or during high humidity.',
      },
      {
        type: 'paragraph',
        content: 'Professional decorators understand these timing considerations and can advise on optimal scheduling for your specific project. For comprehensive guidance on timing, see our [spring exterior painting guide](/blog/spring-exterior-painting-devon-complete-guide).',
      },
      {
        type: 'subheading',
        content: 'Invest in Professional Application',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'While DIY exterior painting might seem cost-effective, professional application delivers measurably longer-lasting results. Experienced decorators ensure proper surface preparation, apply paints at correct thicknesses, and use techniques that prevent common failure points.',
      },
      {
        type: 'paragraph',
        content: 'For a typical Exeter home, professional exterior painting costs around £1,728. If professional application extends paint life from 5 years to 10 years compared to DIY, the annual cost drops from £345 to £173, making it excellent value while ensuring your home looks its best and remains protected.',
      },
      {
        type: 'heading',
        content: 'Planning Your Next Exterior Painting Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding how long exterior paint lasts in Devon\'s climate helps you plan maintenance budgets and avoid emergency repairs. Most homeowners find that painting on a 7-10 year cycle, with annual maintenance and minor touch-ups as needed, keeps their property in excellent condition while spreading costs manageably.',
      },
      {
        type: 'paragraph',
        content: 'For properties in Topsham, particularly those in the conservation area or among the town\'s 228 listed buildings, working with decorators experienced in heritage properties ensures compliance with planning requirements while achieving lasting results. Similarly, Exeter\'s 994 listed buildings and 20 conservation areas often have specific requirements that influence paint choices and application methods.',
      },
      {
        type: 'paragraph',
        content: 'Whether your home is a modern new-build in Cranbrook, a Victorian terrace in St Leonard\'s, a waterfront property in Topsham, or anywhere across Exeter, Dawlish, and surrounding areas, professional guidance on paint selection and application delivers the best long-term value.',
      },
      {
        type: 'quote',
        content: 'Quality exterior painting isn\'t just about appearance; it\'s about protecting your most valuable asset from Devon\'s demanding climate. The right paint system, professionally applied, can last 10-15 years and save you thousands compared to frequent cheap repainting.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve spent over 20 years understanding exactly how Devon\'s coastal weather affects exterior paintwork. We know which paint systems deliver the longest life on different property types, from heritage buildings to modern homes, and from exposed coastal locations to sheltered inland properties. Our work across [Exeter](/areas/exeter), [Topsham](/areas/topsham), and surrounding areas means we understand the specific challenges your property faces.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning to paint your property\'s exterior? Get expert advice on paint selection and a free, no-obligation quote from BSR Decorating. Call us or visit bsrdecorating.co.uk to discuss your project.',
      },
    ],
  },
  'painting-trends-devon-homes-2026': {
    sections: [
      {
        type: 'paragraph',
        content: 'The painting trends shaping Devon homes in 2026 reflect a fascinating blend of our region\'s architectural heritage, coastal climate considerations, and growing environmental consciousness. After two decades decorating properties from Topsham\'s Georgian townhouses to Exeter\'s Victorian terraces, I\'m seeing homeowners make increasingly sophisticated choices that honour our local character whilst embracing contemporary design sensibilities. Whether you\'re planning a complete refresh or targeting specific rooms, understanding what\'s popular right now can help you make decisions that will look stunning for years to come.',
      },
      {
        type: 'heading',
        content: 'Heritage Colours Making a Strong Comeback',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Across Exeter\'s 994 listed buildings and 20 conservation areas, we\'re witnessing a renewed appreciation for historically authentic colour palettes. This isn\'t about recreating museum pieces, but rather using heritage colours in fresh, liveable ways that respect the bones of period properties whilst meeting modern lifestyle needs.',
      },
      {
        type: 'subheading',
        content: 'Earthy Terracottas and Warm Ochres',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Rich, earthy tones are dominating feature walls and dining rooms throughout St Leonard\'s and Pennsylvania. These warm shades work beautifully in Devon\'s often grey light, bringing warmth without overwhelming period architectural details. In Topsham\'s 228 listed buildings, we\'re particularly seeing terracotta shades used in entrance halls and living rooms, paired with crisp white woodwork to maintain brightness.',
      },
      {
        type: 'subheading',
        content: 'Deep Heritage Greens',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'From sage to forest green, these sophisticated shades are replacing the grey trend that dominated the past five years. Heritage greens complement Devon\'s verdant landscape whilst providing excellent contrast against original cornicing and ceiling roses. We\'ve used these extensively in Victorian terraces throughout Heavitree, where they enhance rather than compete with period features.',
      },
      {
        type: 'heading',
        content: 'Sustainable and Breathable Paint Choices',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The painting trends for 2026 aren\'t just about colour. Devon homeowners are increasingly asking about paint composition, environmental impact, and long-term building health. This represents a significant shift in how people think about decorating.',
      },
      {
        type: 'list',
        content: [
          'Natural clay and mineral paints for pre-1919 properties, allowing walls to breathe properly',
          'Low and zero-VOC formulations for improved indoor air quality, especially important in tightly sealed modern homes',
          'Recycled and reclaimed paint programmes gaining traction among environmentally conscious homeowners',
          'Limewash finishes for authentic period appearance with genuine breathability in heritage properties',
        ],
      },
      {
        type: 'paragraph',
        content: 'Our partnership with Surfers Against Sewage reflects this growing demand for environmentally responsible decorating. For properties in Topsham\'s conservation area or Exeter\'s numerous listed buildings, breathable paints aren\'t just trendy, they\'re essential for long-term building preservation. Modern vinyl emulsions can trap moisture in solid-wall constructions, leading to damp issues that cost thousands to remedy.',
      },
      {
        type: 'heading',
        content: 'Texture and Finish Sophistication',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Beyond colour choice, 2026 sees homeowners paying unprecedented attention to paint finish and texture. This represents a maturation in how people approach interior decorating.',
      },
      {
        type: 'subheading',
        content: 'Matt and Chalky Finishes Dominating',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Ultra-matt and chalky finishes are replacing the satinwood trend on walls throughout Devon. These finishes absorb rather than reflect light, creating depth and sophistication whilst cleverly disguising minor wall imperfections common in period properties. In Exeter\'s Georgian and Victorian homes, these finishes enhance architectural details rather than competing with them through unwanted sheen.',
      },
      {
        type: 'subheading',
        content: 'Limewash Texture for Authenticity',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Genuine limewash application is experiencing remarkable growth, particularly in Topsham and the older areas of Exeter. The slight texture and depth of colour variation that limewash provides cannot be replicated with modern paints. For property values averaging £506,000 in Topsham, homeowners are investing in authentic finishes that enhance rather than compromise their period properties\' character and value.',
      },
      {
        type: 'heading',
        content: 'Exterior Trends Suited to Devon\'s Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s coastal position brings specific challenges that influence exterior painting trends. Salt air, driving rain, and humidity require careful product selection and colour choices that actually work in our microclimate.',
      },
      {
        type: 'subheading',
        content: 'Darker Exterior Colours Gaining Confidence',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'We\'re seeing bolder exterior colour choices across Exeter, with deep blues, slate greys, and even charcoal appearing on Victorian and Edwardian homes. This requires high-quality exterior masonry paint with excellent UV resistance. In Devon\'s intense summer sun, inferior products fade rapidly, making professional product knowledge essential. Modern exterior formulations now offer dark colours that maintain stability in coastal conditions, something impossible just five years ago.',
      },
      {
        type: 'subheading',
        content: 'Traditional Render Colours in Modern Formulations',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For rendered properties, we\'re seeing a return to traditional cream and stone shades, but executed in advanced masonry paints with superior water repellency and breathability. These work particularly well in conservation areas where planning considerations favour traditional aesthetics. The formulations, however, are thoroughly modern, offering ten-year-plus durability unimaginable with traditional limewash or distemper.',
      },
      {
        type: 'heading',
        content: 'Kitchen and Woodwork Trends',
        level: 2,
      },
      {
        type: 'paragraph',
        content: '[Kitchen cabinet spraying](/areas/exeter/kitchen-spraying) continues its explosive growth in 2026, offering a sustainable and cost-effective alternative to replacement. The colour trends here tell their own story.',
      },
      {
        type: 'list',
        content: [
          'Warm neutrals and greiges replacing stark white in kitchen cabinetry',
          'Deep navy and forest green for lower cabinets, creating sophisticated two-tone schemes',
          'Natural wood tones celebrated rather than painted over, particularly for quality hardwood',
          'Satin and eggshell finishes on woodwork replacing high-gloss throughout living spaces',
        ],
      },
      {
        type: 'paragraph',
        content: 'For an average kitchen spraying cost of around £750, homeowners can completely transform tired cabinetry in current trend colours. This represents remarkable value compared to the £8,000 to £15,000 cost of replacement, whilst delivering identical visual impact.',
      },
      {
        type: 'heading',
        content: 'The Accent Wall Evolution',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The accent wall concept has matured significantly. Rather than one wall in a jarring contrast colour, 2026 trends favour more subtle approaches that enhance room architecture. In Exeter\'s period properties, we\'re creating accent walls that highlight original features: the chimney breast wall in a sitting room, or the wall behind picture rails in a bedroom. Colour choices are typically two or three shades deeper than the main wall colour, creating depth without discord.',
      },
      {
        type: 'paragraph',
        content: 'For newer properties in developments like Cranbrook, where architectural features are minimal, accent walls are being used more creatively to define functional zones in open-plan spaces. A deeper shade behind a dining area, for instance, visually separates it from the kitchen without requiring structural changes.',
      },
      {
        type: 'heading',
        content: 'What\'s Declining in Popularity',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding what\'s fading helps avoid choices that will date quickly. Cool greys, which dominated from 2015 to 2022, are noticeably declining across Devon. They\'re being replaced with warmer neutrals, greiges, and mushroom tones that create more inviting spaces. All-white interiors are also receding, with homeowners recognising that carefully chosen colour enhances rather than diminishes space and light.',
      },
      {
        type: 'paragraph',
        content: 'High-gloss finishes on woodwork and doors are giving way to softer eggshell and satin finishes throughout homes. This creates a more contemporary, sophisticated appearance whilst being more forgiving of minor imperfections and significantly easier to maintain.',
      },
      {
        type: 'heading',
        content: 'Planning Your 2026 Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If you\'re planning decorating work this year, consider how these trends might work in your specific property. For [period properties in Topsham](/blog/decorating-tips-exeter-period-homes) or [Exeter\'s conservation areas](/areas/exeter/heritage-property-painting), authentic heritage colours and breathable paint formulations aren\'t just fashionable but practically essential. For newer homes, the sustainability trend offers an opportunity to make environmentally responsible choices without compromising on aesthetics or durability.',
      },
      {
        type: 'paragraph',
        content: 'Remember that trends should inform rather than dictate your choices. The best decorating decisions consider your property\'s specific characteristics, your lifestyle needs, and Devon\'s unique climate challenges. A colour that looks stunning in a London showroom might appear entirely different in our softer, greyer light.',
      },
      {
        type: 'quote',
        content: 'The most successful decorating projects in 2026 will be those that balance current trends with timeless principles: appropriate colours for the architecture, quality materials suited to our climate, and execution that enhances rather than fights against the property\'s character.',
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re refreshing a single room or undertaking a whole-house transformation, understanding these painting trends for 2026 helps you make informed decisions that will look beautiful now and remain appealing for years to come. The key is adapting trends intelligently to suit your specific Devon property and lifestyle.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning a decorating project that embraces 2026 trends whilst respecting your property\'s character? Contact BSR Decorating for a free, no-obligation quote and expert advice tailored to your Devon home.',
      },
    ],
  },
  'eco-friendly-paint-uk-best-options-your-home': {
    sections: [
      {
        type: 'paragraph',
        content: 'Over the past five years, we\'ve noticed a significant shift in what homeowners across Exeter and Topsham ask about during initial consultations. Beyond colours and finishes, the question we now hear most often is: \'Do you use eco-friendly paint?\' It\'s not just environmental consciousness driving this change—though Devon\'s strong green values certainly play a part. Homeowners are increasingly aware that the paint they choose affects their family\'s health, their home\'s structural wellbeing, and how long their decoration will actually last in our challenging coastal climate.',
      },
      {
        type: 'paragraph',
        content: 'As decorators who\'ve worked on properties from Victorian terraces in St Leonard\'s to Georgian townhouses in Topsham\'s conservation area, we\'ve seen firsthand how eco-friendly paint performs differently from conventional alternatives. With our partnership with Surfers Against Sewage and over 20 years\' experience across Devon\'s 994 listed buildings, we\'ve developed strong views on which eco-friendly paints actually deliver—and which are just greenwashing.',
      },
      {
        type: 'heading',
        content: 'What Actually Makes Paint \'Eco-Friendly\'?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The term \'eco-friendly paint\' isn\'t regulated in the UK, which means it gets applied to everything from genuinely sustainable products to conventional paint with slightly lower chemical content. To cut through the marketing, here\'s what actually matters:',
      },
      {
        type: 'heading',
        content: 'VOC Content: The Critical Measure',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Volatile Organic Compounds (VOCs) are chemicals that evaporate from paint as it dries and continue to off-gas for months afterwards. Current EU regulations limit VOC content to 30 grams per litre for matt emulsion and 80 g/l for gloss, but these limits are far too high for genuinely eco-friendly paint. The best low-VOC paints contain under 5 g/l, while zero-VOC paints measure below 0.3 g/l.',
      },
      {
        type: 'paragraph',
        content: 'VOCs contribute to indoor air pollution and can cause headaches, dizziness, eye irritation, and respiratory problems—particularly problematic in Exeter\'s older properties where ventilation is often limited. We\'ve worked on numerous homes where families with asthma or young children specifically requested low-VOC paint after experiencing reactions to conventional paint fumes.',
      },
      {
        type: 'heading',
        content: 'Natural vs Synthetic Ingredients',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Beyond VOC content, truly eco-friendly paint considers its entire ingredient list. Natural paints use plant-based oils, natural resins, mineral pigments, and chalk or clay fillers instead of petroleum-derived plastics and synthetic chemicals. Brands like Earthborn, Little Greene, and Farrow & Ball\'s Modern Emulsion range prioritise natural ingredients, though their formulations vary significantly.',
      },
      {
        type: 'paragraph',
        content: 'For period properties—which represent a significant portion of our work across Exeter\'s 20 conservation areas—natural paint formulations often perform better structurally. Conventional plastic-based paint creates an impermeable barrier that traps moisture in solid walls, leading to damp problems and paint failure. Natural paints typically offer superior [breathability, allowing moisture to move through walls](/blog/breathable-paint-old-houses-complete-guide) as it should.',
      },
      {
        type: 'heading',
        content: 'Why Eco-Friendly Paint Matters for Devon Homes',
        level: 2,
      },
      {
        type: 'heading',
        content: 'Period Property Performance',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'In areas like Pennsylvania, Newtown, and Topsham, where Victorian and Georgian properties dominate, breathable paint isn\'t just an environmental choice—it\'s a practical necessity. We\'ve been called to too many homes where previous decorators used modern vinyl emulsion on solid walls, creating moisture traps that caused damp patches, peeling paint, and even structural damage.',
      },
      {
        type: 'paragraph',
        content: 'Eco-friendly paints, particularly those with natural binders like linseed oil or plant resins, allow walls to breathe properly. For Exeter\'s 994 listed buildings, many requiring specific paint specifications, [breathable eco-friendly options often align better with conservation requirements](/blog/painting-listed-buildings-exeter-breathable-paint-consent-mistakes) than conventional alternatives.',
      },
      {
        type: 'heading',
        content: 'Coastal Climate Durability',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s coastal weather presents unique challenges: high humidity, salt air, driving rain, and rapid temperature fluctuations. Surprisingly, we\'ve found that many premium eco-friendly exterior paints outperform conventional alternatives in these conditions. Natural oil-based exterior paints create flexible, weather-resistant finishes that move with timber and masonry rather than cracking, while mineral-based masonry paints offer exceptional longevity on rendered walls.',
      },
      {
        type: 'paragraph',
        content: 'For waterfront properties around Topsham Quay and the Exe Estuary, where salt air accelerates paint deterioration, we\'ve increasingly specified eco-friendly exterior paints for their superior long-term performance despite their higher initial cost.',
      },
      {
        type: 'heading',
        content: 'Indoor Air Quality',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'With average UK household spending 90% of their time indoors, indoor air quality directly affects health. Conventional paint continues releasing VOCs for months after application, with some chemicals persisting for years. In well-insulated modern homes and tightly sealed period properties, this creates a concerning chemical build-up.',
      },
      {
        type: 'paragraph',
        content: 'Low-VOC and zero-VOC paints eliminate this problem. We particularly recommend them for bedrooms, nurseries, and homes with elderly residents, asthmatics, or anyone with chemical sensitivities. The difference is noticeable—rooms painted with zero-VOC paint can be occupied the same day with minimal odour, compared to the weeks of ventilation conventional paint requires.',
      },
      {
        type: 'heading',
        content: 'Best Eco-Friendly Paint Brands for UK Homes',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'After working with dozens of eco-friendly paint brands across hundreds of Devon properties, these are the options we recommend most frequently:',
      },
      {
        type: 'heading',
        content: 'For Interior Walls: Earthborn Claypaint',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Earthborn\'s Claypaint remains our most-specified eco-friendly interior paint. It contains zero VOCs, uses natural clay and plant-based ingredients, and offers exceptional breathability—perfect for Exeter\'s period properties. The matt finish creates a sophisticated, slightly chalky appearance that suits both traditional and contemporary interiors. Coverage is excellent, and we typically achieve professional results in two coats.',
      },
      {
        type: 'paragraph',
        content: 'The colour range, while smaller than conventional brands, includes carefully curated heritage-appropriate shades ideal for conservation area properties. At approximately £45-50 per 2.5 litres, it\'s premium-priced but comparable to Farrow & Ball.',
      },
      {
        type: 'heading',
        content: 'For High-Traffic Areas: Little Greene Intelligent Matt Emulsion',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Where durability matters—hallways, stairs, landings, and family kitchens—Little Greene\'s Intelligent Matt Emulsion delivers. It\'s water-based with minimal VOCs, offers superior washability compared to most eco-friendly paints, and provides excellent opacity. The extensive colour range includes historically accurate shades ideal for period properties.',
      },
      {
        type: 'paragraph',
        content: 'We use this extensively across [Exeter rental properties](/blog/landlord-painting-exeter-fast-turnaround-rental-refresh) where landlords want environmentally responsible paint that withstands heavy use. At around £48 per 2.5 litres, it\'s cost-effective for its performance level.',
      },
      {
        type: 'heading',
        content: 'For Woodwork: Graphenstone Ecosphere Primer & Finish',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Finding eco-friendly paint for woodwork that matches conventional gloss durability has been challenging, but Graphenstone\'s water-based wood paint delivers. Zero VOCs, low odour, and remarkably tough finish suitable for doors, skirting boards, and window frames. It doesn\'t yellow over time like oil-based alternatives and can be recoated within hours.',
      },
      {
        type: 'paragraph',
        content: 'The satin finish provides a contemporary alternative to traditional gloss, increasingly popular in Exeter\'s period properties being sensitively modernised.',
      },
      {
        type: 'heading',
        content: 'For Exterior Masonry: KEIM Ecosil-ME',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For rendered exteriors, particularly in exposed coastal locations, KEIM\'s silicate-based masonry paint is exceptional. It chemically bonds with the substrate, creating an incredibly durable, breathable finish that outlasts conventional masonry paint by years. Zero VOCs, mineral pigments, and completely non-toxic.',
      },
      {
        type: 'paragraph',
        content: 'We\'ve used KEIM extensively on Topsham\'s waterfront properties and Exeter\'s conservation area buildings. The fifteen-year guarantee reflects genuine durability. It requires specialist application knowledge, but the long-term performance justifies the premium cost of approximately £95-110 per 5 litres.',
      },
      {
        type: 'heading',
        content: 'For Exterior Timber: Holzfarbe Eco Wood Paint',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Linseed oil-based exterior wood paint providing excellent weather protection while remaining fully breathable. Ideal for windows, doors, and cladding on period properties where modern microporous paints would be inappropriate. Natural plant oils and mineral pigments create flexible, long-lasting finishes that age gracefully rather than peeling.',
      },
      {
        type: 'paragraph',
        content: 'Application requires more skill than conventional gloss, but the results suit Devon\'s coastal climate exceptionally well. We specify this for listed buildings and conservation area properties where authenticity and breathability matter.',
      },
      {
        type: 'heading',
        content: 'Common Questions About Eco-Friendly Paint',
        level: 2,
      },
      {
        type: 'heading',
        content: 'Is eco-friendly paint more expensive?',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Yes, initially. Quality eco-friendly paint typically costs £40-60 per 2.5 litres compared to £20-35 for conventional alternatives. However, many eco-friendly paints offer superior coverage, requiring fewer coats. More significantly, their durability often means longer intervals between redecoration—we\'ve seen natural masonry paint lasting 12-15 years compared to 5-7 for conventional alternatives.',
      },
      {
        type: 'paragraph',
        content: 'For period properties, eco-friendly paint also reduces moisture-related damage, potentially saving thousands in damp remediation costs. The total cost of ownership frequently favours eco-friendly options despite higher purchase prices.',
      },
      {
        type: 'heading',
        content: 'Does eco-friendly paint cover as well?',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Coverage varies by brand and product type. Premium eco-friendly paints like Earthborn and Little Greene typically provide excellent coverage comparable to conventional alternatives—usually achieving professional results in two coats over properly prepared surfaces. Some budget eco-friendly options offer poorer coverage, requiring three or more coats, which negates their cost advantage.',
      },
      {
        type: 'paragraph',
        content: 'Surface preparation remains critical. Eco-friendly paint won\'t magically cover poorly prepared walls, and some natural paints are less forgiving of preparation shortcuts than conventional alternatives.',
      },
      {
        type: 'heading',
        content: 'Can eco-friendly paint match any colour?',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Colour ranges are typically smaller than conventional paint systems, particularly for zero-VOC and fully natural formulations. However, most reputable eco-friendly brands now offer comprehensive tinting systems. Earthborn offers around 72 standard colours, Little Greene over 200, and many brands provide custom tinting using natural pigments.',
      },
      {
        type: 'paragraph',
        content: 'For exact colour matching to existing schemes, some limitations exist—particularly for bright synthetic colours that require artificial pigments incompatible with natural paint formulations.',
      },
      {
        type: 'heading',
        content: 'How long does eco-friendly paint take to dry?',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Water-based eco-friendly paints typically dry as quickly as conventional alternatives—touch-dry in 2-4 hours, recoatable after 4-6 hours. Natural oil-based paints take longer, sometimes requiring 12-24 hours between coats. However, eco-friendly paints generally emit minimal odour, allowing rooms to be occupied much sooner than with conventional alternatives despite similar drying times.',
      },
      {
        type: 'heading',
        content: 'Making the Switch to Eco-Friendly Paint',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'You don\'t need to switch your entire home to eco-friendly paint immediately. We typically recommend starting with bedrooms and living spaces where you spend most time, gradually transitioning as you redecorate. For period properties across Exeter and Topsham, the breathability benefits make eco-friendly paint particularly valuable for external walls and ground-floor rooms prone to moisture.',
      },
      {
        type: 'paragraph',
        content: 'If you\'re planning interior decoration and want to explore eco-friendly paint options suitable for your specific property, we\'re happy to advise. Every home presents different requirements—a listed Georgian townhouse in Topsham needs different paint specification than a modern development in Cranbrook—and choosing the right eco-friendly paint requires understanding both the product and your property\'s characteristics.',
      },
      {
        type: 'paragraph',
        content: 'For more information about our approach to sustainable decorating across Exeter and Topsham, or to discuss eco-friendly paint options for your property, get in touch for a free, no-obligation consultation.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning a decorating project and want expert advice on eco-friendly paint options? Contact BSR Decorating for a free consultation and quote.',
      },
    ],
  },
  'solving-damp-paint-problems-exeter-homes': {
    sections: [
      {
        type: 'paragraph',
        content: 'If you\'ve noticed paint bubbling, peeling, or discolouring on your Exeter property\'s walls, you\'re facing one of the most common decorating challenges in Devon. Damp affects countless homes across the city, particularly in older properties in St Leonard\'s, Heavitree, and Topsham. With 994 listed buildings and extensive Victorian and Georgian housing stock, many Exeter homeowners experience the frustrating cycle of repainting walls only to see the same problems return within months. The reality is that painting over damp walls without addressing the root cause is a waste of time and money – the problem will always return, often with additional damage.',
      },
      {
        type: 'heading',
        content: 'Why Damp Is So Common in Exeter Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s location and building heritage create ideal conditions for damp problems. Our coastal climate brings higher humidity year-round, with prevailing south-westerly winds carrying moisture-laden air from the Atlantic. This is especially noticeable in riverside areas like Topsham and along the Exe Estuary, where properties face constant exposure to moisture from multiple directions.',
      },
      {
        type: 'paragraph',
        content: 'The city\'s historic building stock compounds these challenges. Many properties in Exeter\'s 20 conservation areas were built with solid walls rather than modern cavity construction. Victorian terraces in Newtown and Mount Pleasant, Georgian townhouses in Southernhay, and period properties throughout Pennsylvania were designed to \'breathe\' – allowing moisture to move naturally through walls. When these buildings are decorated with modern, impermeable paints or materials, moisture becomes trapped inside the walls, leading to damp problems and inevitable paint failure.',
      },
      {
        type: 'paragraph',
        content: 'Even newer properties aren\'t immune. Poor ventilation in modern airtight homes, combined with lifestyle changes (more cooking, drying clothes indoors, longer showers), means condensation damp has become increasingly common across Exeter\'s housing stock, from the new developments at Cranbrook to apartments in the city centre.',
      },
      {
        type: 'heading',
        content: 'The Three Types of Damp Affecting Exeter Homes',
        level: 2,
      },
      {
        type: 'subheading',
        content: '1. Rising Damp',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Rising damp occurs when groundwater moves up through walls via capillary action. It\'s particularly common in older Exeter properties that lack a damp-proof course or where the original DPC has failed. You\'ll typically see a tide mark up to one metre from floor level, often accompanied by salt deposits appearing as white crystalline patches on the wall surface. Paint in these areas will bubble, peel, and eventually flake away as hygroscopic salts draw moisture from the air and push through the paint film.',
      },
      {
        type: 'paragraph',
        content: 'In Exeter\'s period properties, especially those in Topsham and St Leonard\'s, rising damp is frequently misdiagnosed. What appears to be rising damp is often penetrating damp from ground level or condensation damp at skirting level. A professional survey is essential before undertaking expensive remedial work.',
      },
      {
        type: 'subheading',
        content: '2. Penetrating Damp',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Penetrating damp occurs when water enters through the external fabric of the building – through damaged pointing, cracked render, faulty gutters, or porous brickwork. Exeter\'s exposure to driving rain, particularly on south and west-facing elevations, makes this extremely common. Properties in exposed locations like Pennsylvania and areas around St David\'s often show damp patches that worsen during wet weather and may partially dry out in summer. Understanding [when to paint exterior surfaces](/blog/exterior-painting-exeter-devon-guide) is crucial for preventing penetrating damp issues.',
      },
      {
        type: 'paragraph',
        content: 'Coastal properties in Topsham face additional challenges. Salt-laden winds can damage external paintwork and pointing, creating entry points for moisture. If you\'re seeing damp patches that correspond with external features (chimneys, window reveals, parapet walls), penetrating damp is the likely culprit.',
      },
      {
        type: 'subheading',
        content: '3. Condensation Damp',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Condensation damp is now the most common form of damp in UK homes, including Exeter. It occurs when warm, moisture-laden air meets cold surfaces, causing water droplets to form. You\'ll typically see it on north-facing walls, in corners where air circulation is poor, behind furniture, and around windows. Black mould growth is a telltale sign of condensation problems.',
      },
      {
        type: 'paragraph',
        content: 'This type of damp has increased dramatically in recent years as homes become more airtight and energy-efficient. Student accommodation in Exeter\'s St David\'s area and rental properties throughout the city are particularly prone to condensation issues due to occupancy patterns and inadequate ventilation.',
      },
      {
        type: 'heading',
        content: 'How to Identify What Type of Damp You Have',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before any repainting work, accurate diagnosis is essential. Here\'s what to look for:',
      },
      {
        type: 'list',
        content: [
          'Rising damp: Horizontal tide mark up to 1m high, salt deposits, deteriorating plaster, affected skirting boards',
          'Penetrating damp: Damp patches corresponding to external defects, worsens with rain, may show staining patterns',
          'Condensation: Appears on cold surfaces, worse in winter, associated with black mould, streaming windows in morning',
        ],
      },
      {
        type: 'paragraph',
        content: 'A moisture meter reading alone isn\'t sufficient for accurate diagnosis. Professional assessment should consider the building\'s age, construction type, location, and the pattern and position of damp evidence. At BSR Decorating, we always investigate the underlying cause before proposing any decorating solution.',
      },
      {
        type: 'heading',
        content: 'Why You Can\'t Just Paint Over Damp Walls',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Many Exeter homeowners try quick fixes: anti-mould paint, damp-proof paint, or simply repainting with multiple coats of emulsion. These approaches fail because they don\'t address the source of moisture. Moisture will always find a way through, causing the new paint to fail just as the old paint did.',
      },
      {
        type: 'paragraph',
        content: 'Modern vinyl emulsions and acrylic paints create an impermeable barrier. When moisture is present in the wall, it becomes trapped behind this barrier, leading to blistering, peeling, and eventual paint failure. In period properties, this trapped moisture can cause additional damage to historic plasterwork and even the structural fabric of the building.',
      },
      {
        type: 'paragraph',
        content: 'For Exeter\'s 994 listed buildings and properties in conservation areas, using inappropriate modern paints can cause long-term damage. [Listed building consent may be required](/blog/painting-listed-buildings-exeter-breathable-paint-consent-mistakes) for changes to internal finishes, and conservation officers increasingly expect breathable, traditional paint systems to be used on historic properties.',
      },
      {
        type: 'heading',
        content: 'The Right Way to Solve Damp Before Repainting',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Step 1: Fix the Source',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'No decorating work should begin until the moisture source is eliminated. This might involve repairing gutters, repointing brickwork, improving drainage around the property, installing or repairing a damp-proof course, or improving ventilation. In Exeter\'s period properties, solutions must be sympathetic to the building\'s age and construction. We regularly work with local surveyors and specialists who understand Devon\'s historic building stock.',
      },
      {
        type: 'subheading',
        content: 'Step 2: Allow the Wall to Dry',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Once the moisture source is eliminated, walls need time to dry out. Depending on wall thickness and saturation levels, this can take weeks or even months. Rushing this stage guarantees paint failure. We use moisture meters to confirm walls have reached acceptable moisture levels before any preparation work begins.',
      },
      {
        type: 'subheading',
        content: 'Step 3: Remove Damaged Materials',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Contaminated plaster containing hygroscopic salts must be removed and replaced. These salts (calcium chloride, nitrates, and sulphates) continually draw moisture from the air, making successful painting impossible. We typically remove affected plaster to 300mm beyond the visible damage and apply a salt-retardant render before replastering.',
      },
      {
        type: 'subheading',
        content: 'Step 4: Choose the Right Paint System',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For Exeter\'s period properties, breathable paint systems are essential. Limewash, mineral paints, and certain specialist emulsions allow moisture to move through the wall naturally while providing a decorative finish. Modern vinyl paints should generally be avoided on solid-walled properties built before 1920.',
      },
      {
        type: 'paragraph',
        content: 'For properties where condensation is the issue, improving ventilation and using anti-condensation paint with fungicidal additives can prevent mould growth. However, these products are temporary solutions if the underlying ventilation problem isn\'t addressed.',
      },
      {
        type: 'heading',
        content: 'Specific Solutions for Exeter Property Types',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Victorian and Georgian Period Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Properties in St Leonard\'s, Pennsylvania, and Topsham\'s conservation area require breathable paint systems. We typically specify lime-based paints or mineral emulsions that work with the building\'s original construction. These paints are more expensive initially but last longer and prevent the damage caused by trapping moisture.',
      },
      {
        type: 'subheading',
        content: 'Post-War Properties with Cavity Walls',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Homes in Heavitree and newer areas of Exeter with cavity wall construction can usually accept modern paint systems once damp is resolved. The key is ensuring cavity wall insulation hasn\'t been poorly installed, causing a moisture bridge.',
      },
      {
        type: 'subheading',
        content: 'New Build Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Developments like Cranbrook often experience condensation damp due to airtight construction and inadequate ventilation. Mechanical ventilation with heat recovery (MVHR) systems must be properly maintained. We always ensure new builds are fully dried out before decoration – construction moisture can take 12-18 months to dissipate fully.',
      },
      {
        type: 'subheading',
        content: 'Rental Properties and HMOs',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Student properties and HMOs in St David\'s and around the university require robust ventilation solutions and regular maintenance. We work with many Exeter landlords to [establish decoration schedules](/blog/landlord-painting-exeter-fast-turnaround-rental-refresh) that address condensation issues before they cause damage.',
      },
      {
        type: 'heading',
        content: 'Prevention: Stopping Damp Problems Before They Start',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Prevention is always more cost-effective than cure. Here\'s what Exeter homeowners should monitor:',
      },
      {
        type: 'list',
        content: [
          'Clear gutters and downpipes regularly – autumn leaf fall is particularly problematic in Exeter\'s tree-lined streets',
          'Check external pointing annually, especially on exposed elevations facing the prevailing south-westerly weather',
          'Ensure adequate ventilation in kitchens and bathrooms – extract fans should vent outside, not into roof spaces',
          'Don\'t block airbricks or underfloor ventilation – these are essential in period properties',
          'Keep the gap between external ground level and internal floor level – soil or paving built up against walls causes damp',
          'In winter, maintain background heating and ventilation even when rooms aren\'t in use',
        ],
      },
      {
        type: 'heading',
        content: 'When to Call a Professional Decorator',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'While some condensation issues can be resolved with better ventilation and lifestyle changes, most damp problems in Exeter properties require professional assessment and treatment. This is particularly true for period properties, where incorrect diagnosis and treatment can cause expensive long-term damage.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve worked on properties throughout Exeter for over 20 years, from listed buildings in Topsham to modern developments in Cranbrook. We understand Devon\'s specific challenges – the climate, the building stock, and the appropriate solutions for each property type. We always investigate damp issues thoroughly before proposing any decorating work, and we\'re happy to recommend specialists for remedial work beyond our scope.',
      },
      {
        type: 'paragraph',
        content: 'If you\'re dealing with recurring paint problems caused by damp, we offer free surveys and honest advice. Sometimes the solution is straightforward ventilation improvements and the right paint system. Sometimes it requires more extensive remedial work. Either way, we\'ll give you a clear assessment and a realistic quotation.',
      },
      {
        type: 'quoteCTA',
        content: 'Dealing with damp and paint problems in your Exeter property? Get expert advice and a free, no-obligation survey from BSR Decorating. Call us today or request a quote online – we\'ll identify the real cause and recommend the right solution for your home.',
      },
      {
        type: 'paragraph',
        content: 'For more guidance on painting period properties in Exeter, read our guide to <a href="/blog/decorating-tips-exeter-period-homes">decorating tips for Exeter period homes</a> or learn about <a href="/blog/breathable-paint-old-houses-complete-guide">breathable paint for old houses</a>. If you\'re in Topsham, our <a href="/areas/topsham">Topsham decorator services page</a> has specific information about working on properties in the conservation area.',
      },
    ],
  },
  'limewash-paint-period-properties-devon-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'If you own a period property in Exeter or Topsham, you\'ve likely heard about limewash paint. With 994 listed buildings across Exeter alone and 228 in Topsham\'s conservation area, understanding traditional paint systems isn\'t just about aesthetics—it\'s about protecting your investment and maintaining your home\'s historic integrity. Limewash has been used for centuries on British buildings, and there\'s a very good reason it remains the gold standard for heritage properties today.',
      },
      {
        type: 'heading',
        content: 'What Is Limewash Paint?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Limewash is a traditional paint made from slaked lime (calcium hydroxide) mixed with water. Unlike modern emulsion paints that sit on top of a surface, limewash penetrates into porous masonry and actually becomes part of the wall through a process called carbonation. As the limewash dries, it reacts with carbon dioxide in the air and gradually turns back into limestone—the same material many historic buildings are made from.',
      },
      {
        type: 'paragraph',
        content: 'This chemical transformation is what makes limewash uniquely suited to old buildings. It\'s not a coating that can peel or trap moisture—it\'s a breathable finish that works in harmony with traditional building materials like lime mortar, cob, and soft stone.',
      },
      {
        type: 'heading',
        content: 'Why Period Properties Need Breathable Paint',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The single most important thing to understand about historic buildings is that they were designed to breathe. Before the 20th century, buildings in Devon were constructed without damp-proof courses or cavity walls. Instead, they managed moisture through breathability—allowing water vapour to pass through walls naturally.',
      },
      {
        type: 'paragraph',
        content: 'This is especially critical in Devon\'s climate. Properties along Topsham\'s waterfront or in Exeter\'s riverside areas face constant humidity. When you apply modern [masonry paint or vinyl emulsion to these buildings](/blog/best-paint-types-exeter-homes-old-damp-listed-properties), you create an impermeable barrier that traps moisture inside the walls. The result? Damp problems, blown plaster, and deteriorating masonry.',
      },
      {
        type: 'subheading',
        content: 'The Cost of Getting It Wrong',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'We regularly see Victorian and Georgian homes in areas like St Leonard\'s and Pennsylvania where well-meaning owners have used modern paints, only to discover rising damp and failing plaster within a few years. In December 2025, a Topsham property owner was fined £38,000 for unauthorised alterations to a listed building—a stark reminder that conservation regulations exist to protect these irreplaceable structures.',
      },
      {
        type: 'paragraph',
        content: 'Using inappropriate materials isn\'t just a planning issue—it\'s a preservation issue that can cost tens of thousands of pounds to rectify.',
      },
      {
        type: 'heading',
        content: 'The Benefits of Limewash for Historic Homes',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Breathability and Moisture Management',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Limewash has a high vapour permeability, meaning it allows moisture to evaporate naturally from masonry. This is essential for buildings constructed with lime mortar, cob, or soft sandstone—all common in Devon\'s historic properties. By letting walls breathe, limewash prevents the moisture accumulation that leads to structural decay.',
      },
      {
        type: 'subheading',
        content: 'Self-Healing Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'One of limewash\'s most remarkable characteristics is its ability to self-heal minor cracks. Because limewash remains slightly porous and flexible, small hairline cracks can actually reseal themselves through continued carbonation and the movement of lime within the coating. This flexibility also allows it to move with the building as it responds to seasonal temperature changes—crucial for old buildings without modern foundations.',
      },
      {
        type: 'subheading',
        content: 'Natural Antimicrobial Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Limewash is naturally alkaline, which makes it hostile to mould, algae, and bacteria. This is particularly valuable in Devon\'s damp climate, where properties in areas like Heavitree and Alphington can struggle with biological growth on exterior walls. Unlike modern paints that require chemical biocides, limewash provides natural protection that improves over time.',
      },
      {
        type: 'subheading',
        content: 'Authentic Aesthetic',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Limewash creates a distinctive matte finish with subtle texture and depth that modern paints cannot replicate. It weathers beautifully, developing a soft patina that enhances rather than detracts from a building\'s character. For properties in Exeter\'s 20 conservation areas, this authentic appearance is often a planning requirement.',
      },
      {
        type: 'heading',
        content: 'When Should You Use Limewash?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Limewash is appropriate for any building constructed before approximately 1919, particularly those built with traditional materials. This includes the Georgian townhouses in Southernhay, Victorian terraces throughout St Leonard\'s, and the historic cottages that line Topsham\'s streets.',
      },
      {
        type: 'list',
        content: [
          'Listed buildings (all Grade I, II*, and II properties)',
          'Buildings in conservation areas where planning guidance recommends traditional materials',
          'Properties with lime mortar or lime plaster',
          'Cob buildings (common in rural Devon and parts of Alphington)',
          'Soft stone construction (sandstone, limestone)',
          'Any historic building experiencing damp issues with modern paint',
          'Properties where previous limewash coatings exist',
        ],
      },
      {
        type: 'paragraph',
        content: 'If you\'re unsure whether your property would benefit from limewash, our team at [BSR Decorating](/areas/exeter/heritage-property-painting) can assess your building\'s construction and recommend the most appropriate paint system.',
      },
      {
        type: 'heading',
        content: 'Limewash vs. Modern Alternatives',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Limewash vs. Modern Masonry Paint',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Modern masonry paints form a plastic film on the surface. While durable on modern buildings, they\'re inappropriate for historic structures because they trap moisture and prevent walls from breathing. They also tend to peel and blister on old buildings as trapped moisture tries to escape.',
      },
      {
        type: 'subheading',
        content: 'Limewash vs. Lime Paint',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Lime paint (sometimes called mineral paint) is a modern product that contains lime but also includes binders and additives for easier application. While more breathable than standard masonry paint, it\'s not as permeable as traditional limewash and doesn\'t offer the same self-healing properties. For the most sensitive historic buildings, traditional limewash remains the preferred option.',
      },
      {
        type: 'subheading',
        content: 'Limewash vs. Distemper',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Distemper is another traditional coating, typically used for interior walls and ceilings. While both are breathable, distemper is less durable and weather-resistant than limewash, making limewash the better choice for exterior applications in Devon\'s climate.',
      },
      {
        type: 'heading',
        content: 'Application: Why Limewash Needs Professional Expertise',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Limewash is not a forgiving material. It requires specific preparation, application techniques, and environmental conditions to perform properly. This is not a weekend DIY project—poorly applied limewash can wash off, appear patchy, or fail to bond correctly.',
      },
      {
        type: 'subheading',
        content: 'Surface Preparation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'The substrate must be clean, sound, and appropriately porous. Any previous incompatible coatings must be completely removed—a labour-intensive process that often requires careful scraping or specialist poulticing. The surface typically needs dampening before application to prevent the wall from drawing moisture out of the limewash too quickly.',
      },
      {
        type: 'subheading',
        content: 'Application Technique',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Limewash is applied in multiple thin coats (typically 3-5) rather than one or two thick coats like modern paint. Each coat must be applied while the previous coat is still damp—timing is critical. The application method also matters: limewash is traditionally applied with a specialist limewash brush using a cross-hatching technique to ensure even coverage and penetration.',
      },
      {
        type: 'subheading',
        content: 'Weather Conditions',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Limewash cannot be applied in freezing conditions, direct sunlight, or when rain is forecast within 24 hours. In Devon\'s unpredictable climate, this requires careful planning and sometimes means delaying work at short notice. The carbonation process also takes weeks to complete, during which the coating needs protection from harsh weather.',
      },
      {
        type: 'paragraph',
        content: 'With over 20 years of experience working on [period properties across Exeter and Topsham](/areas/topsham), we understand these complexities. We\'ve successfully applied limewash to listed buildings throughout Devon\'s conservation areas, from Georgian townhouses to medieval cottages.',
      },
      {
        type: 'heading',
        content: 'Colours and Pigments',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Traditional limewash was available in a limited palette of earth tones because it can only be tinted with lime-compatible natural pigments. These include ochres (yellow and red), umbers (brown), siennas (orange-brown), and iron oxide (red). White limewash, created by using pure lime without pigments, was historically the most common.',
      },
      {
        type: 'paragraph',
        content: 'Today\'s limewash can incorporate a wider range of lime-compatible pigments, but the palette remains more restricted than modern paints. This actually works in favour of historic buildings, ensuring colours remain appropriate and sympathetic to their period. For listed buildings and conservation areas, choosing historically accurate colours is often a planning requirement—and it\'s also the right aesthetic choice.',
      },
      {
        type: 'paragraph',
        content: 'The soft, chalky appearance of pigmented limewash is part of its charm. Colours appear more muted and natural than modern paint, developing subtle variations as the coating weathers—exactly the effect you want on a period property.',
      },
      {
        type: 'heading',
        content: 'Maintenance and Longevity',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Limewash typically needs reapplication every 5-7 years, though this varies depending on exposure and local climate. Properties facing prevailing weather or in exposed coastal locations may need more frequent attention. The good news is that reapplication is straightforward—there\'s no stripping or extensive preparation required. You simply apply fresh coats over the existing limewash.',
      },
      {
        type: 'paragraph',
        content: 'This ongoing maintenance might sound like a disadvantage compared to modern paints that claim 10-15 year durability. However, consider this: when modern paint fails on an old building, you face extensive and expensive removal work. When limewash needs refreshing, it\'s a simple, relatively inexpensive process that actually improves the building\'s protection.',
      },
      {
        type: 'paragraph',
        content: 'The cost of limewash application is typically higher than standard masonry paint—expect to pay a premium for both materials and specialist labour. However, for heritage properties, this isn\'t really optional. It\'s the appropriate specification that protects your investment long-term.',
      },
      {
        type: 'heading',
        content: 'Planning Considerations for Listed Buildings',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If your property is listed (and remember, Exeter has 994 listed buildings), you\'ll need Listed Building Consent for any external decoration that affects the building\'s character. Even changing the colour of existing limewash may require consent. The local conservation officer will expect you to use appropriate traditional materials—limewash rather than modern paint.',
      },
      {
        type: 'paragraph',
        content: 'For properties in conservation areas, you typically don\'t need consent for repainting in the same colour and material, but changing colours or materials may require planning permission. Each of Exeter\'s 20 conservation areas has specific guidance, and Topsham\'s conservation area has particularly detailed requirements given the concentration of listed buildings.',
      },
      {
        type: 'paragraph',
        content: 'Working with experienced heritage decorators who understand these regulations is essential. We regularly liaise with conservation officers and can advise on the approval process for your specific property.',
      },
      {
        type: 'heading',
        content: 'Is Limewash Right for Your Property?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If you own a period property in Exeter, Topsham, or the surrounding areas, limewash deserves serious consideration—especially if you\'ve experienced damp problems, if previous modern paint has failed, or if you\'re looking to restore authentic character to your home.',
      },
      {
        type: 'paragraph',
        content: 'The properties we work on in areas like St Leonard\'s, Pennsylvania, and along Topsham\'s waterfront have stood for centuries because they were built with breathable materials and maintained with compatible systems. Continuing that tradition with limewash isn\'t just about heritage compliance—it\'s about giving your building the best chance of standing for centuries more.',
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we\'ve built our reputation on understanding historic buildings and using appropriate traditional techniques. We source quality lime products, prepare surfaces correctly, and apply limewash using time-tested methods that ensure lasting results. Whether you own a Grade II listed townhouse in Exeter\'s city centre or a period cottage in Topsham\'s conservation area, we can help you maintain your property with the care and expertise it deserves.',
      },
      {
        type: 'quoteCTA',
        content: 'Considering limewash for your period property? Contact BSR Decorating for expert advice and a free, no-obligation quote. With over 20 years of experience in heritage decoration across Devon, we\'ll help you make the right choice for your historic home.',
      },
    ],
  },
  'commercial-decorating-exeter-business-owners-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Your business premises make a statement before you say a word. Whether you\'re running a boutique hotel in Cathedral Close, a solicitor\'s office in Southernhay, or a restaurant on Queen Street, the quality of your decorating directly impacts how clients perceive your professionalism. Yet commercial decorating in Exeter comes with unique challenges that many business owners underestimate until they\'re facing disruption, delayed projects, or substandard results.',
      },
      {
        type: 'paragraph',
        content: 'With over 20 years of experience decorating commercial properties across Exeter, we\'ve learned that successful commercial projects require a fundamentally different approach to domestic work. From navigating conservation area restrictions in Exeter\'s 20 designated areas to coordinating around business operations, commercial decorating demands expertise that goes beyond simply applying paint to walls.',
      },
      {
        type: 'heading',
        content: 'Why Commercial Decorating Requires Specialist Expertise',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The distinction between domestic and commercial decorating isn\'t just about scale. Commercial projects involve regulatory requirements, health and safety considerations, and business continuity challenges that residential work doesn\'t face. A [commercial decorator in Exeter](/commercial) needs to understand building regulations, fire safety standards, and accessibility requirements that apply to public-facing premises.',
      },
      {
        type: 'subheading',
        content: 'Health and Safety Compliance',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Commercial decorating projects must comply with the Health and Safety at Work Act and Construction Design and Management Regulations. This means comprehensive risk assessments, method statements, and appropriate insurance coverage. If you\'re operating in a listed building—and Exeter has 994 of them, including many in the city centre—your decorator needs to understand heritage regulations alongside modern safety requirements.',
      },
      {
        type: 'paragraph',
        content: 'For businesses in St David\'s, which contains 380 listed buildings, or Topsham with its 228 listed properties, finding a [decorator who understands both conservation requirements](/blog/topsham-conservation-area-decorating-guide) and commercial standards is essential. The wrong approach can result in enforcement action from Exeter City Council, as demonstrated by the £38,000 fine issued to a Topsham property owner in December 2025 for unlawful alterations.',
      },
      {
        type: 'subheading',
        content: 'Minimal Business Disruption',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Every hour your business premises is inaccessible costs money. Experienced commercial decorators plan projects around your operational needs, working evenings, weekends, or during quiet periods to minimise disruption. This requires meticulous scheduling, efficient work practices, and the flexibility to adapt if business needs change.',
      },
      {
        type: 'paragraph',
        content: 'We\'ve decorated active restaurants in Exeter\'s Cathedral Quarter, working room by room so service continues uninterrupted. We\'ve completed office refurbishments in Southernhay over weekends so staff return Monday morning to refreshed premises. This level of coordination requires experience and reliability that not all decorators can provide.',
      },
      {
        type: 'heading',
        content: 'Key Considerations for Exeter Commercial Properties',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Location-Specific Challenges',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s commercial properties present unique challenges depending on their location. Period buildings in conservation areas require breathable paints and traditional techniques. Modern office developments like those around Exeter Business Park need durable, low-maintenance finishes. Retail premises on High Street or Princesshay demand quick turnarounds between tenancies.',
      },
      {
        type: 'paragraph',
        content: 'Waterfront properties, particularly in the Quayside area, face humidity and weather exposure similar to [Topsham\'s riverside locations](/areas/topsham). These require specialist paint systems designed for Devon\'s coastal climate—not the standard products that might work adequately in drier regions but fail prematurely here.',
      },
      {
        type: 'subheading',
        content: 'Paint Selection for Commercial Environments',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Commercial environments need paint that withstands heavy use, frequent cleaning, and maintains appearance longer than residential properties. High-traffic areas like reception spaces, corridors, and staircases require scrubbable, durable finishes. Healthcare and food service premises need antimicrobial coatings that meet hygiene standards.',
      },
      {
        type: 'paragraph',
        content: 'We increasingly recommend eco-friendly, low-VOC paints for commercial premises. These improve indoor air quality—essential for employee wellbeing and productivity—and align with corporate sustainability commitments. For businesses pursuing environmental certifications, paint choices become part of your broader green credentials.',
      },
      {
        type: 'heading',
        content: 'The Commercial Decorating Process',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Initial Consultation and Site Survey',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional commercial decorating begins with a thorough site survey. This identifies structural issues, assesses existing finishes, notes any heritage or conservation considerations, and determines access requirements. For multi-storey buildings or properties in Exeter\'s narrow historic streets, access equipment and parking logistics become critical planning elements.',
      },
      {
        type: 'paragraph',
        content: 'During consultation, we discuss your business operations, deadlines, and budget parameters. A restaurant needs completion before peak season. A retailer needs work finished before a product launch. A hotel requires a phased approach so rooms remain available. Understanding these commercial pressures allows us to develop realistic, achievable project plans.',
      },
      {
        type: 'subheading',
        content: 'Specification and Quotation',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Commercial quotes should be detailed and transparent, itemising materials, labour, access equipment, and any specialist requirements. Vague estimates lead to disputes and budget overruns. A proper specification includes paint systems (primer, undercoat, topcoat), application methods, number of coats, and surface preparation requirements.',
      },
      {
        type: 'paragraph',
        content: 'For listed buildings or premises in conservation areas, the specification must address heritage requirements. This might include using breathable mineral paints, traditional methods, or specific colour palettes approved by conservation officers. These considerations affect both cost and timescale, which is why early specialist input saves time and money.',
      },
      {
        type: 'subheading',
        content: 'Project Delivery and Handover',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'During the project, regular communication keeps you informed of progress and any issues that arise. Professional commercial decorators maintain clean, safe work areas, protect your fixtures and fittings, and respect your premises and customers. When complete, a thorough handover includes touching up any marks, removing all materials and equipment, and leaving your premises ready for immediate use.',
      },
      {
        type: 'heading',
        content: 'Typical Commercial Decorating Costs in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Commercial decorating costs vary significantly based on property size, condition, access requirements, and finish specifications. However, some typical Exeter prices for common commercial projects include:',
      },
      {
        type: 'list',
        content: [
          'Small office (single room): £500-£800 depending on preparation required',
          'Restaurant dining area (medium-sized): £2,000-£4,000 including preparation and durable finishes',
          'Retail unit (standard high street shop): £1,500-£3,500 depending on size and condition',
          'Hotel bedroom refresh: £400-£700 per room for walls, ceiling, and woodwork',
          'Office building exterior: £3,000-£8,000+ depending on building height and access requirements',
          'Heritage property specialist work: From £35-£45 per hour for skilled conservation decorating',
        ],
      },
      {
        type: 'paragraph',
        content: 'These figures are indicative. Detailed quotations depend on specific requirements, but they provide useful budgeting guidance. Projects requiring evening or weekend work to avoid business disruption may incur premium rates, but this cost is often offset by avoiding lost trading revenue.',
      },
      {
        type: 'heading',
        content: 'Questions to Ask Your Commercial Decorator',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Choosing the right commercial decorator in Exeter requires asking the right questions. Before committing to any contractor, establish:',
      },
      {
        type: 'list',
        content: [
          'Do they have commercial liability insurance adequate for your premises and business?',
          'Can they provide references from similar commercial projects in Exeter?',
          'Do they understand heritage and conservation requirements if your building is listed or in a conservation area?',
          'How will they minimise disruption to your business operations?',
          'What is their approach to health and safety, and can they provide method statements and risk assessments?',
          'Do they have experience with your specific property type—whether retail, hospitality, office, or industrial?',
          'What guarantees do they offer on their work?',
          'How do they handle unexpected issues or variations to the original specification?',
        ],
      },
      {
        type: 'paragraph',
        content: 'A professional commercial decorator will answer these questions confidently and provide documentation to support their claims. Hesitation or vague responses should raise concerns about their suitability for commercial work.',
      },
      {
        type: 'heading',
        content: 'The Benefits of Using Local Exeter Decorators',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Local commercial decorators offer distinct advantages for Exeter businesses. We understand the city\'s unique characteristics—from navigating narrow medieval streets with equipment to knowing which local suppliers stock heritage-appropriate materials quickly. We\'re familiar with Exeter City Council\'s planning and conservation departments, which streamlines any necessary approvals.',
      },
      {
        type: 'paragraph',
        content: 'Local decorators also have reputations to protect within the community. We\'re accountable not just for the duration of a contract, but for the long term. If issues arise months after completion, a local decorator can return quickly to address them. This ongoing relationship provides peace of mind that national contractors cannot match.',
      },
      {
        type: 'paragraph',
        content: 'For businesses expanding across multiple Exeter locations—whether you\'re opening a second restaurant, refurbishing hotel rooms in phases, or maintaining multiple retail units—working with the same decorator ensures consistency in quality and finish across all your premises.',
      },
      {
        type: 'heading',
        content: 'Making Your Commercial Decorating Project a Success',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Successful commercial decorating projects in Exeter require three elements: a decorator with genuine commercial expertise, clear communication throughout the project, and realistic planning that accounts for your business needs and any property constraints.',
      },
      {
        type: 'paragraph',
        content: 'The difference between adequate decorating and exceptional results often comes down to experience—knowing which paint systems suit Devon\'s climate, understanding how to work efficiently in occupied premises, and anticipating problems before they cause delays or budget overruns.',
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re refreshing a boutique hotel in the Cathedral Quarter, updating solicitors\' offices in Southernhay, or preparing a retail unit for new tenants on Fore Street, choosing a decorator who understands commercial requirements and Exeter\'s unique property landscape ensures your investment enhances your business rather than disrupting it.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning a commercial decorating project in Exeter? BSR Decorating brings over 20 years of experience working with businesses across the city, from heritage properties to modern offices. Contact us for a free, no-obligation consultation and detailed quotation tailored to your business needs.',
      },
    ],
  },
  'best-exterior-paint-devon-coastal-weather': {
    sections: [
      {
        type: 'paragraph',
        content: 'Living in Devon means enjoying stunning coastal views, historic architecture, and a mild maritime climate. But that same weather that makes our region so beautiful also creates unique challenges for exterior paintwork. Whether you\'re maintaining a Georgian townhouse in Exeter\'s St Leonard\'s conservation area, a waterfront property in Topsham, or a coastal home in Dawlish, choosing the right exterior paint isn\'t just about colour—it\'s about protection, longevity, and value.',
      },
      {
        type: 'paragraph',
        content: 'After more than 20 years decorating properties across Devon, we\'ve seen firsthand which paints perform and which fail. The best paint for Devon weather needs to handle salt-laden air, high humidity, driving rain from the southwest, and occasional summer heat—all whilst protecting your property\'s fabric and maintaining its appearance. This guide shares what we\'ve learned from thousands of projects across Exeter, Topsham, and the surrounding areas.',
      },
      {
        type: 'heading',
        content: 'Why Devon\'s Climate Is Particularly Challenging for Exterior Paint',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s coastal location creates a perfect storm of conditions that test exterior paintwork. Understanding these challenges helps explain why generic paint recommendations from national retailers often fall short for our region.',
      },
      {
        type: 'subheading',
        content: 'Salt Air and Coastal Exposure',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Properties within 10 miles of the coast—which includes most of Exeter, all of Topsham, and certainly Dawlish and Exmouth—are constantly exposed to airborne salt particles. These microscopic crystals are highly corrosive and hygroscopic, meaning they attract and hold moisture against painted surfaces. This accelerates paint degradation, causes premature chalking and fading, and can lead to substrate damage if the paint film fails.',
      },
      {
        type: 'paragraph',
        content: 'We see this most dramatically on properties facing prevailing southwesterly winds. Homes along Topsham\'s waterfront, for example, or properties on elevated positions in Exeter like Pennsylvania and Heavitree, receive particularly intense exposure. The 228 listed buildings in Topsham require especially careful paint selection, as many feature lime renders and historic substrates that need breathable protection.',
      },
      {
        type: 'subheading',
        content: 'High Rainfall and Humidity',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Devon receives approximately 900-1,000mm of rainfall annually, with autumn and winter seeing the heaviest downpours. This persistent moisture creates several problems for exterior paintwork: prolonged drying times between rain events, increased risk of moisture penetration through any paint defects, algae and mould growth on north-facing and shaded elevations, and substrate movement in timber as moisture levels fluctuate.',
      },
      {
        type: 'paragraph',
        content: 'The humidity rarely drops significantly even during dry spells, which means painted surfaces never fully dry out. This is why choosing paints with excellent moisture resistance and good breathability is crucial for Devon properties.',
      },
      {
        type: 'subheading',
        content: 'Temperature Fluctuations and UV Exposure',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Whilst Devon enjoys a mild climate overall, we still experience temperature swings that cause expansion and contraction in painted substrates. Summer temperatures can reach the mid-twenties with intense UV exposure, particularly on south-facing elevations. Winter rarely brings severe frost, but damp cold penetrates building fabric. These cycles stress paint films, and lower-quality products will crack, peel, or lose adhesion within just a few years.',
      },
      {
        type: 'heading',
        content: 'The Best Paint Types for Devon\'s Coastal Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Not all exterior paints are created equal. For Devon properties, three paint systems consistently outperform others: high-quality masonry paints for rendered and brick surfaces, breathable silicate paints for period and listed properties, and premium exterior wood paints for joinery and cladding. Let\'s examine each in detail.',
      },
      {
        type: 'subheading',
        content: 'Premium Masonry Paints: Your First Line of Defence',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For most modern rendered properties and brickwork, a premium masonry paint with specific weather-resistant properties delivers the best results. We consistently specify paints with these characteristics: advanced acrylic or acrylic-silicone resin technology, high breathability rating to allow moisture vapour transmission, integrated fungicidal and algicidal protection, excellent dirt shedding properties, and proven 15-year plus performance in coastal environments.',
      },
      {
        type: 'paragraph',
        content: 'Products like Dulux Weathershield, Johnstone\'s Stormshield, and Crown Timonox Technology have all performed exceptionally well on properties we\'ve decorated across Exeter and Topsham. These aren\'t budget options—expect to pay £50-80 per 10-litre tin—but the longevity justifies the investment. On a typical three-bedroom semi-detached house in Heavitree or Newtown, the difference between premium and standard masonry paint might be £200-300, but the premium option could last 8-10 years longer.',
      },
      {
        type: 'subheading',
        content: 'Breathable Silicate Paints for Period Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For Devon\'s extensive heritage housing stock—including the 994 listed buildings across Exeter and properties within its 20 conservation areas—breathable silicate paints often provide the best solution. These mineral-based paints chemically bond with lime renders, stone, and brick, creating a crystalline structure that allows maximum moisture vapour transmission whilst remaining waterproof.',
      },
      {
        type: 'paragraph',
        content: 'Silicate paints are particularly suitable for: pre-1919 properties with solid walls and lime-based renders, listed buildings where planning guidance recommends breathable systems, properties with historic damp or salt contamination issues, and stone elevations common in older Exeter and Topsham properties. We\'ve used Keim, Earthborn, and Bauwerk silicate systems extensively on [period properties throughout Topsham](/areas/topsham) and Exeter\'s historic quarters, with excellent results even in exposed coastal locations.',
      },
      {
        type: 'paragraph',
        content: 'These paints require specialist application—the substrate must be highly alkaline and properly prepared—but they offer exceptional durability, often 20-25 years in our climate. They\'re also naturally resistant to algae and atmospheric pollution, maintaining their appearance with minimal maintenance.',
      },
      {
        type: 'subheading',
        content: 'Premium Exterior Wood Paints and Stains',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s humidity is particularly challenging for exterior joinery. Windows, doors, fascias, and weatherboarding all suffer from moisture-related movement and potential decay. The best paint for Devon weather when protecting timber includes: flexible acrylic or alkyd formulations that accommodate timber movement, excellent water shedding to prevent moisture ingress, UV-stable pigments to prevent fading and chalking, and low-sheen or satin finishes that hide minor imperfections and disguise maintenance intervals better than gloss.',
      },
      {
        type: 'paragraph',
        content: 'For high-quality results, we typically use Sadolin, Sikkens, Teknos, or Dulux Trade systems. These professional-grade products cost more than retail alternatives, but they\'re formulated for extreme weather exposure. On a property with, for example, 12 timber sash windows, the material cost difference might be £150-200, but the professional product could extend the repainting cycle from 4-5 years to 8-10 years.',
      },
      {
        type: 'paragraph',
        content: 'For properties with substantial timber elements, we often recommend microporous stain systems rather than paint. These allow even greater moisture vapour transmission, which is ideal for Devon\'s humid conditions, though they require more frequent maintenance.',
      },
      {
        type: 'heading',
        content: 'Paint Colours That Work Best in Devon\'s Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Colour selection affects more than just aesthetics. In Devon\'s climate, certain colours and tones perform better than others from both a practical and visual perspective.',
      },
      {
        type: 'subheading',
        content: 'Light to Mid-Tone Colours',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Lighter colours reflect rather than absorb solar radiation, reducing surface temperatures and minimising expansion-contraction cycles. This extends paint life. Mid-tones in whites, creams, soft greys, and muted earth colours are traditional across Devon for good reason—they\'re proven performers. These shades also complement the local architectural palette, particularly important if you\'re decorating a property in one of Exeter\'s conservation areas where planning guidance may influence colour choice.',
      },
      {
        type: 'subheading',
        content: 'Consider Algae Resistance',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Darker colours, particularly greens and blues, tend to show algae growth more readily than lighter tones. If you\'re set on a darker shade, ensure you\'re using a premium paint with strong algicidal properties, and accept that north-facing elevations may need more frequent cleaning. We see this frequently on properties in sheltered locations or near trees, where persistent shade and poor air circulation exacerbate the problem.',
      },
      {
        type: 'heading',
        content: 'Preparation: The Foundation of Long-Lasting Exterior Paintwork',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Even the best paint for Devon weather will fail if applied to poorly prepared surfaces. Professional preparation typically accounts for 60-70% of the total time on an [exterior painting project in Exeter](/areas/exeter/exterior-painting), but it\'s what determines whether your paint lasts 5 years or 15 years.',
      },
      {
        type: 'list',
        content: [
          'Thorough cleaning to remove dirt, algae, salt deposits, and organic growth using appropriate biocidal washes',
          'Careful scraping and sanding to remove loose or failing existing paint whilst creating sound edges',
          'Filling and repair of substrate defects—cracks in render, blown areas, damaged pointing—before any paint is applied',
          'Application of appropriate stabilising primers and sealers, particularly important on porous or previously unpainted masonry',
          'Treatment of specific problems like knots in timber, rust on metal details, or efflorescence on masonry',
        ],
      },
      {
        type: 'paragraph',
        content: 'On period properties, preparation becomes even more critical. Many of the listed buildings across Topsham and Exeter\'s historic wards have been painted numerous times over decades or centuries, creating complex substrate conditions that require careful assessment and specialist treatment.',
      },
      {
        type: 'heading',
        content: 'When to Paint: Timing Your Project for Devon\'s Weather',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Even with the best products, timing matters enormously in our climate. External painting requires dry conditions not just during application, but for several days afterwards to allow proper curing.',
      },
      {
        type: 'paragraph',
        content: 'Late spring through early autumn—roughly May through September—offers the most reliable weather windows. We typically avoid November through February entirely for exterior work, as the combination of short days, frequent rain, and high humidity makes achieving good results extremely difficult. March, April, and October are borderline months where we\'ll work if a settled high-pressure system is forecast, but we build flexibility into project schedules.',
      },
      {
        type: 'paragraph',
        content: 'For properties with significant exposure to prevailing weather—waterfront homes in Topsham, elevated properties in Exeter, or coastal properties in Dawlish—we\'re even more selective about timing, as these locations need longer curing periods before rain exposure.',
      },
      {
        type: 'heading',
        content: 'The True Cost of Exterior Painting in Devon',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Exeter homeowners can expect to pay approximately £1,728 for painting a typical house exterior, though this varies considerably based on property size, condition, and access. This figure reflects the reality of using quality materials suitable for Devon\'s climate and proper professional preparation.',
      },
      {
        type: 'paragraph',
        content: 'Breaking this down, materials typically account for 25-30% of the total cost, with labour, equipment, and expertise making up the remainder. Using premium paints might add 15-20% to the materials cost, but can double the lifespan of the finish—making it significantly more economical over time.',
      },
      {
        type: 'paragraph',
        content: 'For larger properties, particularly the substantial Victorian and Edwardian houses common in areas like Pennsylvania and St Leonard\'s, costs can reach £3,000-5,000 or more. Listed properties often command higher prices due to the need for breathable paint systems, more extensive preparation, and specialist knowledge of historic building materials.',
      },
      {
        type: 'heading',
        content: 'Why Professional Application Matters in Coastal Conditions',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'We occasionally see properties where homeowners have attempted exterior painting themselves using retail products, often with disappointing results within 2-3 years. In Devon\'s demanding climate, professional application isn\'t a luxury—it\'s essential for achieving the performance that quality paints are capable of delivering.',
      },
      {
        type: 'paragraph',
        content: 'Professional decorators bring: understanding of which paint systems suit specific substrates and exposure conditions, proper surface preparation equipment and techniques, knowledge of application methods that ensure full coverage and proper film thickness, experience reading weather conditions and knowing when it\'s safe to paint, and access to trade-quality materials often unavailable to the public. These factors combine to determine whether your exterior painting investment lasts 5 years or 15 years.',
      },
      {
        type: 'heading',
        content: 'Protecting Your Devon Property for the Long Term',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Choosing the best paint for Devon weather means understanding our unique coastal climate, selecting proven products formulated for extreme exposure, ensuring thorough professional preparation, and timing the work for optimal weather conditions. Whether you\'re maintaining a modern home in one of Exeter\'s newer developments or caring for a listed property in Topsham\'s conservation area, the right approach to exterior painting protects your investment whilst maintaining the character that makes Devon properties so distinctive.',
      },
      {
        type: 'paragraph',
        content: 'With over 20 years\' experience decorating properties across Exeter, Topsham, Dawlish, and surrounding areas, BSR Decorating has developed an in-depth understanding of which paint systems perform in our challenging coastal environment. We work exclusively with premium products suited to Devon\'s climate, and we take the time to prepare surfaces properly—because we know that\'s what determines whether your paintwork looks good for 5 years or 15 years.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning exterior painting for your Devon property? Contact BSR Decorating for expert advice and a free, no-obligation quote. We\'ll recommend the best paint system for your specific property, location, and budget—backed by more than two decades of local experience.',
      },
    ],
  },
  'spring-exterior-painting-devon-complete-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Spring is the busiest season for exterior painting in Devon, and for good reason. After months of winter rain and coastal winds, homeowners across Exeter, Topsham, and Dawlish are eager to refresh their properties. But successful exterior painting in Devon requires more than just waiting for a sunny day. Our maritime climate, with its salt-laden air and unpredictable weather patterns, demands careful timing, proper preparation, and the right materials to ensure your paintwork lasts for years rather than months.',
      },
      {
        type: 'paragraph',
        content: 'With over 20 years of experience painting homes throughout Devon, we\'ve learned that the difference between a paint job that looks beautiful for a decade and one that starts peeling within two years often comes down to understanding our local climate and choosing the right window of opportunity. This guide shares everything you need to know about spring exterior painting in Devon, from timing your project perfectly to selecting paints that can withstand our coastal weather.',
      },
      {
        type: 'heading',
        content: 'Why Spring Is Prime Time for Exterior Painting in Devon',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s weather patterns make spring the optimal season for exterior painting, but it\'s a narrow window that requires careful planning. Unlike interior work that can happen year-round, exterior painting depends entirely on weather conditions, and spring offers the goldilocks zone of temperature, humidity, and dry spells that paint needs to cure properly.',
      },
      {
        type: 'subheading',
        content: 'The Weather Window: March Through May',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'In Devon, the ideal exterior painting window typically runs from mid-March through the end of May, with April often providing the most consistent conditions. During these months, temperatures reliably sit between 10°C and 20°C during the day, perfect for paint application and curing. More importantly, we usually see stretches of 3-5 dry days, the minimum needed for proper paint adhesion and initial curing before inevitable Devon drizzle returns.',
      },
      {
        type: 'paragraph',
        content: 'By June, summer rain patterns begin, and whilst June through August remains busy for exterior work, you\'re increasingly gambling on weather forecasts. Properties in coastal areas like Topsham\'s waterfront homes or Dawlish seafront face additional challenges from sea mist and higher humidity, making the drier spring months even more critical.',
      },
      {
        type: 'subheading',
        content: 'Avoiding the Booking Rush',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Every decorator in Devon knows that March and April phone calls spike dramatically. Homeowners emerge from winter, notice their peeling paintwork, and want it sorted immediately. By mid-April, reputable decorators are typically booked 4-6 weeks out, pushing your project into late May or even June when weather becomes less predictable.',
      },
      {
        type: 'paragraph',
        content: 'The savvy approach? Contact decorators in January or February to schedule spring work. You\'ll have your choice of dates within that optimal weather window, and you can plan around holidays or events. We always recommend booking [exterior painting in Exeter](/areas/exeter/exterior-painting) well in advance to secure the best timing.',
      },
      {
        type: 'heading',
        content: 'Understanding Devon\'s Climate Challenges',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s location on the southwest coast creates a unique microclimate that\'s kind to gardens but challenging for exterior paintwork. Understanding these factors helps explain why proper timing and paint selection matter so much here compared to drier, more sheltered parts of the UK.',
      },
      {
        type: 'subheading',
        content: 'Salt Air and Coastal Exposure',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Homes within 10 miles of the coast, which includes most of Exeter, all of Topsham, and obviously Dawlish and Exmouth, face accelerated paint degradation from salt-laden air. Salt is hygroscopic, meaning it draws moisture from the air, keeping painted surfaces slightly damp even on dry days. This constant low-level moisture accelerates the breakdown of paint binders and promotes mould growth.',
      },
      {
        type: 'paragraph',
        content: 'Properties directly on the waterfront, such as those along the Exe Estuary in Topsham or seafront homes in Dawlish, need specialist attention. Standard masonry paints simply don\'t perform well enough in these locations. This is why we always specify high-quality, breathable masonry paints with superior moisture resistance for coastal properties.',
      },
      {
        type: 'subheading',
        content: 'High Humidity and Breathability',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Devon\'s average humidity hovers around 80-85%, significantly higher than the UK average of 75%. This constant moisture in the air means exterior walls never fully dry out, particularly on north-facing elevations that receive minimal sun.',
      },
      {
        type: 'paragraph',
        content: 'For Devon homes, especially the 994 listed buildings in Exeter and period properties throughout Topsham, breathability is non-negotiable. Modern plastic-based paints create an impermeable barrier that traps moisture inside walls, leading to damp problems, internal plaster damage, and paint failure. Traditional lime-based renders and solid stone or cob walls must breathe to release moisture vapour, making breathable masonry paints and specialist heritage paints essential.',
      },
      {
        type: 'heading',
        content: 'Preparing Your Devon Home for Exterior Painting',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Proper preparation accounts for 70% of a successful exterior paint job. In Devon\'s climate, cutting corners on prep work guarantees premature paint failure, regardless of how expensive your paint is or how skilled your decorator.',
      },
      {
        type: 'subheading',
        content: 'Surface Assessment and Cleaning',
        level: 3,
      },
      {
        type: 'list',
        content: [
          'Remove all loose and flaking paint using scrapers and wire brushes. In coastal areas, check particularly carefully around window frames and sills where salt accumulation causes accelerated deterioration.',
          'Wash down all surfaces with a fungicidal wash to kill mould, algae, and lichen. These organisms thrive in Devon\'s damp climate and will grow straight through new paint if not properly treated.',
          'Allow walls to dry thoroughly. This is crucial in spring when walls have absorbed months of winter rain. Ideally, you want at least three consecutive dry days before painting begins, plus one more day of drying after washing down.',
          'Check for and repair any cracks, gaps, or damaged render. Water ingress through these defects will undermine even the best paintwork.',
        ],
      },
      {
        type: 'subheading',
        content: 'Special Considerations for Period Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'If you own one of Exeter\'s 228 listed buildings in Topsham, a Georgian terrace in St Leonard\'s, or a Victorian villa in Pennsylvania, preparation becomes even more critical. These properties often have lime render, soft red sandstone, or cob walls that require specialist knowledge.',
      },
      {
        type: 'paragraph',
        content: 'Modern preparation techniques like pressure washing can cause significant damage to soft historic materials. Instead, gentle hand washing with appropriate cleaning solutions protects the fabric of the building whilst achieving the necessary cleanliness for paint adhesion. Our [heritage property painting service](/areas/exeter/heritage-property-painting) specialises in these traditional techniques.',
      },
      {
        type: 'heading',
        content: 'Choosing the Right Paint for Devon Weather',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Walk into any trade paint supplier and you\'ll face dozens of exterior paint options, but in Devon\'s climate, your choices narrow considerably if you want paintwork that lasts. The wrong paint, however well-applied, will fail within 2-3 years. The right paint, properly applied, should give you 8-10 years of protection.',
      },
      {
        type: 'subheading',
        content: 'Modern Masonry Paints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For conventional rendered properties, particularly post-1950s homes with cement render, high-quality masonry paints offer excellent performance. Look for paints with these characteristics suited to Devon conditions:',
      },
      {
        type: 'list',
        content: [
          'High breathability ratings (SD value below 1 metre) to allow moisture vapour transmission',
          'Superior water resistance to shed Devon\'s frequent rain',
          'Flexible formulations that accommodate the expansion and contraction from our temperature variations',
          'Anti-fungal additives to resist mould and algae growth in our humid climate',
          'UV resistance for south-facing elevations that get full sun exposure',
        ],
      },
      {
        type: 'paragraph',
        content: 'Premium brands cost 40-60% more than budget alternatives, but they contain higher pigment concentrations and better binders, meaning better coverage, superior adhesion, and significantly longer lifespan. On a typical three-bedroom semi in Exeter, the price difference might be £150-200, but the performance difference easily translates to 3-4 extra years before repainting.',
      },
      {
        type: 'subheading',
        content: 'Heritage and Lime-Based Paints',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period properties with traditional lime renders, cob walls, or soft stone require breathable paint systems. Lime wash and modern breathable masonry paints specifically formulated for heritage buildings allow moisture to evaporate naturally whilst providing weather protection.',
      },
      {
        type: 'paragraph',
        content: 'These paints work with the building rather than against it, a philosophy that\'s kept Devon\'s historic buildings standing for centuries. They\'re more expensive and require specialist application knowledge, but for properties in Topsham\'s conservation area or Exeter\'s 20 conservation areas, they\'re often the only appropriate choice.',
      },
      {
        type: 'heading',
        content: 'The Painting Process: What to Expect',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding the process helps you plan properly and recognise quality work. A typical spring exterior painting project in Devon follows a structured approach that prioritises weather-dependent activities and ensures proper curing time between coats.',
      },
      {
        type: 'subheading',
        content: 'Timeline and Weather Dependency',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For an average three-bedroom semi-detached house in Exeter, expect the exterior painting to take 5-7 working days in ideal conditions, but weather can extend this considerably. The process typically breaks down as follows: 1-2 days for preparation and repairs, 1 day for washing down and drying time, 1 day for primer/stabiliser coat, 2 days for first top coat, 2 days for second top coat (with drying time between).',
      },
      {
        type: 'paragraph',
        content: 'Each coat needs minimum 24 hours to cure before the next application, and that\'s only in good conditions. If drizzle arrives overnight or humidity stays above 85%, you may need to wait an extra day. This is why spring\'s more stable weather patterns make such a difference to project timelines.',
      },
      {
        type: 'subheading',
        content: 'Quality Indicators',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional decorators will stop work if conditions aren\'t suitable, even if it means project delays. Paint manufacturers specify minimum temperatures (usually 5°C rising) and maximum humidity (typically 85%) for application. Painting outside these parameters guarantees problems, regardless of paint quality.',
      },
      {
        type: 'paragraph',
        content: 'You should also see proper surface preparation before any paint touches the wall, appropriate primers for different substrates, genuine two-coat systems rather than one thick coat, and careful attention to details like window frames, soffits, and drainage pipes.',
      },
      {
        type: 'heading',
        content: 'Cost Considerations for Exterior Painting in Devon',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Based on current Exeter market rates, expect to pay around £1,728 for painting a typical house exterior, though this varies significantly based on property size, condition, and specific requirements. A modest Victorian terrace in Heavitree might cost £1,200-1,500, whilst a larger detached property in Topsham could easily reach £2,500-3,500.',
      },
      {
        type: 'paragraph',
        content: 'Several factors influence final costs in Devon specifically. Scaffolding access for two-storey properties adds £400-800 depending on the property. Properties in conservation areas requiring specialist heritage paints and techniques typically cost 25-40% more than standard work. Extensive preparation on neglected properties where paintwork hasn\'t been maintained can add 30-50% to baseline costs. Coastal properties requiring premium paint specifications and additional preparation may see 15-20% premiums.',
      },
      {
        type: 'paragraph',
        content: 'The cheapest quote is rarely the best value for exterior painting in Devon. Paint failure means completely repainting within 2-3 years, doubling your actual cost. Quality work with proper materials should last 8-10 years, making it significantly cheaper over time. For a detailed breakdown of local pricing, see our guide on [how much a painter and decorator costs in Exeter](/blog/how-much-painter-decorator-cost-exeter).',
      },
      {
        type: 'heading',
        content: 'Planning Your Spring Exterior Painting Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Success with spring exterior painting in Devon comes down to three factors: early booking to secure optimal weather windows, choosing decorators with proven local experience who understand our climate challenges, and specifying appropriate paint systems for your property type and location.',
      },
      {
        type: 'paragraph',
        content: 'Start planning in January or February for March-May painting. Get multiple quotes, but focus on understanding what\'s included rather than just comparing prices. Ask about preparation methods, paint specifications, weather contingency plans, and guarantees. A decorator who can explain why certain approaches work better in Devon\'s climate demonstrates the expertise you need.',
      },
      {
        type: 'paragraph',
        content: 'Check that decorators have experience with your property type. Period properties, coastal homes, and modern builds all have different requirements. For properties in Exeter\'s conservation areas or Topsham\'s listed buildings, ensure your decorator has proven heritage experience.',
      },
      {
        type: 'quote',
        content: 'The best exterior painting investment you can make in Devon isn\'t the most expensive paint or the cheapest quote. It\'s choosing someone who understands our coastal climate, plans projects around our weather patterns, and specifies materials that work with your specific property.',
      },
      {
        type: 'paragraph',
        content: 'With over 20 years painting homes throughout Exeter, Topsham, and Dawlish, BSR Decorating understands exactly what works in Devon\'s unique climate. We plan projects to maximise those precious spring weather windows, specify paint systems proven to last in our coastal conditions, and never compromise on preparation regardless of schedule pressures.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning exterior painting this spring? Contact BSR Decorating for expert advice and a free, no-obligation quote. We\'ll help you choose the right timing, materials, and approach for your Devon property.',
      },
    ],
  },
  'topsham-conservation-area-decorating-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Topsham is one of Devon\'s most beautiful historic towns, with 228 listed buildings and a conservation area that protects its unique Georgian and Victorian character. If you own a property in Topsham\'s conservation area, you\'ll know that decorating isn\'t quite as straightforward as it might be elsewhere. The rules exist for good reason—to preserve the architectural heritage that makes Topsham so special—but they can feel confusing if you\'ve never navigated them before.',
      },
      {
        type: 'paragraph',
        content: 'As decorators with over 20 years\' experience working on [heritage properties across Topsham](/areas/topsham), we\'ve helped dozens of homeowners transform their period homes whilst staying fully compliant with conservation area regulations. This guide will walk you through everything you need to know about decorating a listed or conservation area property in Topsham, from what requires planning permission to which materials and paint colours work best.',
      },
      {
        type: 'heading',
        content: 'Understanding Topsham Conservation Area',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'The Topsham Conservation Area was designated to protect the town\'s historic character, particularly its wealth of 18th and 19th century buildings along the Strand, Fore Street, and the streets leading up from the Exe Estuary. Properties here include everything from modest fishermen\'s cottages to grand Georgian townhouses, many constructed from the local red sandstone or rendered and painted in traditional colours.',
      },
      {
        type: 'paragraph',
        content: 'Living in a conservation area means certain alterations to your property\'s exterior require planning permission from East Devon District Council, even if those same changes would be permitted development elsewhere. The goal is to ensure that any work respects the historic character of the area and doesn\'t harm the appearance of the building or its surroundings.',
      },
      {
        type: 'paragraph',
        content: 'It\'s worth noting that conservation area status is separate from listed building status. A property can be in a conservation area without being listed, or it can be both. Across Exeter\'s 20 conservation areas, there are 994 listed buildings in total, with Topsham accounting for 228 of these—the second-highest concentration in the city after St David\'s.',
      },
      {
        type: 'heading',
        content: 'What Decorating Work Requires Permission?',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'External Changes That Need Consent',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'In Topsham\'s conservation area, you\'ll typically need planning permission or listed building consent for:',
      },
      {
        type: 'list',
        content: [
          'Changing the colour of external paintwork on a listed building (even repainting in the same colour may require consent)',
          'Rendering or re-rendering external walls, or changing the type of render',
          'Removing or replacing original windows, doors, or other architectural features',
          'Adding new external features like satellite dishes on front elevations',
          'Demolishing walls, chimneys, or outbuildings',
          'Installing new roof lights or altering the roofline',
        ],
      },
      {
        type: 'paragraph',
        content: 'The rules are particularly strict for listed buildings. A Topsham property owner was fined £38,000 in December 2025 for making unauthorised alterations to a listed building—a reminder that the council takes enforcement seriously.',
      },
      {
        type: 'subheading',
        content: 'Internal Work and Permitted Changes',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Generally speaking, internal decorating work in a conservation area property doesn\'t require permission unless the building is listed. You\'re free to paint internal walls, change colour schemes, hang wallpaper, and refresh woodwork without seeking consent.',
      },
      {
        type: 'paragraph',
        content: 'However, if your property is listed, you\'ll need listed building consent for internal alterations that affect the character of the building, such as removing original plasterwork, stripping historic paint layers, or altering original features like panelling or fireplaces.',
      },
      {
        type: 'paragraph',
        content: 'For rear elevations and areas not visible from public streets, the rules are sometimes more relaxed, but it\'s always worth checking with the council before proceeding. What seems like a minor change to you might be significant from a heritage perspective.',
      },
      {
        type: 'heading',
        content: 'Choosing the Right Paint and Materials',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Why Traditional Materials Matter',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period properties in Topsham were built using breathable materials—lime mortar, lime plaster, and porous stone or brick. These materials allow moisture to move through the walls naturally, preventing damp from becoming trapped inside the structure. Modern masonry paints and cement renders create an impermeable barrier that can trap moisture, leading to damp problems, blown render, and internal decay.',
      },
      {
        type: 'paragraph',
        content: 'This is why conservation officers often insist on breathable paints and lime-based materials for listed buildings and properties in conservation areas. It\'s not about being difficult—it\'s about protecting the building\'s long-term health.',
      },
      {
        type: 'subheading',
        content: 'Best Paint Types for Topsham Properties',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'For external walls on period properties, we typically recommend:',
      },
      {
        type: 'list',
        content: [
          'Limewash: The most breathable option, perfect for listed buildings. Available in traditional heritage colours.',
          'Mineral paints: Highly breathable silicate-based paints that bond chemically to the substrate. Excellent durability in coastal climates.',
          'Breathable masonry paint: Modern paints specifically designed to allow moisture vapour transmission whilst providing weather protection.',
          'Traditional oil-based paints: For timber windows, doors, and other woodwork on heritage properties.',
        ],
      },
      {
        type: 'paragraph',
        content: 'For internal walls, you have more flexibility, though many homeowners choose breathable emulsions or traditional distemper paints to maintain the authentic character of their period home. We cover the technical details in our guide to [the best paint types for period properties](/blog/best-paint-types-exeter-homes).',
      },
      {
        type: 'subheading',
        content: 'Heritage Colour Palettes',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s historic character is partly defined by its traditional colour palette—soft creams, whites, warm ochres, and the occasional deep red or grey-green. If you\'re repainting a listed building\'s exterior, the conservation officer will likely want to approve your colour choice.',
      },
      {
        type: 'paragraph',
        content: 'Period paint manufacturers like Farrow & Ball, Little Greene, and Papers & Paints offer heritage ranges that are pre-approved for many conservation areas. These colours are based on historical analysis of pigments used in Georgian and Victorian times, so they naturally complement period architecture.',
      },
      {
        type: 'paragraph',
        content: 'For properties along the waterfront on Monmouth Avenue or the Strand, consider how colours will look in Topsham\'s unique light—the proximity to the estuary creates softer, cooler tones that affect how colours appear throughout the day.',
      },
      {
        type: 'heading',
        content: 'The Planning Permission Process',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If your proposed decorating work requires planning permission or listed building consent, here\'s what to expect:',
      },
      {
        type: 'list',
        content: [
          'Pre-application advice: East Devon District Council offers a paid pre-application service where you can discuss your plans with a conservation officer before submitting a formal application. This can save time and money by identifying issues early.',
          'Formal application: Submit your application with detailed specifications of materials, colours, and methods. Include photos of the existing condition and paint samples if changing colours.',
          'Consultation period: The council will consult with neighbours and heritage organisations. For straightforward applications, this usually takes 8 weeks for listed building consent.',
          'Decision: The council will approve, approve with conditions, or refuse the application. Conditions might specify particular materials, colours, or methods of work.',
          'Work completion: Once consent is granted, you must complete the work within the specified timeframe (usually three years) and in accordance with the approved plans.',
        ],
      },
      {
        type: 'paragraph',
        content: 'The process might sound daunting, but conservation officers are usually helpful and pragmatic. Their job is to protect heritage, not to make life difficult for homeowners. If you\'re working with experienced [heritage decorators in Topsham](/areas/exeter/heritage-property-painting), we can often guide you through the process and liaise with the council on your behalf.',
      },
      {
        type: 'heading',
        content: 'Common Decorating Challenges in Topsham Properties',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Dealing with Damp and Moisture',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s waterfront location means many properties face higher humidity levels than homes further inland. Period buildings with solid walls (no cavity) are particularly vulnerable to moisture penetration, especially on elevations facing the prevailing south-westerly weather.',
      },
      {
        type: 'paragraph',
        content: 'Before decorating, it\'s essential to identify and address any damp issues. This might mean repointing with lime mortar, improving ventilation, or treating rising damp at ground level. Painting over damp walls with modern impermeable paint will only trap the moisture and make the problem worse.',
      },
      {
        type: 'subheading',
        content: 'Preparing Historic Surfaces',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period properties often have layers of historic paint, uneven plaster, or lime render that requires specialist preparation. Stripping back to bare plaster isn\'t always appropriate—historic paint layers can themselves be part of the building\'s heritage value.',
      },
      {
        type: 'paragraph',
        content: 'A skilled decorator will assess the existing finish and prepare it sympathetically, removing loose material without damaging sound historic fabric. This is particularly important on listed buildings where you\'re required to preserve original features.',
      },
      {
        type: 'subheading',
        content: 'Windows and Woodwork',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Original timber windows and doors in Topsham properties are often over 100 years old. With proper maintenance and decoration, they can last another century, but they need the right treatment. Modern acrylic paints can cause timber to deteriorate by preventing it from breathing. Traditional oil-based primer and undercoat, followed by a flexible topcoat, offers much better protection.',
      },
      {
        type: 'paragraph',
        content: 'Many Topsham properties feature original sash windows, six-panel Georgian doors, or decorative bargeboards that are protected features. Replacing them requires listed building consent and is rarely approved. Professional decoration and repair is almost always the preferred option.',
      },
      {
        type: 'heading',
        content: 'Why Professional Decorators Matter for Heritage Work',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Decorating a conservation area property isn\'t the same as decorating a modern home. It requires understanding of traditional materials, sympathy for historic building fabric, and knowledge of what conservation officers expect. A decorator experienced in heritage work can:',
      },
      {
        type: 'list',
        content: [
          'Advise on appropriate materials and methods before you start',
          'Help prepare planning applications and specifications',
          'Source specialist paints and materials that meet conservation requirements',
          'Prepare historic surfaces properly without causing damage',
          'Complete work to a standard that will satisfy building control inspections',
          'Identify potential issues like hidden damp or structural problems before they become expensive repairs',
        ],
      },
      {
        type: 'paragraph',
        content: 'The cost of using a specialist heritage decorator is usually offset by avoiding mistakes, rejected planning applications, and long-term problems from using inappropriate materials. In Topsham, where the average property value is £506,000, protecting your investment with quality work makes financial sense.',
      },
      {
        type: 'quote',
        content: 'With 228 listed buildings and a fiercely protected conservation area, Topsham demands decorators who understand heritage. The right approach preserves history whilst creating beautiful, practical homes for modern living.',
      },
      {
        type: 'heading',
        content: 'Getting Started with Your Topsham Decorating Project',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'If you\'re planning decorating work on a conservation area or listed property in Topsham, start by checking whether you need consent. East Devon District Council\'s planning portal has helpful guidance, or you can speak to a conservation officer directly.',
      },
      {
        type: 'paragraph',
        content: 'Next, find a decorator with genuine heritage experience. Ask to see examples of previous work on period properties, and check they understand the importance of breathable materials and traditional methods. The cheapest quote isn\'t always the best value when you\'re dealing with an irreplaceable historic building.',
      },
      {
        type: 'paragraph',
        content: 'Finally, plan ahead. The consent process can take two to three months, and specialist materials sometimes need to be ordered. Starting early means you can book your preferred decorator during the optimal season for external work—typically late spring through early autumn when temperatures are mild and rainfall is lower.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning a decorating project on your Topsham conservation area property? BSR Decorating has over 20 years\' experience working with heritage and period homes across Topsham and Exeter. We understand the planning process, work with conservation-approved materials, and deliver finishes that respect your home\'s history whilst meeting modern standards. Contact us today for a free consultation and quote.',
      },
    ],
  },
  'kitchen-cabinet-spraying-vs-replacement-devon': {
    sections: [
      {
        type: 'paragraph',
        content: 'If you\'re looking at your tired kitchen cabinets in your [Exeter](/areas/exeter) or [Topsham](/areas/topsham) home and wondering whether to spray them or replace them entirely, you\'re not alone. It\'s one of the most common questions we hear at BSR Decorating, and with kitchen replacements costing anywhere from £5,000 to £25,000, it\'s a decision worth getting right.',
      },
      {
        type: 'paragraph',
        content: 'The good news? Kitchen cabinet spraying has transformed from a niche service into a mainstream solution that can save Devon homeowners thousands of pounds whilst delivering stunning results. But it\'s not always the right choice for every kitchen. Let\'s break down the costs, benefits, and practical considerations to help you make an informed decision.',
      },
      {
        type: 'heading',
        content: 'The True Cost of Kitchen Replacement',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'A full kitchen replacement involves far more than just new cabinet doors. You\'re looking at new carcasses, worktops, sinks, taps, appliances, flooring, tiling, electrics, plumbing, and installation labour. In Exeter, where the average property value sits at £285,000, homeowners typically spend between £8,000 and £15,000 on a mid-range kitchen replacement.',
      },
      {
        type: 'paragraph',
        content: 'Here\'s what a typical kitchen replacement in Devon actually costs:',
      },
      {
        type: 'list',
        content: [
          'Budget kitchen replacement: £5,000-£8,000 (basic units, laminate worktops)',
          'Mid-range kitchen: £10,000-£15,000 (quality units, composite worktops)',
          'Premium kitchen: £20,000-£30,000+ (bespoke units, quartz or granite worktops)',
          'Labour and installation: £2,000-£5,000 (depending on complexity)',
          'Additional trades (electrician, plumber, tiler): £1,500-£3,000',
          'Disruption period: 2-4 weeks without a functional kitchen',
        ],
      },
      {
        type: 'paragraph',
        content: 'For properties in higher-value areas like Topsham (average £506,000) or St Leonard\'s (£350,000-£700,000), homeowners often lean towards [luxury decorating and premium replacements](/blog/luxury-decorating-trends-exeter), pushing costs well above £25,000. That\'s a substantial investment, particularly when the existing cabinet carcasses are perfectly sound.',
      },
      {
        type: 'heading',
        content: 'The Cost of Professional Kitchen Cabinet Spraying',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen cabinet spraying offers a dramatically different cost profile. At BSR Decorating, a complete kitchen spraying service typically ranges from £750 to £2,500, depending on the size of your kitchen, the number of cabinets, and the finish you choose.',
      },
      {
        type: 'paragraph',
        content: 'Here\'s what professional kitchen spraying includes:',
      },
      {
        type: 'list',
        content: [
          'Thorough preparation: cleaning, degreasing, and sanding all surfaces',
          'Removal of doors, drawer fronts, and hardware',
          'Professional spraying using specialist equipment (not DIY aerosols)',
          'Multiple coats of high-quality, durable paint or lacquer',
          'Proper drying time between coats',
          'Reassembly and fitting of new or existing hardware',
          'Completion time: typically 3-5 days, kitchen usable throughout',
        ],
      },
      {
        type: 'paragraph',
        content: 'The average cost for a standard kitchen in Exeter is around £1,200-£1,500. That\'s roughly 10-15% of the cost of a mid-range replacement, yet the visual transformation can be equally dramatic. We\'ve sprayed kitchens across Devon, from Victorian terraces in Heavitree to modern homes in Pennsylvania, and the results consistently surprise homeowners who expected they\'d need a full replacement.',
      },
      {
        type: 'heading',
        content: 'When Kitchen Spraying Makes Sense',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Kitchen spraying isn\'t suitable for every situation, but when the conditions are right, it\'s an outstanding solution. Here\'s when we recommend it:',
      },
      {
        type: 'subheading',
        content: 'Solid Cabinet Construction',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'If your cabinets are made from solid wood, MDF, or quality laminate, they\'re ideal candidates for spraying. Many kitchens installed 10-20 years ago were built to last and have structurally sound carcasses that will easily outlast current trends. We regularly spray kitchens in period properties across [Topsham](/areas/topsham) and [Exeter\'s conservation areas](/areas/exeter) where the original cabinetry is solid timber—far superior to modern budget units.',
      },
      {
        type: 'subheading',
        content: 'Outdated Colour or Finish',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'That orange oak or dark mahogany finish that was fashionable 15 years ago? Perfect for spraying. Glossy melamine doors from the 1990s? Also sprayable. If the issue is purely aesthetic rather than structural, spraying delivers a contemporary finish at a fraction of replacement costs. We\'ve transformed countless kitchens from dated dark wood to crisp white, soft grey, or fashionable sage green.',
      },
      {
        type: 'subheading',
        content: 'Good Layout and Functionality',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'If your kitchen layout works well for your household and you\'re happy with the storage and workflow, there\'s no need to rip it out. Spraying lets you keep the functionality whilst completely updating the appearance. This is particularly relevant for rental properties and HMO landlords in [Exeter](/areas/exeter) who need to refresh kitchens cost-effectively between tenancies.',
      },
      {
        type: 'subheading',
        content: 'Environmental Considerations',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Kitchen replacement generates enormous amounts of waste—old units, worktops, and appliances typically end up in landfill. Spraying is the sustainable choice, preserving perfectly functional cabinetry whilst dramatically reducing environmental impact. At BSR Decorating, we\'re proud partners of Surfers Against Sewage and advocate for eco-conscious decorating solutions wherever possible.',
      },
      {
        type: 'heading',
        content: 'When Kitchen Replacement is the Better Choice',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Honesty matters in our industry. Sometimes spraying simply isn\'t the right solution, and we\'ll always tell you when replacement makes more sense:',
      },
      {
        type: 'list',
        content: [
          'Structural damage: warped doors, water-damaged carcasses, or failing hinges can\'t be fixed with paint',
          'Poor-quality flat-pack construction: cheap modern units with peeling veneer or crumbling chipboard aren\'t worth spraying',
          'Major layout changes: if you need to reconfigure your kitchen workspace, you\'ll need new units anyway',
          'Missing or damaged doors: if doors or drawer fronts are beyond repair, replacement becomes more cost-effective',
          'Irreparable hardware: if the cabinet boxes themselves are failing, spraying won\'t solve underlying problems',
        ],
      },
      {
        type: 'paragraph',
        content: 'We assess every kitchen honestly before recommending spraying. For instance, many new-build properties in developments like Cranbrook have been fitted with budget kitchens that simply won\'t respond well to spraying. In these cases, we\'ll recommend replacement or refer you to a trusted kitchen fitter.',
      },
      {
        type: 'heading',
        content: 'The Process: What to Expect from Professional Kitchen Spraying',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding the process helps set realistic expectations. Here\'s how professional kitchen spraying works at BSR Decorating:',
      },
      {
        type: 'paragraph',
        content: 'First, we carefully remove all doors, drawer fronts, and hardware. These are taken to our workshop where conditions can be controlled for optimal spraying. Cabinet frames are masked and protected in situ. Every surface is thoroughly cleaned, degreased (kitchens accumulate surprising amounts of cooking grease), and sanded to create the proper surface profile for paint adhesion.',
      },
      {
        type: 'paragraph',
        content: 'We then apply a specialist primer suited to your cabinet material—different primers for wood, MDF, melamine, or laminate. This is followed by multiple thin coats of high-quality paint or lacquer, applied with professional HVLP spray equipment that creates a flawless, factory-like finish impossible to achieve with brushes or rollers.',
      },
      {
        type: 'paragraph',
        content: 'Each coat must fully cure before the next is applied. We use durable paints specifically formulated for kitchen environments—resistant to moisture, grease, heat, and the inevitable knocks that kitchen cabinets endure. The final result is a smooth, consistent finish that looks like new cabinetry.',
      },
      {
        type: 'paragraph',
        content: 'Throughout the process, your kitchen remains largely functional. You can still use your sink, hob, and appliances. Total disruption is typically 3-5 days rather than the 2-4 weeks required for full replacement.',
      },
      {
        type: 'heading',
        content: 'Real-World Cost Comparison: A Typical Exeter Kitchen',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Let\'s compare actual costs for a standard kitchen in a three-bedroom semi in Heavitree (average property value £358,000):',
      },
      {
        type: 'paragraph',
        content: 'Replacement option: Mid-range kitchen with 10 base units, 10 wall units, composite worktop, new sink and tap, installation, tiling, and associated trades. Total cost: £12,500. Timeline: 3 weeks. Result: Brand new kitchen.',
      },
      {
        type: 'paragraph',
        content: 'Spraying option: Professional spraying of existing solid oak cabinets, new handles, and worktop restoration. Total cost: £1,400. Timeline: 4 days. Result: Kitchen that looks brand new.',
      },
      {
        type: 'paragraph',
        content: 'The saving? £11,100. That\'s money that could fund a bathroom renovation, garden landscaping, or simply stay in your savings account. For many Devon homeowners, particularly those in [period properties across Exeter](/blog/decorating-tips-exeter-period-homes) where original features are worth preserving, spraying represents outstanding value.',
      },
      {
        type: 'heading',
        content: 'How Long Does Kitchen Spraying Last?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'A common concern we hear: \'Will it last?\' The answer depends on the quality of workmanship and materials. DIY spray jobs using aerosol cans might last 1-2 years before showing wear. Professional spraying using specialist equipment and durable paints should last 7-10 years or more with normal use.',
      },
      {
        type: 'paragraph',
        content: 'We\'ve returned to kitchens we sprayed 8-10 years ago that still look excellent. The key factors are proper preparation, quality materials, and allowing adequate curing time before heavy use. Cutting corners on any of these steps dramatically shortens the lifespan.',
      },
      {
        type: 'paragraph',
        content: 'It\'s also worth considering that kitchen trends change. That on-trend colour you choose today might feel dated in 10 years—at which point you can respray again for £1,500 rather than replacing for £15,000.',
      },
      {
        type: 'heading',
        content: 'Kitchen Spraying for Landlords and Investment Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'For Exeter landlords managing rental properties or HMOs, kitchen spraying offers exceptional return on investment. Between tenancies, a tired kitchen can be refreshed for under £1,000, significantly improving the property\'s appeal without the cost and disruption of replacement.',
      },
      {
        type: 'paragraph',
        content: 'This is particularly relevant in Exeter\'s competitive rental market, where 24.9% of properties (approximately 14,200) are privately rented. A freshly sprayed kitchen in neutral white or light grey makes properties more lettable and can justify slightly higher rents. We work with several letting agents and landlords across Devon who now routinely specify kitchen spraying as part of their [property refresh programmes](/blog/cost-effective-decorating-rental-properties-hmos).',
      },
      {
        type: 'heading',
        content: 'Making Your Decision: Questions to Ask',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Before deciding between spraying and replacement, honestly assess your situation:',
      },
      {
        type: 'list',
        content: [
          'Are the cabinet boxes structurally sound? Open doors and check for water damage, warping, or failing joints.',
          'Do you like your kitchen layout? If the answer is yes, spraying makes sense. If not, consider replacement.',
          'What\'s your budget? If £15,000 is available, you have options. If £1,500 is your limit, spraying is the clear choice.',
          'How long will you stay in the property? If you\'re selling within 1-2 years, spraying offers excellent ROI. If you\'re staying 10+ years, either option works.',
          'Is sustainability important to you? Spraying is dramatically more environmentally friendly.',
          'What\'s your timeline? Need it done quickly? Spraying wins. Happy to wait 4-6 weeks? Replacement is feasible.',
        ],
      },
      {
        type: 'heading',
        content: 'The Verdict: Which Offers Better Value?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'For most Devon homeowners with structurally sound kitchens, professional cabinet spraying offers extraordinary value—typically 85-90% cost savings compared to replacement whilst delivering comparable visual impact. It\'s faster, less disruptive, more sustainable, and leaves you with money for other home improvements.',
      },
      {
        type: 'paragraph',
        content: 'Kitchen replacement makes sense when cabinets are structurally compromised, when you need layout changes, or when you simply want brand new everything and have the budget to match. It\'s a bigger investment but delivers a completely fresh start.',
      },
      {
        type: 'paragraph',
        content: 'The key is getting honest, expert advice specific to your kitchen. At BSR Decorating, we\'ve sprayed hundreds of kitchens across Exeter, Topsham, and throughout Devon over our 20+ years in business. We\'ll assess your cabinets, discuss your goals and budget, and recommend the solution that genuinely makes sense for your situation—even if that means referring you elsewhere.',
      },
      {
        type: 'quote',
        content: 'Kitchen spraying typically costs 10-15% of replacement costs whilst delivering 90% of the visual impact—making it one of the most cost-effective home improvements available to Devon homeowners.',
      },
      {
        type: 'quoteCTA',
        content: 'Wondering whether your kitchen is suitable for spraying? Contact BSR Decorating for a free, no-obligation assessment. We\'ll give you honest advice and a detailed quote for professional kitchen cabinet spraying in Exeter, Topsham, or throughout Devon.',
      },
    ],
  },
  'autumn-decorating-trends-devon-homes': {
    sections: [
      {
        type: 'paragraph',
        content: 'As the leaves begin to turn golden across Devon\'s beautiful countryside, there\'s no better time to bring the warmth and richness of autumn into your Exeter or Topsham home. Inspired by the stunning autumnal displays that Devon is famous for, from the golden hues of Dartmoor to the rich russets of the Exe Valley, we\'re seeing a beautiful trend towards warm, mellow autumn colours in interior decorating.'
      },
      {
        type: 'heading',
        content: 'Embrace Devon\'s Autumn Palette',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project19/PHOTO-2025-09-03-11-18-18.jpg',
        imageAlt: 'Autumn decorating trends in Devon homes showing warm autumnal shades and seasonal colour schemes'
      },
      {
        type: 'paragraph',
        content: 'Devon\'s autumn landscape provides the perfect inspiration for seasonal decorating. The golden yellows of turning leaves, the rich oranges of pumpkins, and the deep browns of fallen chestnuts create a natural palette that brings warmth and comfort to any home. These colours work particularly well in Exeter\'s Georgian townhouses and Topsham\'s [heritage properties](/blog/heritage-property-restoration-topsham), where they complement the traditional architecture beautifully.'
      },
      {
        type: 'subheading',
        content: 'Warm Autumnal Shades for Devon Homes',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'For Exeter and Topsham homeowners looking to embrace autumn decorating trends, we recommend starting with warm, mellow shades that reflect the season\'s natural beauty. Think honey and pumpkin tones, caramel colours, and rich chocolate browns that create a cosy, inviting atmosphere perfect for Devon\'s cooler months.'
      },
      {
        type: 'heading',
        content: 'Recommended Autumn Color Palettes',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Based on Little Greene\'s expert recommendations for autumnal schemes, here are the perfect color combinations for Devon homes this season:'
      },
      {
        type: 'subheading',
        content: 'Cosy Kitchen & Dining Colors',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Create a welcoming kitchen-dining space with warm neutrals that evoke comfort and homeliness. These rich hues work beautifully in Exeter\'s Georgian townhouses and Topsham\'s heritage properties:'
      },
      {
        type: 'list',
        content: [
          'Mochi™ - A gentle, muted warm tone perfect as a neutral base',
          'Affogato™ - Deep caramel hue that adds richness and warmth',
          'Galette™ - Soft golden brown, ideal for creating a cosy atmosphere',
          'Bombolone™ - Rich terracotta that brings autumn warmth',
          'Julie\'s Dream™ - Gentle pink-neutral for soft sophistication',
          'Masquerade™ - Warm taupe that complements natural wood finishes'
        ]
      },
      {
        type: 'paragraph',
        content: 'Here are the recommended kitchen and dining colors with their hex codes for easy reference:'
      },
      {
        type: 'colorPalette',
        content: [
          { name: 'Mochi™', hex: '#F5E1D2', description: 'Gentle, muted warm tone' },
          { name: 'Affogato™', hex: '#E0C9A6', description: 'Deep caramel hue' },
          { name: 'Galette™', hex: '#D1B08A', description: 'Soft golden brown' },
          { name: 'Bombolone™', hex: '#E3D0B5', description: 'Rich terracotta' },
          { name: 'Julie\'s Dream™', hex: '#F0E4D7', description: 'Gentle pink-neutral' },
          { name: 'Masquerade™', hex: '#E8D3C5', description: 'Warm taupe' }
        ]
      },
      {
        type: 'subheading',
        content: 'Tranquil Living Room Colors',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'As nights draw in, embrace darker, sumptuous hues for an immersive, atmospheric living space. Perfect for creating peaceful, soothing ambiance in your Devon home:'
      },
      {
        type: 'list',
        content: [
          'Elysian Ground™ - Deep, warm neutral with underlying richness',
          'Chocolate Colour™ - Rich brown that evokes autumn evenings',
          'Pompeian Ash™ - Sophisticated dark tone with warm undertones',
          'Obsidian Green™ - Deep, sumptuous green for tranquil spaces',
          'Basalt® - Rich charcoal with warm undertones',
          'Lamp Black™ - Deep black with underlying warmth'
        ]
      },
      {
        type: 'paragraph',
        content: 'Here are the recommended living room colors with their hex codes:'
      },
      {
        type: 'colorPalette',
        content: [
          { name: 'Elysian Ground™', hex: '#A89A8E', description: 'Deep, warm neutral' },
          { name: 'Chocolate Colour™', hex: '#5C3E35', description: 'Rich brown' },
          { name: 'Pompeian Ash™', hex: '#4A3B3C', description: 'Sophisticated dark tone' },
          { name: 'Obsidian Green™', hex: '#3A4A3D', description: 'Deep, sumptuous green' },
          { name: 'Basalt®', hex: '#4B4E53', description: 'Rich charcoal' },
          { name: 'Lamp Black™', hex: '#2E2E2E', description: 'Deep black with warmth' }
        ]
      },
      {
        type: 'subheading',
        content: 'Inviting Entrance Colors',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Update your home\'s exterior with timeless colors that create a welcoming entrance for guests. These work particularly well with [Devon\'s traditional architecture](/blog/exterior-painting-exeter-devon-guide):'
      },
      {
        type: 'list',
        content: [
          'Celestial Blue™ - Timeless dusky blue for joyous autumn entrances',
          'Windmill Lane™ - Classic heritage tone for period properties',
          'Goblin™ - Rich, earthy green perfect for country homes',
          'Mister David™ - Sophisticated neutral for contemporary finishes',
          'Dorchester Pink® - Warm, welcoming tone for traditional homes',
          'Dock Blue™ - Maritime-inspired blue for coastal properties'
        ]
      },
      {
        type: 'paragraph',
        content: 'Here are the recommended entrance colors with their hex codes:'
      },
      {
        type: 'colorPalette',
        content: [
          { name: 'Celestial Blue™', hex: '#A3B1C6', description: 'Timeless dusky blue' },
          { name: 'Windmill Lane™', hex: '#7A8B7D', description: 'Classic heritage tone' },
          { name: 'Goblin™', hex: '#8A8C6D', description: 'Rich, earthy green' },
          { name: 'Mister David™', hex: '#E3C567', description: 'Sophisticated neutral' },
          { name: 'Dorchester Pink®', hex: '#E8C1C5', description: 'Warm, welcoming tone' },
          { name: 'Dock Blue™', hex: '#3A4A6B', description: 'Maritime-inspired blue' }
        ]
      },
      {
        type: 'list',
        content: [
          'Honey and golden yellows for living rooms and kitchens',
          'Pumpkin and burnt orange for feature walls and accent areas',
          'Caramel and toffee tones for bedrooms and study spaces',
          'Rich chocolate and truffle shades for dining rooms and hallways'
        ]
      },
      {
        type: 'heading',
        content: 'Seasonal Colour Combinations',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'The key to successful autumn decorating lies in balancing vibrant seasonal colours with neutral tones. In Exeter\'s prestigious areas like St. Leonard\'s and Pennsylvania, we\'re seeing sophisticated combinations of warm yellows and oranges paired with elegant neutrals like malt chocolate and auburn tones.'
      },
      {
        type: 'image',
        content: '/portfolio/project19/PHOTO-2025-09-03-11-18-19.jpg',
        imageAlt: 'Autumn colour combinations in Devon homes showing warm yellows and oranges with neutral tones'
      },
      {
        type: 'subheading',
        content: 'Natural Fibres and Textures',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'To complete the autumnal look, incorporate natural fibres like wood, rattan, and wool that echo the earthy elements of Devon\'s countryside. These materials work particularly well in [Topsham\'s waterfront properties](/blog/waterfront-property-maintenance-topsham), where they complement the natural estuary setting.'
      },
      {
        type: 'list',
        content: [
          'Wooden furniture and accessories in oak and walnut tones',
          'Rattan baskets and storage solutions',
          'Wool throws and cushions in autumnal colours',
          'Natural stone and ceramic accessories'
        ]
      },
      {
        type: 'heading',
        content: 'Lighting for Autumn Ambiance',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'The right lighting can recreate the warm, golden glow of Devon\'s autumnal afternoons. Dim, warm lighting enhances the richness of autumn colours and creates a cosy atmosphere perfect for the season. This is especially effective in Exeter\'s heritage properties, where period lighting fixtures can be enhanced with warm-toned bulbs.'
      },
      {
        type: 'subheading',
        content: 'Elemental Accents',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Balance the warm autumn palette with cool elemental greens and blues in furnishings and accessories. This creates visual interest and prevents the space from feeling too heavy, while maintaining the seasonal theme throughout your Devon home.'
      },
      {
        type: 'quote',
        content: 'Autumn decorating in Devon homes isn\'t just about following trends – it\'s about celebrating the natural beauty of our local landscape and creating spaces that feel warm, welcoming, and distinctly Devonian.'
      },
      {
        type: 'heading',
        content: 'Why Choose BSR Decorating for Seasonal Updates',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Our expertise in Exeter and Topsham properties means we understand how to work with both heritage and modern homes to create beautiful autumn-inspired spaces. Whether you\'re updating a Georgian townhouse in Exeter or a waterfront property in Topsham, we can help you embrace the season with professional decorating services.'
      },
      {
        type: 'link',
        content: 'Transform your Devon home with autumn decorating trends',
        href: '/areas/exeter',
        linkText: 'View Our Services'
      },
      {
        type: 'quoteCTA',
        content: 'Ready to transform your Devon home with autumn decorating? Get your free quote today!'
      }
    ]
  },
  'luxury-decorating-trends-exeter': {
    sections: [
      {
        type: 'paragraph',
        content: 'Exeter\'s most prestigious areas, including St. Leonard\'s, Pennsylvania, and Newtown, are home to some of Devon\'s finest properties. These affluent neighbourhoods demand the highest standards of luxury decorating, combining heritage character with contemporary elegance. As [Exeter\'s premier luxury decorators](/areas/exeter), we\'ve witnessed the evolution of decorating trends in these exclusive areas. Our [domestic decorating services](/domestic) specialise in luxury heritage property work.'
      },
      {
        type: 'heading',
        content: 'Current Luxury Decorating Trends in Exeter',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project1/PHOTO-2025-09-02-11-07-10.jpg',
        imageAlt: 'Luxury interior decorating project in Exeter showing premium finishes and contemporary design'
      },
      {
        type: 'paragraph',
        content: 'The luxury decorating landscape in Exeter has evolved significantly, with affluent homeowners seeking sophisticated finishes that reflect their investment in premium properties. Our work in St. Leonard\'s Georgian townhouses and Pennsylvania\'s modern developments reveals several key trends.'
      },
      {
        type: 'subheading',
        content: 'Heritage Restoration with Modern Luxury',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'In St. Leonard\'s, we\'re seeing a sophisticated blend of period authenticity with contemporary luxury. Georgian and Victorian properties are being restored using traditional techniques while incorporating modern amenities. This includes period-appropriate colour schemes enhanced with premium finishes and smart home integration.'
      },
      {
        type: 'list',
        content: [
          'Traditional lime plaster restoration with modern insulation',
          'Period colour palettes enhanced with luxury paint finishes',
          'Heritage wallpaper patterns in contemporary colourways',
          'Traditional joinery with modern hardware and smart features'
        ]
      },
      {
        type: 'subheading',
        content: 'Contemporary Luxury in Modern Developments',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Pennsylvania and Newtown\'s newer developments are embracing bold, contemporary luxury finishes. High-gloss surfaces, metallic accents, and statement feature walls are increasingly popular among affluent homeowners seeking to create distinctive, Instagram-worthy interiors.'
      },
      {
        type: 'heading',
        content: 'Premium Materials and Finishes',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project1/PHOTO-2025-09-02-11-07-12.jpg',
        imageAlt: 'Premium luxury decorating finishes in Exeter showing high-end materials and sophisticated design'
      },
      {
        type: 'paragraph',
        content: 'Luxury decorating in Exeter\'s affluent areas demands the finest materials. We\'re seeing increased demand for premium paint systems, specialist wall coverings, and bespoke finishes that reflect the high-end nature of these properties.'
      },
      {
        type: 'list',
        content: [
          'Farrow & Ball and Little Greene heritage paint collections',
          'Luxury wallpaper from designers like Cole & Son and Sanderson',
          'Metallic and pearlescent finishes for feature walls',
          'Specialist finishes including limewash and Venetian plaster'
        ]
      },
      {
        type: 'heading',
        content: 'Commercial Office Trends in Exeter City Centre',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s business district is also embracing luxury decorating trends, with premium office spaces demanding sophisticated finishes that reflect corporate success. Our [commercial decorating services](/areas/exeter) in the city centre incorporate these trends.'
      },
      {
        type: 'quote',
        content: 'Luxury decorating in Exeter\'s prestigious areas isn\'t just about aesthetics – it\'s about creating spaces that reflect the investment and lifestyle aspirations of our affluent clients.'
      },
      {
        type: 'heading',
        content: 'Why Choose BSR Decorating for Luxury Projects',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Our expertise in Exeter\'s most prestigious areas, combined with our understanding of luxury decorating trends, makes us the natural choice for high-end residential and commercial projects. We understand the unique requirements of heritage properties in St. Leonard\'s, contemporary developments in Pennsylvania, and commercial spaces in the city centre.'
      },
      {
        type: 'link',
        content: 'Discover our luxury decorating services in Exeter\'s most prestigious areas',
        href: '/areas/exeter',
        linkText: 'View Exeter Services'
      },
      {
        type: 'quoteCTA',
        content: 'Ready to transform your Exeter home with luxury decorating? Get your free quote today!'
      }
    ]
  },
  'heritage-property-restoration-topsham': {
    sections: [
      {
        type: 'paragraph',
        content: '[Topsham\'s conservation area](/areas/topsham) presents unique challenges and opportunities for heritage property restoration. As one of Devon\'s most beautiful historic villages, Topsham requires specialist knowledge of period techniques, conservation compliance, and traditional materials. Our expertise in this unique location has taught us the importance of preserving historical character while ensuring modern comfort. Our [domestic decorating services](/domestic) specialise in heritage property restoration.'
      },
      {
        type: 'heading',
        content: 'Understanding Topsham\'s Conservation Requirements',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project2/PHOTO-2025-09-02-11-09-53.jpg',
        imageAlt: 'Heritage property restoration in Topsham conservation area showing traditional techniques and period features'
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s designation as a Conservation Area means that any restoration work must comply with strict planning requirements. This includes using appropriate materials, maintaining period authenticity, and preserving the village\'s distinctive character. Our experience working within these constraints has made us specialists in conservation-compliant restoration.'
      },
      {
        type: 'subheading',
        content: 'Traditional Materials and Techniques',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Heritage property restoration in Topsham demands traditional materials and techniques. We use lime mortars, [period-appropriate paints](/blog/best-paint-types-exeter-homes-old-damp-listed-properties), and traditional joinery methods to ensure authenticity. This includes understanding the specific requirements of Georgian and Victorian properties in the village.'
      },
      {
        type: 'list',
        content: [
          'Lime mortar restoration for period properties',
          'Traditional paint techniques and period colour schemes',
          'Heritage joinery restoration and repair',
          'Period wallpaper and decorative finishes'
        ]
      },
      {
        type: 'subheading',
        content: 'Conservation Area Compliance',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Working in Topsham\'s conservation area requires detailed knowledge of planning requirements and listed building regulations. We ensure all restoration work meets conservation standards while delivering the quality finish expected by discerning homeowners.'
      },
      {
        type: 'heading',
        content: 'Period Property Decorating Techniques',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project2/PHOTO-2025-09-02-11-09-54.jpg',
        imageAlt: 'Period property decorating techniques in Topsham showing traditional methods and heritage restoration'
      },
      {
        type: 'paragraph',
        content: 'Our period property decorating in Topsham combines traditional techniques with modern expertise. We understand the unique challenges of historic homes, from uneven walls to original features that require careful restoration.'
      },
      {
        type: 'list',
        content: [
          'Sympathetic colour schemes for period properties',
          'Traditional decorative techniques including stencilling and graining',
          'Heritage wallpaper installation and restoration',
          'Period feature restoration and enhancement'
        ]
      },
      {
        type: 'heading',
        content: 'Waterfront Heritage Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s unique riverside location adds another dimension to heritage restoration. Waterfront properties require specialist knowledge of moisture protection, salt air resistance, and flood-resistant finishes while maintaining period authenticity.'
      },
      {
        type: 'quote',
        content: 'Heritage property restoration in Topsham requires a delicate balance between preserving historical character and ensuring modern durability in this unique waterfront location.'
      },
      {
        type: 'heading',
        content: 'Why Choose BSR for Heritage Restoration',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Our deep understanding of Topsham\'s conservation requirements, combined with our expertise in traditional techniques, makes us the ideal choice for heritage property restoration. We respect the village\'s character while delivering exceptional results.'
      },
      {
        type: 'link',
        content: 'Learn more about our heritage restoration services in Topsham',
        href: '/areas/topsham',
        linkText: 'View Topsham Services'
      },
      {
        type: 'quoteCTA',
        content: 'Ready to restore your Topsham heritage property? Get your free quote today!'
      }
    ]
  },
  'commercial-office-decorating-exeter-city-centre': {
    sections: [
      {
        type: 'paragraph',
        content: '[Exeter\'s city centre](/areas/exeter) presents unique challenges for [commercial office decorating](/commercial), from historic buildings with planning restrictions to modern business parks requiring contemporary finishes. Our experience decorating offices throughout Exeter\'s business district has taught us the importance of balancing functionality with aesthetic appeal.'
      },
      {
        type: 'heading',
        content: 'City Centre Office Decorating Challenges',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project5/PHOTO-2025-09-02-11-16-34.jpg',
        imageAlt: 'Commercial office decorating project in Exeter city centre showing professional finishes and modern design'
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s city centre offices face unique challenges including limited access, parking restrictions, and the need to work around business operations. Our commercial decorating services are designed to minimise disruption while delivering exceptional results.'
      },
      {
        type: 'subheading',
        content: 'Historic City Centre Offices',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Many Exeter city centre offices are housed in historic buildings, requiring specialist knowledge of heritage requirements and planning restrictions. We understand how to work within these constraints while delivering modern, professional office environments.'
      },
      {
        type: 'list',
        content: [
          'Heritage building compliance and planning requirements',
          'Traditional materials and techniques for historic offices',
          'Period feature restoration and enhancement',
          'Modern office functionality within historic constraints'
        ]
      },
      {
        type: 'subheading',
        content: 'Modern Business Park Developments',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s modern business parks demand contemporary finishes that reflect corporate success and create inspiring work environments. Our commercial decorating services incorporate the latest trends in office design while ensuring durability and functionality.'
      },
      {
        type: 'heading',
        content: 'Premium Office Finishes',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project5/PHOTO-2025-09-02-11-16-35.jpg',
        imageAlt: 'Premium office finishes in Exeter city centre showing professional commercial decorating and modern design'
      },
      {
        type: 'paragraph',
        content: 'Commercial office decorating in Exeter requires premium finishes that withstand heavy use while creating professional environments. We use high-quality paint systems, specialist wall coverings, and durable finishes suitable for commercial applications.'
      },
      {
        type: 'list',
        content: [
          'High-performance paint systems for commercial use',
          'Specialist wall coverings for office environments',
          'Durable finishes for high-traffic areas',
          'Brand-appropriate colour schemes and finishes'
        ]
      },
      {
        type: 'heading',
        content: 'Minimising Business Disruption',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Our commercial decorating services are designed to minimise disruption to business operations. We work outside business hours, use low-odour products, and implement efficient project management to ensure minimal impact on productivity.'
      },
      {
        type: 'quote',
        content: 'Professional commercial decorating in Exeter\'s city centre requires understanding both the practical needs of business operations and the aesthetic requirements of modern office environments.'
      },
      {
        type: 'heading',
        content: 'Why Choose BSR for Commercial Office Decorating',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Our expertise in Exeter\'s diverse commercial landscape, from historic city centre offices to modern business parks, makes us the ideal choice for commercial decorating projects. We understand the unique challenges of city centre locations and deliver results that [enhance your business environment](/blog/professional-decorating-enhances-business-premises).'
      },
      {
        type: 'link',
        content: 'Discover our commercial decorating services in Exeter city centre',
        href: '/commercial',
        linkText: 'View Commercial Decorating Services'
      },
      {
        type: 'link',
        href: '/areas/exeter',
        linkText: 'Learn More About Our Exeter Services'
      },
      {
        type: 'quoteCTA',
        content: 'Ready to transform your Exeter office space? Get your free commercial decorating quote today!'
      }
    ]
  },
  'waterfront-property-maintenance-topsham': {
    sections: [
      {
        type: 'paragraph',
        content: 'Topsham\'s unique riverside location creates specific challenges for property maintenance that require specialist knowledge and techniques. As one of Devon\'s most beautiful waterfront villages, Topsham properties face unique environmental challenges including salt air, moisture, and potential flooding. Our expertise in waterfront property maintenance ensures your riverside home remains beautiful and protected.'
      },
      {
        type: 'heading',
        content: 'Understanding Waterfront Property Challenges',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project11/PHOTO-2025-09-02-11-40-55.jpg',
        imageAlt: 'Waterfront property maintenance in Topsham showing marine-grade protection and estuary specialist techniques'
      },
      {
        type: 'paragraph',
        content: 'Waterfront properties in Topsham face unique environmental challenges that standard decorating approaches cannot address. Salt air, high humidity, and potential flooding require specialist materials and techniques to ensure long-lasting results.'
      },
      {
        type: 'subheading',
        content: 'Marine-Grade Protection Systems',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Our waterfront property maintenance uses marine-grade protection systems designed specifically for estuary and riverside locations. These systems provide [superior resistance to salt air, moisture, and environmental damage](/blog/topsham-waterfront-homes-best-paints-humidity-salt-air-weather) while maintaining aesthetic appeal.'
      },
      {
        type: 'list',
        content: [
          'Marine-grade primers and undercoats for maximum protection',
          'Salt air resistant paint systems',
          'Moisture barrier treatments for exterior surfaces',
          'Flood-resistant finishes for ground-level areas'
        ]
      },
      {
        type: 'subheading',
        content: 'Estuary Specialist Techniques',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s position on the Exe Estuary requires specialist knowledge of estuary-specific challenges. Our techniques are specifically designed for this unique environment, ensuring optimal protection and longevity.'
      },
      {
        type: 'heading',
        content: 'Flood-Resistant Finishes',
        level: 2
      },
      {
        type: 'image',
        content: '/portfolio/project11/PHOTO-2025-09-02-11-40-56.jpg',
        imageAlt: 'Flood-resistant finishes for waterfront properties in Topsham showing marine-grade protection and specialist techniques'
      },
      {
        type: 'paragraph',
        content: 'Waterfront properties in Topsham require flood-resistant finishes that can withstand occasional water exposure. Our specialist finishes are designed to recover from flood damage while maintaining their protective properties.'
      },
      {
        type: 'list',
        content: [
          'Flood-resistant paint systems for ground-level areas',
          'Moisture-resistant wall coverings',
          'Specialist sealants for vulnerable areas',
          'Rapid-drying finishes for quick recovery'
        ]
      },
      {
        type: 'heading',
        content: 'Heritage Waterfront Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Many of Topsham\'s waterfront properties are historic, requiring a balance between heritage authenticity and modern protection. Our approach respects [period character while ensuring contemporary durability](/blog/heritage-property-restoration-topsham) in this challenging environment.'
      },
      {
        type: 'quote',
        content: 'Waterfront property maintenance in Topsham requires specialist knowledge of both marine environments and heritage conservation to protect these unique riverside homes.'
      },
      {
        type: 'heading',
        content: 'Why Choose BSR for Waterfront Maintenance',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Our expertise in [Topsham\'s unique waterfront environment](/areas/topsham), combined with our understanding of heritage requirements, makes us the ideal choice for waterfront property maintenance. We protect your investment while preserving the character of this beautiful riverside village.'
      },
      {
        type: 'link',
        content: 'Learn more about our waterfront property maintenance services in Topsham',
        href: '/areas/topsham',
        linkText: 'View Waterfront Services'
      },
      {
        type: 'quoteCTA',
        content: 'Ready to protect your Topsham waterfront property? Get your free maintenance quote today!'
      }
    ]
  },
  'end-tenancy-decorating-landlords-letting-agents': {
    sections: [
      {
        type: 'paragraph',
        content: 'As a landlord or letting agent, you understand that vacant properties mean lost revenue. Every day a property remains empty between tenants directly impacts your bottom line. One of the most effective ways to minimise void periods and attract quality tenants is through professional end-of-tenancy decorating.'
      },
      {
        type: 'heading',
        content: 'Why End-of-Tenancy Decorating Matters',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'First impressions are crucial in the rental market. Potential tenants make decisions within minutes of viewing a property, and the visual appeal of your rental can be the deciding factor between a quick let and weeks of vacancy.'
      },
      {
        type: 'subheading',
        content: 'Properties Rent Faster with Fresh Decoration',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Our experience working with landlords across Devon, including [Exeter](/areas/exeter), [Topsham](/areas/topsham) and [Dawlish](/areas/dawlish), shows that freshly decorated properties consistently rent faster than those showing signs of wear and tear. Clean, bright walls and ceilings create an immediate positive impression, making tenants more likely to commit during their viewing. See examples in our [project portfolio](/portfolio).'
      },
      {
        type: 'paragraph',
        content: 'Statistics from leading letting agents indicate that well-presented properties can reduce void periods by up to 40%. This translates to significant savings when you consider the typical costs of an empty property:'
      },
      {
        type: 'list',
        content: [
          'Lost rental income',
          'Ongoing mortgage payments',
          'Council tax liabilities',
          'Insurance premiums',
          'Utility standing charges'
        ]
      },
      {
        type: 'subheading',
        content: 'Attracting Quality Tenants',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professional decoration doesn\'t just speed up the letting process—it also helps attract better-quality tenants. Properties that are well-maintained and freshly decorated tend to appeal to tenants who take pride in their living environment and are more likely to care for the property during their tenancy.'
      },
      {
        type: 'heading',
        content: 'Choosing the Right Colours and Finishes',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'The key to successful end-of-tenancy decorating lies in selecting colours and finishes that appeal to the broadest possible market while providing durability and easy maintenance.'
      },
      {
        type: 'subheading',
        content: 'Neutral Colour Schemes',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Neutral colours are essential for rental properties. They create a blank canvas that allows potential tenants to envision their own belongings in the space. Popular choices include:'
      },
      {
        type: 'list',
        content: [
          'Magnolia and warm whites: Classic choices that brighten spaces and work with any décor',
          'Light greys: Modern and sophisticated, appealing to younger tenants',
          'Soft beiges: Warm and welcoming, suitable for all room types',
          'Pale blues and greens: Calming colours perfect for bedrooms and bathrooms'
        ]
      },
      {
        type: 'subheading',
        content: 'Durable Paint Finishes',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Rental properties need paints that can withstand regular wear and tear. We recommend:'
      },
      {
        type: 'list',
        content: [
          'Washable emulsion: For main living areas, allowing easy cleaning of marks and scuffs',
          'Kitchen and bathroom paint: Moisture-resistant formulations for high-humidity areas',
          'Eggshell or satin finishes: For woodwork, providing durability and easy cleaning'
        ]
      },
      {
        type: 'heading',
        content: 'Cost vs. Benefit Analysis',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Many landlords question whether the investment in professional decorating is worthwhile, especially when faced with multiple property turnovers. However, the mathematics strongly favour professional decoration. For more details on pricing, see our [comprehensive cost guide for Exeter](/blog/painter-decorator-cost-exeter-2025-price-guide).'
      },
      {
        type: 'subheading',
        content: 'Professional Decoration Investment',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'A typical two-bedroom rental property might cost £800-£1,200 to professionally decorate between tenancies. This includes:'
      },
      {
        type: 'list',
        content: [
          'Preparation work (filling holes, sanding, cleaning)',
          'High-quality paints and materials',
          'Professional application',
          'Cleaning and finishing'
        ]
      },
      {
        type: 'subheading',
        content: 'Return on Investment',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Consider the potential returns:'
      },
      {
        type: 'list',
        content: [
          'Reduced void period: Even saving one week of vacancy (£200-£300 rent) nearly covers the decoration cost',
          'Higher rental values: Well-presented properties can command 5-10% higher rents',
          'Longer tenancies: Quality tenants in well-maintained properties tend to stay longer',
          'Reduced maintenance: Regular decoration prevents more costly repairs later'
        ]
      },
      {
        type: 'heading',
        content: 'Why Choose Professional Decorators Over DIY',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'While DIY decoration might seem cost-effective, professional decorators offer significant advantages for landlords and letting agents:'
      },
      {
        type: 'subheading',
        content: 'Time Efficiency',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professional teams can complete a full property decoration in 2-3 days, compared to weeks for DIY efforts. This speed is crucial for minimizing void periods and getting properties back on the rental market quickly. We work with landlords across [Exeter](/areas/exeter/rental-refresh-painting) and the wider Devon area.'
      },
      {
        type: 'subheading',
        content: 'Quality and Durability',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professional decorators have the skills and experience to deliver a finish that lasts longer and looks better. Proper preparation, high-quality materials, and expert application mean fewer touch-ups and longer intervals between decorating cycles.'
      },
      {
        type: 'quote',
        content: 'Professional decoration doesn\'t just make properties look better—it\'s an investment that pays for itself through reduced void periods and higher rental yields.'
      },
      {
        type: 'heading',
        content: 'Working with BSR Decorating',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we understand the unique challenges facing landlords and letting agents. Our end-of-tenancy decorating service is designed specifically for the rental market:'
      },
      {
        type: 'subheading',
        content: 'Quick Turnaround Times',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'We pride ourselves on efficient scheduling and completion. Most properties can be scheduled within days of your call, and we work to agreed timescales to ensure your property is ready for new tenants as quickly as possible.'
      },
      {
        type: 'subheading',
        content: 'Landlord-Friendly Pricing',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'We offer competitive rates for landlords with multiple properties and can provide package deals for property portfolios. Our transparent pricing means no hidden costs or surprises.'
      },
      {
        type: 'paragraph',
        content: 'Whether you need [domestic decorating services](/domestic) for rental properties or have questions about our approach, we\'re here to help.'
      },
      {
        type: 'link',
        href: '/domestic',
        linkText: 'View Our Domestic Decorating Services'
      },
      {
        type: 'paragraph',
        content: 'Ready to minimise your next void period? Contact BSR Decorating today for a free, no-obligation quote on your end-of-tenancy decorating requirements.'
      }
    ]
  },
  'professional-decorating-enhances-business-premises': {
    sections: [
      {
        type: 'paragraph',
        content: 'Your business premises are more than just a place to work—they\'re a reflection of your brand, a space that influences employee morale, and often the first impression potential customers have of your company. Professional commercial decorating can transform your business environment in ways that directly impact your bottom line.'
      },
      {
        type: 'heading',
        content: 'The Psychology of Commercial Spaces',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'The design and decoration of your business premises influence behaviour, productivity, and perception in measurable ways. Understanding these psychological impacts is crucial for making informed decisions about your commercial decorating investment.'
      },
      {
        type: 'subheading',
        content: 'Employee Productivity and Wellbeing',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Research consistently shows that well-designed workspaces improve employee satisfaction and productivity. Key factors include:'
      },
      {
        type: 'list',
        content: [
          'Natural light enhancement: Light colours and strategic use of whites can maximise natural light, reducing eye strain and improving mood',
          'Colour psychology: Blues promote focus and calm, greens reduce eye strain, while warmer colours in break areas encourage social interaction',
          'Brand reinforcement: Incorporating company colours helps employees feel connected to the organisation\'s mission'
        ]
      },
      {
        type: 'subheading',
        content: 'Customer Impressions',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'For customer-facing businesses, decoration directly influences purchasing decisions. Learn more about our [commercial decorating approach](/commercial):'
      },
      {
        type: 'list',
        content: [
          'Trust and credibility: Professional, well-maintained premises suggest attention to detail in all business aspects',
          'Brand consistency: Cohesive colour schemes and finishes reinforce brand identity',
          'Comfort and dwell time: Thoughtful decoration can encourage customers to spend more time (and money) in your space'
        ]
      },
      {
        type: 'heading',
        content: 'Sector-Specific Commercial Decorating',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Different types of businesses have unique decorating requirements that professional decorators understand and can address effectively.'
      },
      {
        type: 'subheading',
        content: 'Office Environments',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Modern offices require decoration that supports various work styles:'
      },
      {
        type: 'list',
        content: [
          'Open plan areas: Light, neutral colours that don\'t become overwhelming in large spaces',
          'Meeting rooms: Colours that promote focus and reduce distractions',
          'Break-out spaces: Warmer, more relaxed colour schemes that encourage collaboration',
          'Reception areas: Professional colours that align with brand identity and create positive first impressions'
        ]
      },
      {
        type: 'subheading',
        content: 'Retail Spaces',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Retail decoration must support the customer journey and purchasing behaviour:'
      },
      {
        type: 'list',
        content: [
          'Window displays: Neutral backgrounds that make products stand out',
          'Sales floors: Colours and finishes that complement merchandise without competing',
          'Changing rooms: Flattering lighting and colours that make customers feel confident',
          'Storage areas: Durable, easy-to-clean finishes that maintain hygiene standards'
        ]
      },
      {
        type: 'quote',
        content: 'Professional commercial decorating is an investment that delivers returns through improved employee productivity, enhanced customer perception, and strengthened brand identity.'
      },
      {
        type: 'heading',
        content: 'Brand Alignment Through Colour',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Professional commercial decorating goes beyond simply making spaces look attractive—it strategically reinforces your brand identity throughout your premises.'
      },
      {
        type: 'subheading',
        content: 'Colour Strategy Development',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Developing an effective colour strategy involves:'
      },
      {
        type: 'list',
        content: [
          'Brand colour analysis: Understanding how your brand colours translate to interior spaces',
          'Psychological impact assessment: Ensuring chosen colours support your business objectives',
          'Practical considerations: Balancing brand requirements with functional needs',
          'Flexibility planning: Creating schemes that can evolve with your brand'
        ]
      },
      {
        type: 'heading',
        content: 'Durability and Maintenance in Commercial Settings',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Commercial premises face unique challenges that domestic properties don\'t encounter. Professional commercial decorating addresses these specific requirements.'
      },
      {
        type: 'subheading',
        content: 'High-Traffic Area Considerations',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Areas with heavy footfall require special attention:'
      },
      {
        type: 'list',
        content: [
          'Durable paint systems: Multi-coat applications designed for longevity',
          'Washable finishes: Surfaces that can withstand regular cleaning',
          'Scuff-resistant treatments: Protection against daily wear and tear',
          'Touch-up planning: Systems designed for easy maintenance'
        ]
      },
      {
        type: 'heading',
        content: 'Planning Your Commercial Decorating Project',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Successful commercial decorating requires careful planning to minimise business disruption while achieving optimal results.'
      },
      {
        type: 'subheading',
        content: 'Minimising Business Disruption',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professional [commercial decorators in Exeter](/areas/exeter/commercial-decorating) understand the importance of maintaining business operations:'
      },
      {
        type: 'list',
        content: [
          'Phased approach: Completing work in sections to maintain partial operations',
          'Out-of-hours working: Evening and weekend work to avoid peak business times',
          'Dust and odour control: Professional techniques to minimise impact on ongoing operations',
          'Flexible scheduling: Adapting to unexpected business requirements'
        ]
      },
      {
        type: 'paragraph',
        content: 'Interested in seeing examples of our commercial work? Browse our [project portfolio](/portfolio) to see transformations across various business types.'
      },
      {
        type: 'link',
        href: '/commercial',
        linkText: 'Learn More About Our Commercial Services'
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we specialise in [commercial decorating](/commercial) across Devon, including [Exeter city centre](/areas/exeter/commercial-decorating) and [Newton Abbot](/areas/newton-abbot), working with businesses of all sizes to create environments that work. Our experience across multiple sectors means we understand the unique requirements of different business types and can deliver decoration that truly enhances your business premises.'
      }
    ]
  },
  'cost-effective-decorating-rental-properties-hmos': {
    sections: [
      {
        type: 'paragraph',
        content: 'Managing rental properties and HMOs (Houses in Multiple Occupation) requires a strategic approach to decorating that balances cost, durability, and appeal. Smart decorating choices can significantly impact your rental yields, tenant satisfaction, and long-term property maintenance costs.'
      },
      {
        type: 'heading',
        content: 'The Economics of Rental Property Decorating',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Understanding the financial dynamics of rental property decorating is crucial for making informed decisions that maximise your return on investment.'
      },
      {
        type: 'subheading',
        content: 'Cost vs. Value Analysis',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professional decorating represents a significant upfront cost, but the long-term benefits often justify the investment:'
      },
      {
        type: 'list',
        content: [
          'Reduced void periods: Well-presented properties rent faster, minimising lost income',
          'Higher rental values: Quality finishes can support 5-10% rent premiums',
          'Longer tenancies: Tenants stay longer in well-maintained properties',
          'Lower maintenance costs: Quality decoration prevents more expensive repairs',
          'Better tenant quality: Professional presentation attracts more reliable tenants'
        ]
      },
      {
        type: 'heading',
        content: 'Hardwearing Paints and Finishes for Rental Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Rental properties face unique challenges that require specific paint types and application techniques to ensure longevity and easy maintenance.'
      },
      {
        type: 'subheading',
        content: 'Paint Types for High-Traffic Areas',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Different areas of rental properties require different paint specifications:'
      },
      {
        type: 'list',
        content: [
          'Washable emulsion: Essential for living areas, hallways, and bedrooms where walls may need regular cleaning',
          'Kitchen and bathroom paint: Moisture-resistant formulations that prevent mould and allow thorough cleaning',
          'Eggshell finish: Ideal for woodwork, providing durability while remaining attractive',
          'Satinwood: For high-use areas like door frames and skirting boards where maximum durability is needed'
        ]
      },
      {
        type: 'heading',
        content: 'Strategic Colour Schemes for Multiple Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Developing a consistent colour strategy across your property portfolio can significantly reduce costs and simplify maintenance while creating a professional brand identity.'
      },
      {
        type: 'subheading',
        content: 'Portfolio Standardisation Benefits',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Using consistent colour schemes across multiple properties provides several advantages:'
      },
      {
        type: 'list',
        content: [
          'Bulk purchasing power: Buying larger quantities of the same colours reduces per-litre costs',
          'Simplified maintenance: Touch-up paint always available without colour matching issues',
          'Professional image: Consistent presentation suggests attention to detail and professional management',
          'Efficient scheduling: Decorators can move between properties without colour changes'
        ]
      },
      {
        type: 'subheading',
        content: 'Optimal Colour Choices for Rental Properties',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'The best colours for rental properties balance broad appeal with practicality:'
      },
      {
        type: 'list',
        content: [
          'Magnolia and warm whites: Classic choices that brighten spaces and hide minor scuffs',
          'Light grays: Modern and sophisticated, popular with young professionals',
          'Soft neutrals: Beiges and stones that create warmth without being dated',
          'Strategic accent colours: Pale blues or greens in bedrooms for a calming effect'
        ]
      },
      {
        type: 'heading',
        content: 'HMO-Specific Decorating Considerations',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Houses in Multiple Occupation face unique challenges that require specialised decorating approaches to manage costs and maintain standards.'
      },
      {
        type: 'subheading',
        content: 'High-Turnover Management',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'HMOs typically experience more frequent tenant changes, requiring decoration strategies that accommodate this:'
      },
      {
        type: 'list',
        content: [
          'Frequent touch-ups: Systems for quickly refreshing individual rooms',
          'Durable finishes: Specifications that withstand multiple tenancy changes',
          'Modular approach: Room-by-room decoration that doesn\'t require whole-property closure',
          'Quick-drying paints: Formulations that allow faster turnaround between tenants'
        ]
      },
      {
        type: 'heading',
        content: 'Efficient Turnaround Solutions',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Minimising void periods is crucial for rental property profitability, requiring efficient decoration processes that maintain quality while maximising speed.'
      },
      {
        type: 'quote',
        content: 'Smart decorating choices for rental properties aren\'t just about aesthetics—they\'re strategic business decisions that directly impact your investment returns.'
      },
      {
        type: 'heading',
        content: 'Benefits of Using One Decorating Company',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Developing a relationship with a single, reliable decorating company can provide significant advantages for property investors and landlords. Knowing [how to choose a painter & decorator in Exeter](/blog/choose-painter-decorator-exeter-guide) is the first step toward building this valuable partnership.'
      },
      {
        type: 'subheading',
        content: 'Consistency and Quality Control',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Working with one decorator ensures:'
      },
      {
        type: 'list',
        content: [
          'Consistent standards: The same quality approach across all properties',
          'Brand development: Building a recognisable standard for your properties',
          'Quality assurance: Established systems for monitoring and maintaining standards',
          'Problem resolution: Clear accountability and established resolution processes'
        ]
      },
      {
        type: 'subheading',
        content: 'Financial Benefits',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Long-term relationships with decorating companies often provide financial advantages:'
      },
      {
        type: 'list',
        content: [
          'Volume discounts: Better rates for regular, reliable work',
          'Priority scheduling: Preferential treatment for urgent turnarounds',
          'Flexible payment terms: Possible monthly accounts for regular clients',
          'Bulk material purchasing: Shared benefits of larger material orders'
        ]
      },
      {
        type: 'heading',
        content: 'Technology and Modern Solutions',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Embracing technology can improve efficiency and reduce costs in rental property decoration.'
      },
      {
        type: 'subheading',
        content: 'Digital Colour Matching',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Modern technology helps maintain colour consistency:'
      },
      {
        type: 'list',
        content: [
          'Digital colour databases: Storing exact colour specifications for each property',
          'Colour matching apps: Quick identification of existing colours for touch-ups',
          'Spectrophotometer services: Precise colour matching for older properties'
        ]
      },
      {
        type: 'paragraph',
        content: 'Looking for inspiration? Check out our [portfolio of completed projects](/portfolio) to see how professional decoration transforms rental properties.'
      },
      {
        type: 'link',
        href: '/domestic',
        linkText: 'Explore Our Domestic Decorating Services'
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we specialise in working with property investors and landlords across Devon. Our [domestic decorating services](/domestic) are perfect for rental properties and HMOs. Our experience managing decoration for rental properties means we understand your challenges and can deliver solutions that improve your returns while maintaining the highest standards.'
      }
    ]
  },
  'painter-decorator-cost-exeter-2025-price-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Planning a decorating project in Exeter and wondering what it\'ll actually cost? You\'re not alone. Whether you\'re refreshing a Victorian terrace in St Leonard\'s, repainting a period property in [Topsham](/areas/topsham), or maintaining one of [Exeter\'s 994 listed buildings](/areas/exeter/heritage-property-painting), understanding realistic pricing is crucial before you commit.',
      },
      {
        type: 'paragraph',
        content: 'As professional decorators based in Devon with over 20 years of experience working across [Exeter](/areas/exeter) and surrounding areas, we\'ve compiled genuine 2026 pricing data to help you budget accurately. Costs vary significantly based on property age, condition, and specific requirements—here\'s everything you need to know.',
      },
      {
        type: 'heading',
        content: 'Interior Painting & Decorating Costs in Exeter',
        level: 2,
      },
      {
        type: 'paragraph',
        content: '[Interior painting costs](/areas/exeter/interior-painting) depend on room size, ceiling height, preparation work required, and the quality of finish you\'re after. Exeter\'s mix of period and modern properties means preparation work can vary dramatically—a new-build in Cranbrook requires minimal prep, while a Victorian property in Heavitree might need extensive filling, sanding, and multiple undercoats.',
      },
      {
        type: 'subheading',
        content: 'Room-by-Room Pricing for 2026',
        level: 3,
      },
      {
        type: 'list',
        content: [
          '**Single bedroom:** £498 average (includes walls, ceiling, and woodwork with two coats)',
          '**Living room:** £674 average (larger spaces with bay windows and feature walls)',
          '**Kitchen walls and ceiling:** £364 average (excludes cabinet painting)',
          '**Bathroom:** £332 average (using moisture-resistant paints, proper ventilation prep)',
          '**Hall, stairs and landing:** £814 average (requires height access equipment, intricate woodwork)',
          '**Full 3-bedroom house interior:** £2,800-£4,500 depending on condition and ceiling heights',
          '**Full 4-bedroom house interior:** £4,200-£6,500 including all rooms and circulation spaces',
        ],
      },
      {
        type: 'subheading',
        content: 'Individual Elements',
        level: 3,
      },
      {
        type: 'list',
        content: [
          '**Ceiling per room:** £108 average',
          '**Interior doors:** £122 per door (includes prep, undercoat, two topcoats)',
          '**Front door:** £123 (weather-resistant finish, proper preparation)',
          '**Skirting boards:** £105 per room average',
          '**Window frames:** £45-£85 per window depending on size and condition',
          '**Radiators:** £35-£55 per radiator (removal, painting behind, refitting)',
        ],
      },
      {
        type: 'paragraph',
        content: 'These prices assume properties in reasonable condition. Period properties—common throughout Exeter\'s conservation areas including St David\'s, Pennsylvania, and the Southernhay district—often require significantly more preparation work. Expect costs to increase by 20-35% for properties with cracked plasterwork, damaged cornicing, or multiple layers of old paint requiring stripping.',
      },
      {
        type: 'heading',
        content: 'Exterior Painting Costs in Devon\'s Climate',
        level: 2,
      },
      {
        type: 'paragraph',
        content: '[Exterior painting](/areas/exeter/exterior-painting) typically costs more than interior work due to access equipment, weather-dependent scheduling, and the need for specialist paints that withstand Devon\'s coastal climate. Properties in exposed locations or near the Exe Estuary require particular attention to paint specification.',
      },
      {
        type: 'subheading',
        content: 'Exterior Project Costs',
        level: 3,
      },
      {
        type: 'list',
        content: [
          '**Full house exterior (3-bed semi):** £1,728 average for render/masonry painting',
          '**Terraced house front elevation:** £850-£1,400 (typical St Leonard\'s or Heavitree terrace)',
          '**Timber cladding:** £35-£50 per square metre including preparation',
          '**Fascias, soffits and guttering:** £400-£800 for average 3-bed house',
          '**External window frames:** £65-£120 per window (more for sash windows)',
          '**Garden walls and boundary walls:** £18-£28 per linear metre',
        ],
      },
      {
        type: 'paragraph',
        content: 'Scaffolding is often required for two-storey properties and adds £600-£1,200 depending on house size and access. Properties in Exeter\'s narrow streets—like those around St David\'s or the Cathedral Quarter—may require special scaffolding licences from the council, potentially adding to costs.',
      },
      {
        type: 'heading',
        content: 'Specialist Services: Where Costs Increase',
        level: 2,
      },
      {
        type: 'subheading',
        content: 'Heritage and Listed Building Work',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exeter has 994 listed buildings, with 228 in [Topsham](/areas/topsham) alone. Working on listed or period properties requires specialist knowledge of breathable paints, traditional techniques, and often Listed Building Consent compliance. Heritage decoration typically costs 30-50% more than standard work due to:',
      },
      {
        type: 'list',
        content: [
          'Use of specialist breathable and lime-based paints (£45-£75 per litre vs £25-£35 for standard)',
          'Traditional preparation methods required by conservation officers',
          'Additional time for delicate work around original features',
          'Documentation and consultation with conservation officers',
          'Specialist materials for period-appropriate finishes',
        ],
      },
      {
        type: 'paragraph',
        content: 'Hourly rates for heritage specialists typically run £31-£40+ compared to £22-£28 for standard decorating work. For a comprehensive guide to working on historic properties, see our [Topsham conservation area decorating guide](/blog/topsham-conservation-area-decorating-guide).',
      },
      {
        type: 'subheading',
        content: 'Kitchen Cabinet Spraying',
        level: 3,
      },
      {
        type: 'paragraph',
        content: '[Kitchen spraying](/areas/exeter/kitchen-spraying) has become extremely popular in Exeter as an alternative to full kitchen replacement. A professional spray finish costs around £750 for an average kitchen—a fraction of the £8,000-£15,000 for new units. This service is particularly popular in period properties where existing kitchen layouts work well but finishes are dated.',
      },
      {
        type: 'subheading',
        content: 'Wallpaper Hanging and Removal',
        level: 3,
      },
      {
        type: 'list',
        content: [
          '**Wallpaper hanging:** £316 per room average (labour only—wallpaper supplied by client)',
          '**Wallpaper removal:** £336 per room average (can be higher for multiple layers or old paste)',
          '**Feature wall wallpapering:** £180-£280 depending on pattern matching complexity',
        ],
      },
      {
        type: 'heading',
        content: 'What Affects Your Final Quote?',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Several factors can significantly impact your final decorating costs in Exeter:',
      },
      {
        type: 'subheading',
        content: 'Property Age and Condition',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s housing stock ranges from Georgian townhouses to brand-new developments like Cranbrook. Victorian and Edwardian properties (common in Heavitree, Pennsylvania, and St Leonard\'s) typically need more preparation than modern homes. New builds paradoxically can also require extra work—many have poor initial paintwork that needs correcting. Read more about [common new-build paint problems](/blog/the-real-problem-with-exeter-new-build-paintwork).',
      },
      {
        type: 'subheading',
        content: 'Ceiling Height',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Period properties often have 3-3.5 metre ceilings compared to 2.4 metres in modern homes. Higher ceilings mean more wall area, more time on ladders or platforms, and increased material costs. Expect costs to increase by 25-40% for high-ceilinged rooms.',
      },
      {
        type: 'subheading',
        content: 'Access and Location',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Parking restrictions in central Exeter (particularly around the Cathedral Quarter, Southernhay, and St David\'s) can add time and logistical costs. Narrow lanes in Topsham\'s historic core may limit access for equipment. Properties on hills around Pennsylvania and Higher Hoopern require additional consideration for material delivery.',
      },
      {
        type: 'subheading',
        content: 'Paint Quality',
        level: 3,
      },
      {
        type: 'paragraph',
        content: 'Professional-grade paints cost £35-£75 per 5-litre tin compared to £15-£25 for DIY-store brands. Premium paints like Farrow & Ball or Little Greene (popular for period properties) can cost £85-£125 per 5 litres. However, better paint often means better coverage, so one coat of premium paint may do the job of two coats of budget paint.',
      },
      {
        type: 'heading',
        content: 'Commercial Decorating Costs',
        level: 2,
      },
      {
        type: 'paragraph',
        content: '[Commercial painting and decorating](/commercial) operates on different pricing structures. Office spaces in Exeter city centre, retail units, or hospitality venues often require out-of-hours work (adding 20-30% to costs), faster turnarounds, and compliance with commercial building regulations.',
      },
      {
        type: 'list',
        content: [
          '**Office repainting:** £8-£14 per square metre for walls and ceilings',
          '**Retail unit refresh:** £1,200-£3,500 depending on size and fixtures',
          '**Restaurant/pub redecoration:** £3,000-£8,000+ (often including specialist finishes)',
          '**Commercial exterior:** £15-£30 per square metre depending on access and preparation',
        ],
      },
      {
        type: 'paragraph',
        content: 'Many Exeter businesses schedule decorating during quiet periods (January-February for hospitality, August for offices near the University). Advanced booking during these periods often secures better rates.',
      },
      {
        type: 'heading',
        content: 'Landlord and Rental Property Services',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'With 14,200+ private rental properties in Exeter, [landlord painting services](/areas/exeter/rental-refresh-painting) are in constant demand. End-of-tenancy refreshes typically cost £800-£1,800 for a 2-3 bedroom property, depending on wear and tear. Many Exeter landlords work with decorators on retainer agreements for multiple properties, which can reduce per-property costs by 10-15%.',
      },
      {
        type: 'quoteCTA',
        content: 'Ready to get accurate pricing for your specific project? We provide detailed, transparent quotes with no hidden costs. [Contact us today](/contact) for a free, no-obligation quote for your Exeter property.',
      },
      {
        type: 'heading',
        content: 'How to Get the Best Value',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Getting the best value doesn\'t mean choosing the cheapest quote. Here\'s how to ensure you\'re investing wisely:',
      },
      {
        type: 'list',
        content: [
          '**Get detailed written quotes:** Ensure quotes specify paint brands, number of coats, surface preparation included, and timeline',
          '**Check insurance and credentials:** Professional decorators should have public liability insurance (minimum £2 million) and verifiable references',
          '**Ask about preparation work:** The difference between a £400 room and a £600 room is usually preparation quality—make sure you know what\'s included',
          '**Consider timing:** Booking exterior work for spring (March-May) often provides better availability than peak summer months',
          '**Don\'t skip preparation:** Cutting corners on surface prep means paint failure within 2-3 years instead of 7-10 years',
          '**Request heritage experience for period properties:** Not all decorators understand breathable paints or traditional techniques required for older buildings',
        ],
      },
      {
        type: 'paragraph',
        content: 'For guidance on choosing the right decorator, see our guide on [how to choose a painter and decorator in Exeter](/blog/how-to-choose-painter-decorator-exeter).',
      },
      {
        type: 'heading',
        content: 'Seasonal Variations in Pricing',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Decorator availability and pricing in Devon follows seasonal patterns. Summer (June-August) is peak season with 4-6 week lead times and premium pricing for urgent work. Spring and autumn offer better availability and potentially more competitive pricing. Winter (December-February) is quieter—perfect for interior projects, commercial work, and securing slots for the following spring\'s exterior work.',
      },
      {
        type: 'paragraph',
        content: 'Many Exeter decorators offer slight discounts (5-10%) for winter interior work bookings or for scheduling multiple rooms together rather than piecemeal projects.',
      },
      {
        type: 'heading',
        content: 'Transparent Pricing for Exeter Properties',
        level: 2,
      },
      {
        type: 'paragraph',
        content: 'Understanding realistic costs helps you budget accurately and avoid nasty surprises. Every property is different—particularly in Exeter where you might be working on anything from a Georgian listed building in the Cathedral Close to a brand-new apartment in Cranbrook—so detailed, property-specific quotes are essential.',
      },
      {
        type: 'paragraph',
        content: 'At [BSR Decorating](/), we provide transparent, detailed quotes based on thorough property assessments. We\'ll explain exactly what work is required, which materials we\'ll use, and realistic timescales—with no hidden costs or surprise extras.',
      },
      {
        type: 'quoteCTA',
        content: 'Planning a decorating project in Exeter or Topsham? Get in touch for a free, detailed quote. Call us or [request a quote online](/contact)—we\'re happy to visit your property and provide accurate, transparent pricing with no obligation.',
      },
    ],
  },
  'best-paint-types-exeter-homes-old-damp-listed-properties': {
    sections: [
      {
        type: 'paragraph',
        content: 'Exeter\'s beautiful mix of Georgian townhouses, Victorian terraces, and period properties presents unique challenges when it comes to choosing paint. Whether you own a listed building in the conservation area, a damp-prone property, or a heritage home, selecting the right paint is crucial for both appearance and longevity. This expert guide will help you choose the best paint types for [Exeter\'s diverse property portfolio](/areas/exeter). For professional [domestic decorating services](/domestic) in Exeter, our team has extensive experience with all property types.'
      },
      {
        type: 'heading',
        content: 'Paint for Exeter\'s Period & Listed Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s heritage properties, particularly in areas like St. Leonard\'s and the city centre, require specialist paint that respects the building\'s character while providing protection.'
      },
      {
        type: 'subheading',
        content: 'Breathable Paints for Period Properties',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Traditional buildings need to "breathe"—allowing moisture to escape through walls. Modern non-breathable paints can trap moisture, leading to damp and decay:'
      },
      {
        type: 'list',
        content: [
          'Lime-based paints: Traditional, highly breathable, perfect for old stone and brick',
          'Clay paints: Natural, breathable, excellent for period interiors',
          'Mineral paints: Silicate-based, breathable, durable for exteriors',
          'Avoid: Vinyl emulsions on old walls—they trap moisture and cause problems'
        ]
      },
      {
        type: 'subheading',
        content: 'Heritage Paint Brands for Exeter Properties',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'For listed buildings and conservation areas, these brands offer authentic finishes:'
      },
      {
        type: 'list',
        content: [
          'Farrow & Ball: Authentic heritage colours, breathable finishes',
          'Little Greene: Traditional formulations, period-appropriate colours',
          'Earthborn: Clay-based, highly breathable, eco-friendly',
          'Auro: Natural paints, suitable for sensitive buildings'
        ]
      },
      {
        type: 'heading',
        content: 'Paint for Damp-Prone Exeter Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Many Exeter properties, especially older buildings, face damp challenges. The right paint can help manage moisture effectively.'
      },
      {
        type: 'subheading',
        content: 'Anti-Mould & Moisture-Resistant Paints',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Dulux Trade Weathershield: Excellent for damp-prone exteriors',
          'Zinsser Perma-White: Anti-mould, perfect for bathrooms and kitchens',
          'Crown Trade Anti-Mould: Long-lasting protection against mould growth',
          'Johnstone\'s Stormshield: Weather-resistant, ideal for Exeter\'s climate'
        ]
      },
      {
        type: 'subheading',
        content: 'Breathable Solutions for Damp Walls',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'If your Exeter property has damp issues, breathable paint is essential:'
      },
      {
        type: 'list',
        content: [
          'Identify the damp source first: Rising damp, penetrating damp, or condensation',
          'Use breathable paint: Allows moisture to escape while protecting the surface',
          'Consider lime plaster: If replastering, use breathable lime-based systems',
          'Avoid: Non-breathable paints that trap moisture and worsen problems'
        ]
      },
      {
        type: 'heading',
        content: 'Paint for Different Exeter Property Types',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Georgian Townhouses (St. Leonard\'s, City Centre)',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Interior: Farrow & Ball Estate Emulsion or Little Greene Intelligent Matt',
          'Exterior: Mineral-based paints or breathable masonry paint',
          'Woodwork: Traditional oil-based or modern water-based alternatives',
          'Colours: Period-appropriate palettes (Georgian greys, creams, heritage blues)'
        ]
      },
      {
        type: 'subheading',
        content: 'Victorian Terraces',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Interior: Breathable emulsion (clay or mineral-based)',
          'Exterior: Durable masonry paint with good breathability',
          'Features: Consider heritage colours for authentic Victorian character',
          'Preparation: Often requires extensive prep due to multiple paint layers'
        ]
      },
      {
        type: 'subheading',
        content: 'Modern Properties',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Interior: Standard emulsion (Dulux Trade, Crown Trade)',
          'Exterior: Weather-resistant masonry paint',
          'Flexibility: Modern properties can use any quality paint system',
          'Consider: Low-VOC options for better indoor air quality'
        ]
      },
      {
        type: 'heading',
        content: 'Specialist Paint Requirements for Listed Buildings',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'If your Exeter property is listed or in a conservation area, you may need specific approvals:'
      },
      {
        type: 'list',
        content: [
          'Check with Exeter City Council: Listed building consent may be required',
          'Use traditional materials: Often specified in conservation requirements',
          'Colour restrictions: Some areas have approved colour palettes',
          'Professional application: Listed buildings often require specialist techniques'
        ]
      },
      {
        type: 'quote',
        content: 'Choosing the right paint for Exeter\'s period properties isn\'t just about colour—it\'s about protecting your investment and respecting the building\'s heritage.'
      },
      {
        type: 'heading',
        content: 'Interior vs Exterior Paint Considerations',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Interior Paint for Exeter Homes',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Living areas: Matt or eggshell for period properties, durable for family homes',
          'Kitchens: Moisture-resistant, wipeable finishes (satin or gloss)',
          'Bathrooms: Anti-mould, moisture-resistant paint essential',
          'Bedrooms: Breathable options for older properties, standard emulsion for modern'
        ]
      },
      {
        type: 'subheading',
        content: 'Exterior Paint for Exeter Properties',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Masonry: Breathable masonry paint for old buildings, standard for modern',
          'Woodwork: Microporous paint for windows and doors (allows wood to breathe)',
          'Metalwork: Specialist metal paint for railings and gates',
          'Consider: Exeter\'s weather—rain, salt air (if near coast), and temperature variations'
        ]
      },
      {
        type: 'heading',
        content: 'Professional Paint Selection Advice',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we assess each Exeter property individually:'
      },
      {
        type: 'list',
        content: [
          'Property age and construction type',
          'Existing paint systems and condition',
          'Damp issues or moisture problems',
          'Listed building or conservation area status',
          'Client preferences and budget',
          'Long-term maintenance requirements'
        ]
      },
      {
        type: 'paragraph',
        content: 'Need expert advice on choosing the right paint for your Exeter property? Our [domestic decorating team](/domestic) specialises in period properties, listed buildings, and damp-prone homes across [Exeter](/areas/exeter). Contact BSR Decorating for a professional assessment.'
      },
      {
        type: 'link',
        href: '/areas/exeter',
        linkText: 'Get Expert Paint Advice for Your Exeter Property'
      }
    ]
  },
  'exeter-new-build-paintwork-problems-how-pros-fix': {
    sections: [
      {
        type: 'paragraph',
        content: 'If you\'ve bought a new-build home in Exeter\'s Heavitree, new developments, or any of the city\'s expanding residential areas, you might have noticed issues with the paintwork sooner than expected. This isn\'t uncommon—developer finishes are often done quickly and to a budget, not to professional standards. Here\'s what goes wrong with new-build paintwork and how professional decorators fix it properly. Our [domestic decorating services](/domestic) in [Exeter](/areas/exeter) specialise in fixing these common issues.'
      },
      {
        type: 'heading',
        content: 'Common Problems with Exeter New-Build Paintwork',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Poor Surface Preparation',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'The most common issue with developer paintwork is inadequate preparation:'
      },
      {
        type: 'list',
        content: [
          'Unfilled nail holes and imperfections',
          'Rough plaster not properly sanded',
          'Dust and debris left on surfaces',
          'No primer on bare plaster or wood',
          'Paint applied over dirty or greasy surfaces'
        ]
      },
      {
        type: 'subheading',
        content: 'Low-Quality Paint',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Developers often use budget paint to keep costs down:'
      },
      {
        type: 'list',
        content: [
          'Thin coverage requiring multiple coats',
          'Poor durability and washability',
          'Colour fading quickly',
          'Inadequate protection for high-traffic areas',
          'Not suitable for specific room requirements (bathrooms, kitchens)'
        ]
      },
      {
        type: 'subheading',
        content: 'Rushed Application',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Paint applied too thickly (drips and runs)',
          'Paint applied too thinly (patchy coverage)',
          'Insufficient drying time between coats',
          'Brush marks and roller streaks visible',
          'Cutting-in not done properly (uneven edges)'
        ]
      },
      {
        type: 'subheading',
        content: 'Inappropriate Paint for Room Type',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Standard emulsion in bathrooms (needs moisture-resistant)',
          'Wrong finish for kitchens (needs wipeable)',
          'No anti-mould paint where needed',
          'Inadequate protection for high-traffic areas'
        ]
      },
      {
        type: 'heading',
        content: 'How Professional Decorators Fix New-Build Paintwork',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Proper Surface Preparation',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professional decorators start with thorough preparation:'
      },
      {
        type: 'list',
        content: [
          'Complete surface inspection: Identify all imperfections',
          'Filling and sanding: Smooth all surfaces properly',
          'Cleaning: Remove all dust, grease, and contaminants',
          'Priming: Apply appropriate primer to bare surfaces',
          'Masking: Protect areas not being painted'
        ]
      },
      {
        type: 'subheading',
        content: 'Quality Paint Selection',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Professionals use trade-quality paint:'
      },
      {
        type: 'list',
        content: [
          'Dulux Trade or Crown Trade: Professional-grade durability',
          'Appropriate finishes: Matt for living areas, satin for kitchens/bathrooms',
          'Moisture-resistant: For bathrooms and damp-prone areas',
          'Washable: For high-traffic and family areas',
          'Long-lasting: 10-15 year lifespan vs 2-3 years for budget paint'
        ]
      },
      {
        type: 'subheading',
        content: 'Professional Application Techniques',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Correct paint thickness: Applied evenly, not too thick or thin',
          'Proper cutting-in: Clean, straight edges with brush work',
          'Roller technique: Consistent texture, no streaks',
          'Multiple coats: As many as needed for perfect coverage',
          'Adequate drying: Proper time between coats for best results'
        ]
      },
      {
        type: 'heading',
        content: 'Room-Specific Solutions for Exeter New-Builds',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Kitchens',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Problem: Standard emulsion that marks easily',
          'Solution: Wipeable satin or eggshell finish',
          'Additional: Grease-resistant paint for areas near cooking',
          'Professional approach: Proper preparation and quality paint'
        ]
      },
      {
        type: 'subheading',
        content: 'Bathrooms',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Problem: Standard paint that develops mould',
          'Solution: Anti-mould, moisture-resistant paint',
          'Additional: Proper ventilation consideration',
          'Professional approach: Specialist bathroom paint systems'
        ]
      },
      {
        type: 'subheading',
        content: 'Living Areas & Bedrooms',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Problem: Thin coverage, poor durability',
          'Solution: Quality matt emulsion, proper number of coats',
          'Additional: Consider washable options for family homes',
          'Professional approach: Trade-quality paint with proper application'
        ]
      },
      {
        type: 'subheading',
        content: 'Hallways & Stairs',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Problem: Scuff marks and wear',
          'Solution: Durable, washable finish',
          'Additional: Consider tougher paint for high-traffic areas',
          'Professional approach: Appropriate paint for traffic levels'
        ]
      },
      {
        type: 'heading',
        content: 'When to Repaint Your Exeter New-Build',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Signs it\'s time for professional repainting:'
      },
      {
        type: 'list',
        content: [
          'Paint peeling or flaking within first year',
          'Visible brush marks or roller streaks',
          'Patchy coverage or colour inconsistency',
          'Mould appearing in bathrooms',
          'Paint marking easily in kitchens',
          'General wear appearing too quickly',
          'You simply want a better finish'
        ]
      },
      {
        type: 'quote',
        content: 'Developer finishes are about speed and cost. Professional finishes are about quality and longevity. The difference is immediately visible and lasts for years.'
      },
      {
        type: 'heading',
        content: 'Cost of Fixing New-Build Paintwork',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Professional repainting of new-build properties typically costs:'
      },
      {
        type: 'list',
        content: [
          'Single room: £300-£600 (depending on size and issues)',
          'Full house (3-bed): £2,500-£4,000',
          'Full house (4-bed): £3,500-£5,500',
          'Kitchen/bathroom specialist work: Additional £200-£400 per room'
        ]
      },
      {
        type: 'paragraph',
        content: 'Remember: Professional work lasts 10-15 years vs 2-3 years for developer finishes, making it better value long-term.'
      },
      {
        type: 'heading',
        content: 'Why Heavitree & New-Build Areas Need Professional Paintwork',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Exeter\'s expanding residential areas like Heavitree have many new-build properties. These homes deserve professional finishes that:'
      },
      {
        type: 'list',
        content: [
          'Protect your investment properly',
          'Look professional and well-maintained',
          'Last significantly longer',
          'Add value to your property',
          'Provide peace of mind'
        ]
      },
      {
        type: 'paragraph',
        content: 'Tired of substandard developer paintwork? BSR Decorating specialises in fixing new-build paint issues across [Exeter](/areas/exeter), including Heavitree and all new development areas. Our [domestic decorating services](/domestic) provide professional finishes that last. Get a professional finish that lasts.'
      },
      {
        type: 'link',
        href: '/areas/exeter',
        linkText: 'Fix Your New-Build Paintwork in Exeter'
      }
    ]
  },
  'decorating-tips-exeter-period-homes-specialist-advice': {
    sections: [
      {
        type: 'paragraph',
        content: 'Exeter\'s period properties—from Georgian townhouses in St. Leonard\'s to Victorian terraces and heritage homes—require specialist decorating approaches. These beautiful buildings have unique characteristics that demand expert knowledge and appropriate techniques. Here\'s essential specialist advice for decorating [Exeter\'s period homes](/areas/exeter). Our [domestic decorating services](/domestic) specialise in heritage property work.'
      },
      {
        type: 'heading',
        content: 'Understanding Exeter\'s Period Property Types',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Georgian Properties (St. Leonard\'s, City Centre)',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Georgian homes in Exeter feature:'
      },
      {
        type: 'list',
        content: [
          'Symmetrical facades and proportions',
          'Large sash windows',
          'Original panelled doors and shutters',
          'Period fireplaces and cornicing',
          'High ceilings and spacious rooms'
        ]
      },
      {
        type: 'subheading',
        content: 'Victorian Terraces',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Bay windows and decorative features',
          'Original floorboards and fireplaces',
          'Period tiling and stained glass',
          'Ornate plasterwork',
          'Narrow but tall proportions'
        ]
      },
      {
        type: 'subheading',
        content: 'Edwardian Properties',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Lighter, airier feel than Victorian',
          'Arts and Crafts influences',
          'Quality joinery and built-in features',
          'Garden-focused design',
          'Better natural light'
        ]
      },
      {
        type: 'heading',
        content: 'Essential Decorating Principles for Period Properties',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Respect the Building\'s Character',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Period properties have inherent character that should be enhanced, not hidden:'
      },
      {
        type: 'list',
        content: [
          'Work with original features, don\'t cover them',
          'Choose colours that complement the period',
          'Use appropriate finishes (matt for period interiors)',
          'Preserve original details (cornicing, panelling, fireplaces)',
          'Consider the building\'s history and style'
        ]
      },
      {
        type: 'subheading',
        content: 'Use Breathable Paint Systems',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Old buildings need to breathe—this is crucial:'
      },
      {
        type: 'list',
        content: [
          'Traditional buildings have permeable walls',
          'Non-breathable paint traps moisture',
          'Trapped moisture causes damp and decay',
          'Use breathable paints (lime, clay, or mineral-based)',
          'Essential for both interior and exterior work'
        ]
      },
      {
        type: 'heading',
        content: 'Colour Schemes for Exeter Period Properties',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Georgian Colour Palettes',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Georgian homes suit:'
      },
      {
        type: 'list',
        content: [
          'Soft greys and creams (Farrow & Ball, Little Greene)',
          'Heritage blues and greens',
          'Warm neutrals that complement period features',
          'Rich, muted tones (not bright modern colours)',
          'Consider: Original Georgian colours were often quite bold'
        ]
      },
      {
        type: 'subheading',
        content: 'Victorian Colour Schemes',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Deeper, richer colours',
          'Jewel tones (deep reds, greens, blues)',
          'Warm earth tones',
          'Dramatic contrasts (dark walls, light woodwork)',
          'Consider: Victorian homes can handle stronger colours'
        ]
      },
      {
        type: 'heading',
        content: 'Specialist Techniques for Period Property Decorating',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Preparing Old Surfaces',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Test for lead paint: Essential safety step',
          'Gentle preparation: Don\'t damage original surfaces',
          'Fill appropriately: Use breathable fillers for old walls',
          'Repair before decorating: Fix issues properly first',
          'Respect original materials: Work with, not against, the building'
        ]
      },
      {
        type: 'subheading',
        content: 'Working with Original Features',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Cornicing: Clean carefully, paint to enhance detail',
          'Panelling: Use appropriate finishes, preserve character',
          'Fireplaces: Highlight, don\'t hide, period features',
          'Sash windows: Specialist techniques for period windows',
          'Original floors: Protect during decorating work'
        ]
      },
      {
        type: 'heading',
        content: 'Listed Buildings & Conservation Areas',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'If your Exeter property is listed or in a conservation area:'
      },
      {
        type: 'list',
        content: [
          'Check requirements: Exeter City Council may have specific rules',
          'Listed building consent: May be required for external work',
          'Approved materials: Often specified for listed properties',
          'Colour restrictions: Some areas have approved palettes',
          'Professional requirement: Listed work often needs specialists',
          'Documentation: Keep records of all work done'
        ]
      },
      {
        type: 'heading',
        content: 'Common Mistakes to Avoid',
        level: 2
      },
      {
        type: 'list',
        content: [
          'Using non-breathable paint on old walls',
          'Covering original features',
          'Choosing inappropriate modern colours',
          'Rushing preparation work',
          'Using wrong materials for period properties',
          'Ignoring damp issues before decorating',
          'Not checking listed building requirements'
        ]
      },
      {
        type: 'quote',
        content: 'Decorating a period property in Exeter isn\'t just painting—it\'s preserving history while creating a beautiful, functional home. Specialist knowledge makes all the difference.'
      },
      {
        type: 'heading',
        content: 'Professional Period Property Decorating',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we specialise in period property work across Exeter:'
      },
      {
        type: 'list',
        content: [
          'Heritage expertise: Understanding of period building techniques',
          'Appropriate materials: Breathable paints and traditional methods',
          'Listed building experience: Knowledge of conservation requirements',
          'Respectful approach: Enhancing character, not changing it',
          'Long-term thinking: Solutions that protect and preserve'
        ]
      },
      {
        type: 'paragraph',
        content: 'Planning to decorate your Exeter period property? Get specialist advice from BSR Decorating. We understand the unique requirements of Georgian, Victorian, and heritage homes across St. Leonard\'s, Pennsylvania, and all of [Exeter](/areas/exeter). Our [domestic decorating team](/domestic) has extensive heritage property experience.'
      },
      {
        type: 'link',
        href: '/areas/exeter',
        linkText: 'Get Specialist Period Property Advice in Exeter'
      }
    ]
  },
  'topsham-waterfront-homes-best-paints-humidity-salt-air-weather': {
    sections: [
      {
        type: 'paragraph',
        content: 'Topsham\'s beautiful waterfront properties face unique challenges that standard paint simply can\'t handle. The combination of high humidity, salt air from the estuary, and constant weather exposure requires specialist paint systems designed for marine environments. If you own a riverside property in [Topsham](/areas/topsham), choosing the right paint isn\'t just about aesthetics—it\'s about protecting your investment from the elements. Our [domestic decorating services](/domestic) specialise in waterfront property maintenance.'
      },
      {
        type: 'heading',
        content: 'Why Topsham Waterfront Properties Need Specialist Paint',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Salt Air Corrosion',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s estuary location means properties are exposed to salt-laden air:'
      },
      {
        type: 'list',
        content: [
          'Salt accelerates corrosion of metalwork (railings, gates, window frames)',
          'Salt can degrade paint finishes faster than inland properties',
          'Metalwork needs specialist anti-corrosion primers and paints',
          'Regular maintenance is essential for waterfront properties'
        ]
      },
      {
        type: 'subheading',
        content: 'High Humidity Levels',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Estuary location creates consistently high humidity',
          'Humidity promotes mould and mildew growth',
          'Standard paint can\'t handle constant moisture exposure',
          'Interior paint needs moisture-resistant properties',
          'Exterior paint must be breathable yet protective'
        ]
      },
      {
        type: 'subheading',
        content: 'Weather Exposure',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Wind-driven rain from estuary',
          'Temperature fluctuations',
          'UV exposure (if south-facing)',
          'Frost and freeze-thaw cycles',
          'Constant moisture from river proximity'
        ]
      },
      {
        type: 'heading',
        content: 'Best Paint Types for Topsham Waterfront Homes',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Exterior Masonry Paint',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'For Topsham\'s waterfront exteriors, you need:'
      },
      {
        type: 'list',
        content: [
          'Weather-resistant masonry paint: Stands up to constant moisture',
          'Breathable formula: Allows walls to dry while protecting',
          'Salt-resistant: Specifically formulated for marine environments',
          'UV protection: Prevents fading from sun exposure',
          'Recommended: Dulux Trade Weathershield, Johnstone\'s Stormshield'
        ]
      },
      {
        type: 'subheading',
        content: 'Exterior Woodwork Paint',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Microporous paint: Allows wood to breathe while protecting',
          'Anti-fungal properties: Prevents mould and rot',
          'Salt-resistant: Essential for estuary locations',
          'Flexible finish: Moves with wood expansion/contraction',
          'Recommended: Sadolin Classic, Ronseal Weatherproof'
        ]
      },
      {
        type: 'subheading',
        content: 'Metalwork Paint',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Anti-corrosion primer: Essential first step',
          'Metal-specific paint: Formulated for salt air environments',
          'Zinc-rich primers: For maximum corrosion protection',
          'Regular maintenance: More frequent than inland properties',
          'Recommended: Hammerite, Rust-Oleum specialist ranges'
        ]
      },
      {
        type: 'subheading',
        content: 'Interior Paint for High Humidity',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Anti-mould paint: Essential for bathrooms and high-humidity areas',
          'Moisture-resistant: For rooms affected by estuary humidity',
          'Breathable options: For period properties that need to breathe',
          'Kitchen paint: Grease and moisture-resistant finishes',
          'Recommended: Zinsser Perma-White, Crown Trade Anti-Mould'
        ]
      },
      {
        type: 'heading',
        content: 'Specialist Considerations for Topsham Properties',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Period Properties on the Waterfront',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s heritage waterfront homes need special attention:'
      },
      {
        type: 'list',
        content: [
          'Breathable paint: Essential for old walls',
          'Traditional materials: Where possible, use period-appropriate options',
          'Conservation compliance: Check requirements for listed buildings',
          'Balance: Breathability with weather protection',
          'Expert application: Requires specialist knowledge'
        ]
      },
      {
        type: 'subheading',
        content: 'Flood Risk Considerations',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Flood-resistant finishes: For lower-level rooms',
          'Quick-drying paint: If flooding is a risk',
          'Waterproof options: For basements or ground floors',
          'Regular inspection: Check for water damage',
          'Professional assessment: Understand your property\'s flood risk'
        ]
      },
      {
        type: 'heading',
        content: 'Preparation is Critical for Waterfront Properties',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Proper preparation is even more important for Topsham waterfront homes:'
      },
      {
        type: 'list',
        content: [
          'Thorough cleaning: Remove salt deposits and contaminants',
          'Repair damage: Fix any weather-related issues first',
          'Appropriate primers: Use salt-resistant primers where needed',
          'Surface preparation: More critical in harsh environments',
          'Professional assessment: Identify all issues before starting'
        ]
      },
      {
        type: 'quote',
        content: 'Waterfront properties in Topsham need paint systems that work with the environment, not against it. Specialist knowledge of marine-grade finishes is essential.'
      },
      {
        type: 'heading',
        content: 'Maintenance Schedule for Topsham Waterfront Homes',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Waterfront properties require more frequent maintenance:'
      },
      {
        type: 'list',
        content: [
          'Exterior repainting: Every 5-7 years (vs 8-10 for inland)',
          'Metalwork: Annual inspection, repaint every 3-5 years',
          'Woodwork: Check annually, repaint every 4-6 years',
          'Interior: Standard schedule, but use appropriate paint',
          'Regular cleaning: Remove salt deposits and debris'
        ]
      },
      {
        type: 'heading',
        content: 'Cost Considerations for Waterfront Paintwork',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Specialist paint for waterfront properties costs more, but it\'s essential:'
      },
      {
        type: 'list',
        content: [
          'Marine-grade paint: 20-30% more expensive than standard',
          'More frequent maintenance: Factor into long-term costs',
          'Specialist application: May require experienced decorators',
          'Better value: Proper paint lasts longer and protects better',
          'Investment protection: Prevents costly damage from weather'
        ]
      },
      {
        type: 'paragraph',
        content: 'Need specialist paint advice for your Topsham waterfront property? BSR Decorating has extensive experience with estuary properties, salt air protection, and marine-grade finishes. Our [waterfront property maintenance services](/areas/topsham) in [Topsham](/areas/topsham) use specialist techniques and materials. Contact us for expert guidance.'
      },
      {
        type: 'link',
        href: '/areas/topsham',
        linkText: 'Get Waterfront Paint Advice for Topsham Properties'
      }
    ]
  },
  'maintaining-period-home-topsham-painter-expert-advice': {
    sections: [
      {
        type: 'paragraph',
        content: 'Maintaining a period home in [Topsham\'s conservation area](/areas/topsham) requires specialist knowledge and a long-term approach. These beautiful heritage properties have unique needs that go beyond standard decorating. As professional painters with extensive experience in Topsham\'s period properties, we share expert advice on maintaining these special homes for generations to come. Our [domestic decorating services](/domestic) specialise in heritage property maintenance.'
      },
      {
        type: 'heading',
        content: 'Understanding Topsham\'s Period Properties',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Conservation Area Requirements',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Topsham is a designated conservation area, which means:'
      },
      {
        type: 'list',
        content: [
          'Planning permission may be required for external work',
          'Specific materials and techniques may be specified',
          'Colour choices may be restricted',
          'Original features must be preserved',
          'Professional expertise is often essential'
        ]
      },
      {
        type: 'subheading',
        content: 'Common Period Property Types in Topsham',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Georgian townhouses: Elegant proportions, period features',
          'Victorian terraces: Characterful, original details',
          'Listed buildings: Additional restrictions and requirements',
          'Waterfront period properties: Unique challenges of estuary location',
          'Heritage cottages: Traditional construction methods'
        ]
      },
      {
        type: 'heading',
        content: 'Essential Maintenance Principles for Period Homes',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Prevention Over Cure',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Regular maintenance prevents major problems:'
      },
      {
        type: 'list',
        content: [
          'Annual inspections: Catch issues early',
          'Prompt repairs: Fix problems before they worsen',
          'Protective maintenance: Keep paintwork in good condition',
          'Weather protection: Maintain exterior finishes',
          'Cost-effective: Regular maintenance costs less than major repairs'
        ]
      },
      {
        type: 'subheading',
        content: 'Use Appropriate Materials',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Breathable paints: Essential for old walls',
          'Traditional materials: Where specified or appropriate',
          'Period-appropriate finishes: Respect the building\'s character',
          'Quality products: Invest in materials that last',
          'Conservation-compliant: Meet conservation area requirements'
        ]
      },
      {
        type: 'heading',
        content: 'Annual Maintenance Checklist for Topsham Period Homes',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Exterior Maintenance',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Inspect paintwork: Look for peeling, cracking, or fading',
          'Check woodwork: Windows, doors, and decorative features',
          'Examine masonry: Look for cracks, damp, or deterioration',
          'Gutters and downpipes: Clear and check condition',
          'Metalwork: Railings, gates, and fixtures',
          'Roof: Check for issues that could affect walls'
        ]
      },
      {
        type: 'subheading',
        content: 'Interior Maintenance',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Check for damp: Early signs of moisture problems',
          'Inspect original features: Cornicing, panelling, fireplaces',
          'Woodwork condition: Doors, skirting, architraves',
          'Plaster condition: Cracks or deterioration',
          'Decorative finishes: Paint condition and touch-ups needed'
        ]
      },
      {
        type: 'heading',
        content: 'Common Issues in Topsham Period Properties',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Damp Problems',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Period properties, especially waterfront ones, can face damp:'
      },
      {
        type: 'list',
        content: [
          'Rising damp: From ground moisture',
          'Penetrating damp: Through walls or roof',
          'Condensation: From high humidity (common in Topsham)',
          'Solution: Identify source, use breathable materials, ensure ventilation'
        ]
      },
      {
        type: 'subheading',
        content: 'Paint Deterioration',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Non-breathable paint: Traps moisture, causes problems',
          'Weather exposure: Especially for waterfront properties',
          'Salt air: Accelerates deterioration in estuary locations',
          'Solution: Use appropriate breathable, weather-resistant paint'
        ]
      },
      {
        type: 'subheading',
        content: 'Original Feature Damage',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Neglected maintenance: Features deteriorate over time',
          'Inappropriate materials: Can damage original features',
          'Lack of expertise: Period features need specialist care',
          'Solution: Regular maintenance with appropriate materials and techniques'
        ]
      },
      {
        type: 'heading',
        content: 'Long-Term Maintenance Strategy',
        level: 2
      },
      {
        type: 'subheading',
        content: '5-Year Maintenance Plan',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Year 1: Full exterior repaint if needed, interior touch-ups',
          'Year 2: Interior refresh, woodwork maintenance',
          'Year 3: Exterior touch-ups, feature restoration if needed',
          'Year 4: Interior maintenance, preparation for major work',
          'Year 5: Full exterior repaint, major interior work if required'
        ]
      },
      {
        type: 'subheading',
        content: '10-Year Major Refurbishment',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Full interior and exterior repaint',
          'Restoration of original features',
          'Address any structural issues',
          'Upgrade paint systems if needed',
          'Comprehensive maintenance of all elements'
        ]
      },
      {
        type: 'heading',
        content: 'Working with Conservation Requirements',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Topsham\'s conservation area status means:'
      },
      {
        type: 'list',
        content: [
          'Check requirements: Contact local authority before major work',
          'Use approved materials: Often specified for conservation areas',
          'Respect character: Maintain period-appropriate finishes',
          'Professional help: Conservation work often needs specialists',
          'Documentation: Keep records of all maintenance work'
        ]
      },
      {
        type: 'quote',
        content: 'Maintaining a period home in Topsham is about preserving history while ensuring the property remains beautiful and functional. It requires specialist knowledge, appropriate materials, and a long-term approach.'
      },
      {
        type: 'heading',
        content: 'Professional Period Property Maintenance',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'At BSR Decorating, we specialise in period property maintenance across Topsham:'
      },
      {
        type: 'list',
        content: [
          'Conservation area expertise: Understanding of local requirements',
          'Heritage knowledge: Appropriate materials and techniques',
          'Long-term planning: Maintenance strategies that protect your investment',
          'Waterfront experience: Specialised knowledge for estuary properties',
          'Respectful approach: Preserving character while maintaining functionality'
        ]
      },
      {
        type: 'paragraph',
        content: 'Need expert advice on maintaining your Topsham period property? BSR Decorating specialises in conservation area work, heritage maintenance, and long-term property care. Our [period property decorating services](/areas/topsham) in [Topsham](/areas/topsham) combine traditional techniques with modern durability. Contact us for professional guidance.'
      },
      {
        type: 'link',
        href: '/areas/topsham',
        linkText: 'Get Period Property Maintenance Advice for Topsham'
      }
    ]
  },
  'new-year-home-refresh-devon-2025': {
    sections: [
      {
        type: 'paragraph',
        content: 'As we bid farewell to 2025 and welcome 2026, there\'s no better time to give your Devon home a fresh start. Whether you live in a [Georgian townhouse in Exeter](/blog/decorating-tips-exeter-period-homes-specialist-advice), a [waterfront property in Topsham](/blog/topsham-waterfront-homes-best-paints-humidity-salt-air-weather), or a family home in Newton Abbot, a professional decorating refresh can transform your living space and set the tone for the year ahead.'
      },
      {
        type: 'heading',
        content: 'Why January is Perfect for Interior Decorating',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Many homeowners assume spring is the best time for decorating, but January offers distinct advantages for interior work across Devon:'
      },
      {
        type: 'list',
        content: [
          'Availability: Decorators often have more flexibility in their schedules after the festive rush',
          'Indoor focus: Winter weather keeps us indoors anyway, making interior work ideal',
          'Fresh start psychology: Begin the year with a clean, beautifully decorated home',
          'Beat the spring rush: Get ahead of the busy spring decorating season',
          'Post-Christmas reset: Transform rooms that have hosted festive gatherings'
        ]
      },
      {
        type: 'heading',
        content: 'Popular New Year Decorating Projects',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Living Room Refresh',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'After weeks of festive entertaining, your living room may be showing signs of wear. A professional repaint can restore walls to pristine condition whilst giving you the opportunity to update your colour scheme for 2026. We\'re seeing continued interest in warm, cosy neutrals and rich, deep tones that create inviting spaces during the darker winter months.'
      },
      {
        type: 'subheading',
        content: 'Kitchen Cabinet Refresh',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Kitchen spraying is one of our most popular January services. Rather than the expense and disruption of a full kitchen replacement, professional cabinet spraying can transform your kitchen at a fraction of the cost. Perfect for breathing new life into tired units whilst keeping your New Year budget in check.'
      },
      {
        type: 'subheading',
        content: 'Hallway and Entrance Updates',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Your hallway is the first impression guests have of your home. After the foot traffic of festive visitors, January is the perfect time to refresh this high-traffic area with durable, washable finishes that will look pristine throughout 2026.'
      },
      {
        type: 'heading',
        content: 'Colour Trends for 2026',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Looking ahead to 2026, we\'re seeing several emerging colour trends that work beautifully in Devon homes. For more inspiration on current styles, explore our [luxury decorating trends in Exeter](/blog/luxury-decorating-trends-exeter):'
      },
      {
        type: 'list',
        content: [
          'Warm earth tones: Terracottas, ochres, and warm browns inspired by Devon\'s landscapes',
          'Soft greens: From sage to olive, bringing nature indoors',
          'Rich blues: Deep navy and sophisticated teals for statement walls',
          'Warm whites: Moving away from stark whites to creamier, more welcoming shades',
          'Muted pinks: Sophisticated blush tones for bedrooms and living spaces'
        ]
      },
      {
        type: 'heading',
        content: 'Planning Your New Year Decorating Project',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'To make the most of your January decorating project, consider these tips:'
      },
      {
        type: 'list',
        content: [
          'Book early: Quality decorators fill their January schedules quickly',
          'Plan your colours: Take time over Christmas to research and choose your new scheme',
          'Clear spaces: Use the post-Christmas declutter to prepare rooms for decorating',
          'Consider whole-house schemes: Ensure colours flow harmoniously from room to room',
          'Think about finishes: Different rooms need different paint finishes for durability'
        ]
      },
      {
        type: 'heading',
        content: 'Our New Year Decorating Services',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'BSR Decorating offers comprehensive interior decorating services across Devon, including Exeter, Topsham, Newton Abbot, Dawlish, and surrounding areas. Our January services include:'
      },
      {
        type: 'list',
        content: [
          'Full room repaints with expert colour consultation',
          'Kitchen cabinet spraying for a complete kitchen transformation',
          'Feature wall creation and wallpaper hanging',
          'Woodwork restoration and painting',
          'Specialist finishes for period properties',
          'Commercial property refreshes for businesses starting the new year fresh'
        ]
      },
      {
        type: 'quote',
        content: 'From all of us at BSR Decorating, we wish you and your family a very Merry Christmas and a Happy New Year! Thank you for your support throughout 2025. We look forward to helping you create beautiful spaces in 2026 and beyond.'
      },
      {
        type: 'heading',
        content: 'Start 2026 with a Fresh, Beautiful Home',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Ready to transform your Devon property for the new year? BSR Decorating provides professional painting and decorating services across Exeter, Topsham, Newton Abbot, Torquay, Dawlish, and throughout Devon. Contact us today for a free quote and start 2026 in style.'
      },
      {
        type: 'link',
        href: '/contact',
        linkText: 'Get Your Free New Year Decorating Quote'
      }
    ]
  },
  'exterior-painting-exeter-devon-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Your home\'s exterior is the first thing visitors, neighbours and potential buyers see. In Exeter and across Devon, our maritime climate of wind-driven rain, coastal salt air and strong UV exposure means exterior paintwork takes a real beating. Getting it right — choosing the right time of year, the right products and the right preparation — is the difference between a finish that lasts two years and one that lasts ten.'
      },
      {
        type: 'heading',
        content: 'When Is the Best Time to Paint Exteriors in Devon?',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Timing is everything with exterior painting. Devon\'s weather can be unpredictable, but there are clear windows that give the best results. The ideal months for exterior decorating in Exeter and the surrounding area are late April through to September, when temperatures are consistently above 10°C and humidity levels are lower.'
      },
      {
        type: 'list',
        content: [
          'Late spring (April–May) — Longer dry spells, moderate temperatures and surfaces have dried out from winter moisture',
          'Summer (June–August) — Warmest and driest conditions, though avoid painting in direct strong sunlight as it can cause paint to dry too quickly and blister',
          'Early autumn (September) — Still warm enough for paint to cure properly, and surfaces are thoroughly dry from summer',
          'Winter (October–March) — Generally unsuitable for exterior work due to low temperatures, frost risk and high moisture levels'
        ]
      },
      {
        type: 'quote',
        content: 'We always check surface moisture levels with a damp meter before starting any exterior work. Even if the weather looks fine, Devon\'s humidity can leave surfaces holding moisture that\'s invisible to the eye but will ruin a paint finish from underneath.'
      },
      {
        type: 'heading',
        content: 'Why Exterior Painting Matters More Than You Think',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Exterior decorating isn\'t just about kerb appeal — though a freshly painted exterior can add significant value to your Exeter property. More importantly, quality exterior paintwork acts as your home\'s first line of defence against the elements. Devon\'s climate presents specific challenges that make regular [exterior maintenance in Exeter](/areas/exeter/exterior-painting) and across the county essential.'
      },
      {
        type: 'subheading',
        content: 'Protection Against Devon\'s Climate',
        level: 3
      },
      {
        type: 'list',
        content: [
          'Rain and moisture penetration — Devon receives significantly more rainfall than the national average. Cracked or peeling exterior paint allows moisture into masonry, leading to damp, mould and structural damage',
          'UV degradation — South-facing elevations in Exeter and Topsham take heavy UV exposure, causing paint to fade, chalk and break down',
          'Salt air corrosion — Properties in Exmouth, Dawlish and coastal areas face salt-laden winds that accelerate paint deterioration and attack metal fixtures',
          'Algae and moss growth — Devon\'s mild, damp climate encourages biological growth on north-facing walls that can undermine paint adhesion',
          'Thermal movement — Temperature fluctuations cause masonry to expand and contract, which cheaper paints cannot accommodate without cracking'
        ]
      },
      {
        type: 'heading',
        content: 'Choosing the Right Exterior Paint for Exeter Homes',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Not all exterior paints are created equal, and what works on a modern rendered property in Cranbrook won\'t necessarily suit a Victorian brick terrace in St Thomas or a listed Georgian townhouse in Topsham. Here\'s what we recommend based on over 20 years of decorating Devon properties.'
      },
      {
        type: 'subheading',
        content: 'Masonry Paint for Rendered and Plastered Walls',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'For most Exeter homes with rendered or plastered exteriors, a high-quality masonry paint is the go-to choice. We use Dulux Weathershield and Johnstone\'s Stormshield for their proven durability in the South West climate. These products offer 15-year protection guarantees and include anti-fungal additives to combat Devon\'s damp conditions.'
      },
      {
        type: 'subheading',
        content: 'Breathable Paints for Older Properties',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Period and heritage properties in Exeter, Topsham and Newton Abbot often have lime-rendered or solid stone walls that need to breathe. Using modern plastic-based masonry paints on these properties traps moisture inside the walls, causing damp, blown plaster and paint failure. Instead, we use mineral-based breathable paints such as Keim Granital or Earthborn Silicate Masonry Paint, which allow moisture vapour to pass through whilst still providing excellent weather protection. For more guidance on [choosing the right paint for older properties, see our specialist guide](/blog/best-paint-types-exeter-homes-old-damp-listed-properties).'
      },
      {
        type: 'subheading',
        content: 'Exterior Woodwork',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Wooden window frames, fascias, barge boards and doors need specialist exterior wood paints or stains. We favour Dulux Weathershield Exterior Gloss for a traditional high-sheen finish, or Sadolin for a more natural timber look. Proper preparation — sanding back, treating any rot, priming bare wood — is what makes exterior woodwork paint last. Skip the prep and you\'ll be repainting within two years.'
      },
      {
        type: 'heading',
        content: 'The Preparation That Makes the Difference',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'If there\'s one thing that separates a professional exterior paint job from a DIY attempt, it\'s preparation. In Devon\'s climate, thorough preparation is even more critical than in drier parts of the country. Here\'s what our [exterior painting process in Exeter](/areas/exeter/exterior-painting) involves for a typical property.'
      },
      {
        type: 'list',
        content: [
          'Full scaffold or access tower setup for safe, thorough coverage of all elevations',
          'Pressure washing to remove dirt, algae, moss and loose material from all surfaces',
          'Allowing adequate drying time after washing — typically 48-72 hours in Devon\'s climate',
          'Scraping and sanding all loose or flaking paint back to a sound surface',
          'Filling cracks and repairing damaged render, pointing or woodwork',
          'Treating any fungal or algae growth with specialist biocide solutions',
          'Applying appropriate primer to bare or repaired surfaces',
          'Masking windows, doors and areas not being painted for clean, sharp lines',
          'Minimum two full coats of top-quality exterior paint for lasting protection'
        ]
      },
      {
        type: 'heading',
        content: 'How Much Does Exterior Painting Cost in Exeter?',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Exterior painting costs in Exeter and Devon vary based on property size, condition, access requirements and paint specification. For a detailed breakdown of what to expect, read our [full 2025 pricing guide for painters and decorators in Exeter](/blog/painter-decorator-cost-exeter-2025-price-guide). As a rough guide for a typical 3-bedroom semi-detached house in the Exeter area:'
      },
      {
        type: 'list',
        content: [
          'Front elevation only — from £800 to £1,500',
          'Full exterior (all elevations) — from £2,000 to £4,500',
          'Windows, doors and woodwork only — from £600 to £1,200',
          'Full exterior including woodwork — from £3,000 to £6,000',
          'Heritage or listed property exterior — from £4,000 upwards depending on specification'
        ]
      },
      {
        type: 'paragraph',
        content: 'These prices include scaffold hire, full preparation, premium paints and a professional finish. We always provide a detailed written quote after surveying the property, so there are no surprises.'
      },
      {
        type: 'heading',
        content: 'Signs Your Exeter Property Needs Exterior Painting',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Not sure whether your property needs exterior decorating? Here are the warning signs to look out for on Exeter and Devon properties.'
      },
      {
        type: 'list',
        content: [
          'Paint is chalking — when you run your hand across the surface, white powder comes off',
          'Visible cracking, flaking or peeling on any painted surface',
          'Colour has faded significantly, particularly on south and west-facing walls',
          'Green algae or black mould patches appearing on walls',
          'Bare wood visible on window frames, fascias or doors',
          'Render is cracking or blowing away from the wall',
          'Damp patches appearing inside the property, particularly near external walls'
        ]
      },
      {
        type: 'quote',
        content: 'Catching exterior paint deterioration early saves money in the long run. A straightforward repaint is far cheaper than dealing with moisture damage, rotten timbers or damaged render that results from neglected exterior maintenance.'
      },
      {
        type: 'heading',
        content: 'Why Choose BSR for Exterior Painting in Devon?',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'With over 20 years of experience decorating properties across [Exeter](/areas/exeter), [Topsham](/areas/topsham), [Newton Abbot](/areas/newton-abbot), [Dawlish](/areas/dawlish), [Torquay](/areas/torquay) and the wider Devon area, we understand the specific challenges our local climate presents. We use only premium products proven to perform in South West conditions, and our thorough preparation process ensures your exterior paintwork looks fantastic and protects your property for years to come. If you\'re looking for a trusted professional, our guide on [how to choose a painter and decorator in Exeter](/blog/choose-painter-decorator-exeter-guide) explains what to look for.'
      },
      {
        type: 'list',
        content: [
          'Fully insured with public liability cover for all exterior work',
          'All work carried out from proper scaffold or access equipment — no cutting corners with ladders',
          'Premium paints from trusted brands like Dulux Weathershield, Johnstone\'s and Keim',
          'Detailed written quotes with no hidden costs',
          'Clean, tidy and respectful of your property and neighbours throughout the project'
        ]
      },
      {
        type: 'paragraph',
        content: 'Whether you need a full exterior repaint, just the front of the house freshened up, or specialist heritage exterior work, we\'re happy to come and take a look and provide an honest assessment and quote.'
      },
      {
        type: 'link',
        href: '/contact',
        linkText: 'Get Your Free Exterior Painting Quote'
      }
    ]
  },
  'choose-painter-decorator-exeter-guide': {
    sections: [
      {
        type: 'paragraph',
        content: 'Finding a reliable painter and decorator in Exeter shouldn\'t be a gamble. Whether you\'re looking to refresh a single room or transform your entire property, choosing the right decorator makes all the difference between a job you\'re delighted with and one that costs you time, money and stress. This guide covers what to look for, what to ask, and the warning signs to watch out for when hiring a painter and decorator in Devon.'
      },
      {
        type: 'heading',
        content: 'Why Choosing the Right Decorator Matters',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Decorating is one of those trades where the gap between a good job and a poor one is enormous. A skilled painter and decorator will deliver clean lines, even coverage, proper preparation and a finish that lasts. A poor one will leave you with drips, patchy coverage, paint on your carpets and a finish that starts peeling within months. The trouble is, it\'s not always obvious which you\'re getting until the work is underway — so doing your homework upfront is essential.'
      },
      {
        type: 'heading',
        content: 'What to Look For in an Exeter Painter & Decorator',
        level: 2
      },
      {
        type: 'subheading',
        content: 'Experience and Track Record',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Look for a decorator with a proven track record in the Exeter and Devon area. Experience matters in decorating — an established painter will have dealt with every type of property, from [modern new builds in Cranbrook](/blog/exeter-new-build-paintwork-problems-how-pros-fix) to Victorian terraces in St Thomas, [Georgian townhouses in Southernhay and heritage properties in Topsham](/blog/heritage-property-restoration-topsham). They\'ll know which products work best in Devon\'s climate, how to handle the damp issues common in older Exeter properties, and how to prepare surfaces properly for a lasting finish.'
      },
      {
        type: 'list',
        content: [
          'How long have they been trading? Look for several years of consistent work rather than someone who\'s just started out',
          'Do they have a portfolio of completed projects you can see? Photos of real jobs tell you far more than any sales pitch',
          'Can they provide references from previous customers in the Exeter area?',
          'Have they worked on properties similar to yours? A decorator experienced with period homes in Exeter will understand lime plaster, breathable paints and conservation area requirements'
        ]
      },
      {
        type: 'subheading',
        content: 'Insurance and Credentials',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Any professional painter and decorator working in Exeter should carry public liability insurance as a minimum. This protects you if anything goes wrong — accidental damage to your property, injury on site, or any other incident. Don\'t be afraid to ask to see their insurance certificate. A legitimate decorator won\'t be offended by the question.'
      },
      {
        type: 'list',
        content: [
          'Public liability insurance — essential, and ideally at least £1 million cover',
          'Employer\'s liability insurance if they have staff or use subcontractors',
          'Professional qualifications — NVQ in Painting & Decorating, City & Guilds, or equivalent',
          'Trade body membership — Dulux Select Decorators, Painting & Decorating Association (PDA), or similar',
          'DBS checks if they\'ll be working in properties with vulnerable people'
        ]
      },
      {
        type: 'subheading',
        content: 'Clear, Written Quotes',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'A professional decorator in Exeter will always visit your property before quoting. Be cautious of anyone who gives you a price over the phone without seeing the job — every property is different and a proper quote needs a proper look. The quote should be detailed and in writing, breaking down exactly what\'s included.'
      },
      {
        type: 'list',
        content: [
          'Preparation work — what sanding, filling, stripping or priming is included?',
          'Number of coats — two coats minimum for walls, often three for a colour change',
          'Paint specification — which brand and product are they using? Ask specifically',
          'What\'s included and what isn\'t — moving furniture, covering floors, materials cost',
          'Timescale — when will they start, how long will it take, and will they be there every day?',
          'Payment terms — avoid anyone who wants full payment upfront. A deposit plus staged payments or payment on completion is standard'
        ]
      },
      {
        type: 'heading',
        content: 'Red Flags to Watch Out For',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Over 20 years in the trade, we\'ve heard plenty of stories from customers who\'ve been let down by other decorators. Here are the warning signs that should make you think twice.'
      },
      {
        type: 'list',
        content: [
          'No fixed business address or professional website — anyone serious about their trade will have a proper business presence',
          'Quoting without visiting the property — impossible to give an accurate price without seeing the job',
          'Significantly cheaper than everyone else — if a quote seems too good to be true, it usually is. They\'re likely cutting corners on preparation, using cheap paint, or planning to rush the job',
          'Wanting full payment upfront — a massive red flag. Never pay everything before work begins',
          'No portfolio or references — if they can\'t show you examples of previous work, ask yourself why',
          'Pressure to commit immediately — a professional decorator has enough work coming in that they don\'t need to pressure you into a decision on the spot',
          'Vague about paint brands — if they won\'t tell you exactly what products they\'re using, they\'re probably using the cheapest option available'
        ]
      },
      {
        type: 'quote',
        content: 'The cheapest quote is almost never the best value. Good preparation takes time, quality paint costs more, and skilled work commands a fair price. The decorator who charges a bit more but does the job properly will save you money in the long run because the finish will last years longer.'
      },
      {
        type: 'heading',
        content: 'Questions to Ask Before Hiring a Decorator in Exeter',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'When you\'ve shortlisted a few painters and decorators in the Exeter area, here are the key questions to ask before making your decision.'
      },
      {
        type: 'list',
        content: [
          'What preparation work will you do before painting?',
          'Which paint brands and products will you use?',
          'How many coats will you apply?',
          'Do you have public liability insurance?',
          'Can I see examples of similar work you\'ve done locally?',
          'Will you be doing the work yourself or using subcontractors?',
          'What happens if I\'m not happy with anything once the job is finished?',
          'How do you handle any unexpected issues discovered during the work?',
          'What are your payment terms?'
        ]
      },
      {
        type: 'paragraph',
        content: 'A good decorator will answer all of these openly and confidently. If someone gets defensive or vague when you ask reasonable questions, that tells you something.'
      },
      {
        type: 'heading',
        content: 'Why Local Knowledge Matters in Devon',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Devon properties have their own quirks and challenges that a local decorator will understand instinctively. Exeter\'s older properties in areas like St Leonard\'s, Heavitree and the city centre often have [lime plaster walls that need breathable paints](/blog/best-paint-types-exeter-homes-old-damp-listed-properties) rather than modern vinyl emulsions. [Topsham\'s waterfront properties face salt air and humidity challenges](/blog/topsham-waterfront-homes-best-paints-humidity-salt-air-weather). Newton Abbot and Bovey Tracey properties deal with Dartmoor\'s higher rainfall. A painter and decorator who knows the Exeter area will already understand these issues and use the right products and techniques without you having to ask.'
      },
      {
        type: 'paragraph',
        content: 'Local decorators also rely on their reputation in the community. A painter working in Exeter who does a poor job knows that word travels fast — in a city this size, your reputation is everything. That accountability is worth something when you\'re choosing who to trust with your home.'
      },
      {
        type: 'heading',
        content: 'Getting Started',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'If you\'re looking for a painter and decorator in [Exeter](/areas/exeter), [Topsham](/areas/topsham), Newton Abbot, [Dawlish](/areas/dawlish), Torquay or anywhere across Devon, we\'re always happy to come out, have a look at your property and provide an honest assessment and detailed written quote — with no pressure and no obligation. We\'ve been decorating Devon properties for over 20 years and our work speaks for itself.'
      },
      {
        type: 'link',
        href: '/contact',
        linkText: 'Get Your Free Decorating Quote'
      }
    ]
  }
};

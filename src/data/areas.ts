import type { Faq } from './services';

export type Area = {
  slug: string;
  name: string;
  /** Used in the H1 and title, e.g. "Clapham" -> "Sofa Cleaning in Clapham" */
  postcodes: string[];
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  /** Local housing stock and what that means for the job */
  property: { heading: string; body: string[] };
  /** Access, parking, ULEZ, stairs — the practical stuff */
  access: { heading: string; body: string[] };
  neighbourhoods: string[];
  /** Slugs of adjacent areas, for the interlinking mesh */
  nearby: string[];
  /** Services most requested here, by slug */
  topServices: string[];
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: 'clapham',
    name: 'Clapham',
    postcodes: ['SW4', 'SW11', 'SW9', 'SW8'],
    metaTitle: 'Sofa Cleaning Clapham SW4 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Sofa, upholstery and carpet cleaning in Clapham SW4. Sharers, flat conversions and end-of-tenancy check-outs. Photo quote on WhatsApp, same-week slots.',
    summary: 'SW4 conversions, sharer houses and a lot of end-of-tenancy work.',
    intro: [
      'Clapham is a sharer market, and sharer furniture lives a hard life. A three- or four-bed conversion off Clapham Common North Side typically has one sofa doing the work of three, a changeover of tenants every twelve months, and a landlord who wants carpets and upholstery cleaned between each one.',
      'That gives us two distinct kinds of job here. The first is the check-out clean, booked at short notice in late summer when the whole postcode seems to move at once. The second is the household that has finally looked properly at the sofa everybody has been sitting on since lockdown and decided something has to happen.',
      'We cover SW4 and the surrounding SW11, SW9 and SW8 stretches — Clapham Common, Old Town, Abbeville Village, Clapham North, Clapham Park and the Wandsworth Road side.',
    ],
    property: {
      heading: 'Clapham properties and what they mean for a clean',
      body: [
        'The dominant stock is the Victorian terrace split into upper and lower conversion flats, plus the big double-fronted houses around the Common. Upper conversions mean a staircase, a narrow return and frequently no lift, which is fine — our machine stays at ground level or in the van and we run hoses up. What it does mean is that we need somewhere to park within hose reach.',
        'Original floorboards under rugs are common in the Old Town and Abbeville Village, and that changes the method: a rug over boards has to be cleaned drier at the edges, or lifted and cleaned on a protected surface, because moisture escaping the rug will mark the timber.',
        'Newer riverside blocks towards Nine Elms and the Wandsworth Road side are a different job again — lift access, tight service-lift bookings, and concierge sign-in. Tell us the building when you book and we will sort the access arrangements in advance rather than on the doorstep.',
      ],
    },
    access: {
      heading: 'Parking, ULEZ and access in SW4',
      body: [
        'Clapham parking is controlled for most of the working day across SW4, and residents\' bays dominate the side streets off the Common. A visitor permit or a paid bay booked in advance makes the visit smoother and quicker. We carry long hose runs, so we do not need to be directly outside — within about thirty metres of the front door is comfortable.',
        'Clapham sits inside the ULEZ zone and outside the Congestion Charge zone. Any road charge that applies to a visit is itemised in your quote before you book, never added afterwards.',
        'Mornings on Clapham High Street and around the Common are slow, particularly between eight and half nine. If you need a precise arrival time — a check-out inspection or a delivery slot — book the first appointment of the day and we will be there before the traffic builds.',
      ],
    },
    neighbourhoods: ['Clapham Common', 'Clapham Old Town', 'Abbeville Village', 'Clapham North', 'Clapham Park', 'Stockwell border'],
    nearby: ['balham', 'wandsworth', 'streatham', 'battersea'],
    topServices: ['fabric-sofa-cleaning', 'end-of-tenancy-cleaning', 'carpet-cleaning'],
    faqs: [
      {
        q: 'Can you do an end-of-tenancy clean in Clapham at short notice?',
        a: 'Usually yes, and we hold slots for it through the busy July-to-September changeover in SW4. Message us on WhatsApp with the address, the number of rooms and your check-out time and we will confirm same day. You get an itemised, dated receipt for your agent.',
      },
      {
        q: 'Do you need a parking space in SW4?',
        a: 'Somewhere within about thirty metres of the door is ideal — we run hoses from the van rather than bringing a machine inside. Most Clapham streets are permit-controlled in the day, so a visitor permit or a paid bay booked ahead saves time.',
      },
      {
        q: 'Do you cover upper-floor conversion flats without a lift?',
        a: 'Yes, that is most of Clapham. The machine stays at ground level and we run hoses up the stairs, so there is nothing heavy to carry and nothing bulky in your flat. Just let us know which floor when you book.',
      },
    ],
  },
  {
    slug: 'balham',
    name: 'Balham',
    postcodes: ['SW12', 'SW17', 'SW16'],
    metaTitle: 'Sofa Cleaning Balham SW12 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Upholstery and carpet cleaning in Balham SW12. Family houses off Nightingale Lane, Heaver Estate terraces and Bedford Hill flats. Pet and child-safe method.',
    summary: 'SW12 family houses, pets, and a lot of stair carpet.',
    intro: [
      'Balham has quietly turned into a family postcode, and the cleaning work here reflects that. Where Clapham brings us sharer check-outs, SW12 brings us the three-bed terrace with two children, a dog, a cream sofa that seemed like a good idea in 2019, and a staircase that takes the brunt of all of it.',
      'Pet work is a bigger share of our Balham jobs than almost anywhere else we cover — Tooting Bec Common and Wandsworth Common are either side, which means a lot of muddy dogs coming through the front door twice a day and heading straight for the sofa.',
      'We cover SW12 and the adjoining SW17 and SW16 edges: Heaver Estate, Nightingale Lane, Bedford Hill, Hyde Farm and the Tooting Bec Common side.',
    ],
    property: {
      heading: 'Balham houses and the three jobs they always need',
      body: [
        'The Heaver Estate and the streets off Nightingale Lane are large late-Victorian terraces, often unconverted, and they share a pattern: a long hall, a full flight of stairs with a half-landing, and a knocked-through reception with the family sofa at the far end. That combination — hall, stairs, landing plus one big sofa — is the most common booking we take in SW12, and it is cheaper as a package than as three separate visits.',
        'Bedford Hill and the Hyde Farm side have more flat conversions, often with the living space upstairs. Those benefit from air movers, because an upstairs lounge in a terrace has less airflow than a ground-floor room and will otherwise dry slowly.',
        'Wool and wool-mix carpet is common in the better-preserved Balham houses, and it matters. Wool needs a neutral-to-acidic pH and careful moisture control or it will brown from the backing as it dries. We check the fibre before we start rather than assuming.',
      ],
    },
    access: {
      heading: 'Parking and timing in SW12',
      body: [
        'Most of Balham is in a controlled parking zone during weekday working hours, though restrictions on the residential streets off Nightingale Lane are lighter than around the station. A visitor permit is the easiest route; if you have off-street parking, even better.',
        'Balham sits inside the ULEZ zone and well outside the Congestion Charge area. Any road charge that applies is itemised in your quote before you book.',
        'School-run timing is worth planning around: the streets between Bedford Hill and Nightingale Lane are congested between half eight and nine and again at half three. A ten o\'clock start is usually the smoothest slot in SW12.',
      ],
    },
    neighbourhoods: ['Heaver Estate', 'Nightingale Lane', 'Bedford Hill', 'Hyde Farm', 'Tooting Bec Common', 'Balham Hill'],
    nearby: ['clapham', 'streatham', 'wandsworth', 'tooting'],
    topServices: ['stair-carpet-cleaning', 'stain-and-odour-removal', 'fabric-sofa-cleaning'],
    faqs: [
      {
        q: 'Do you do pet odour removal in Balham?',
        a: 'A lot of it — SW12 sits between two commons and we see plenty of dog-related work. We find the full extent of an accident with a UV lamp, treat it with an enzyme at the source and extract, rather than masking it with fragrance. Severe cases may need the underlay treated and we will quote that honestly.',
      },
      {
        q: 'Can you clean a hall, stairs and landing plus a sofa in one visit?',
        a: 'Yes, and it is the most common booking we take in Balham. Booked together it is cheaper than as separate visits, it is usually two to three hours on site, and everything is dry the same afternoon.',
      },
      {
        q: 'Is your method safe around children and pets?',
        a: 'We use pH-balanced, low-odour products and rinse them out properly, which is the part that matters — leftover residue is what causes irritation. Keep children and pets off the furniture until it is dry to the touch, normally three to five hours.',
      },
    ],
  },
  {
    slug: 'wandsworth',
    name: 'Wandsworth',
    postcodes: ['SW18', 'SW11', 'SW17'],
    metaTitle: 'Sofa Cleaning Wandsworth SW18 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Sofa and carpet cleaning in Wandsworth SW18. Tonsleys and Southfields houses, riverside apartments and large corner sofas. Fixed photo quotes on WhatsApp.',
    summary: 'SW18 family houses and riverside apartments — lots of big corner sofas.',
    intro: [
      'Wandsworth gives us more large corner sofas than any other borough we cover. The Tonsleys and the streets around Wandsworth Common have the room for them, the riverside developments are designed around an open-plan living space with a single enormous L-shape in it, and both mean a bigger job than a two-seater in a flat.',
      'Corner sofas are also where the difference between a thorough clean and a quick one shows most, because the inside corner and the module joins are exactly what a rushed job skips.',
      'We cover SW18 and the adjoining SW11 and SW17 stretches: Tonsleys, Southfields, Earlsfield, Wandsworth Town, Wandsworth Common and the Riverside Quarter developments.',
    ],
    property: {
      heading: 'Wandsworth homes: riverside apartments and Victorian terraces',
      body: [
        'The riverside developments around Wandsworth Town station and Riverside Quarter are lift-access apartments with concierges, underground parking and, usually, an open-plan living area finished in engineered oak with a large rug and a modular sofa. Those are straightforward jobs provided the building access is arranged in advance — most require the service lift to be booked and a contractor sign-in.',
        'The Tonsleys and the Victorian terraces off Garratt Lane are the opposite: on-street access, a hall and staircase, and frequently a basement or lower-ground reception. Lower-ground rooms dry more slowly, so we bring air movers as a matter of course rather than as an extra.',
        'Southfields, towards the Wimbledon side, has larger 1930s semis with more fitted carpet than the terraces, and whole-house carpet jobs are common there — usually four or five rooms plus hall, stairs and landing in a single visit.',
      ],
    },
    access: {
      heading: 'Parking and building access in SW18',
      body: [
        'Wandsworth operates controlled parking across most of SW18 on weekdays. The riverside blocks generally have visitor bays in the underground car park; if you can book one, that is by far the easiest option and we can park right by the lift.',
        'For the terraces, a visitor permit is the practical answer. We need to be within about thirty metres of the door for hose reach, not directly outside.',
        'SW18 sits inside the ULEZ zone and outside the Congestion Charge zone, and any road charge that applies is itemised in your quote. If your block requires a contractor induction or documentation sent ahead, tell us when booking and we will get it to the management company in good time.',
      ],
    },
    neighbourhoods: ['The Tonsleys', 'Southfields', 'Earlsfield', 'Wandsworth Town', 'Wandsworth Common', 'Riverside Quarter'],
    nearby: ['putney', 'clapham', 'balham', 'fulham'],
    topServices: ['corner-sofa-cleaning', 'carpet-cleaning', 'fabric-sofa-cleaning'],
    faqs: [
      {
        q: 'How much is it to clean a large corner sofa in Wandsworth?',
        a: 'Corner sofas are priced by seat count, from £120 for a four-seat L-shape and around £160 for a six-seat. Count the seat cushions, counting the corner as one and a chaise end as two, or just send a photo from the doorway on WhatsApp and we will count it and quote a fixed price.',
      },
      {
        q: 'Can you clean an apartment in a riverside block with concierge access?',
        a: 'Yes, regularly. Most blocks want the service lift booked and a contractor sign-in, and some ask for documentation in advance. Let us know the building when you book and we will arrange it with the management company beforehand so there is no delay on the day.',
      },
      {
        q: 'Do you clean whole houses in one visit?',
        a: 'Yes — a five-room carpet job plus hall, stairs and landing is a normal day for us in Southfields and the Tonsleys, and a whole-property package is cheaper than booking rooms individually. We bring air movers so rooms are back in use the same day.',
      },
    ],
  },
  {
    slug: 'putney',
    name: 'Putney',
    postcodes: ['SW15', 'SW6', 'SW18'],
    metaTitle: 'Sofa Cleaning Putney SW15 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Upholstery and carpet cleaning in Putney SW15. Mansion blocks, Putney Heath houses and riverside flats. Velvet and leather specialists. WhatsApp photo quote.',
    summary: 'SW15 mansion blocks, Putney Heath houses and river-facing flats.',
    intro: [
      'Putney has an unusually high proportion of mansion-block flats, and they come with their own quirks: high ceilings, big bay windows, wide communal stairs, and lease rules that care about what contractors do in the common parts. It is a good market for us because the furniture tends to be better and people keep it longer.',
      'It is also where a lot of our velvet and leather work comes from. SW15 sitting rooms are full of velvet accent chairs and good leather suites, both of which are exactly the fabrics that go badly wrong when somebody attacks a spill with a wet cloth.',
      'We cover SW15 and into SW6 and SW18: Putney Heath, West Putney, Lower Richmond Road, East Putney, Roehampton and the riverside towards Putney Bridge.',
    ],
    property: {
      heading: 'Mansion blocks, Heath houses and riverside flats',
      body: [
        'Mansion blocks along the Upper Richmond Road and near the Heath usually have no lift, wide stone or timber communal stairs, and a management company with views about hoses across a shared landing. We run hoses tidily along the edge, use mats at thresholds, and can send the managing agent details in advance if they ask.',
        'The larger houses on and around Putney Heath tend to have wool carpet throughout and good-quality upholstery, which both reward a careful method and punish a careless one. Wool needs controlled moisture and the right pH; a single over-wet pass will brown it from the backing as it dries.',
        'River-facing flats towards Putney Bridge have a practical wrinkle worth knowing: humidity off the river slows drying noticeably on still, damp days. We allow for that, and on those jobs an air mover is not optional — it is the difference between three hours and most of a day.',
      ],
    },
    access: {
      heading: 'Parking, the Heath and the river in SW15',
      body: [
        'Controlled parking covers most of central Putney on weekdays, with the pressure worst around the High Street and the station. Streets towards the Heath and West Putney are easier. A visitor permit is the simplest fix; we need to be within about thirty metres of the entrance.',
        'SW15 sits inside the ULEZ zone and outside the Congestion Charge zone. Any road charge that applies to your visit is itemised in the quote before you book.',
        'Putney Bridge and the Lower Richmond Road are slow through the morning peak, and rowing and river events close roads along the towpath on some weekends. If you are river-side, an off-peak weekday slot is the reliable option.',
      ],
    },
    neighbourhoods: ['Putney Heath', 'West Putney', 'East Putney', 'Lower Richmond Road', 'Roehampton', 'Putney Bridge'],
    nearby: ['wandsworth', 'fulham', 'richmond', 'chiswick'],
    topServices: ['velvet-sofa-cleaning', 'leather-sofa-cleaning', 'carpet-cleaning'],
    faqs: [
      {
        q: 'Can you clean velvet furniture without marking it?',
        a: 'Yes — velvet is one of the fabrics we do most in SW15. It needs a low-moisture method, the pile direction mapped before anything is applied, and grooming while damp so the nap sets one way. Watermarks and halo rings, usually made by someone dabbing at a spill, come out by re-cleaning the whole panel evenly.',
      },
      {
        q: 'Do you work in mansion blocks without a lift?',
        a: 'Regularly. The machine stays at ground level or in the van and hoses run up the communal stairs, laid tidily along the edge with mats at thresholds. If your managing agent wants details in advance, tell us when you book and we will send them across.',
      },
      {
        q: 'How long will things take to dry in a river-facing flat?',
        a: 'Slightly longer than usual on damp, still days — river humidity is real. We bring air movers to riverside jobs as standard, which keeps upholstery to around three hours and carpet to three or four rather than most of the day.',
      },
    ],
  },
  {
    slug: 'fulham',
    name: 'Fulham',
    postcodes: ['SW6', 'SW10', 'W6'],
    metaTitle: 'Sofa Cleaning Fulham SW6 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Sofa, upholstery and carpet cleaning in Fulham SW6. Parsons Green and Bishops Park terraces, narrow hallways and pale fabrics. Photo quotes on WhatsApp.',
    summary: 'SW6 terraces, pale upholstery and narrow Victorian hallways.',
    intro: [
      'Fulham has more pale upholstery per street than anywhere else we work. Cream, oatmeal, light grey and off-white are the SW6 palette, and pale fabric is honest in a way darker fabric is not — it shows arm-top soiling, head-rest marks and every ring from a wet glass, and it shows them early.',
      'That is not bad news. Pale fabric that is cleaned regularly stays looking excellent, because the soil never gets a chance to bind. The households that struggle are the ones who wait five years and then discover the seat cushions are two shades off the back panels.',
      'We cover SW6 and the adjoining SW10 and W6 edges: Parsons Green, Bishops Park, Fulham Broadway, Sands End, Munster Village and Hurlingham.',
    ],
    property: {
      heading: 'Fulham terraces and what the layout means',
      body: [
        'The classic SW6 house is a narrow two-storey Victorian terrace, often with a side return extension and a knocked-through ground floor. The hallway is genuinely narrow — frequently under a metre — which matters for us only in that we route hoses along the skirting and use corner protectors rather than dragging anything round a tight turn.',
        'Side-return kitchen extensions have created a very common Fulham job: a large open-plan space with a rug over engineered oak or poured resin, a dining set with six upholstered chairs, and a sofa at the far end. Rugs over hard floor need care so no moisture escapes the edge onto the timber, and we either work drier at the borders or lift the rug onto a protected surface.',
        'The mansion flats around Fulham Road and Hurlingham run to better-quality upholstery and more leather, and those come with the usual pale-hide issue: body-oil greying on head rests and arm tops long before any stain appears.',
      ],
    },
    access: {
      heading: 'Parking, match days and access in SW6',
      body: [
        'Fulham is controlled parking on weekdays across almost all of SW6, and the pressure around Parsons Green and Fulham Broadway is real. A visitor permit booked ahead is worth the small cost in saved time.',
        'Match days at Craven Cottage and Stamford Bridge change SW6 completely — event-day parking restrictions apply well beyond the grounds and the roads around Fulham Broadway and Bishops Park become slow for hours. We check the fixture list, and if your booking falls on a match day we will suggest a morning slot or an alternative date.',
        'SW6 sits inside the ULEZ zone and outside the Congestion Charge zone. Any road charge that applies is itemised in your quote before you book.',
      ],
    },
    neighbourhoods: ['Parsons Green', 'Bishops Park', 'Fulham Broadway', 'Sands End', 'Munster Village', 'Hurlingham'],
    nearby: ['chelsea', 'putney', 'wandsworth', 'hammersmith'],
    topServices: ['fabric-sofa-cleaning', 'armchair-and-dining-chair-cleaning', 'leather-sofa-cleaning'],
    faqs: [
      {
        q: 'Can you clean a cream sofa without leaving it patchy?',
        a: 'Yes, and evenness is the whole skill on pale fabric. Patchiness comes from spot-cleaning rather than panel-cleaning, and from detergent residue left behind by supermarket products or hired machines. We flush residue out first, then clean each panel edge to edge so the tone is uniform.',
      },
      {
        q: 'Do you work around match days in SW6?',
        a: 'We plan around them. Event-day restrictions and traffic near Craven Cottage and Stamford Bridge make afternoon slots unreliable, so if your booking lands on a fixture we will suggest an early slot or a different day when you book.',
      },
      {
        q: 'Can you clean a rug on a wooden floor?',
        a: 'Yes. The risk is moisture escaping the rug edge and marking the timber, so we either work drier at the borders or lift the rug onto a protected surface to clean it. Either way the floor stays dry — tell us the floor type when you book.',
      },
    ],
  },
  {
    slug: 'chelsea',
    name: 'Chelsea',
    postcodes: ['SW3', 'SW10', 'SW1'],
    metaTitle: 'Sofa Cleaning Chelsea SW3 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Discreet upholstery and carpet cleaning in Chelsea SW3. Period houses, mansion flats, silk and delicate fabrics. Careful low-moisture methods, fixed quotes.',
    summary: 'SW3 period houses and mansion flats — delicate fabrics, careful methods.',
    intro: [
      'Chelsea work is defined by the fabrics. SW3 has more silk, viscose, linen-blend and hand-finished upholstery than anywhere else in London, and those are precisely the materials that fail badly when they are cleaned like ordinary polyester. Viscose in particular loses strength when wet and can crush permanently — and a great deal of what is sold as luxury velvet is a viscose blend.',
      'So the first thing we do on a Chelsea job is slow down: check the composition tag, run a moisture and colourfastness test on a hidden seam, and pick the method afterwards. Where a fabric reads as delicate we drop to a dry-solvent or very-low-moisture approach, at no extra cost.',
      'We cover SW3 and the neighbouring SW10 and SW1 streets: Chelsea Green, Sloane Square, the King\'s Road, Cheyne Walk, World\'s End and Brompton.',
    ],
    property: {
      heading: 'Period houses, mansion flats and the fabrics inside them',
      body: [
        'The tall Georgian and Victorian houses off the King\'s Road and around Cheyne Walk usually mean several floors, a narrow staircase, and rooms with antique or hand-made furniture alongside modern pieces. We treat unfamiliar or clearly antique upholstery as test-first work, and we will decline a piece rather than risk it if the fibre cannot be identified safely.',
        'Mansion flats around Sloane Square and Brompton often have wool or silk-mix rugs over parquet. Silk and silk-mix rugs are a specialist item and genuinely different from carpet — the dyes are less stable, and water alone can cause dye migration. Where a rug needs off-site immersion cleaning we will say so rather than attempting it in situ.',
        'Natural-fibre upholstery — linen, cotton and linen-viscose blends — is common in SW3 and is prone to browning and shrinkage if over-wetted. Controlled moisture and even drying are the whole job on those pieces.',
      ],
    },
    access: {
      heading: 'Parking, the Congestion Charge and access in SW3',
      body: [
        'Chelsea sits inside the Congestion Charge zone as well as the ULEZ zone. The Congestion Charge applies on weekdays and at the published weekend hours, and where a road charge applies to your visit we quote it as a separate line rather than burying it in the price — you will see it before you book, not after.',
        'Parking in SW3 is controlled and tight. Residents\' bays dominate and pay-by-phone bays fill early. A visitor permit or a pre-booked bay makes a real difference; we need to be within about thirty metres of the entrance for hose reach.',
        'Many SW3 mansion blocks and managed houses require contractors to sign in, use a tradesman\'s entrance, or work within set hours. Tell us the building when you book and we will confirm the arrangements with the porter or managing agent in advance.',
      ],
    },
    neighbourhoods: ['Chelsea Green', 'Sloane Square', "King's Road", 'Cheyne Walk', "World's End", 'Brompton'],
    nearby: ['fulham', 'kensington', 'westminster', 'battersea'],
    topServices: ['velvet-sofa-cleaning', 'leather-sofa-cleaning', 'fabric-sofa-cleaning'],
    faqs: [
      {
        q: 'Do you charge extra for the Congestion Charge in SW3?',
        a: 'Chelsea is inside the Congestion Charge zone, so it applies on weekdays and at the published weekend hours. Where a road charge applies to your visit we show it as a separate, clearly stated line in the quote rather than hiding it in the price, so there are no surprises on the day.',
      },
      {
        q: 'Can you clean silk or antique upholstery?',
        a: 'We test first and advise honestly. Silk, viscose and silk-mix fabrics need a dry-solvent or very-low-moisture method, and some antique pieces should not be cleaned in situ at all. If we cannot identify a fibre safely we will tell you rather than risk the piece, and there is no charge for a visit that ends that way.',
      },
      {
        q: 'Will you deal with our porter or managing agent?',
        a: 'Yes, and it is usually quicker if we do. Many SW3 buildings want a contractor sign-in, a specific entrance or set working hours. Give us the building details when you book and we will arrange it in advance.',
      },
    ],
  },
  {
    slug: 'streatham',
    name: 'Streatham',
    postcodes: ['SW16', 'SW2', 'SE24'],
    metaTitle: 'Sofa Cleaning Streatham SW16 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Affordable sofa and carpet cleaning in Streatham SW16. Edwardian houses, HMO conversions and family homes. Pet odour treatment and end-of-tenancy receipts.',
    summary: 'SW16 Edwardian houses and conversions — family and landlord work.',
    intro: [
      'Streatham is the best-value stretch of south London for a lot of families who have been priced out of SW4 and SW12, and it shows in the housing: big Edwardian houses with generous rooms, a lot of which have been split into flats and HMOs at some point in the last forty years.',
      'That mix means our SW16 work splits fairly evenly between households wanting a family sofa and staircase properly cleaned, and landlords or agents turning a property around between tenancies. Both benefit from booking multiple items in one visit, because the call-out is the expensive part, not the individual sofa.',
      'We cover SW16 and the adjoining SW2 and SE24 edges: Streatham Hill, Streatham Common, Streatham Vale, Furzedown and the Tulse Hill and Brixton Hill borders.',
    ],
    property: {
      heading: 'Streatham houses and HMO conversions',
      body: [
        'The Edwardian stock along Streatham High Road and the streets off Streatham Common is generously sized — wide halls, big bay-fronted receptions and full staircases — which makes for efficient cleaning. You get more square metres per hour than in a narrow Fulham terrace, and our room pricing reflects the size rather than the postcode.',
        'Conversions and HMOs bring a different pattern. Shared-house sofas and hallway carpets take far more traffic than family equivalents, and they are usually cleaned reactively at changeover rather than regularly. Heavily loaded carpet needs a longer pre-spray dwell rather than more water, and it will take a little longer than the same room in a family home.',
        'Streatham Vale and Furzedown have more 1930s semis with fitted carpet throughout, and whole-house jobs there are common and good value — four or five rooms plus hall, stairs and landing in one visit works out substantially cheaper than booking rooms separately.',
      ],
    },
    access: {
      heading: 'Parking and getting around SW16',
      body: [
        'Parking in Streatham is far easier than in the SW4 and SW6 postcodes. Many residential streets off the Common and in the Vale are unrestricted or only lightly controlled, so in most cases no permit is needed at all.',
        'SW16 sits inside the ULEZ zone and well outside the Congestion Charge zone. Any road charge that applies is itemised in your quote before you book.',
        'Streatham High Road is slow through both peaks and the one-way system around the station adds time. An off-peak weekday slot — mid-morning or early afternoon — is the most reliable, and if you are on the Common side, access is usually straightforward at any time.',
      ],
    },
    neighbourhoods: ['Streatham Hill', 'Streatham Common', 'Streatham Vale', 'Furzedown', 'Tulse Hill border', 'Brixton Hill border'],
    nearby: ['balham', 'clapham', 'croydon', 'tooting'],
    topServices: ['carpet-cleaning', 'end-of-tenancy-cleaning', 'stain-and-odour-removal'],
    faqs: [
      {
        q: 'Do I need a parking permit in Streatham?',
        a: 'Usually not. Much of SW16 is unrestricted or only lightly controlled, which is one of the reasons jobs here are straightforward. If your street is permit-only, a visitor permit helps, but it is far less of an issue than in SW4 or SW6.',
      },
      {
        q: 'Do you work for landlords and letting agents?',
        a: 'Yes, a good share of our SW16 work is tenancy turnaround. We provide a dated, itemised receipt naming each room and item cleaned, which is what deposit schemes and inventory clerks look for, and we can usually fit short-notice changeover bookings.',
      },
      {
        q: 'Is it cheaper to book several rooms at once?',
        a: 'Noticeably, yes. The call-out and setup is the fixed cost, so a whole-house carpet clean or a sofa plus stairs in one visit works out far better than separate bookings. Tell us everything you want doing and we will quote the package.',
      },
    ],
  },
  {
    slug: 'islington',
    name: 'Islington',
    postcodes: ['N1', 'N5', 'N7', 'EC1'],
    metaTitle: 'Sofa Cleaning Islington N1 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Upholstery and carpet cleaning in Islington N1. Georgian terraces, warehouse conversions and Angel flats. Careful access, evening slots, WhatsApp quotes.',
    summary: 'N1 Georgian terraces, warehouse conversions and small-flat logistics.',
    intro: [
      'Islington is a tight-access borough, and that shapes every job. Georgian terraces around Canonbury and Barnsbury have narrow entrance halls and steep stairs; the warehouse conversions off Upper Street and towards Old Street have goods lifts, loading bays and building rules; and the flats around Angel are small enough that where the machine goes matters.',
      'None of that is a problem — our setup is designed for it. The machine stays in the van or at ground level and we run hoses in, so the equipment footprint inside your home is about the size of a suitcase and nothing heavy comes up your stairs.',
      'We cover N1 and the neighbouring N5, N7 and EC1 streets: Angel, Canonbury, Barnsbury, Highbury, Upper Street and the Clerkenwell border.',
    ],
    property: {
      heading: 'Georgian terraces, conversions and warehouse flats',
      body: [
        'Georgian and early Victorian terraces in Canonbury and Barnsbury typically have several floors, a narrow staircase and a lower-ground kitchen-diner. Lower-ground rooms have the least airflow of any space we work in and dry slowest, so air movers go in as standard rather than on request.',
        'Warehouse conversions towards Old Street and along the canal bring exposed brick, open-plan living and, very often, a large rug over concrete or timber plus a sizeable sofa. Building management usually wants the goods lift booked and a contractor sign-in, which is easily arranged with a day\'s notice.',
        'The smaller Angel flats are the ones where people assume a professional clean is not practical. It is — a one-bed flat sofa clean takes under an hour, the hoses come in through the front door, and there is nothing bulky to accommodate.',
      ],
    },
    access: {
      heading: 'Congestion Charge, ULEZ and parking in N1',
      body: [
        'Parts of N1 sit inside the Congestion Charge zone, particularly towards Clerkenwell and the EC1 border, while most of Islington proper is outside it. The whole area is inside the ULEZ zone. Where a road charge applies to your visit we quote it as a separate, clearly stated line so you can see exactly what it is.',
        'Parking across N1 is controlled and genuinely scarce, with short maximum stays on many bays. A visitor permit is close to essential for a job over an hour; the alternative is a pre-booked bay. We need to be within about thirty metres of the entrance.',
        'Evening slots work well in Islington, partly because parking eases after controlled hours and partly because a lot of our N1 customers would rather not take a day off. We run them regularly at no extra charge.',
      ],
    },
    neighbourhoods: ['Angel', 'Canonbury', 'Barnsbury', 'Highbury', 'Upper Street', 'Clerkenwell border'],
    nearby: ['hackney', 'camden', 'shoreditch', 'stoke-newington'],
    topServices: ['fabric-sofa-cleaning', 'carpet-cleaning', 'velvet-sofa-cleaning'],
    faqs: [
      {
        q: 'Is my flat too small for a professional sofa clean?',
        a: 'Almost certainly not. The machine stays in the van or at ground level and we run hoses in, so the equipment inside your flat is roughly suitcase-sized. We clean sofas in one-bed Angel flats most weeks, usually in under an hour.',
      },
      {
        q: 'Does the Congestion Charge apply in Islington?',
        a: 'It depends on the street — parts of N1 near the EC1 and Clerkenwell border are inside the zone, and most of Islington proper is outside it. Where a road charge applies we show it as a separate line in the quote rather than folding it into the price, so you know before you book.',
      },
      {
        q: 'Can you come in the evening?',
        a: 'Yes, and it is popular in N1 — parking eases after controlled hours and nobody has to take time off. Evening slots are charged at the same rate as daytime ones.',
      },
    ],
  },
  {
    slug: 'hackney',
    name: 'Hackney',
    postcodes: ['E8', 'E5', 'E9', 'N16'],
    metaTitle: 'Sofa Cleaning Hackney E8 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Sofa and carpet cleaning in Hackney E8. London Fields flats, warehouse conversions and Victorian terraces. Vintage and second-hand furniture a speciality.',
    summary: 'E8 warehouse flats, London Fields terraces and plenty of vintage furniture.',
    intro: [
      'Hackney sends us more second-hand and vintage upholstery than any other borough, and it is some of the most satisfying work we do. A mid-century armchair bought off Marketplace, a 1970s velvet sofa from a Hackney Road junk shop, a chesterfield with an unknown history — all of them come with soil from somebody else\'s house, and none of them come with a cleaning code.',
      'That means fibre testing rather than assumption. Older pieces can have unstable dyes, natural-fibre wadding that browns when over-wetted, and hessian or jute underlayers that mark through if moisture reaches them, so the method gets decided after the test, not before.',
      'We cover E8 and the adjoining E5, E9 and N16 areas: London Fields, Dalston, Hackney Central, Homerton, Clapton and the Stoke Newington border.',
    ],
    property: {
      heading: 'Warehouse conversions, ex-council flats and Victorian terraces',
      body: [
        'The warehouse conversions around Dalston, Hackney Wick and the canal are open-plan with hard floors, large rugs and big sofas, plus a building manager who will want the goods lift booked. They are quick jobs once access is sorted, and the open volume means they dry fast.',
        'Ex-local-authority blocks across E5 and E9 are solid, practical properties with lift access and reasonable airflow. They clean well and they are often where the best-value whole-flat packages apply, because room sizes are consistent and the work is predictable.',
        'Victorian terraces around London Fields and Clapton are the third type: a hall, a full staircase, and a knocked-through reception. Hall, stairs and landing plus a sofa is the standard Hackney household booking, same as in the south-west postcodes.',
      ],
    },
    access: {
      heading: 'Parking, LTNs and access in E8',
      body: [
        'Hackney has an extensive network of low-traffic neighbourhoods with modal filters, which means the route to your door is sometimes not the obvious one and satnav occasionally suggests a road we cannot legally use. It does not affect price or reliability — we know the borough — but it is worth allowing a few extra minutes.',
        'Parking is controlled across most of E8 on weekdays and bays turn over quickly. A visitor permit makes a job over an hour much easier; we need to be within about thirty metres of the entrance.',
        'E8 sits inside the ULEZ zone and outside the Congestion Charge zone. Any road charge that applies is itemised in your quote before you book.',
      ],
    },
    neighbourhoods: ['London Fields', 'Dalston', 'Hackney Central', 'Homerton', 'Clapton', 'Stoke Newington border'],
    nearby: ['islington', 'shoreditch', 'stoke-newington', 'walthamstow'],
    topServices: ['velvet-sofa-cleaning', 'fabric-sofa-cleaning', 'stain-and-odour-removal'],
    faqs: [
      {
        q: 'Can you clean a second-hand sofa with no cleaning label?',
        a: 'Yes, and we get asked a lot in E8. With no label we identify the fibre ourselves and run a colourfastness and moisture test on a hidden seam before anything else. Older pieces can have unstable dyes or natural wadding that browns if over-wetted, so the method is chosen after the test, not before.',
      },
      {
        q: 'Do you clean mid-century and vintage furniture?',
        a: 'Regularly. The main risks are dye instability, natural-fibre wadding and hessian underlayers that mark through if moisture reaches them, so vintage pieces usually get a low-moisture method. If a piece is too fragile to clean safely we will say so on the doorstep and not charge you.',
      },
      {
        q: 'Do the low-traffic neighbourhoods affect your visit?',
        a: 'Not meaningfully. Hackney\'s modal filters mean the route in is sometimes indirect, so we allow a little extra travel time, but it does not change your price or our reliability.',
      },
    ],
  },
  {
    slug: 'chiswick',
    name: 'Chiswick',
    postcodes: ['W4', 'W3', 'TW8'],
    metaTitle: 'Sofa Cleaning Chiswick W4 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Upholstery and carpet cleaning in Chiswick W4. Bedford Park and Grove Park family homes, wool carpets and large sofas. Fixed photo quotes on WhatsApp.',
    summary: 'W4 family houses, wool carpets and well-kept furniture.',
    intro: [
      'Chiswick is a maintenance market rather than a rescue market. W4 households tend to call us before the sofa is a disaster — every twelve or eighteen months, often alongside the carpets — and that is by far the cheapest way to own upholstery, because soil that has not had time to bind comes out completely and the fabric never wears from abrasion.',
      'It also has more wool carpet than most of the boroughs we cover, particularly in the Bedford Park and Grove Park houses, and wool is the fibre that rewards a proper method most obviously. It is absorbent, it browns if over-wetted, and it needs a neutral-to-acidic pH — get those right and it comes up beautifully.',
      'We cover W4 and the neighbouring W3 and TW8 edges: Bedford Park, Grove Park, Chiswick High Road, Turnham Green, Gunnersbury and Strand on the Green.',
    ],
    property: {
      heading: 'Bedford Park, Grove Park and the Chiswick housing stock',
      body: [
        'Bedford Park is a conservation area of late-Victorian Arts and Crafts houses, and they tend to be well looked after with original features, timber floors, and good rugs over them. Rug-over-timber is the detail that matters: moisture escaping a rug edge will mark the floor, so we either work drier at the borders or lift the rug onto a protected surface.',
        'Grove Park and the streets towards Strand on the Green are larger family houses, frequently with wool carpet throughout and a large sofa in a knocked-through reception. Whole-house bookings — several rooms, hall, stairs and landing, plus the sofa — are common and considerably better value than piecemeal visits.',
        'The mansion flats and newer blocks along Chiswick High Road are straightforward lift-access jobs, though a few require the service lift to be booked. Worth mentioning when you call so it is arranged in advance.',
      ],
    },
    access: {
      heading: 'Parking and access in W4',
      body: [
        'Chiswick parking is controlled on weekdays across most of W4, with the tightest pressure around Turnham Green and the High Road. Many of the Bedford Park and Grove Park houses have off-street parking, which makes the visit considerably easier.',
        'W4 sits inside the ULEZ zone and well outside the Congestion Charge zone. Any road charge that applies is itemised in your quote before you book.',
        'The A4 and the Hogarth Roundabout are slow through both peaks, and traffic backing up from the M4 affects the area more than people expect on Friday afternoons. Mid-morning slots are the most reliable in W4.',
      ],
    },
    neighbourhoods: ['Bedford Park', 'Grove Park', 'Turnham Green', 'Chiswick High Road', 'Gunnersbury', 'Strand on the Green'],
    nearby: ['richmond', 'hammersmith', 'putney', 'ealing'],
    topServices: ['carpet-cleaning', 'fabric-sofa-cleaning', 'corner-sofa-cleaning'],
    faqs: [
      {
        q: 'How often should a family sofa be cleaned?',
        a: 'Every twelve to eighteen months for a busy household, which is the pattern most of our W4 customers follow. Regular cleaning is cheaper over the life of the sofa because soil never binds to the fibre and the fabric never abrades — a sofa left five years takes longer, costs more and recovers less.',
      },
      {
        q: 'Do you clean wool carpets?',
        a: 'Yes, and wool needs specific handling: controlled moisture, a neutral-to-acidic pH and even drying, or it can brown from the backing. We check the fibre before starting. Bedford Park and Grove Park houses have a lot of wool and it cleans up very well when it is treated properly.',
      },
      {
        q: 'Can you clean several rooms and the sofa in one visit?',
        a: 'Yes, and it is the best value way to book in Chiswick. A whole-house carpet job with hall, stairs and landing plus the sofa is a normal day for us, everything is dry the same afternoon, and the package price is well below booking each item separately.',
      },
    ],
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    postcodes: ['TW9', 'TW10', 'TW1'],
    metaTitle: 'Sofa Cleaning Richmond TW9 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Upholstery and carpet cleaning in Richmond TW9 and TW10. Period houses, riverside flats and Richmond Hill properties. No ULEZ or Congestion Charge added.',
    summary: 'TW9 and TW10 period homes, riverside flats and Richmond Hill houses.',
    intro: [
      'Richmond is the outer edge of where we work, and it is a good market for a specific reason: the housing stock is old, well kept and full of the kind of furniture that is worth cleaning rather than replacing. Georgian and Victorian houses on and around Richmond Hill, period conversions near the Green, and riverside flats with a view they pay handsomely for.',
      'It also has more antique and reproduction furniture than the inner boroughs, which means more fibre testing and more low-moisture work. Old pieces tend to have natural-fibre wadding and less stable dyes, and both punish a careless wet clean.',
      'We cover TW9 and TW10 and into TW1: Richmond Hill, Richmond Green, Kew, Petersham, North Sheen and the Twickenham side.',
    ],
    property: {
      heading: 'Richmond Hill houses, Green conversions and riverside flats',
      body: [
        'The Richmond Hill and Petersham houses are substantial, often with several floors, wool carpet or timber with rugs, and good-quality upholstery that has been in the family a while. Those benefit most from a proper method: wool and natural fibres will brown or shrink if over-wetted, and a conservative moisture approach is the whole job.',
        'Period conversions around Richmond Green and Kew are typically first-floor or second-floor flats with no lift, which is routine — the machine stays at ground level and hoses run up. Some are listed or in a conservation area, which has no practical effect on cleaning but does sometimes mean a managing agent with views about the communal parts.',
        'Riverside flats towards the towpath share Putney\'s humidity issue: on still, damp days drying is noticeably slower near the water. We bring air movers to those jobs as standard rather than as an extra.',
      ],
    },
    access: {
      heading: 'Parking, charges and access in TW9',
      body: [
        'Richmond sits outside the Congestion Charge zone. Where any road charge applies to a visit it is itemised in your quote before you book, never added afterwards.',
        'Parking is controlled on weekdays around the town centre, the Green and the station, and the Hill has a mix of permit bays and unrestricted stretches. Many of the larger houses have off-street parking. We need to be within about thirty metres of the entrance for hose reach.',
        'The A316 and the bridge approaches are slow at peak, and the town centre is congested on fine weekends. Weekday mid-morning is the most reliable slot in TW9 and TW10.',
      ],
    },
    neighbourhoods: ['Richmond Hill', 'Richmond Green', 'Kew', 'Petersham', 'North Sheen', 'Twickenham border'],
    nearby: ['chiswick', 'putney', 'kingston', 'hammersmith'],
    topServices: ['carpet-cleaning', 'leather-sofa-cleaning', 'velvet-sofa-cleaning'],
    faqs: [
      {
        q: 'Do you charge extra to travel out to Richmond?',
        a: 'No travel surcharge for TW9, TW10 and TW1 — our standard pricing applies. Richmond is outside the Congestion Charge zone, and any road charge that does apply to a visit is itemised in your quote before you book.',
      },
      {
        q: 'Can you clean antique or period upholstery?',
        a: 'With testing first. Older pieces often have natural-fibre wadding and less stable dyes, so we check colourfastness on a hidden area and generally use a low-moisture method. If a piece is too fragile to clean safely, we will tell you on the doorstep and there is no charge for the visit.',
      },
      {
        q: 'Do you cover Kew and Petersham?',
        a: 'Yes — Kew, Petersham, North Sheen and the Twickenham side are all within our normal Richmond coverage at standard pricing. Send a photo on WhatsApp with your postcode and we will confirm a fixed price.',
      },
    ],
  },
  {
    slug: 'croydon',
    name: 'Croydon',
    postcodes: ['CR0', 'CR2', 'SE25'],
    metaTitle: 'Sofa Cleaning Croydon CR0 | Upholstery & Carpet Cleaning',
    metaDescription:
      'Affordable sofa and carpet cleaning in Croydon CR0. Family homes, tower-block flats and commercial offices. Easy parking, no ULEZ surcharge, whole-house rates.',
    summary: 'CR0 family homes, town-centre flats and office work.',
    intro: [
      'Croydon is our best-value borough, and for a practical reason: parking is straightforward, most properties have off-street access or unrestricted streets, and homes are bigger. Less time lost to logistics means more of the visit spent cleaning, and whole-house packages here go further than anywhere else we cover.',
      'It is also where most of our commercial work comes from. Croydon\'s office stock around the town centre and East Croydon means fabric task chairs by the dozen, and a fifty-chair floor cleaned out of hours on a quarterly schedule is far cheaper than replacing chairs early.',
      'We cover CR0 and the neighbouring CR2 and SE25 areas: Addiscombe, Shirley, South Croydon, Thornton Heath, Selhurst and Purley Way.',
    ],
    property: {
      heading: 'Croydon housing and commercial stock',
      body: [
        'The residential stock across Addiscombe, Shirley and South Croydon is largely interwar and post-war semis and detached houses — bigger rooms, fitted carpet throughout, and usually off-street parking. Whole-house carpet jobs are the standard booking, typically four or five rooms plus hall, stairs and landing in a single visit.',
        'Town-centre and East Croydon flats are lift-access blocks, generally straightforward, and often part of a letting portfolio. Tenancy turnaround work is steady here and we provide the itemised, dated receipt that deposit schemes and inventory clerks ask for.',
        'Commercial premises around the town centre and Purley Way are mostly offices and light-industrial units with fabric task chairs and broadloom or carpet tiles. Both are priced per item or per square metre so a facilities budget gets a firm number rather than an hourly estimate.',
      ],
    },
    access: {
      heading: 'Parking, ULEZ and out-of-hours work in CR0',
      body: [
        'Parking in Croydon is the easiest of anywhere we cover. Most residential streets outside the immediate town centre are unrestricted, and a great many properties have driveways. That saves time, and we pass that efficiency on in whole-house pricing.',
        'CR0 sits inside the expanded ULEZ zone and far outside the Congestion Charge zone. Any road charge that applies is itemised in your quote before you book.',
        'For commercial customers we work evenings, early mornings and Sundays at no out-of-hours surcharge for scheduled jobs, with air movers running as standard so a floor is dry and usable by opening.',
      ],
    },
    neighbourhoods: ['Addiscombe', 'Shirley', 'South Croydon', 'Thornton Heath', 'Selhurst', 'Purley Way'],
    nearby: ['streatham', 'bromley', 'sutton', 'crystal-palace'],
    topServices: ['carpet-cleaning', 'commercial-upholstery-cleaning', 'end-of-tenancy-cleaning'],
    faqs: [
      {
        q: 'How much is a whole-house carpet clean in Croydon?',
        a: 'A three-bed house with carpets throughout plus hall, stairs and landing starts around £180 and is typically a four-hour visit. Croydon houses are larger and parking is easy, so packages here go further than in the inner postcodes. Send your room count on WhatsApp for a fixed price.',
      },
      {
        q: 'Do you clean office chairs in Croydon?',
        a: 'Yes — office work around the town centre and Purley Way is a regular part of what we do. Task chairs are from £8 each at volume rates from ten chairs, we work evenings and weekends with no out-of-hours surcharge for scheduled jobs, and air movers mean the floor is usable at opening.',
      },
      {
        q: 'Is there a travel charge for CR0?',
        a: 'No. Croydon is within our standard coverage at standard pricing, and the Congestion Charge does not apply anywhere near CR0. Any road charge that does apply to a visit is itemised in your quote before you book.',
      },
    ],
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);

/** Areas referenced as neighbours but without their own page yet — rendered as plain text, never as links. */
export const areaExists = (slug: string) => areas.some((a) => a.slug === slug);

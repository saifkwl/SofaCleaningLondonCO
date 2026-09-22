export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  nav: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Short line used on cards and in the nav mega-list */
  summary: string;
  /** Opening two or three paragraphs, unique to this page */
  intro: string[];
  /** "What's included" bullets */
  included: string[];
  /** A section of genuinely page-specific detail */
  detail: { heading: string; body: string[] };
  /** Second page-specific section, usually the risk/technique angle */
  technique: { heading: string; body: string[] };
  priceNote: string;
  priceRows: { item: string; range: string; note: string }[];
  faqs: Faq[];
  /** Gallery pair ids that genuinely show this service */
  galleryIds: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'fabric-sofa-cleaning',
    nav: 'Fabric sofa cleaning',
    h1: 'Fabric Sofa Cleaning in London',
    metaTitle: 'Fabric Sofa Cleaning London | Guide £55–£110',
    metaDescription:
      'Deep clean for fabric sofas across London. Fibre test, HEPA vacuum, pre-spray and hot water extraction. Dry in 3–5 hours. WhatsApp a photo for a price.',
    summary: 'Hot water extraction for cotton, linen, chenille and microfibre settees.',
    intro: [
      'Most fabric sofas in London are not dirty in the way people expect. They are loaded. Years of skin oils, hair product, takeaway grease and fine city dust settle into the weave and bind to the fibre, and the result is a seat cushion that has quietly gone two shades darker than the back it sits against. You only notice when you pull a cushion off and see the original colour underneath.',
      'Vacuuming lifts the loose layer. It does nothing about the bound layer, because that soil is oily and needs to be chemically released before anything can pull it out. That is the whole job: release, agitate, extract, dry. Get the order wrong and you drive the soil deeper or leave a sticky residue that re-soils within a fortnight.',
      'We clean fabric two-seaters, three-seaters, sofa beds, chaise ends and modular settees in homes across Greater London, working around your furniture rather than hauling it out. Most rooms are back in use the same afternoon.',
    ],
    included: [
      'Colourfastness and fibre test on a hidden seam before anything is applied',
      'Dry soil removal with a HEPA-filtered upholstery vacuum',
      'Alkaline pre-spray dwelled to break the oily bond, then soft-brush agitation',
      'Hot water extraction at controlled moisture — rinsed, not soaked',
      'Separate spot treatment for rings, food marks and biro',
      'Arms, back panels, sides, skirts and both faces of every loose cushion',
      'Grooming of the pile so it dries in one direction, with an air mover on request',
    ],
    detail: {
      heading: 'Why fabric sofas go patchy — and how that gets fixed',
      body: [
        'The single most common thing we are called out to is not a stain. It is blotchiness: a sofa someone has already tried to clean at home with a supermarket foam or a hired machine. Those products leave a soapy residue behind because a domestic machine cannot rinse — it has no separate solution and recovery path at pressure. The residue is tacky, it grabs every speck of dust in the room, and within weeks you have dark haloes exactly where the cleaning happened.',
        'Fixing it means flushing the residue out entirely with a clear acidic rinse before we do anything else. It is more work than cleaning a sofa nobody has touched, but it is completely recoverable, and the result is an even tone rather than a patchwork. If you have already had a go with a hired machine, say so when you book — it changes the method, not the price.',
        'The other cause of patchiness is uneven drying. A cushion that dries from the top down while the base stays damp will wick soil upward from the foam and leave a brown edge. That is why we control moisture on the way in and groom and dry-pass on the way out, rather than flooding a cushion and hoping.',
      ],
    },
    technique: {
      heading: 'Fibre first: what your cleaning code actually means',
      body: [
        'Under the seat cushion, or on a tag behind the skirt, most sofas carry a one-letter cleaning code. W means water-based cleaning is safe. S means solvent only — water will ring it. WS means either. X means vacuum only, and a wet clean on an X-coded fabric can shrink or distort it permanently.',
        'We check that code on arrival, and where there is no tag we run a burn-free fibre identification and a patch test on a concealed area. Viscose and rayon blends are the ones that catch people out: they look like linen, they feel like linen, and they lose strength and go crispy when wet-cleaned carelessly. Those get a low-moisture method instead, which costs the same.',
        'If a fabric genuinely cannot be cleaned safely, we will tell you on the doorstep and not charge you for the visit. That is rare — perhaps one job in forty — but it is a great deal cheaper than a ruined sofa.',
      ],
    },
    priceNote: 'Typical ranges for a normally soiled item. Your exact price depends on size, fabric and condition — we confirm it with you on the phone or WhatsApp before booking.',
    priceRows: [
      { item: '2-seater fabric sofa', range: '£55–£85', note: 'Roughly 45–60 minutes' },
      { item: '3-seater fabric sofa', range: '£70–£110', note: 'Roughly 60–75 minutes' },
      { item: 'Sofa bed (mechanism out)', range: '£85–£130', note: 'Includes the mattress face' },
      { item: 'Each extra loose cushion', range: '£5–£10', note: 'Scatter cushions, both faces' },
    ],
    faqs: [
      {
        q: 'How long does a fabric sofa take to dry?',
        a: 'Three to five hours in a normally ventilated room. We extract far more water than we put in, so the fabric comes up damp rather than wet. Opening a window and leaving an air mover running brings it closer to two hours, and we carry one.',
      },
      {
        q: 'Will the stains definitely come out?',
        a: 'Soiling almost always does. Stains depend on what they are. Food, drink, mud, body oils and pet accidents usually lift completely. Dye-based marks — red wine left to dry for months, hair dye, some inks — may reduce rather than vanish, because the dye has bonded to the fibre. We will tell you honestly what we expect before we start rather than after.',
      },
      {
        q: 'Do you move the sofa?',
        a: 'We work around it where we can, and slide it forward a little to reach the back and sides. We do not dismantle fitted or built-in seating. If a room is very tight, tell us when you book so we allow the extra time.',
      },
      {
        q: 'Is it safe with children and pets in the house?',
        a: 'We use pH-balanced, low-odour products and rinse them out, which is the part that matters — residue is what causes irritation, not the product itself. Keep pets off the furniture until it is dry to the touch, which is the same advice we give about the carpet.',
      },
    ],
    galleryIds: ['fabric-sofa-1', 'fabric-sofa-2'],
    related: ['corner-sofa-cleaning', 'stain-and-odour-removal', 'armchair-and-dining-chair-cleaning'],
  },
  {
    slug: 'corner-sofa-cleaning',
    nav: 'Corner sofa cleaning',
    h1: 'Corner & L-Shape Sofa Cleaning in London',
    metaTitle: 'Corner Sofa Cleaning London | L-Shape & Modular',
    metaDescription:
      'Corner and L-shape sofa cleaning across London. Every module, both cushion faces and the awkward inside corner. Priced by seat count, agreed on WhatsApp.',
    summary: 'Large L-shapes, modular units and recliner corners, cleaned module by module.',
    intro: [
      'A corner sofa is not simply a bigger sofa. It is the piece of furniture the whole household lives on, which means it carries three or four times the traffic of a two-seater and wears unevenly — one end pristine, the return end greyed out where everyone sits, and a corner seat that has become a dumping ground for crumbs, remote controls and pet hair.',
      'It is also the hardest shape to clean properly, because the inside corner is where two modules meet at an angle nobody can reach with a normal wand. Skip it and the sofa looks cleaned everywhere except the bit your eye is drawn to.',
      'We clean L-shapes, U-shapes, chaise-end corners, power recliner corners and modular systems throughout Greater London, working one module at a time so nothing is missed and nothing is over-wetted.',
    ],
    included: [
      'Every module treated as a separate item, including the corner wedge',
      'Cushions lifted and cleaned on both faces, plus the deck underneath',
      'Crevice and hand-tool work into the seams where modules join',
      'Recliner footrests extended and cleaned in the open position',
      'Arms, outside backs and the returns that face the wall',
      'Even-tone finish across modules so no section dries lighter than its neighbour',
    ],
    detail: {
      heading: 'Why corner sofas dry unevenly — and what we do about it',
      body: [
        'The classic corner sofa failure is a tide line down the join between two modules. It happens because each module is cleaned in isolation, dries at its own rate, and the edges wick soil differently. The result is a visible seam of colour running through what should be one continuous surface.',
        'The fix is sequencing. We clean across the join rather than up to it, keep moisture consistent across every panel, and finish the whole piece before any section has had time to start drying. On a large U-shape that means a continuous working pass rather than stopping for a cup of tea halfway.',
        'Recliner corners add another wrinkle. The mechanism housing traps dust and the footrest fabric only sees daylight when extended, so it is often a completely different colour from the seat. We open every action, clean the hidden faces, and leave the mechanism to dry open so damp fabric is not folded onto damp fabric.',
      ],
    },
    technique: {
      heading: 'Measuring an L-shape so the quote is right first time',
      body: [
        'We price corner sofas by seat count, not by guesswork. Count the seat cushions — the ones you actually sit on — and include the corner as one. A common London layout is a three-seat run, a corner wedge and a two-seat return, which is six seats, and that is the number we need.',
        'If the sofa has a chaise end rather than a return, count the chaise as two. Scatter cushions are separate and cheap. Send a photo on WhatsApp taken from the doorway with the whole piece in frame and we will count it for you and come back with a price, usually within the hour.',
        'Very large modular systems in loft conversions and basement flats sometimes need a two-person visit for time rather than difficulty. We will say so when we quote, not when we arrive — once a price is agreed it does not change on the day.',
      ],
    },
    priceNote: 'Corner sofas are priced by seat count. Send a photo and we will count it and talk you through the price.',
    priceRows: [
      { item: '4-seat corner sofa', range: '£110–£160', note: 'Typical small L-shape' },
      { item: '5-seat corner sofa', range: '£130–£185', note: 'Run, corner and return' },
      { item: '6-seat corner sofa', range: '£150–£215', note: 'Roughly 2 hours' },
      { item: 'Recliner action, each', range: '£8–£15', note: 'Footrest and hidden faces' },
    ],
    faqs: [
      {
        q: 'How is a corner sofa priced?',
        a: 'By seat count. Count the seat cushions you sit on, counting the corner wedge as one and a chaise end as two. As a guide a six-seat corner is £150–£215 depending on fabric and condition — an estimate rather than a quote, and a lighter job can come in under it. Send a photo on WhatsApp and we will count it and agree your actual price before we book you in.',
      },
      {
        q: 'Do you clean the part against the wall?',
        a: 'Yes, where the sofa can be pulled forward safely. Outside backs collect a surprising amount of dust and wall-transfer marks. If a module is bolted to the wall or boxed in, we clean what is reachable and tell you what is not.',
      },
      {
        q: 'Can you clean a corner sofa in a small flat?',
        a: 'Yes. Our machine sits outside the room or on the landing and we run hoses in, so the working footprint indoors is about the size of a suitcase. We regularly clean corner sofas in one-bed flats and top-floor conversions.',
      },
      {
        q: 'How long will a large corner sofa take?',
        a: 'Around two hours for a six-seat piece, slightly longer with multiple recliner actions. Drying is three to five hours, and you can sit on it once it is dry to the touch.',
      },
    ],
    galleryIds: ['corner-sofa-1'],
    related: ['fabric-sofa-cleaning', 'velvet-sofa-cleaning', 'carpet-cleaning'],
  },
  {
    slug: 'leather-sofa-cleaning',
    nav: 'Leather sofa cleaning',
    h1: 'Leather Sofa Cleaning & Conditioning in London',
    metaTitle: 'Leather Sofa Cleaning London | Clean, Condition & Protect',
    metaDescription:
      'Leather sofa cleaning and conditioning across London. Safe on pigmented, semi-aniline and aniline hides. Removes body-oil greying and restores suppleness.',
    summary: 'pH-correct cleaning and re-conditioning for pigmented, semi-aniline and aniline hides.',
    intro: [
      'Leather does not get dirty so much as it gets tired. The finish on a pigmented hide is a thin protective film, and every time someone sits down in a cotton shirt on a warm evening, body oil and perspiration work at that film. Head rests go dark first, then the front edges of the seats, then the arm tops. Ten years in, a white leather sofa reads grey and nobody can point to a single stain.',
      'Most household leather wipes make this worse. Anything with a solvent, a silicone shine or a high pH strips or softens the finish, and once the finish is compromised the hide underneath absorbs everything and cracks along the flex lines.',
      'We clean and re-condition leather suites across London — chesterfields, recliners, modern box-arm sofas and dining chairs — with a pH-correct foam that lifts the soil out of the grain without touching the topcoat, followed by a breathable conditioner that puts the flex back.',
    ],
    included: [
      'Hide identification: pigmented, semi-aniline, aniline, nubuck or bonded',
      'Test patch on a hidden panel before any product touches a visible face',
      'Low-moisture foam cleaning worked into the grain with a soft brush',
      'Focused attention on head rests, arm tops and seat front edges',
      'Ink, dye-transfer and scuff assessment with honest expectations',
      'Breathable conditioner to restore suppleness and slow cracking',
      'Optional protective top-coat on high-wear panels',
    ],
    detail: {
      heading: 'Pigmented, aniline, bonded — and why it decides everything',
      body: [
        'Pigmented leather is the common one: a coloured, coated hide, hard-wearing, and the easiest to clean well. Semi-aniline has a lighter coat and more natural character, so it takes a gentler touch. Aniline is uncoated, dyed through, beautiful and genuinely absorbent — a drop of water darkens it instantly and a wet cloth will leave a mark you cannot buff out.',
        'Bonded leather is not leather in any useful sense. It is shredded hide fibre glued to a backing with a printed polyurethane surface, and it fails by peeling rather than by soiling. We will clean it gently and we will be honest that cleaning cannot stop the peel. Nobody can. Telling you that on the phone saves you money.',
        'We identify which you have by the water-drop test on a hidden area plus the feel of the grain, and we tell you before we start. The price does not change with hide type — the method does.',
      ],
    },
    technique: {
      heading: 'Greying, cracking and dye transfer',
      body: [
        'Greying on a pale hide is almost always body oil sitting in the grain, and it lifts. The photographs on this site include a white buttoned chesterfield where the seat cushions had gone yellow-grey and the buttoned back had not; after cleaning, the two match again. That is a normal result, not a lucky one.',
        'Cracking is different. Once the finish has split, cleaning will not close it — conditioning slows further damage and improves how it feels, but a crack is permanent without a re-finishing job, which is a different trade. We will say so rather than take your money for a miracle.',
        'Dye transfer from denim onto pale leather is very common and usually reversible on a pigmented hide, partially reversible on semi-aniline, and often permanent on aniline. Blue-black arm rests on a cream sofa are worth a look; we will tell you which category yours falls into before booking.',
      ],
    },
    priceNote: 'Leather work includes conditioning as standard, not as an upsell. Where a hide falls in the range depends on its size and condition.',
    priceRows: [
      { item: '2-seater leather sofa', range: '£70–£100', note: 'Clean and condition' },
      { item: '3-seater leather sofa', range: '£85–£120', note: 'Clean and condition' },
      { item: 'Leather armchair or recliner', range: '£40–£60', note: 'Per chair' },
      { item: 'Protective top-coat', range: '£25–£45', note: 'High-wear panels' },
    ],
    faqs: [
      {
        q: 'Will cleaning damage or dry out my leather?',
        a: 'Not with the right product. Damage comes from solvents, household wipes and anything strongly alkaline, which strip the finish. We use a pH-correct foam and follow it with a breathable conditioner, so the hide ends up more supple than it started, not drier.',
      },
      {
        q: 'Can you remove ink or biro from leather?',
        a: 'Often on pigmented leather, sometimes on semi-aniline, rarely on aniline. Ink is a dye and it migrates into the finish quickly, so fresh marks do far better than old ones. Send a close-up photo on WhatsApp and we will give you a realistic answer before you book.',
      },
      {
        q: 'How long does leather take to dry?',
        a: 'Around an hour, because it is a low-moisture method. The conditioner needs a little longer to absorb fully, so we ask you to leave the sofa unused for about two hours and avoid throws overnight.',
      },
      {
        q: 'Do you clean faux or bonded leather?',
        a: 'Yes, gently, and we will tell you honestly what to expect. Bonded leather peels as it ages and no cleaning process reverses that. If yours is peeling we would rather say so than charge you.',
      },
    ],
    galleryIds: ['leather-sofa-1'],
    related: ['fabric-sofa-cleaning', 'armchair-and-dining-chair-cleaning', 'commercial-upholstery-cleaning'],
  },
  {
    slug: 'velvet-sofa-cleaning',
    nav: 'Velvet sofa cleaning',
    h1: 'Velvet & Crushed Velvet Cleaning in London',
    metaTitle: 'Velvet Sofa Cleaning London | Crushed Velvet Specialists',
    metaDescription:
      'Specialist velvet and crushed-velvet upholstery cleaning in London. Low-moisture method that lifts marks without flattening, watermarking or shading the pile.',
    summary: 'Low-moisture cleaning for velvet and crushed velvet without pile damage.',
    intro: [
      'Velvet is the fabric people are most frightened of, and they are right to be careful. The pile is a forest of short upright fibres, and what you see is not really colour — it is light bouncing off the direction those fibres are lying. Crush them, wet them unevenly, or dry them the wrong way and you get shading: permanent-looking light and dark patches that have nothing to do with dirt.',
      'That is why a wet cloth on velvet so often makes things dramatically worse. The mark comes out, and in its place you have a pale halo twice the size that will not brush away.',
      'Crushed velvet, which is in half the London living rooms built in the last decade, adds a twist: the pile is deliberately laid in random directions, so it hides soil brilliantly until it is saturated, and then it shows everything at once.',
    ],
    included: [
      'Pile-direction mapping before any moisture is introduced',
      'Dry soil extraction with a low-suction upholstery tool so the pile is not pulled',
      'Low-moisture cleaning, applied to the fibre rather than flooded through it',
      'Marks worked from the outside inward to prevent halo rings',
      'Pile groomed back to a single lie while damp',
      'Controlled drying so the nap sets in the right direction',
    ],
    detail: {
      heading: 'Shading, watermarks and the halo ring',
      body: [
        'Nearly every velvet job we are called to has at least one home-made watermark on it. The story is always the same: someone spilled something, dabbed at it with a damp cloth, and the spill vanished while a grey ring appeared. The ring is not dirt. It is the boundary where the fabric dried last, carrying soil and any dissolved finish with it to the edge of the wet area.',
        'Those rings come out, but only by re-wetting the whole panel evenly and drying it as one — which is exactly the opposite of what instinct tells you to do. That is the single best reason to leave a velvet spill alone and call someone rather than attack it with a cloth.',
        'Genuine crush damage, where the pile has been physically flattened by weight over years, is a different case. Steam and grooming lift a lot of it. On an old sofa with a permanent sit-mark, expect a real improvement rather than a factory finish, and we will say which one you are looking at before we start.',
      ],
    },
    technique: {
      heading: 'Polyester velvet versus the real thing',
      body: [
        'Most modern British sofa velvet is polyester, sometimes with a cotton backing. It is durable, colourfast and forgiving, and it takes a proper clean well. Silk, viscose and cotton velvets are another matter — viscose in particular loses wet strength and can crush permanently, and a great deal of "luxury" crushed velvet is a viscose blend.',
        'We check the composition tag and run a moisture test on a hidden seam. Where a fabric reads as viscose-heavy, we drop to a dry-solvent or very-low-moisture method that costs the same and protects the pile.',
        'The cream crushed-velvet accent chairs in our before-and-after gallery are a typical example: heavy tan soiling on the arms and a greyed seat pad, cleaned back to an even pale pile with no shading, watermark or crush.',
      ],
    },
    priceNote: 'Velvet is priced the same as fabric — the method differs, the cost does not. Final price confirmed when we speak.',
    priceRows: [
      { item: '2-seater velvet sofa', range: '£65–£95', note: 'Low-moisture method' },
      { item: '3-seater velvet sofa', range: '£80–£115', note: 'Low-moisture method' },
      { item: 'Velvet accent or dining chair', range: '£18–£30', note: 'Per chair' },
      { item: 'Velvet headboard', range: '£40–£65', note: 'Buttoned or panelled' },
    ],
    faqs: [
      {
        q: 'Will cleaning flatten or mark my velvet?',
        a: 'Not with a low-moisture method and proper grooming. Flattening and watermarks come from over-wetting and from uneven drying. We map the pile direction before we start, keep moisture low and consistent, and groom the nap back to one lie while it is still damp.',
      },
      {
        q: 'Can you fix a watermark somebody else made?',
        a: 'Usually, yes. A halo ring is a drying boundary, not a stain, and it is removed by re-cleaning the whole panel evenly rather than spot-treating the ring. It is one of the most satisfying jobs we do.',
      },
      {
        q: 'Is crushed velvet different from plain velvet?',
        a: 'To clean, yes. Crushed velvet has a deliberately random pile, so it hides soil until it is heavily loaded and then shows it all at once. It also cannot be groomed back to a single direction, so drying control matters even more. The price is the same.',
      },
      {
        q: 'How long does velvet take to dry?',
        a: 'Two to four hours, faster than a standard fabric clean because far less moisture goes in. Keep it uncovered and avoid sitting on it until fully dry so the pile sets evenly.',
      },
    ],
    galleryIds: ['velvet-accent-chair-1', 'velvet-accent-chair-2', 'dining-chair-3'],
    related: ['fabric-sofa-cleaning', 'armchair-and-dining-chair-cleaning', 'stain-and-odour-removal'],
  },
  {
    slug: 'armchair-and-dining-chair-cleaning',
    nav: 'Armchairs & dining chairs',
    h1: 'Armchair & Dining Chair Cleaning in London',
    metaTitle: 'Dining Chair & Armchair Cleaning London | From £15',
    metaDescription:
      'Upholstered dining chair and armchair cleaning across London. Water rings, food marks and arm-top soiling removed. Guide price £15–£35 a chair, six chairs in under two hours.',
    summary: 'Dining sets, nursing chairs, wingbacks, bar stools and office chairs.',
    intro: [
      'Upholstered dining chairs take more abuse per square inch than any sofa in the house. They sit under plates, they catch every splash, and pale linen-look seat pads show a water ring from a single wet glass base. Six chairs around a table will usually have six different histories written on them.',
      'Armchairs collect a different pattern: dark arm tops from hands and forearms, a greasy crown where heads rest, and a seat that has compressed and greyed while the back stays original. Nursing chairs add milk, and office chairs add eight hours a day of one person.',
      'These are small jobs and we price them that way. A six-chair dining set is typically done in ninety minutes and dry before dinner.',
    ],
    included: [
      'Each chair assessed individually — they are rarely soiled the same way',
      'Seat pads removed where they lift out, and cleaned on both faces',
      'Water rings and overlapping spill marks flushed rather than spot-dabbed',
      'Arm tops and head-contact areas degreased before the general clean',
      'Wooden frames and chrome legs wiped down as we go',
      'Chairs left raised or spaced so air reaches the underside',
    ],
    detail: {
      heading: 'Water rings on dining chairs are not really stains',
      body: [
        'A ring on a pale seat pad looks like a mark but is usually the opposite: it is the clean fabric, with a rim of concentrated soil pushed to the edge by the liquid as it dried. That is why scrubbing the middle does nothing and why the ring gets more obvious when you dab at it.',
        'The fix is to flush the whole panel through and extract it as one, which carries the concentrated edge away instead of moving it around. Overlapping rings from months of spills come out the same way.',
        'The blush velvet dining chair in our gallery is a good example: the seat had multiple overlapping water rings and grey blotching, and after a full-panel clean it reads as one even pale pink.',
      ],
    },
    technique: {
      heading: 'Fixed pads, loose pads and where the soil actually hides',
      body: [
        'Loose seat pads that lift out are the easy case — they can be cleaned on both faces and stood on edge to dry, which halves the drying time. Fixed pads mean working in situ with a hand tool and controlled moisture so nothing soaks into the timber frame underneath.',
        'On wingbacks and nursing chairs, the soil that matters is usually in the crevice between the seat and the inside arm, where crumbs, coins and body oil collect and then wick back out into the visible fabric. We crevice-tool that gap before anything else, because cleaning the surface without emptying the gap just means it comes back.',
        'Bar stools and outdoor-style chairs need a mention: the cream linen patio chair in our gallery had orange-brown staining across the curved backrest, which is typically a tannin mark from rain running over a wooden or metal frame. Tannin responds to a specific acidic treatment rather than more scrubbing.',
      ],
    },
    priceNote: 'Minimum call-out applies — most people pair chairs with a sofa or carpet clean, which brings the per-chair price down.',
    priceRows: [
      { item: 'Dining chair, seat pad only', range: '£15–£25', note: 'Per chair' },
      { item: 'Fully upholstered dining chair', range: '£20–£35', note: 'Back and seat' },
      { item: 'Armchair or nursing chair', range: '£35–£55', note: 'Per chair' },
      { item: 'Wingback or recliner armchair', range: '£45–£70', note: 'Per chair' },
    ],
    faqs: [
      {
        q: 'Is there a minimum charge for a few chairs?',
        a: 'Yes — a small number of chairs on their own is not economical as a standalone visit, so there is a minimum call-out. Most customers add chairs to a sofa or carpet clean, which is why a six-chair dining set alongside a sofa works out very well.',
      },
      {
        q: 'Can you get water rings out of a linen seat pad?',
        a: 'Almost always. A ring is soil concentrated at the drying edge rather than a stain in the middle, so it clears when the whole panel is flushed and extracted as one. Dabbing at it makes it worse, so leave it alone until we arrive.',
      },
      {
        q: 'How long will six dining chairs take?',
        a: 'About ninety minutes including setup, and they are usually dry within two to three hours. Loose pads dry faster because we can stand them on edge.',
      },
      {
        q: 'Do you clean office chairs?',
        a: 'Yes, at home or on site. Mesh-backed task chairs and fabric-seat operator chairs both clean up well, and for offices we price per chair with a volume rate over ten.',
      },
    ],
    galleryIds: ['armchair-1', 'armchair-2', 'dining-chair-1', 'dining-chair-2', 'dining-chair-3'],
    related: ['velvet-sofa-cleaning', 'fabric-sofa-cleaning', 'commercial-upholstery-cleaning'],
  },
  {
    slug: 'carpet-cleaning',
    nav: 'Carpet cleaning',
    h1: 'Carpet Cleaning in London',
    metaTitle: 'Carpet Cleaning London | Guide £45–£95 a Room',
    metaDescription:
      'Professional carpet cleaning across London. Hot water extraction, traffic-lane treatment and rapid drying. Guide price £45–£95 a room. Photo estimates on WhatsApp.',
    summary: 'Room-by-room hot water extraction with traffic-lane and stain work.',
    intro: [
      'Carpet soil is mostly not a stain. It is dry grit — city dust, garden soil, skin and fibre — sitting down at the base of the pile where it abrades the fibre every time someone walks on it. That is why a carpet does not simply look dirty as it ages; it looks worn, dull and flat, because it genuinely is being sanded from underneath.',
      'Which means the single most important part of a carpet clean is the part that happens before any water: thorough dry vacuuming to remove the grit. A cleaner who goes straight in wet has turned that grit into mud and pushed it further down.',
      'We clean carpets in flats and houses across Greater London — bedrooms, lounges, landings, hallways and whole-house jobs — with hot water extraction, controlled moisture and a genuine focus on getting rooms dry and back in use the same day.',
    ],
    included: [
      'Full dry vacuum pass before anything wet is applied',
      'Fibre and colourfastness check, especially on wool and wool-mix',
      'Traffic lanes and doorways pre-sprayed and agitated separately',
      'Individual spot and stain treatment appropriate to the stain type',
      'Hot water extraction with high-recovery drying passes',
      'Edges, under-radiator strips and door thresholds included',
      'Pile groomed to a uniform finish; air movers on request',
    ],
    detail: {
      heading: 'Traffic lanes, filtration lines and what actually returns',
      body: [
        'Two dark marks show up on almost every London carpet. The first is the traffic lane — the darker path from the door to the sofa — which is soil plus fibre abrasion. Cleaning removes the soil completely; the abrasion is permanent wear and will still read slightly different in raking light. We say that upfront.',
        'The second is the filtration line: a fine dark stripe along skirting boards, under radiators and at the edges of stairs. That is airborne soot and dust filtered out by air passing through the carpet edge, and it is one of the hardest marks in the trade. It improves substantially with a dedicated edge treatment, but a twenty-year-old filtration line in a Victorian conversion rarely disappears entirely.',
        'Re-soiling is the third thing worth knowing about. If a carpet has previously been cleaned with a supermarket product or a hired machine, there is detergent residue in the pile and it will attract soil back quickly. We rinse that out as part of the job, which is why a properly cleaned carpet tends to stay clean longer than a DIY one.',
      ],
    },
    technique: {
      heading: 'Wool, polypropylene and how wet is too wet',
      body: [
        'Wool and wool-mix carpets are common in London period properties and they need care: they are absorbent, they can brown if over-wetted, and they need a neutral to slightly acidic pH. Polypropylene — most modern fitted carpet — is far more tolerant, bleach-resistant and quick to dry, but it holds oily soil stubbornly and needs a proper pre-spray dwell rather than more water.',
        'In every case the target is the same: put in the least water that will do the job and take out much more than you put in. A carpet that is still wet the next morning was over-wetted, and over-wetting risks brown wicking from the backing, shrinkage on wool, and damp underlay.',
        'Ours come up damp and dry in two to four hours in a ventilated room. Where a customer needs a room back sooner — a nursery, a home office, a move-in day — we bring air movers and cut that substantially.',
      ],
    },
    priceNote: 'Rooms are priced by size, so where you fall in the range depends on your room. Hallways and landings are usually charged as a half room.',
    priceRows: [
      { item: 'Single bedroom', range: '£45–£65', note: 'Up to about 10m²' },
      { item: 'Double bedroom', range: '£55–£80', note: 'Up to about 16m²' },
      { item: 'Lounge or living room', range: '£65–£95', note: 'Up to about 22m²' },
      { item: 'Hall, stairs and landing', range: '£70–£100', note: 'Priced as one unit' },
    ],
    faqs: [
      {
        q: 'How long does carpet take to dry?',
        a: 'Two to four hours in a ventilated room. We extract far more water than we put in, so the carpet is damp rather than wet. With an air mover running it can be walkable in under an hour. If a carpet is still wet the next day, it was over-wetted.',
      },
      {
        q: 'Will old stains come back after a few days?',
        a: 'Sometimes, and there is a specific reason. If a spill soaked through to the underlay, cleaning the surface leaves the source in place and it wicks back up as it dries. We treat known deep spills at the source, and if a mark does reappear within a week, tell us and we will come back and re-treat it.',
      },
      {
        q: 'Do you move furniture?',
        a: 'We move what two people can move safely — sofas, chairs, coffee tables, light beds — and we work around wardrobes, pianos, aquariums and anything electronic. Clearing small items and floor clutter before we arrive makes the visit quicker and cheaper.',
      },
      {
        q: 'Do you clean carpets in rented flats for check-out?',
        a: 'Yes, that is a large part of what we do. We can provide a dated receipt itemising the rooms cleaned, which is normally what a letting agent or inventory clerk asks for at check-out.',
      },
    ],
    galleryIds: ['carpet-1'],
    related: ['stair-carpet-cleaning', 'end-of-tenancy-cleaning', 'stain-and-odour-removal'],
  },
  {
    slug: 'stair-carpet-cleaning',
    nav: 'Stairs & landings',
    h1: 'Stair Carpet Cleaning in London',
    metaTitle: 'Stair Carpet Cleaning London | Hall, Stairs & Landing',
    metaDescription:
      'Stair carpet cleaning across London. Every tread, riser, nosing and spindle edge. Heavy traffic soiling lifted, dry in 2–4 hours. Guide price £70–£100.',
    summary: 'Treads, risers, nosings and spindle edges — the dirtiest carpet in any house.',
    intro: [
      'Stairs are the hardest-working carpet in a house by a wide margin. Every journey through the property crosses them, the whole load lands on the nosing — the front edge of each tread — and there is nowhere for the soil to spread out. That is why a staircase can look filthy while the landing at the top of it still looks fine.',
      'They are also the most awkward thing in the trade to clean properly. A wand does not fit a tread. Risers are vertical, so anything over-applied runs. Spindles and strings mean the edges cannot be reached in a straight pass, and the nosing needs more work than anything else while being the easiest place to over-wet.',
      'It is hand-tool work, step by step, and it is where the difference between a professional clean and a hired machine is most visible.',
    ],
    included: [
      'Every tread, riser and nosing worked individually with a hand tool',
      'Edges, strings and around spindles reached with a crevice tool',
      'Heavy pre-spray and dwell time on the nosings before extraction',
      'Controlled moisture on risers so nothing runs down the face',
      'Landings and half-landings included in the hall-stairs-landing price',
      'Stairs left walkable in socks and dry in two to four hours',
    ],
    detail: {
      heading: 'Why the nosing is dark and the tread is not',
      body: [
        'Look at any well-used staircase and the darkest band runs along the front lip of each step. That is where the ball of the foot lands and pivots, so it gets the most pressure, the most abrasion and the most transferred soil in the smallest area. It is also the part with least backing support, so it wears fastest.',
        'Cleaning it takes a longer dwell and more mechanical agitation than flat carpet — but carefully, because a nosing sits over a hard edge and aggressive work on a worn one will fibre-shed. We treat nosings as their own pass before the tread and riser.',
        'The blue stair carpet in our before-and-after gallery is a textbook case: heavy grey-brown soiling down the centre of every tread with clean carpet at the edges, restored to an even blue. The contrast in that photo is entirely soil removal — no colour was added.',
      ],
    },
    technique: {
      heading: 'Runners, fitted stairs and awkward London staircases',
      body: [
        'Fitted stair carpet is cleaned in place, tread by tread. Runners over timber need more care, because moisture that escapes the runner will mark the wood underneath and lift the finish; we work drier at the edges and protect the exposed timber.',
        'London houses throw up plenty of awkward geometry — winders on a turn, open-tread staircases, steep flights in loft conversions, and basement stairs with no natural light or airflow. Winders take roughly twice as long per step as a straight flight and we allow for that rather than rushing them.',
        'Where drying is a concern, typically an internal staircase with no window, we run an air mover at the bottom of the flight to push air up it. That is usually the difference between two hours and most of a day.',
      ],
    },
    priceNote: 'Hall, stairs and landing are normally quoted as one package — better value than booking separately. Winders and extra flights move you up the range.',
    priceRows: [
      { item: 'Hall, stairs and landing', range: '£70–£100', note: 'Standard straight flight' },
      { item: 'Stairs only', range: '£45–£75', note: 'Up to 14 treads' },
      { item: 'Additional flight', range: '£30–£55', note: 'Second or loft flight' },
      { item: 'Winders / turn treads', range: '£2–£4', note: 'Each, added to the above' },
    ],
    faqs: [
      {
        q: 'Can I use the stairs while they dry?',
        a: 'Yes, in clean socks or bare feet — the carpet is damp, not wet. Avoid outdoor shoes and slippers for a few hours so nothing transfers back onto a freshly cleaned nosing. Full drying is two to four hours.',
      },
      {
        q: 'Will the dark edge on each step come out?',
        a: 'Most of it. Traffic soil on the nosing lifts well with a longer dwell and hand-tool agitation. What does not come out is physical wear — on an older staircase the nosing fibre may be abraded, and that reads slightly different in strong light regardless of how clean it is.',
      },
      {
        q: 'Do you clean the carpet around the spindles?',
        a: 'Yes. The string and spindle edges are done with a crevice tool because a normal head cannot reach them, and that edge is usually where filtration soil collects. It is included, not extra.',
      },
      {
        q: 'How long does a hall, stairs and landing take?',
        a: 'Around an hour to ninety minutes for a standard straight flight with a hall and landing. Winders, a second flight or a very long hallway add time, and we will tell you before we start rather than after.',
      },
    ],
    galleryIds: ['stair-carpet-1', 'stair-carpet-2'],
    related: ['carpet-cleaning', 'end-of-tenancy-cleaning', 'fabric-sofa-cleaning'],
  },
  {
    slug: 'stain-and-odour-removal',
    nav: 'Stains & odours',
    h1: 'Stain & Odour Removal for Sofas and Carpets in London',
    metaTitle: 'Stain & Pet Odour Removal London | Sofas & Carpets',
    metaDescription:
      'Stain and odour removal across London. Red wine, pet accidents, vomit, coffee, biro and smoke odour. Treated at the source, not masked with fragrance.',
    summary: 'Red wine, pet accidents, sickness, coffee, biro and lingering smells.',
    intro: [
      'Stain work is a different job from cleaning. A general clean removes the soil that is sitting across a whole surface; a stain is a single defined event with its own chemistry, and treating it correctly depends entirely on what it actually is.',
      'Tannin marks, protein spills, dye-based stains and oily marks each need a different pH and a different mechanism, and using the wrong one does not merely fail. It can set the stain permanently. Heat on a protein stain, for example, cooks it into the fibre in the same way heat sets an egg to a pan.',
      'Odour is harder again, and it is the thing most often faked in this industry. Fragrance does not remove a smell; it sits on top of it for a fortnight. Actual odour removal means finding and neutralising the source, which for a pet accident is usually not where the visible mark is.',
    ],
    included: [
      'Identification of the stain type before any product is chosen',
      'Tannin treatment for tea, coffee, wine and rainwater marks',
      'Protein treatment, without heat, for milk, blood, vomit and pet accidents',
      'Enzyme or oxidising treatment for organic odour at the source',
      'UV inspection for pet accidents that are not visible in daylight',
      'Sub-surface flushing where a spill has reached the foam or underlay',
      'Honest assessment of what will lift fully and what will only reduce',
    ],
    detail: {
      heading: 'Pet accidents: the mark is not where the problem is',
      body: [
        'Urine goes through carpet the way water goes through a sieve. What lands on the surface spreads as it soaks, so the patch in the underlay is routinely two or three times the size of the mark you can see, and a good proportion of it reaches the floorboards. Cleaning only the visible patch removes the stain and leaves the smell, which is why people think odour treatment does not work.',
        'The smell itself comes from urine salts, which are dormant when dry and reactivate every time humidity rises — which is exactly why a room smells worse on a warm or damp day, and worse again straight after a poorly done cleaning attempt that added moisture without removing the salts.',
        'Doing it properly means locating the full extent with a UV lamp, saturating the area deliberately with an enzyme treatment so it reaches everything the urine reached, giving it dwell time to break the salts down, and then extracting thoroughly. On a severe case it can mean lifting a section of carpet and treating the underlay and floor. We will tell you if that is what yours needs.',
      ],
    },
    technique: {
      heading: 'What to do in the first ten minutes of a spill',
      body: [
        'Blot, do not rub. Rubbing pushes the spill deeper and distorts the fibre, and on velvet or wool it causes permanent texture damage on its own. Press a clean white towel down firmly and lift it straight up, repeatedly, changing to a dry part each time.',
        'Use white cloth only. Patterned tea towels and coloured kitchen roll transfer their own dye into damp fabric, and we are then removing two stains instead of one.',
        'Plain cold water, sparingly, is safe on almost everything. Do not reach for washing-up liquid, bicarbonate paste, stain sprays or a steam cleaner. Detergent left in the fibre attracts soil and creates a dark ring within weeks; heat sets protein stains; and a supermarket stain remover on a coloured fabric can bleach it. If in doubt, blot, leave it alone and send us a photo on WhatsApp — we would far rather advise you for free than remove somebody else\'s attempt.',
      ],
    },
    priceNote: 'Stain and odour work is usually added to a clean. Severe pet contamination is quoted after we have seen it, because the source has to be found first.',
    priceRows: [
      { item: 'Single stain treatment', range: '£15–£30', note: 'Added to a clean' },
      { item: 'Pet odour treatment, per area', range: '£35–£65', note: 'Enzyme, with dwell time' },
      { item: 'Sub-surface / underlay flush', range: '£60–£130', note: 'Quoted after inspection' },
      { item: 'UV inspection', range: 'Free', note: 'With any booked clean' },
    ],
    faqs: [
      {
        q: 'Can you get red wine out of a sofa?',
        a: 'Usually, especially if it has not been heat-treated or scrubbed. Red wine is a tannin plus a dye, so it needs a tannin treatment and sometimes a gentle oxidising step. Old wine on a pale natural fibre may reduce to a faint shadow rather than vanish, and we will tell you which to expect before we start.',
      },
      {
        q: 'Do you actually remove pet smells or just mask them?',
        a: 'Remove. Fragrance masking lasts about two weeks and then the smell returns, because urine salts reactivate with humidity. We find the full extent with a UV lamp, apply an enzyme treatment with enough dwell time to break the salts down at the source, and extract. Severe cases may need the underlay treated, which we will quote for honestly.',
      },
      {
        q: 'My cleaner made the stain worse. Can it be fixed?',
        a: 'Very often. Most "made it worse" cases are detergent residue, a dried halo ring or a distorted pile, all of which are recoverable by flushing the panel through and drying it evenly. Tell us what was used — that genuinely helps.',
      },
      {
        q: 'Will the smoke smell come out of my sofa?',
        a: 'Cigarette odour reduces substantially with a deep clean because most of it is in the surface tar deposits. Long-term heavy smoking that has reached the foam is harder and may need repeat treatment. We will give you a realistic answer after seeing it rather than promising a result we cannot guarantee.',
      },
    ],
    galleryIds: ['fabric-sofa-2', 'dining-chair-2', 'dining-chair-3'],
    related: ['fabric-sofa-cleaning', 'carpet-cleaning', 'velvet-sofa-cleaning'],
  },
  {
    slug: 'end-of-tenancy-cleaning',
    nav: 'End of tenancy',
    h1: 'End of Tenancy Carpet & Upholstery Cleaning in London',
    metaTitle: 'End of Tenancy Carpet Cleaning London | Receipted',
    metaDescription:
      'End of tenancy carpet and upholstery cleaning in London. Itemised, dated receipt for your letting agent or inventory clerk. Short-notice and weekend slots.',
    summary: 'Check-out cleans with the itemised receipt agents ask for.',
    intro: [
      'Carpet and upholstery cleaning is one of the most common deductions from a London tenancy deposit, and one of the most commonly disputed. Tenancy agreements usually require carpets to be "professionally cleaned" at check-out, and inventory clerks look specifically at traffic lanes, stair nosings, sofa seat cushions and mattress condition.',
      'The practical issue is evidence. Deposit schemes weigh documentation heavily, and a dated, itemised receipt from a cleaning company naming the rooms and items cleaned is the single most useful thing a tenant can produce. Without it, the argument tends to come down to one party\'s word against the other\'s.',
      'We do a lot of these. They are usually booked at short notice, often on the day the van is loading, and we work to the check-out time rather than to a leisurely schedule.',
    ],
    included: [
      'All fitted carpets, including hall, stairs, landing and inside fitted wardrobes',
      'Sofas, armchairs, dining chairs and mattresses as required by your inventory',
      'Traffic lanes, door thresholds and stair nosings given extra attention',
      'Dated, itemised receipt naming each room and item cleaned',
      'Fast-dry setup with air movers so the property can be locked up the same day',
      'Short-notice, evening and weekend slots wherever we can fit them',
    ],
    detail: {
      heading: 'What deposit schemes actually look for',
      body: [
        'Deposit adjudicators work on the principle of returning the property to its check-in condition allowing for fair wear and tear. That distinction matters more than most tenants realise. Soiling is your responsibility; wear is not. A traffic lane that is dark because of soil should be cleaned; the same lane that is dull because the fibre has abraded over a three-year tenancy is fair wear and tear, and a deduction for it is arguable.',
        'What tips a dispute is contemporaneous evidence. The check-in inventory with photographs, the check-out report, and your professional cleaning receipt. Where all three exist, disputes usually resolve quickly. Where the receipt is missing, the landlord\'s quote for remedial cleaning tends to stand.',
        'Our receipts name the property address, the date, and each room or item cleaned individually, because "carpet cleaning — £180" is much weaker evidence than a line-by-line list. We do not make claims on the receipt about the resulting condition, because that is the inventory clerk\'s job, not ours.',
      ],
    },
    technique: {
      heading: 'Timing a check-out clean so it actually helps',
      body: [
        'Book the clean after the property is empty and before the check-out inspection — ideally the same day or the day before. Cleaning with furniture still in place leaves uncleaned rectangles that a clerk will photograph, and cleaning after the inspection is worth nothing for your deposit.',
        'Allow for drying. A clerk who arrives to visibly wet carpet may note it, and in a locked, unventilated empty flat drying takes longer than in a lived-in home. We bring air movers to check-out jobs as standard for that reason.',
        'If your agent has named a required standard or a specific supplier, read the clause carefully. A landlord can require professional cleaning, but under the Tenant Fees Act 2019 in England they generally cannot compel you to use one named company. Any reputable firm with a proper receipt should satisfy the requirement.',
      ],
    },
    priceNote: 'Whole-property packages are cheaper than room-by-room. Tell us the property size and we will talk you through the price.',
    priceRows: [
      { item: '1-bed flat, carpets throughout', range: '£95–£140', note: 'Typically 2 hours' },
      { item: '2-bed flat, carpets throughout', range: '£130–£185', note: 'Typically 3 hours' },
      { item: '3-bed house, carpets and stairs', range: '£180–£250', note: 'Typically 4 hours' },
      { item: 'Add sofa or mattress', range: '£45–£75', note: 'Per item, with the above' },
    ],
    faqs: [
      {
        q: 'Do you provide a receipt for my letting agent?',
        a: 'Yes, and it is itemised: the property address, the date, and every room and item cleaned listed separately. That is the format deposit schemes and inventory clerks find most useful. We email it the same day.',
      },
      {
        q: 'Can you come at short notice?',
        a: 'Often, yes — a lot of check-out work is booked within 48 hours and we keep slots for it. Message us on WhatsApp with the address, the property size and your check-out time and we will tell you straight away what we can do.',
      },
      {
        q: 'Should the property be empty first?',
        a: 'Ideally, yes. Cleaning around furniture leaves uncleaned patches that an inventory clerk will photograph and query. If some items cannot be moved, we will note exactly what was cleaned around on the receipt so there is no ambiguity later.',
      },
      {
        q: 'Can my landlord insist I use their cleaning company?',
        a: 'A tenancy can require professional cleaning, but in England the Tenant Fees Act 2019 generally prevents a landlord compelling you to use one specific named firm. A proper itemised receipt from any professional company should meet the requirement. If your agent disputes that, we are happy to reissue the receipt with any extra detail they need.',
      },
    ],
    galleryIds: ['carpet-1', 'stair-carpet-2'],
    related: ['carpet-cleaning', 'stair-carpet-cleaning', 'fabric-sofa-cleaning'],
  },
  {
    slug: 'commercial-upholstery-cleaning',
    nav: 'Commercial & offices',
    h1: 'Commercial Upholstery & Carpet Cleaning in London',
    metaTitle: 'Commercial Upholstery Cleaning London | Offices & Bars',
    metaDescription:
      'Out-of-hours upholstery and carpet cleaning for London offices, bars, restaurants, salons, care homes and letting agents. Per-chair rates and scheduled contracts.',
    summary: 'Offices, bars, restaurants, salons, care homes and letting portfolios.',
    intro: [
      'Commercial upholstery is a volume problem rather than a difficulty problem. Forty identical task chairs, a restaurant\'s banquette seating, or a hotel lounge full of tub chairs are each straightforward individually — the challenge is doing them consistently, quickly, and at a time that does not stop the business trading.',
      'That normally means out of hours. We work evenings, early mornings and Sundays for commercial customers, and we plan around drying so a space is usable when it reopens rather than damp at nine o\'clock on a Monday.',
      'We work for offices, bars and restaurants, salons and barbers, care homes, gyms, serviced apartments and letting agents across London. Repeat and scheduled work is priced lower than one-off visits because it is easier for us to plan.',
    ],
    included: [
      'Out-of-hours, weekend and early-morning scheduling as standard',
      'Per-chair and per-square-metre rates for accurate budgeting',
      'Consistent method across a large number of identical items',
      'Rapid-dry setup so the space is usable at opening',
      'Method statement and risk assessment on request',
      'Scheduled quarterly or six-monthly contracts at a reduced rate',
    ],
    detail: {
      heading: 'Where commercial soiling actually comes from',
      body: [
        'Office chairs fail at the front edge of the seat and the arm tops, from a single person\'s daily use, and fabric task chairs also collect a surprising amount of hand cream, hair product and lunch. A quarterly clean on a fifty-chair floor is far cheaper than replacing chairs early, and it is visible to staff in a way most facilities spending is not.',
        'Hospitality is different. Banquette seating takes food, drink and a great deal of body contact in one narrow band, and the soil is largely oily, which means dwell time matters more than water. Bar stools and dining chairs in a busy London restaurant will need more frequent attention than anything in an office.',
        'Care homes and salons have their own patterns — protein spills and incontinence in the first, colour and product transfer in the second — and both benefit from a regular schedule rather than reactive deep cleans, because the damage in both cases is cumulative.',
      ],
    },
    technique: {
      heading: 'Working around a trading business',
      body: [
        'We plan commercial jobs in zones so no area is out of use for long. In an office that usually means a floor or a wing at a time; in a restaurant, a section of the dining room; in a care home, communal areas first and rooms by arrangement with staff.',
        'Air movers are standard on commercial work rather than optional, because the constraint is almost never the cleaning and almost always the drying. A banquette cleaned at eleven at night with air movers running is dry for a lunchtime service; the same banquette cleaned without them is not.',
        'For larger sites we will walk the space first and give you a written scope and a firm price rather than an hourly estimate, so it can go through a facilities budget cleanly. Method statements and risk assessments are available on request.',
      ],
    },
    priceNote: 'Volume rates apply from ten items and scheduled contracts are priced lower than one-off visits. Larger sites get a written scope and price after a walk-round.',
    priceRows: [
      { item: 'Office task chair', range: '£8–£14', note: 'Rate from 10 chairs' },
      { item: 'Restaurant or bar chair', range: '£10–£16', note: 'Rate from 10 chairs' },
      { item: 'Banquette seating', range: '£25–£45', note: 'Per linear metre' },
      { item: 'Commercial carpet', range: '£2.50–£4.50', note: 'Per m², from 50m²' },
    ],
    faqs: [
      {
        q: 'Can you work outside business hours?',
        a: 'Yes — evenings, early mornings and Sundays are normal for our commercial work, and there is no out-of-hours surcharge for scheduled jobs. It suits us too, because an empty space is quicker to clean than an occupied one.',
      },
      {
        q: 'Can you provide documentation for our facilities team?',
        a: 'Tell us what your building manager or facilities team requires — method statement, risk assessment, insurance details — and we will confirm what we can supply before any site visit is booked.',
      },
      {
        q: 'How quickly can a space be used again?',
        a: 'Upholstery is typically usable within two to three hours and commercial carpet within three to four, with air movers running as standard on commercial jobs. For overnight work that means fully dry by opening.',
      },
      {
        q: 'Do you offer contracts for regular cleaning?',
        a: 'Yes, quarterly and six-monthly schedules at a reduced rate against one-off pricing, because planned work is easier for us to route. It also works out considerably cheaper than reactive deep cleans once soiling has become severe.',
      },
    ],
    galleryIds: ['dining-chair-1', 'leather-sofa-1', 'armchair-1'],
    related: ['armchair-and-dining-chair-cleaning', 'leather-sofa-cleaning', 'carpet-cleaning'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

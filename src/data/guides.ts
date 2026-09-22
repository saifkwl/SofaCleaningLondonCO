import type { Faq } from './services';

export type Guide = {
  slug: string;
  nav: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  updated: string;
  readingTime: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  faqs: Faq[];
  relatedServices: string[];
};

export const guides: Guide[] = [
  {
    slug: 'upholstery-cleaning-codes-explained',
    nav: 'Cleaning codes W, S, WS and X',
    h1: 'Upholstery Cleaning Codes: What W, S, WS and X Actually Mean',
    metaTitle: 'Upholstery Cleaning Codes Explained | W, S, WS and X',
    metaDescription:
      'What the W, S, WS and X cleaning codes on your sofa label mean, where to find the tag, and what happens if the wrong method is used on each.',
    summary: 'The one-letter tag under your seat cushion decides everything. Here is how to read it.',
    updated: '2026-09',
    readingTime: '5 min read',
    intro: [
      'Almost every sofa made in the last thirty years carries a single-letter cleaning code on a tag, and almost nobody knows it is there. It is the most useful piece of information about your furniture, because it tells you — and anyone you hire — whether water can safely touch the fabric.',
      'Get it wrong and the consequences are not subtle. Water on an S-coded fabric leaves permanent rings. A wet clean on an X-coded fabric can shrink the cover so it no longer fits the frame. Neither is repairable by cleaning it again.',
    ],
    sections: [
      {
        heading: 'Where to find the tag',
        body: [
          'Start under a seat cushion. Lift it out and look at the underside and at the deck it was sitting on — most manufacturers sew the tag onto one or the other. If the cushions are fixed, check behind the skirt at the back of the sofa, under the base near a leg, or inside the zip of a back cushion.',
          'The tag usually lists the fibre composition as well, which is nearly as useful as the code. "100% polyester" behaves very differently from "55% viscose, 45% cotton", even if both are sold as velvet.',
          'No tag at all is common on second-hand, vintage and imported furniture. In that case the code has to be established by testing rather than reading, which is what a professional should do before touching the piece.',
        ],
      },
      {
        heading: 'W — water-based cleaning is safe',
        body: [
          'The most common and most forgiving code. Water-based methods, including hot water extraction, are appropriate. Most polyester, polypropylene, cotton-poly blends and modern microfibres are W-coded.',
          'W does not mean indestructible. Over-wetting a W fabric can still cause browning as moisture wicks soil up from the foam, and it can still leave a ring if a small area is cleaned in isolation and dried unevenly. The rule with W fabric is to clean a whole panel rather than a patch.',
        ],
      },
      {
        heading: 'S — solvent only, keep water away',
        body: [
          'S means the fabric will water-stain. These are typically rayon, acetate, some silks and certain linen blends, and they need a dry-solvent method instead.',
          'This is the code behind the most common domestic disaster we get called to. Someone spills a drink, dabs it with a damp cloth, the spill vanishes, and a grey halo appears at the edge of where the cloth reached. That ring is the drying boundary — and it will not brush out.',
          'If your sofa is S-coded, the right response to a spill is to blot with a dry white cloth and stop there.',
        ],
      },
      {
        heading: 'WS — either method works',
        body: [
          'WS gives the cleaner a choice, and the choice should be made on the basis of what is actually wrong with the fabric. Oily and greasy soil often responds better to a solvent approach; general body soil and water-based spills come out better with extraction.',
          'A lot of modern upholstery is WS, which is why two competent cleaners can legitimately approach the same sofa differently.',
        ],
      },
      {
        heading: 'X — vacuum only',
        body: [
          'X-coded fabrics should not be cleaned with water or solvent at home or by a general cleaner. They are prone to shrinkage, distortion or pile damage. Delicate wovens, some loose weaves and certain natural fibres fall into this category.',
          'X does not mean nothing can be done. It means the safe options are dry vacuuming, very careful low-moisture specialist work, or sending the covers to a specialist. It also means that anyone who cheerfully offers to steam clean an X-coded sofa is telling you something important about their standards.',
        ],
      },
      {
        heading: 'What happens when the code is ignored',
        body: [
          'Shrinkage is the one you cannot undo. A cotton or linen cover that shrinks by three per cent will no longer stretch back over its cushion, and there is no cleaning process that reverses it.',
          'Dye bleed is the second. Unstable dyes migrate when wet, so a dark piping can run into a pale panel — usually along the seam, in a way that looks like a shadow. Testing a hidden seam for colourfastness takes two minutes and prevents it entirely.',
          'Browning is the third and the most recoverable. Over-wetting draws tannins and soil up from the foam and the backing as the fabric dries, leaving yellow-brown patches. It is fixable by flushing the panel with an acidic rinse, but it is far easier not to cause it.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What if my sofa has no cleaning code tag?',
        a: 'Then it has to be established by testing. A professional should identify the fibre and run a colourfastness and moisture test on a hidden seam before choosing a method. This is standard on second-hand, vintage and imported furniture, which frequently has no tag at all.',
      },
      {
        q: 'Can an S-coded sofa ever be wet cleaned?',
        a: 'It should not be. S means the fabric water-stains, and the damage is a permanent ring rather than a stain that can be reworked. A dry-solvent method does the job safely and costs the same.',
      },
      {
        q: 'Is a steam cleaner safe on my sofa?',
        a: 'On a W or WS fabric, used carefully, it can help. On S or X fabrics it can cause permanent damage, and on any fabric a domestic steam cleaner cannot extract what it releases, so soil ends up redistributed rather than removed. Check the code before you plug anything in.',
      },
    ],
    relatedServices: ['fabric-sofa-cleaning', 'velvet-sofa-cleaning', 'leather-sofa-cleaning'],
  },
  {
    slug: 'how-to-get-red-wine-out-of-a-sofa',
    nav: 'Red wine on a sofa',
    h1: 'How to Get Red Wine Out of a Sofa (Without Making It Worse)',
    metaTitle: 'How to Get Red Wine Out of a Sofa | Step by Step',
    metaDescription:
      'What to do in the first ten minutes after a red wine spill on upholstery, which household remedies actually cause damage, and when a stain becomes permanent.',
    summary: 'The first ten minutes decide the outcome. Most of what people do in them is wrong.',
    updated: '2026-09',
    readingTime: '6 min read',
    intro: [
      'Red wine is two problems in one. It is a tannin, which is the part that responds to a specific acidic treatment, and it is a dye, which is the part that bonds to the fibre and gets harder to shift with every hour that passes.',
      'That combination is why red wine advice is so contradictory. Half of it addresses the tannin, half addresses the dye, and a good deal of it will set the stain permanently.',
    ],
    sections: [
      {
        heading: 'The first ten minutes',
        body: [
          'Blot, do not rub. Press a clean white towel firmly onto the spill and lift it straight up. Repeat with a dry part of the cloth each time. Rubbing pushes wine deeper into the foam and distorts the fibre, and on velvet or wool the texture damage alone can be permanent.',
          'Use white cloth only. Patterned kitchen roll and coloured tea towels release their own dye into damp fabric, and then there are two stains to remove instead of one.',
          'Once the towel stops lifting colour, stop. A small amount of plain cold water is safe on most W and WS fabrics — blot it in, blot it out. On an S or X coded fabric, do not add water at all.',
        ],
      },
      {
        heading: 'What not to reach for',
        body: [
          'Salt is the famous one, and it does absorb some liquid. It also drives wine deeper into the pile as it draws, leaves a gritty residue, and on a pale fabric the abrasive action can fluff the surface. It is a table-linen trick that does not transfer well to upholstery.',
          'White wine, sparkling water and bicarbonate paste are all variations on diluting the problem. Dilution helps only if you then remove the liquid, and household blotting cannot remove what has already reached the foam.',
          'Washing-up liquid is the genuinely damaging one. It is designed to stay behind on surfaces and it is very difficult to rinse out of fabric without extraction equipment. A sofa with detergent residue in it attracts soil, and within a few weeks the cleaned patch is darker than the fabric around it.',
          'Heat sets it. No hairdryer, no steam, no hot water — heat bonds both the tannin and the dye to the fibre and turns a treatable spill into a permanent one.',
        ],
      },
      {
        heading: 'Why professional treatment works differently',
        body: [
          'Tannin needs an acidic treatment with dwell time, not more scrubbing. Once the tannin is released, the residual dye may need a controlled oxidising step, which has to be matched to the fibre and neutralised afterwards or it will keep working and lighten the fabric.',
          'Then the whole panel is flushed and extracted as one, which is what removes both the treatment and the released stain rather than pushing them around. That last step is also what prevents a halo ring forming at the edge of the treated area.',
          'This is why a spot-clean at home so often leaves a pale patch surrounded by a dark ring. The stain went; nothing carried it away.',
        ],
      },
      {
        heading: 'When wine becomes permanent',
        body: [
          'Fresh wine on a synthetic W-coded fabric comes out completely, nearly every time. Wine that has dried on a pale natural fibre — cotton, linen, wool, viscose — may reduce to a faint shadow rather than vanish, because the dye has had time to bond.',
          'Wine that has been heat-treated, scrubbed, or hit with a supermarket stain remover containing bleach is the hardest case, and bleaching is irreversible: the fabric is lighter than its surroundings and no cleaning brings the colour back.',
          'If a spill happened weeks ago, it is still worth asking. Old wine frequently improves dramatically even when it does not disappear, and we will give you an honest expectation from a photo before you spend anything.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does salt really work on a red wine spill?',
        a: 'Not on upholstery. Salt absorbs some liquid but drives the rest deeper into the pile, leaves a gritty residue, and can fluff the surface of a pale fabric. Blotting with a dry white towel removes more and damages nothing.',
      },
      {
        q: 'Can old, dried red wine still be removed?',
        a: 'Often reduced substantially, sometimes removed entirely. Fresh wine on synthetic fabric almost always comes out completely; dried wine on pale natural fibre may leave a faint shadow because the dye has bonded. Send a photo and we will tell you honestly which to expect.',
      },
      {
        q: 'Is a supermarket stain remover safe to try first?',
        a: 'It is the most common way a treatable stain becomes permanent. Many contain bleaching agents that lighten coloured fabric irreversibly, and all of them leave residue that attracts soil. Blot, leave it, and ask before you spray.',
      },
    ],
    relatedServices: ['stain-and-odour-removal', 'fabric-sofa-cleaning', 'velvet-sofa-cleaning'],
  },
  {
    slug: 'how-long-does-a-sofa-take-to-dry',
    nav: 'Sofa drying times',
    h1: 'How Long Does a Sofa Take to Dry After Cleaning?',
    metaTitle: 'How Long Does a Sofa Take to Dry After Cleaning?',
    metaDescription:
      'Realistic drying times for upholstery and carpet after professional cleaning, what changes them, and why a sofa still wet the next day was over-wetted.',
    summary: 'Three to five hours for upholstery, two to four for carpet. Here is what changes that.',
    updated: '2026-09',
    readingTime: '4 min read',
    intro: [
      'Drying time is the question people ask most often before booking, and the honest answer depends far more on method than on fabric. A properly cleaned sofa comes back damp, not wet, because the machine recovers considerably more moisture than it puts in.',
      'As a rule of thumb: upholstery three to five hours, carpet two to four, both in a normally ventilated room. With an air mover running, both drop substantially.',
    ],
    sections: [
      {
        heading: 'What makes it slower',
        body: [
          'Airflow matters more than anything else. A closed room with the door shut and no window open can double the time. Opening a window at both ends of a room to create a cross-draught is the single most effective thing you can do, and it costs nothing.',
          'Humidity matters next. A damp, still London day in November dries slowly; a breezy day in May dries fast. Flats close to the river are measurably slower on still days, which is why air movers come as standard on those jobs.',
          'Room position is the third factor. Lower-ground and basement rooms have the least natural airflow of any space in a house. Upstairs lounges in terraces are slower than ground-floor ones. Internal staircases with no window are the slowest of all, which is why we run an air mover at the bottom of a flight to push air up it.',
          'Fabric thickness plays a smaller role than people expect. A thick chenille holds more water than a thin cotton, but the difference is usually under an hour — far less than the difference between a ventilated and an unventilated room.',
        ],
      },
      {
        heading: 'What you can do while it dries',
        body: [
          'Open windows, and open two if you can. Leave internal doors open so air moves through. If you have a pedestal fan, point it at the furniture — it is not as effective as a professional air mover but it helps a great deal.',
          'Keep pets and children off the furniture until it is dry to the touch. Damp fabric picks up dirt from paws and feet far more readily than dry fabric, and it is a shame to undo the work on the first evening.',
          'Do not put throws, cushions or covers back until it is fully dry. Covering damp fabric traps moisture against it, which is the usual cause of a musty smell after cleaning.',
          'Central heating helps only if there is ventilation too. Heating a sealed room raises the humidity and slows things down; heating a ventilated room speeds them up.',
        ],
      },
      {
        heading: 'If it is still wet the next day',
        body: [
          'That is not normal, and it means too much water went in or too little came out. It matters beyond the inconvenience: prolonged dampness risks browning as soil wicks up from the foam, and in carpet it risks damp underlay and, in bad cases, odour.',
          'Over-wetting is usually a symptom of underpowered equipment or of rushing — a proper extraction pass takes time, and the dry-passes at the end are the ones most often skipped.',
          'If a sofa or carpet we have cleaned is still wet the following day, tell us. We will come back, and we would far rather know.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I sit on the sofa before it is fully dry?',
        a: 'Once it is dry to the touch, yes. Sitting on genuinely damp upholstery transfers soil from clothing straight back into the fabric and can flatten the pile unevenly as it dries, so it is worth waiting the extra hour.',
      },
      {
        q: 'Do you use air movers?',
        a: 'Yes, and we bring them as standard to riverside flats, basement rooms, internal staircases and commercial jobs, where airflow is the limiting factor. On a normal domestic job we will set one up on request at no extra cost.',
      },
      {
        q: 'Why does my sofa smell musty after cleaning?',
        a: 'Almost always because it dried too slowly, or because throws and cushions went back on before it was fully dry and trapped moisture against the fabric. Ventilate thoroughly and it usually clears. If it does not, tell us — a properly dried piece should not smell of anything.',
      },
    ],
    relatedServices: ['fabric-sofa-cleaning', 'carpet-cleaning', 'corner-sofa-cleaning'],
  },
  {
    slug: 'pet-odour-removal-from-carpet',
    nav: 'Pet odour removal',
    h1: 'Pet Odour Removal from Carpet and Upholstery: What Actually Works',
    metaTitle: 'Pet Odour Removal from Carpet | Why Masking Never Lasts',
    metaDescription:
      'Why pet smells come back after cleaning, how urine salts work, what UV inspection finds, and when the underlay has to be treated to remove an odour for good.',
    summary: 'Fragrance lasts a fortnight. Here is what removes a smell rather than covering it.',
    updated: '2026-09',
    readingTime: '6 min read',
    intro: [
      'Pet odour is the most over-promised service in the cleaning trade, and the reason is simple: masking a smell is easy and cheap, removing it is neither. A fragrance treatment smells wonderful for about two weeks and then the problem returns, usually on the first warm day.',
      'Understanding why it returns is most of the battle, because it explains what a genuine treatment has to do.',
    ],
    sections: [
      {
        heading: 'Why the smell comes back',
        body: [
          'Urine dries into crystalline salts that sit in the fibre, the backing, the underlay and often the floorboards. Dry, those salts are more or less odourless. When humidity rises — a warm day, a damp day, or immediately after someone adds moisture by cleaning — they reactivate and release ammonia and other compounds.',
          'That is the cruel twist: a surface clean that adds water without removing the salts makes the smell worse for several days. Plenty of people conclude that odour treatment does not work, when what actually happened is that half a treatment was performed.',
          'It also explains the seasonality. Households often tell us the smell appears in spring. It was there all winter; the humidity simply was not.',
        ],
      },
      {
        heading: 'The mark is smaller than the problem',
        body: [
          'Liquid spreads as it soaks. What lands on carpet as a small patch typically reaches two or three times that area in the underlay, and a good proportion reaches the subfloor. Cleaning the visible patch removes the stain and leaves the source.',
          'A UV lamp shows the true extent, because urine fluoresces. Turning the lights off and scanning a room is routinely a shock — marks nobody knew about, and known marks that turn out to be three times the size.',
          'On upholstery the same applies through the fabric into the foam. A cushion can look fine and be saturated underneath, which is why a cushion sometimes has to be treated from both faces.',
        ],
      },
      {
        heading: 'What a real treatment involves',
        body: [
          'First, find the full extent with UV. Then apply an enzyme treatment deliberately and generously, so it reaches everywhere the urine reached — which means applying more liquid than feels comfortable, not less. Enzymes digest the organic compounds that produce the odour, and they need dwell time, typically twenty to thirty minutes, sometimes longer.',
          'Then extract thoroughly, and re-treat where the contamination is heavy. In severe cases the carpet has to be lifted so the underlay can be treated or replaced and the subfloor sealed, because no amount of surface work reaches a floorboard.',
          'That last step is the honest dividing line. If a dog has used the same corner for two years, the underlay is the problem and we will tell you so and quote for it, rather than charging you for a treatment that cannot reach the source.',
        ],
      },
      {
        heading: 'Cat urine is the hard case',
        body: [
          'Cat urine is more concentrated than dog urine and contains compounds that break down into particularly persistent odour. It also tends to be deposited repeatedly in the same place, so contamination is deep rather than spread out.',
          'It responds to the same approach — UV mapping, enzyme, dwell, extract — but more often needs repeat treatment and more often reaches the subfloor. We will give you a realistic assessment after inspecting rather than a confident promise over the phone.',
          'One practical note: if a cat has started using a particular spot, removing the odour properly matters for behaviour as well as comfort. Cats return to places that still smell like a toilet, even faintly, and a masked smell is still a signal to them.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you actually remove pet smells or only mask them?',
        a: 'Remove, when the source can be reached. We map the full extent with a UV lamp, apply an enzyme treatment with proper dwell time so it reaches everywhere the urine did, then extract. Where contamination has reached the underlay or subfloor, that has to be treated too, and we will tell you if that is the case.',
      },
      {
        q: 'Why did the smell get worse after cleaning?',
        a: 'Because moisture reactivates urine salts. A surface clean that adds water without removing the salts makes the odour stronger for a few days. It is the classic sign of a half-treatment, and it is fixable.',
      },
      {
        q: 'Do I need to replace the carpet?',
        a: 'Usually not. Most cases resolve with proper enzyme treatment at the source. Long-term repeated contamination in one spot sometimes needs the underlay replaced rather than the carpet, which is much cheaper. We will inspect and tell you honestly which situation you are in.',
      },
    ],
    relatedServices: ['stain-and-odour-removal', 'carpet-cleaning', 'fabric-sofa-cleaning'],
  },
  {
    slug: 'how-often-should-you-clean-your-sofa',
    nav: 'How often to clean a sofa',
    h1: 'How Often Should You Have Your Sofa Professionally Cleaned?',
    metaTitle: 'How Often Should You Clean Your Sofa? | Honest Guidance',
    metaDescription:
      'How often upholstery actually needs professional cleaning by household type, why waiting costs more, and what regular maintenance does to a sofa’s lifespan.',
    summary: 'Every 12–18 months for a busy home. Waiting five years costs more and recovers less.',
    updated: '2026-09',
    readingTime: '4 min read',
    intro: [
      'The honest answer is that it depends on the household, not the sofa. A retired couple with a wool three-seater in a formal front room and a family of five with two dogs and a cream corner unit are not on the same schedule, and pretending otherwise helps nobody.',
      'But there is a clear principle underneath: the longer soil sits in a fabric, the more of it becomes permanent, and the more the fibre wears.',
    ],
    sections: [
      {
        heading: 'A rough schedule by household',
        body: [
          'Family home with children or pets: every twelve months. This is the group that gets the most obvious value, because the soil load is high and it accumulates faster than anyone notices.',
          'Couple or single occupant, moderate use: every eighteen months to two years. Body oils still build on head rests and arm tops even without heavy traffic, and they are the marks that become permanent if left.',
          'Shared house or rental: at every tenancy change, and more often if the sofa is in constant use. Landlords who clean at changeover get more years out of furniture, and it is a fraction of the cost of replacing it.',
          'Allergy household: every six to twelve months, and the reason is dust mites and their waste rather than visible soil. Hot water extraction removes a large proportion of what accumulates in upholstery, which visible cleanliness tells you nothing about.',
        ],
      },
      {
        heading: 'Why waiting costs more',
        body: [
          'Soil in fabric is abrasive. Every time someone sits down, grit moves against fibre, and that wear is cumulative and permanent. A sofa cleaned regularly keeps its texture; one cleaned every six years has physically worn fibre that no process restores.',
          'Bound soil is harder to release. Body oils oxidise over time and bond progressively more tightly, so a three-year build-up takes longer to shift than three separate annual cleans — and a proportion of it will not shift at all.',
          'And the result is less satisfying. A sofa cleaned annually looks essentially new afterwards. One cleaned after six years looks dramatically better than it did, which is not the same thing. We would rather tell you that before you book than have you be disappointed after.',
        ],
      },
      {
        heading: 'What to do between cleans',
        body: [
          'Vacuum weekly with an upholstery tool, including into the crevice between the seat and the arm. Most of what damages fabric is dry grit, and vacuuming removes it before it can abrade anything. This is genuinely the highest-value thing you can do.',
          'Rotate and flip loose cushions monthly so the wear spreads rather than concentrating in one seat. It also keeps the filling in better shape.',
          'Deal with spills immediately, and correctly: blot with a dry white cloth, no rubbing, no washing-up liquid, no heat. A spill blotted properly in the first minute is usually a non-event.',
          'Keep it out of direct sunlight where you can. UV fades upholstery and weakens natural fibres, and a faded panel is not something cleaning can reverse.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is annual sofa cleaning really worth it?',
        a: 'For a busy household, yes — it works out cheaper across the life of the sofa. Soil is abrasive, so regular removal prevents permanent wear, and soil that has not had years to bind comes out completely. A sofa cleaned yearly keeps looking new; one cleaned after six years only ever looks much better.',
      },
      {
        q: 'Does professional cleaning shorten the life of upholstery?',
        a: 'Done correctly it extends it substantially, because the main cause of fabric wear is grit abrading fibre. Done badly — over-wetted, wrong pH, detergent left in — it can damage fabric, which is why the fibre test at the start matters more than anything else in the process.',
      },
      {
        q: 'How often should I vacuum my sofa?',
        a: 'Weekly, with an upholstery tool, getting into the crevice between the seat and the arm. It is the single most effective maintenance habit, because it removes the dry grit that does the physical damage before it can work into the fibre.',
      },
    ],
    relatedServices: ['fabric-sofa-cleaning', 'leather-sofa-cleaning', 'velvet-sofa-cleaning'],
  },
  {
    slug: 'end-of-tenancy-carpet-cleaning-and-your-deposit',
    nav: 'Tenancy deposits & carpets',
    h1: 'End of Tenancy Carpet Cleaning and Your Deposit',
    metaTitle: 'End of Tenancy Carpet Cleaning & Deposits | London Guide',
    metaDescription:
      'What London tenancy agreements can require for carpet cleaning, what deposit schemes count as fair wear and tear, and what a useful receipt looks like.',
    summary: 'What agents can require, what counts as fair wear and tear, and the receipt that settles it.',
    updated: '2026-09',
    readingTime: '5 min read',
    intro: [
      'Cleaning is consistently one of the largest categories of deposit dispute in England, and carpets are the single most argued-about item within it. The disputes are rarely about whether the carpet is dirty. They are about evidence.',
      'This guide is general information rather than legal advice, but knowing how adjudicators think makes a considerable difference to the outcome.',
    ],
    sections: [
      {
        heading: 'What your agreement can and cannot require',
        body: [
          'A tenancy can legitimately require the property to be returned in the condition it was let, including professionally cleaned carpets if that is how it was let. That clause is normal and enforceable in substance.',
          'What has changed is compulsion over suppliers. Under the Tenant Fees Act 2019 in England, a landlord generally cannot charge you a fee for cleaning as a condition of the tenancy or require you to use one specific named company. They can require a standard; you can choose who meets it.',
          'In practice this means a proper receipt from any professional cleaning company should satisfy the clause. If an agent insists only their contractor is acceptable, that is worth questioning politely and in writing.',
        ],
      },
      {
        heading: 'Fair wear and tear versus damage',
        body: [
          'Adjudicators work on returning the property to its check-in condition, less fair wear and tear. The distinction decides most carpet disputes.',
          'Soiling is yours. Traffic lanes dark with dirt, spills, pet accidents and marks that were not there at check-in are things cleaning should address.',
          'Wear is not. A traffic lane that is dull because the fibre has physically abraded over a three-year tenancy is fair wear and tear, and a deduction to replace the carpet for it is arguable — particularly if the carpet was not new at check-in. Adjudicators also apportion for the age and expected lifespan of the carpet, so a landlord rarely recovers the full cost of a new one.',
          'Knowing which category a mark falls into tells you whether to clean it or to challenge it.',
        ],
      },
      {
        heading: 'What makes a receipt useful',
        body: [
          'An itemised one. "Carpet cleaning — £180" is weak evidence. A receipt naming the property address, the date, and each individual room or item cleaned is strong, because it shows the scope, not just the spend.',
          'Dated close to check-out. A receipt from three months before the inspection invites the argument that the property was used afterwards. Same day or the day before is ideal.',
          'Paired with photographs. Photographs of the cleaned rooms taken on the same day, alongside your check-in inventory, is the combination adjudicators find most persuasive.',
          'Our receipts list every room and item individually and are emailed the same day, because that is the format that actually helps.',
        ],
      },
      {
        heading: 'Getting the timing right',
        body: [
          'Clean after the property is empty and before the check-out inspection. Cleaning around remaining furniture leaves uncleaned rectangles which a clerk will photograph, and cleaning after the inspection does nothing for your deposit.',
          'Allow drying time before the inspection. An empty flat with the windows shut dries slowly, and a clerk who notes visibly wet carpet may raise it. We bring air movers to check-out jobs as standard for that reason.',
          'Book earlier than you think you need to. The London rental calendar clusters heavily in late summer, and the week either side of month-end is busy everywhere.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can my landlord make me use their cleaning company?',
        a: 'Generally not in England. A tenancy can require professional cleaning to a standard, but the Tenant Fees Act 2019 prevents a landlord charging cleaning as a condition or compelling you to use one named firm. A proper itemised receipt from any professional company should meet the requirement.',
      },
      {
        q: 'Is a worn traffic lane my responsibility?',
        a: 'Not if it is genuinely worn rather than dirty. Adjudicators separate soiling, which is the tenant\'s responsibility, from fair wear and tear, which is not — and they apportion for the carpet\'s age and expected lifespan. Cleaning removes the soiling; what is left is the wear, and that is the landlord\'s.',
      },
      {
        q: 'What should the receipt say?',
        a: 'The property address, the date, and each room and item cleaned listed separately. An itemised receipt shows scope, which is what an adjudicator needs. A single line with a total does not. We email ours the same day in that format.',
      },
    ],
    relatedServices: ['end-of-tenancy-cleaning', 'carpet-cleaning', 'stair-carpet-cleaning'],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

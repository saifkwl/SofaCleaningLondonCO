export type GalleryPair = {
  id: string;
  label: string;
  /** Service page slug this job belongs to */
  service: string;
  caption: string;
  beforeAlt: string;
  afterAlt: string;
};

/**
 * Real customer jobs supplied by the owner. Captions describe only what is
 * visible in the photographs. Nothing here is a stock or generated image.
 */
export const galleryPairs: GalleryPair[] = [
  {
    id: 'fabric-sofa-1',
    label: 'Fabric sofa',
    service: 'fabric-sofa-cleaning',
    caption: 'Grey fabric two-seater recliner in a dark geometric wallpapered room; flattened, darkened cushions cleaned back to an even lifted pile.',
    beforeAlt: 'Grey fabric two-seater recliner sofa with dulled, darkened cushions before cleaning',
    afterAlt: 'Grey fabric two-seater recliner sofa with even, lifted pile after cleaning',
  },
  {
    id: 'corner-sofa-1',
    label: 'Corner sofa',
    service: 'corner-sofa-cleaning',
    caption: 'Large brown/taupe fabric corner recliner sofa in a panelled-wall living room; dark greasy-looking seats cleaned to a lighter, even taupe nap.',
    beforeAlt: 'Large taupe fabric corner recliner sofa looking dark and flattened before cleaning',
    afterAlt: 'Taupe fabric corner recliner sofa with lighter, even nap after cleaning',
  },
  {
    id: 'velvet-accent-chair-1',
    label: 'Velvet accent chair',
    service: 'velvet-sofa-cleaning',
    caption: 'Cream crushed-velvet buttoned accent chair, side view; heavy tan staining on the arm and seat edge removed.',
    beforeAlt: 'Cream crushed velvet accent chair with heavy tan staining on arm and seat',
    afterAlt: 'Cream crushed velvet accent chair with even clean pile after stain removal',
  },
  {
    id: 'velvet-accent-chair-2',
    label: 'Velvet accent chair',
    service: 'velvet-sofa-cleaning',
    caption: 'Cream crushed-velvet buttoned accent chair, front view; brown arm soiling and greyed seat pad cleaned to an even pale pile.',
    beforeAlt: 'Cream crushed velvet buttoned chair with brown soiling on arm and dull seat',
    afterAlt: 'Cream crushed velvet buttoned chair looking clean and even, cleaning hose behind',
  },
  {
    id: 'stair-carpet-1',
    label: 'Stair carpet',
    service: 'stair-carpet-cleaning',
    caption: 'Brown and cream striped stair carpet; dark patchy marks across the treads cleaned to a uniform tone.',
    beforeAlt: 'Striped brown and cream stair carpet with dark patchy marks across the treads',
    afterAlt: 'Striped brown and cream stair carpet looking uniform and mark-free after cleaning',
  },
  {
    id: 'carpet-1',
    label: 'Carpet',
    service: 'carpet-cleaning',
    caption: 'Grey bedroom carpet around a crushed-velvet bed frame; flat, patchy pile cleaned and left with fresh wand stripes.',
    beforeAlt: 'Grey bedroom carpet around a velvet bed frame looking flat, patchy and dull',
    afterAlt: 'Grey bedroom carpet with even pile and visible cleaning wand stripes after cleaning',
  },
  {
    id: 'armchair-1',
    label: 'Armchair',
    service: 'armchair-and-dining-chair-cleaning',
    caption: 'Beige buttoned wingback nursing chair on white tiles; grey-brown body soiling on the seat, arms and back removed.',
    beforeAlt: 'Beige buttoned nursing chair with grey-brown soiling on seat, arms and back',
    afterAlt: 'Beige buttoned nursing chair with even, clean upholstery after cleaning',
  },
  {
    id: 'fabric-sofa-2',
    label: 'Fabric sofa',
    service: 'fabric-sofa-cleaning',
    caption: 'Grey woven-fabric sofa; large brown ring stain and general body soiling removed by hot water extraction, damp strokes still visible.',
    beforeAlt: 'Grey fabric sofa with heavy body soiling and a large brown ring stain on the seat',
    afterAlt: 'Grey fabric sofa after hot water extraction, ring stain gone and damp strokes visible',
  },
  {
    id: 'armchair-2',
    label: 'Armchair',
    service: 'armchair-and-dining-chair-cleaning',
    caption: 'Grey fabric armchair by a window and radiator; mottled watermark patches cleaned out and the chair left to dry with an air mover.',
    beforeAlt: 'Grey fabric armchair with mottled watermark patches and soiling on seat and arms',
    afterAlt: 'Grey fabric armchair cleaned to an even tone with a blue drying fan beside it',
  },
  {
    id: 'dining-chair-1',
    label: 'Dining chair',
    service: 'armchair-and-dining-chair-cleaning',
    caption: 'Pale grey upholstered dining armchair with chrome legs; darker soiling along the arm tops cleaned to an even light grey.',
    beforeAlt: 'Pale grey dining armchair with darker soiling along the arms and seat',
    afterAlt: 'Pale grey dining armchair with even, clean upholstery after cleaning',
  },
  {
    id: 'stair-carpet-2',
    label: 'Stair carpet',
    service: 'stair-carpet-cleaning',
    caption: 'Blue fitted stair carpet; heavy grey-brown traffic soiling down the centre of each tread lifted back to a bright blue.',
    beforeAlt: 'Blue stair carpet heavily darkened with grey-brown traffic soiling on every tread',
    afterAlt: 'Blue stair carpet cleaned to a bright even blue with an extraction wand on the steps',
  },
  {
    id: 'dining-chair-2',
    label: 'Dining chair',
    service: 'armchair-and-dining-chair-cleaning',
    caption: 'Cream linen-look chair from an outdoor patio set; orange-brown staining on the curved backrest removed.',
    beforeAlt: 'Cream linen dining chair with an orange-brown stain on the curved backrest',
    afterAlt: 'Cream linen bar stool on a patio with even off-white upholstery after cleaning',
  },
  {
    id: 'dining-chair-3',
    label: 'Dining chair',
    service: 'armchair-and-dining-chair-cleaning',
    caption: 'Blush velvet dining chair seat on oak flooring; overlapping water rings and grey-brown blotching cleaned to an even pale pink.',
    beforeAlt: 'Blush velvet dining chair seat covered in water rings and grey-brown blotching',
    afterAlt: 'Blush velvet dining chair seat cleaned to an even pale pink with no ring marks',
  },
  {
    id: 'leather-sofa-1',
    label: 'Leather sofa',
    service: 'leather-sofa-cleaning',
    caption: 'White buttoned leather chesterfield sofa; yellowed, grey-streaked seat cushions cleaned back to match the white buttoned back.',
    beforeAlt: 'White leather chesterfield sofa with yellowed, grey-streaked seat cushions',
    afterAlt: 'White leather chesterfield sofa with uniformly bright white cushions after cleaning',
  },
];

export const pairsForService = (slug: string) =>
  galleryPairs.filter((p) => p.service === slug);

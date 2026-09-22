export type Review = {
  name: string;
  /** Verbatim, exactly as the customer wrote it. Do not tidy the grammar. */
  body: string;
  source: 'Facebook message' | 'Instagram message';
  /** Filename in src/assets/reviews, when the owner supplied a screenshot */
  screenshot?: string;
  service: string;
};

/**
 * Real messages sent to the business by customers, supplied by the owner as
 * screenshots. Quoted verbatim. No rating figure is published anywhere on this
 * site because there is no verified public review profile to cite yet.
 */
export const reviews: Review[] = [
  {
    name: 'Laura Patterson',
    body: 'Thanks so much, couch has came up like new, guys were so professional, will definitely be using your company again',
    source: 'Facebook message',
    screenshot: 'laura-patterson.png',
    service: 'Sofa cleaning',
  },
  {
    name: 'Aileen Beattie',
    body: 'So pleased with the results of our carpet & couch clean today would highly recommend! The guys managed to come out earlier than planned and were so friendly, thanks again',
    source: 'Instagram message',
    screenshot: 'aileen-beattie.png',
    service: 'Carpet & sofa cleaning',
  },
  {
    name: 'Gemma Louise McNie',
    body: "Very happy with the service, second time we have used you and the carpets have came up great as my 4 year old said walking through the front door saying it smelt 'lovely and fresh'. Thanks again and already recommend you to a lot of people",
    source: 'Facebook message',
    screenshot: 'gemma-mcnie.png',
    service: 'Carpet cleaning',
  },
];

export default () => ({ // eslint-disable-line

  // link file UUID
  id: '768f4d10-0e3c-11e7-b030-768954394623',

  // canonical URL of the published page
  // https://ig.ft.com/finserv-diversity get filled in by the ./configure script
  url: 'https://ig.ft.com/company-diversity-employee-views',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-04-13T05:30:00Z'),

  headline: 'Here’s what your employees think of your company gender diversity programme',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Executives across the corporate world discuss what works and what doesn’t as companies attempt to diversify their leadership',

  topic: {
    name: 'FT Readers',
    url: 'https://www.ft.com/ftreaders',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ab9ba1b1a-1634-11e7-b0c1-37e417ee6c76?source=ig&width=2048&height=1152',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Lilah Raptopoulos', url: 'https://www.ft.com/stream/authorsId/YWFhZjY4NWUtNTY3MS00ZTZiLWE3MDQtY2YyMzE5NDRmMzUz-QXV0aG9ycw==' },
    { name: 'Martin Stabe', url: 'https://www.ft.com/martin-stabe' },
    { name: 'Laura Noonan', url: 'https://www.ft.com/stream/authorsId/Q0ItTE41Njc4OQ==-QXV0aG9ycw==' },
    { name: 'Sarah Gordon', url: 'https://www.ft.com/sarah-gordon' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: 'Executives across the corporate world discuss what works and what doesn’t as companies attempt to diversify their leadership',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae14fd81e-1890-11e7-a53d-df09f373be87?source=ig&width=1400',
  socialHeadline: 'Here’s what your employees think of your company gender diversity programme',
  socialSummary: 'Executives across the corporate world discuss what works and what doesn’t as companies attempt to diversify their leadership',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae14fd81e-1890-11e7-a53d-df09f373be87?source=ig&width=1400',
  twitterCreator: '@FT',
  tweetText: 'Here’s what your employees think of your company gender diversity programme',
  twitterHeadline: 'Management\'s missing women',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae14fd81e-1890-11e7-a53d-df09f373be87?source=ig&width=1400',
  facebookHeadline: 'Here’s what your employees think of your company gender diversity programme',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});

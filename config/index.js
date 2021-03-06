import axios from 'axios';
import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';

export default async () => {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();
  const berthaId = '1Qajon8QC-PSw1hG4AVqEYAKc-sWu0zW_PMKIEKvhlOU';
  const endpoint = `https://bertha.ig.ft.com/view/publish/gss/${berthaId}/data`;
  const res = await axios(endpoint);
  const berthaData = res.data;
  let table;

  // try {
  //   table = ReactDOMServer.renderToString(<GTable data={berthaData} />);
  // } catch (e) {
  //   console.log('Error pre-rendering React:', e);
  // }

  /*
  An experimental demo that gets content from the API
  and overwrites some model values. This requires the Link File
  to have been published. Also next-es-interface.ft.com probably
  isn't a reliable source. Also this has no way to prevent development
  values being seen in productions... use with care.

  try {
    const a = (await axios(`https://next-es-interface.ft.com/content/${d.id}`)).data;
    d.headline = a.title;
    d.byline = a.byline;
    d.summary = a.summaries[0];
    d.title = d.title || a.title;
    d.description = d.description || a.summaries[1] || a.summaries[0];
    d.publishedDate = new Date(a.publishedDate);
    f.comments = a.comments;
  } catch (e) {
    console.log('Error getting content from content API');
  }

  */

  return {
    ...d,
    flags,
    onwardJourney,
    berthaData,
    table,
  };
};

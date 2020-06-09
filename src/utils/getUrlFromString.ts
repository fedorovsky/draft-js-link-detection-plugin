import linkifyIt from 'linkify-it';

const linkify = linkifyIt();

export default function getUrlFromString(text: string) {
  const matchLinkList = linkify.match(text);
  return matchLinkList && matchLinkList[0].url;
}

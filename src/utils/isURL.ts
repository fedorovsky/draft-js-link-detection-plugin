import linkifyIt from 'linkify-it';

const linkify = linkifyIt();

export default function isURL(text: string) {
  return !!linkify.match(text);
}


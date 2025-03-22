const punctuationRgx = /[^\P{P}'/-]+/gu;

const isStringOrNumber = value => {
  return typeof value === 'string' || typeof value === 'number';
};

const stripPunctuation = text => {
  return text.replace(punctuationRgx, '');
};

const isPunctuation = text => {
  const trimmed = text.trim();
  return punctuationRgx.test(trimmed) && trimmed.length === 1;
};

export { isStringOrNumber, stripPunctuation, isPunctuation, punctuationRgx };
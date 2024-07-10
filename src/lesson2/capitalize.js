export default (text) => {
  if (text === '') {
    return '';
  }
  const [firstChar, ...restChars] = text;
  return `${firstChar.toUpperCase()}${restChars.join('')}`;
};

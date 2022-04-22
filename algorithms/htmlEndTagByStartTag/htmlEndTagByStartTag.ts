function htmlEndTagByStartTag(startTag: string): string {
  const startTagArr = startTag.split(' ');
  const startTagStr = startTagArr[0].split('');
  let endTag = '</';
  for (let i = 1; i < startTagStr.length; i++) {
    endTag += startTagStr[i];
  }
  return endTag[endTag.length - 1] === '>' ? endTag : endTag + '>';
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));

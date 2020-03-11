// Since we are using the demo third-rail font, it doesn't include the symbols, we replace them with another font as a hack

$(document).ready(function() {
  $('.FAQ-card-title').each((i, ele) => {
    const matches = ele.textContent.matchAll(/[^a-zA-Z0-9_\s]/g);

    let matchText = '';
    let newContent = '';
    let prevIndex = 0;
    for (const match of matches) {
      matchText = match['input'];

      let toInject = `<span class="faq-title-diff-font">${match[0]}</span>`;

      newContent +=
        matchText.substr(prevIndex, match['index'] - prevIndex) + toInject;
      prevIndex = match['index'] + 1;
    }
    newContent += matchText.substr(prevIndex + 1, matchText.length);
    $(ele).html(newContent);
  });
});

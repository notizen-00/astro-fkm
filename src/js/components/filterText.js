export function filterText(content, maxLength) {
    if (content.length > maxLength) {
        return content.slice(0, maxLength) + '...';
      }
      return content;
  }
  

  
const renderLinks = (content: string) => {
  const clickableLink = content.replace(
    /((https?:\/\/[^\s]+)|\[([^\]]+)\]\((https?:\/\/[^\s]+)\))/g,
    (match: any, url: any, _: any, linkText: any) => {
      if (url) {


        return `<a target="_blank" href="${url}">${url}</a>`;
      } else if (linkText && url) {


         return `<a href="${url}">${linkText}</a>`;
      }
      return match;
    }
  );

 return clickableLink;
};

export default renderLinks;

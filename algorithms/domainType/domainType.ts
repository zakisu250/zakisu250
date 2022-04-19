function domainType(domains: string[]): string[] {
  const domainTypes: string[] = [];

  domains.forEach((domain) => {
    const domainArr = domain.split('.');
    const domainType = domainArr[domainArr.length - 1];

    switch (domainType) {
      case 'org':
        domainTypes.push('organization');
        break;
      case 'com':
        domainTypes.push('commercial');
        break;
      case 'net':
        domainTypes.push('network');
        break;
      case 'info':
        domainTypes.push('information');
        break;
    }
  });

  return domainTypes;
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);

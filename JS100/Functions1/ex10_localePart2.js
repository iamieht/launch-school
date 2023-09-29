// Problem:
// write a function that extracts the region code from a locale

function extractRegion(locale) {
  return locale.slice(3, 5);
}

// Examples
console.log(extractRegion("en_US.UTF-8")); // 'US'
console.log(extractRegion("en_GB.UTF-8")); // 'GB'
console.log(extractRegion("ko_KR.UTF-16")); // 'KR'

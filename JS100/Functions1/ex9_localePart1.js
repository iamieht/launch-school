// Problem:
//  Write a function that extracts the language code from a locale

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

// Examples
console.log(extractLanguage("en_US.UTF-8")); // 'en'
console.log(extractLanguage("en_GB.UTF-8")); // 'en'
console.log(extractLanguage("ko_KR.UTF-16")); // 'ko'

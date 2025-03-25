# mr-case 🤓

`mr-case` is a powerful and lightweight JavaScript utility library for case conversion, string formatting, and text manipulation. It provides a rich set of **55 functions** to seamlessly transform strings, arrays, and object keys between different cases (**camelCase, snake_case, kebab-case, PascalCase, Title Case, and more**), **clean and format text**, **extract URL components**, and perform common text operations like **masking, obfuscation,** and **abbreviation.**

Whether you're dealing with `API responses`, `filenames`, `database fields`, `SEO-friendly slugs`, or `user-generated content`, mr-case makes string manipulation effortless and efficient.

[![npm](https://img.shields.io/npm/v/mr-case.svg)](https://www.npmjs.com/package/mr-case)  [![License](https://img.shields.io/npm/l/mr-case.svg)](LICENSE)  [![Downloads](https://img.shields.io/npm/dt/mr-case.svg)](https://www.npmjs.com/package/mr-case) 

# 📦 Installation

Install via npm

```sh
npm i mr-case
```

# Usage

```js
const mrCase = require('mr-case');

console.log(mrCase.toCamel('hello_world')); // "helloWorld"
console.log(mrCase.generateSlug('My Blog Post!')); // "my-blog-post"
```

# API Reference (55 Functions)

### Core Case Conversions  
1. **`toCamel(str: string): string`** → Converts `underscore_case` to `camelCase`.  
   - `"hello_world"` → `"helloWorld"`  
2. **`toSnake(str: string): string`** → Converts `camelCase` to `underscore_case`.  
   - `"helloWorld"` → `"hello_world"`  
3. **`toPascal(str: string): string`** → Converts `snake_case` or `camelCase` to `PascalCase`.  
   - `"hello_world"` → `"HelloWorld"`  
4. **`toKebab(str: string): string`** → Converts `snake_case` or `camelCase` to `kebab-case`.  
   - `"hello_world"` → `"hello-world"`  
5. **`toTitle(str: string): string`** → Converts any case to **Title Case**.  
   - `"hello world"` → `"Hello World"`  
6. **`arrToCamel(arr: string[]): string[]`** → Converts an array of `underscore_case` strings to `camelCase`.  
7. **`arrToSnake(arr: string[]): string[]`** → Converts an array of `camelCase` strings to `underscore_case`.  
8. **`arrToPascal(arr: string[]): string[]`** → Converts an array of strings to `PascalCase`.  
9. **`arrToKebab(arr: string[]): string[]`** → Converts an array of strings to `kebab-case`.  
10. **`detectCase(str: string): "camel" | "snake" | "pascal" | "kebab" | "title" | "other"`** → Detects the case format of a string.  

---

### Object Key Conversions  
11. **`keysToCamel(obj: object): object`** → Converts object keys from `snake_case` to `camelCase`.  
12. **`keysToSnake(obj: object): object`** → Converts object keys from `camelCase` to `underscore_case`.  
13. **`keysToPascal(obj: object): object`** → Converts all object keys to `PascalCase`.  
14. **`keysToKebab(obj: object): object`** → Converts all object keys to `kebab-case`.  
15. **`deepCamel(obj: object): object`** → Converts all nested object keys to `camelCase`.  
16. **`deepSnake(obj: object): object`** → Converts all nested object keys to `snake_case`.  
17. **`deepPascal(obj: object): object`** → Converts all nested object keys to `PascalCase`.  
18. **`deepKebab(obj: object): object`** → Converts all nested object keys to `kebab-case`.  
19. **`autoConvert(str: string, target: "camel" | "snake" | "pascal" | "kebab" | "title"): string`** → Converts text to a specified format.  
20. **`isCamel(str: string): boolean`** → Checks if a string is in `camelCase`.  

---

### Text Formatting & Cleaning
21. **`isSnake(str: string): boolean`** → Checks if a string is in `snake_case`.  
22. **`capitalize(str: string): string`** → Capitalizes the first letter.  
23. **`decapitalize(str: string): string`** → Converts the first letter to lowercase.  
24. **`capitalizeWords(str: string): string`** → Capitalizes the first letter of every word.  
25. **`decapitalizeWords(str: string): string`** → Lowercases the first letter of every word.  
26. **`swapCase(str: string): string`** → Swaps case of each letter.  
27. **`sentenceCase(str: string): string`** → Converts text to sentence case.  
28. **`randomCase(str: string): string`** → Randomly capitalizes letters.  
29. **`removeExtraSpaces(str: string): string`** → Trims and removes extra spaces.  
30. **`removeSpecialChars(str: string): string`** → Removes non-alphanumeric characters (except spaces).  

---

### Full-Text Case Conversion
31. **`textToCamel(text: string): string`** → Converts sentences/paragraphs to `camelCase`.  
32. **`textToSnake(text: string): string`** → Converts sentences/paragraphs to `snake_case`.  
33. **`textToKebab(text: string): string`** → Converts sentences/paragraphs to `kebab-case`.  
34. **`textToPascal(text: string): string`** → Converts sentences/paragraphs to `PascalCase`.  
35. **`camelToText(str: string): string`** → Converts `camelCase` back to a readable sentence.  
36. **`snakeToText(str: string): string`** → Converts `snake_case` back to a readable sentence.  
37. **`kebabToText(str: string): string`** → Converts `kebab-case` back to a readable sentence.  
38. **`pascalToText(str: string): string`** → Converts `PascalCase` back to a readable sentence.  
39. **`reverseWords(str: string): string`** → Reverses word order.  
40. **`reverseString(str: string): string`** → Reverses the string.  

---

### SEO, Validation & Text Processing 
41. **`generateSlug(str: string): string`** → Converts a string into an **SEO-friendly slug**.  
42. **`extractDomain(url: string): string`** → Extracts domain from a URL.  
43. **`extractPath(url: string): string`** → Extracts the path from a URL.  
44. **`isPalindrome(str: string): boolean`** → Checks if a string is a palindrome.  
45. **`isAnagram(str1: string, str2: string): boolean`** → Checks if two words are anagrams.  
46. **`removeNumbers(str: string): string`** → Removes digits from a string.  
47. **`keepOnlyNumbers(str: string): string`** → Removes everything **except numbers**.  
48. **`truncate3dots(str: string, length: number): string`** → Truncates text with `"..."` if it exceeds length.  
49. **`shortenText(str: string, limit: number): string`** → Shortens text without cutting mid-word.  
50. **`replaceSeparator(str: string, from: string, to: string): string`** → Replaces a separator in a string.  

---

### Security & Privacy
51. **`abbreviate(text: string): string`** → Converts `"Machine Learning"` to `"ML"`.  
52. **`initials(name: string): string`** → Gets initials from a name (`"John Doe"` → `"J.D."`).  
53. **`obfuscateEmail(email: string): string`** → Hides part of an email address.  
54. **`maskString(str: string, visible: number): string`** → Masks a string while keeping first & last few characters.  
55. **`shortenText(str: string, limit: number): string`** → Keeps words within the limit instead of cutting mid-word.  


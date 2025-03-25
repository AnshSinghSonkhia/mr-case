Here are the updated function names for the `mr-camel` package:

### **Core Functions**
1. **`toCamel(str: string): string`** → Converts underscore_case to camelCase.
2. **`toSnake(str: string): string`** → Converts camelCase to underscore_case.

### **Batch Conversion**
3. **`arrToCamel(arr: string[]): string[]`** → Converts an array of underscore_case strings to camelCase.
4. **`arrToSnake(arr: string[]): string[]`** → Converts an array of camelCase strings to underscore_case.

### **Object Key Conversion**
5. **`keysToCamel(obj: object): object`** → Converts all underscore_case keys in an object to camelCase.
6. **`keysToSnake(obj: object): object`** → Converts all camelCase keys in an object to underscore_case.

### **Deep Conversion (Nested Objects)**
7. **`deepCamel(obj: object): object`** → Converts all keys (including nested objects) to camelCase.
8. **`deepSnake(obj: object): object`** → Converts all keys (including nested objects) to underscore_case.

### **Validation**
9. **`isCamel(str: string): boolean`** → Checks if a string is in camelCase.
10. **`isSnake(str: string): boolean`** → Checks if a string is in underscore_case.

These function names are now short and intuitive. Do you want me to implement them? 🚀

Here are some additional functions we could add to make `mr-camel` even more useful:

---

### **1. Case Conversion Enhancements**
11. **`toPascal(str: string): string`** → Converts underscore_case or camelCase to PascalCase.  
    ```js
    toPascal("hello_world"); // "HelloWorld"
    ```
12. **`toKebab(str: string): string`** → Converts underscore_case or camelCase to kebab-case.  
    ```js
    toKebab("hello_world"); // "hello-world"
    ```
13. **`toTitle(str: string): string`** → Converts any case to Title Case.  
    ```js
    toTitle("hello_world"); // "Hello World"
    ```

---

### **2. Smart Detection & Auto Conversion**
14. **`detectCase(str: string): "camel" | "snake" | "pascal" | "kebab" | "other"`**  
    Detects the case format of a string.
    ```js
    detectCase("helloWorld"); // "camel"
    ```
15. **`autoConvert(str: string, target: "camel" | "snake" | "pascal" | "kebab" | "title"): string`**  
    Automatically converts a string from any format to the target format.
    ```js
    autoConvert("hello_world", "camel"); // "helloWorld"
    ```

---

### **3. Array & Object Key Enhancements**
16. **`arrToPascal(arr: string[]): string[]`** → Converts an array of strings to PascalCase.
17. **`arrToKebab(arr: string[]): string[]`** → Converts an array of strings to kebab-case.
18. **`keysToPascal(obj: object): object`** → Converts all object keys to PascalCase.
19. **`keysToKebab(obj: object): object`** → Converts all object keys to kebab-case.
20. **`deepPascal(obj: object): object`** → Converts all nested object keys to PascalCase.
21. **`deepKebab(obj: object): object`** → Converts all nested object keys to kebab-case.

---

### **4. String Manipulation Helpers**
22. **`capitalize(str: string): string`** → Capitalizes the first letter of a string.  
    ```js
    capitalize("hello"); // "Hello"
    ```
23. **`decapitalize(str: string): string`** → Converts the first letter to lowercase.  
    ```js
    decapitalize("Hello"); // "hello"
    ```
24. **`replaceSeparator(str: string, from: string, to: string): string`**  
    Replaces a given separator (e.g., `_`, `-`, ` `) with another.
    ```js
    replaceSeparator("hello_world", "_", "-"); // "hello-world"
    ```

---

Would you like me to prioritize any specific ones for implementation first? 🚀

Here are the new functions we should add to `mr-camel` for enhanced text handling and conversions:

---

### **1. Full-Text Case Conversion**
25. **`textToCamel(text: string): string`**  
   Converts a sentence or paragraph into camelCase.  
   ```js
   textToCamel("hello world, this is an example."); 
   // "helloWorldThisIsAnExample"
   ```

26. **`textToSnake(text: string): string`**  
   Converts a sentence into snake_case.  
   ```js
   textToSnake("Hello world, this is an example."); 
   // "hello_world_this_is_an_example"
   ```

27. **`textToKebab(text: string): string`**  
   Converts a sentence into kebab-case.  
   ```js
   textToKebab("Hello world, this is an example."); 
   // "hello-world-this-is-an-example"
   ```

28. **`textToPascal(text: string): string`**  
   Converts a sentence into PascalCase.  
   ```js
   textToPascal("hello world, this is an example."); 
   // "HelloWorldThisIsAnExample"
   ```

---

### **2. Reversing Conversions**
29. **`camelToText(str: string): string`**  
   Converts camelCase back to a readable sentence.  
   ```js
   camelToText("helloWorldThisIsAnExample"); 
   // "Hello world this is an example"
   ```

30. **`snakeToText(str: string): string`**  
   Converts snake_case back to a readable sentence.  
   ```js
   snakeToText("hello_world_this_is_an_example"); 
   // "Hello world this is an example"
   ```

31. **`kebabToText(str: string): string`**  
   Converts kebab-case back to a readable sentence.  
   ```js
   kebabToText("hello-world-this-is-an-example"); 
   // "Hello world this is an example"
   ```

32. **`pascalToText(str: string): string`**  
   Converts PascalCase back to a readable sentence.  
   ```js
   pascalToText("HelloWorldThisIsAnExample"); 
   // "Hello world this is an example"
   ```

---

### **3. Case Conversion Helpers**
33. **`capitalizeWords(str: string): string`**  
   Capitalizes the first letter of every word in a sentence.  
   ```js
   capitalizeWords("hello world"); 
   // "Hello World"
   ```

34. **`decapitalizeWords(str: string): string`**  
   Makes the first letter of every word lowercase.  
   ```js
   decapitalizeWords("Hello World"); 
   // "hello world"
   ```

35. **`removeSpecialChars(str: string): string`**  
   Cleans a string by removing non-alphanumeric characters (except spaces).  
   ```js
   removeSpecialChars("Hello@World! 123"); 
   // "Hello World 123"
   ```

---

Would you like me to implement the core functions first? 🚀
Several solutions exist to prevent this:

1. **Whitelist the class:** Add the class to the `purge` options whitelist in your Tailwind CSS configuration file.

2. **Ensure conditional class is present during static analysis:**  In some frameworks, you might need to modify how you handle conditional rendering to ensure the class is included during the build process.  This may involve simulating all possible states during the build.

3. **Use a utility-first approach**: Consider using more simple, self-contained utility classes instead of complex custom classes to mitigate this type of issue.

4. **Disable PurgeCSS for development:**  For development, temporarily disable PurgeCSS to avoid this issue.  Then re-enable for production builds.

Here's an example of using the whitelist approach (assuming you use `postcss-purgecss`):

```javascript
module.exports = {
  // ...other options
purge: {
    content: [ 
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue'
     ],
    safelist: ['bg-red-500'], // Add the class to the safelist
  }
};
```

Remember to choose the solution most appropriate to your project and build setup.
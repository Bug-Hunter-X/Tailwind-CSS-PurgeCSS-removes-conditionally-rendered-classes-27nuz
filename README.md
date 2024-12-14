# Tailwind CSS PurgeCSS removes conditionally rendered classes

This repository demonstrates a common error when using Tailwind CSS with PurgeCSS or similar tools.  The problem arises when conditionally rendered classes are not present during the static analysis phase, causing PurgeCSS to remove them, resulting in runtime errors. 

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution.  The solution involves ensuring that all classes are included regardless of conditional rendering.
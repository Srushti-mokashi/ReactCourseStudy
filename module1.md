# Module 1 – React Basics (Theory)

## What I learned

Lecture 1: Introduction to react

🔵What is React?

1. React is a javaScript library developed by Facebook
2. Used for building user interfaces, especially single-page applications
3. It focuses only on the view layer of the application (UI)
4. allows you to create reusable components
5. It uses a virtual DOM to improve performance

🔵Why React?

1. Fast Rendering: Uses virtual DOM for efficient updates
2. Reusable Components: Build once, reuse anywhere in the UI
3. Rich Ecosystem: Supported by tools like React Router, Redux, etc.
4. Large Community: Tons of support, documentation, and tutorials
5. Used by top companies like Meta, Netflix, and Uber

🔵Declarative UI

1. In React, you describe what the UI should look like for a given state
2. React updates the DOM automatically when state changes
3. Eliminates manual DOM manipulation (like document.getElementById())
4. Makes code simpler, cleaner, and predictable

🔵Single Page Applications (SPA)

1. The entire app loads once, and routing happens via javaScript
2. No full-page reloads-only parts of the UI update
3. Fast and smooth user experience
4. Uses tools like Rect router for cliend-side routing
5. Ideal for modern, responsive web apps

Lecture 2: UnderStanding the Virtual DOM and Reconciliation Process

🔵What is Virtual DOM?

1. A lighrweight copy of a actual DOM
2. It allows React to perform updates more efficiently by minimizing direct manipulation of the real DOM

🔵How Virtual DOM Works:

1. When the state or props of a component change, a new Virtual DOM is created
2. React compares this new Virtual DOM with the previous one to identify changes (diffing)

🔵Reconciliation Process

1. The process of updating the actual DOM to match the Virtual DOM
2. Rect calculates the minimal number of changes needed and applies these changes to the actual DOM

🔵Benefits of Virtual DOM:

1. Improves performance by reducing direct manipulation of the DOM
2. Makes UI updates faster and smoother

🔵Key points:

1. Virtual DOM updates are batched and optimized
2. Only the parts of the DOM that changed are updated, not the entire DOM

# LearningStudioAI

LearningStudioAI is a next-gen online course creation tool built with React and Tailwind CSS.

## Features

- Responsive design for all devices
- Interactive course creation interface
- User authentication (login and signup)
- Animated UI elements for enhanced user experience

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation and Setup Process

Follow these steps to set up the LearningStudioAI project on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/learning-studio-ai.git
   cd learning-studio-ai
   ```

2. Install the project dependencies:
   ```
   npm install
   ```

3. Install additional required packages:
   ```
   npm install react-router-dom framer-motion
   ```

4. Install Tailwind CSS and its peer dependencies:
   ```
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

5. Generate Tailwind CSS configuration files:
   ```
   npx tailwindcss init -p
   ```

6. Update the `tailwind.config.js` file in the project root:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

7. Replace the contents of `src/index.css` with the following:
   ```css
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';

   @layer components {
     .btn {
       @apply font-bold py-2 px-4 rounded transition duration-300 ease-in-out;
     }
     .btn-primary {
       @apply bg-purple-600 text-white hover:bg-purple-700;
     }
     .btn-ghost {
       @apply bg-transparent text-purple-600 hover:bg-purple-100;
     }
     .btn-link {
       @apply text-purple-600 hover:text-purple-700 underline;
     }
   }
   ```

8. Update `src/index.js` to import the CSS file:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';

   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById('root')
   );
   ```

9. Create the necessary component files:
   ```
   mkdir src/components
   touch src/components/HomePage.js src/components/LoginPage.js src/components/SignupPage.js
   ```

10. Copy the provided code for each component (HomePage, LoginPage, SignupPage) into their respective files.

11. Replace the contents of `src/App.js` with the provided App component code.

## Running the Application

To start the development server, run:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build, run:

```
npm run build
```

This will generate a `build` folder with optimized production-ready files.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

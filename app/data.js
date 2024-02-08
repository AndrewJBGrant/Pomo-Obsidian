

const posts = [
{
    "id": 1,
    "user_id": 1,
    "title": "Exploring Tailwind CSS",
    "content": "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without having to write custom CSS. It provides a set of pre-designed utility classes that you can apply directly to your HTML elements. Tailwind CSS makes it easy to create responsive and visually appealing user interfaces. With its intuitive class naming conventions, you can quickly style your components and achieve consistent design patterns throughout your application.\n\nOne of the key benefits of Tailwind CSS is its flexibility. Instead of relying on predefined components, Tailwind empowers you to create your own components by composing utility classes. This approach gives you full control over the styling of your application while keeping your CSS lean and maintainable.\n\nIf you're new to Tailwind CSS, I highly recommend checking out the official documentation and tutorials available on the https://tailwindcss.com Tailwind CSS website.",
    "date_created": "20-01-2024"
  },
  {
    "id": 2,
    "user_id": 1,
    "title": "Getting Started with Next.js",
    "content": "Next.js is a popular React framework for building server-side rendered and statically generated web applications. It offers a powerful set of features, including automatic code splitting, server-side rendering, and static site generation. Next.js simplifies the development process by providing built-in solutions for common challenges such as routing, data fetching, and authentication.\n\nWith Next.js, you can create fast and efficient web applications that deliver exceptional user experiences. Its intuitive API and developer-friendly environment make it easy to get started and build scalable applications.\n\nTo learn more about Next.js and explore its features, visit the official https://nextjs.org/ Next.js website.",
    "date_created": "16-11-2023"
  },
  {
    "id": 3,
    "user_id": 2,
    "title": "Mastering React Hooks",
    "content": "React Hooks revolutionized the way we manage state and side effects in React applications. Hooks allow you to add state and lifecycle features to functional components without writing class components. They provide a more concise and readable way to manage stateful logic and share reusable behavior across components.\n\nWith Hooks, you can leverage features like useState, useEffect, useContext, and useReducer to build powerful and expressive components. Whether you're fetching data from an API, handling form submissions, or managing global state, Hooks offer a simple and elegant solution.\n\nFor comprehensive tutorials and examples on React Hooks, check out the official https://reactjs.org/docs/hooks-intro React Hooks documentation.",
    "date_created": "9-12-2023"
  },
  {
    "id": 4,
    "user_id": 2,
    "title": "Building Responsive Layouts with CSS Grid",
    "content": "CSS Grid is a powerful layout system that allows you to create complex grid-based layouts with ease. It provides a two-dimensional grid structure that enables precise control over the placement and alignment of elements on a web page. CSS Grid offers a flexible and intuitive approach to building responsive layouts that adapt to different screen sizes and devices.\n\nBy defining rows and columns, specifying grid areas, and using alignment properties, you can create versatile and visually stunning layouts. CSS Grid simplifies the process of building complex grid-based designs and eliminates the need for additional layout frameworks or libraries.\n\nTo learn more about CSS Grid and its capabilities, explore the resources available on the https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs.",
    "date_created": "07-02-2024"
  },
  {
    "id": 5,
    "user_id": 3,
    "title": "Exploring JavaScript Promises",
    "content": "JavaScript Promises provide a way to handle asynchronous operations and manage callback-based code more effectively. Promises represent the eventual completion or failure of an asynchronous operation and allow you to chain multiple asynchronous actions together in a more readable and concise manner.\n\nWith Promises, you can perform tasks such as fetching data from an API, reading files from the filesystem, or executing database queries asynchronously. Promises simplify error handling and provide a standardized mechanism for handling asynchronous code.\n\nTo dive deeper into JavaScript Promises and understand how they work, explore the documentation and tutorials available on the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise MDN web docs.",
    "date_created": "28-01-2024"
  }
]

const todos = [
{
"id": 1,
"user_id": 3,
"content":"Promises provide a way to handle asynchronous operations",
"date_created": "28-01-2024"
},
{
"id": 2,
"user_id": 1,
"content":"Promises provide a way to handle asynchronous operations",
"date_created": "28-01-2024"
},
{
"id": 3,
"user_id": 3,
"content":"Promises provide a way to handle asynchronous operations",
"date_created": "28-01-2024"
},
{
"id": 4,
"user_id": 2,
"content":"Promises provide a way to handle asynchronous operations",
"date_created": "28-01-2024"
},
{
"id": 5,
"user_id": 1,
"content":"Promises provide a way to handle asynchronous operations",
"date_created": "28-01-2024"
},
]




module.exports = {
  posts,
  todos
};

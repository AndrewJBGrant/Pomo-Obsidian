# Focus App
I wanted to Replicate my current setup of using a pomodoro timer, to-do list and Obsidian.

A practical way to learn the best practices of
### TypeScript
### Tailwind CSS
### React
### SupaBase
and testing libraries like **Jest** and **React** testing library
Using # Next.js allows me to work front and back end in **TypeScript** aswell as working with **RSC** (React server components)
I wanted to minimise the amount of npm packages used and instead work on coding as much as possible myself to get a better understanding of how JavaScript is working under the hood.

Trying to code a small markdown library.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


/* Tooltip tests */
.tooltip-trigger {
  position: relative;
  display: inline;
}

.tooltip-trigger .tooltip-test {
   width: 100%;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    opacity: 0;
    transition: opacity 1s;
    position: absolute;
    z-index: 1;
}


.tooltip-trigger .tooltip-test {
  opacity: 0;
}

.tooltip-trigger:hover .tooltip-test {
  opacity: 1;
}

.tooltip-right{
    top: -5px;
    left: 105%;
}


.tooltip-left{
    top: -5px;
    right: 105%;
}

.tooltip-top{
    bottom:105%;
    left:0%;
}

.tooltip-bottom{
    top:105%;
    left:0%;
}

.tooltip-trigger .tooltip-top::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}


.tooltip-trigger .tooltip-bottom::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}


.tooltip-trigger .tooltip-right::after{
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}


.tooltip-trigger .tooltip-left::after{
    content: " ";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent  transparent transparent black;
}

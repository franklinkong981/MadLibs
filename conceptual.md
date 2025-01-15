### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a frontend framework that lets you create the frontend (aka the user interface) more easily and with less code. With React, you build the frontend by creating reusable items called components. It's best to use React when you want to build a frontend where each part of the page that the user sees can be split/modularized into reusable parts, such as a form, a button, a list of playing cards, etc. You use React because it's lightweight, flexible, and can make it easy to scale up your frontend through its reusable commponents.
- What is Babel?
Babel is a tool that is used with React to transpile the JSX returned by a React component into valid JavaScript that can work in all browsers.
- What is JSX?
JSX stands for JavaScript XML. It is an HTML-like syntax that can be compiled into JavaScript, and is often used in React. Functional components in React often return JSX which is transpiled into valid JavaScript with Babel.
- How is a Component created in React?
A component is usually created as a function that can be exported from a file and then reused in other files to build bigger components. A component usually accepts 0 or more props/parameters, as well as 0 or more pieces of state. When any of the pieces of state are changed, it triggers a re-render of the entire component. A component will usually return JSX, which is transpiled into valid JavaScript by Babel which can then be used to display the component on the page.
- What are some differences between state and props?
Props are parameters that you can pass into a component when creating a new instance of the component. You cannot pass state into a component, it is created with the useState hook. Props are not mutable so they can't be changed, while pieces of state can be changed.
- What does "downward data flow" refer to in React?
Downward data flow refers to how a common practice in React is to pass props from parent components down into simpler child components that make up part of the parent component. This often works by having the parent component maintain some pieces of state and/or functions that manipulate the pieces of state. Pieces of state as well as the functions can then be the values of props for the child components inside this parent component.
- What is a controlled component?
Controlled components are where React controls the state of the component/the values inside the component. An example of this might be an input text field in a form. In React, the value inside this text field at any time can be a piece of state in the React component that holds this input field, and React can also control what happens when a user changes the value in this input field by typing, etc.
- What is an uncontrolled component?
An uncontrolled component is a component that is not controlled by React. React does not control the values in the component at all times, and often React doesn't know the values inside this component until an event happens like the user submitting the form. An example of this would be the file upload field in a form. React does not know the user's file structure so it won't have access to the value inside until after the form is submitted.
- What is the purpose of the `key` prop when rendering a list of components?
The key prop is what React needs when rendering a list of components so that it can keep track of which data is currently being shown and what is currently being hidden. The key prop keeps the data in the component in sync with what is being rendered.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Array index is a poor choice for the key prop because the array index of each item in the array state won't always be the same. If the array is manipulated, certain items deleted, etc. this could lead to items in the array whose key prop is an incorrect array index. It can also lead to duplicate key props which are strongly discouraged and may lead to incorrect data being rendered.
- Describe useEffect.  What use cases is it used for in React components?
useEffect is a built-in React hook that we can use to run side effects in a component. It can be used when we want to do things like fetching data from an API to display, starting a timer for a specific action, or manipulating the DOM under certain conditions. 
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a built-in React hook that returns a mutable object that has a "current" attribute which you can change. The value of this current attribute persists across renders. In addition, you can change the value of this current attribute without triggering a re-render.
- When would you use a ref? When wouldn't you use one?
You use the useRef hook when you want some variable in a component that persists across renders but doesn't trigger a re-render when you change its value. In short, when you want a piece of state that you can change without triggering a re-render. useRef is usually used for  setting up/clearning timers. You shouldn't use useRef to access an underlying DOM element and make changes to it, as that breaks the philosophy of React. You should change the DOM through pieces of state and re-rendering the component, not by grabbing it directly and changing it by force.
- What is a custom hook in React? When would you want to write one?
Custom hooks are functions you can write in a separate file that abstracts and isolates certain pieces of logic out of components. You can then reuse this hook in all components that require the functionality/logic of the hook. You want to write a custom hook when you see multiple/many components that use the same functionality/logic, like the need to toggle a piece of state when pressing a button.
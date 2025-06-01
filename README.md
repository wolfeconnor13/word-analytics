# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Takeaways

## Controlled vs Uncontrolled Text Area

The textarea was initially uncontrolled, but by implementing useState we're able to make it controlled, and we can implement logic that relates to that text. We can also use this to manage the text input in case we want to pass that to another component or function.

## Derived state

warningText is a state we were managing to alert the user when they were attempting to input something we didn't want in the textarea. Initially we used a boolean state to manage whether we wanted the warning message to display or not, but we can use derived state and truthy values to actually just use warningText. If we have a non-empty string in warningText then we have some error we want to display and we can use that string in the ternary expression.

Note: Derived state can also be called computed state. It's best used when you having existing states that are closely related, take a look and see if you can derive the state instead of using useState.

## Lifting State

Again in this project we lifted state from the TextArea component to the Container component so that the text from the text area could be used in calculations in the Stats component.

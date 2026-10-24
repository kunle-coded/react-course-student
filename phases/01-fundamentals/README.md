# Phase 1 — React Fundamentals

Learn the building blocks used throughout the rest of the course: JSX, components, props, and organizing a React project. You will practice each concept in small exercises before bringing them together in the Pizza Menu project.

## Learning outcomes

By the end of this phase, you should be able to:

- Explain what React does and how its declarative approach differs from manually changing the DOM.
- Create and run a React project with Vite.
- Write JSX using JavaScript expressions, attributes, and fragments.
- Create functional components and render them in a component tree.
- Pass information from parent components to child components using props.
- Organize a small project into component, data, and asset files.

## Suggested sequence

1. What React is
2. Set up a React project with Vite
3. JSX
4. Components
5. Props
6. Component composition
7. Organizing files and folders

Work through the lessons and then complete the matching exercises:

| After learning about | Practice |
| --- | --- |
| JSX expressions | [Exercise 1 — JSX Expressions](./exercises/01-jsx-expressions/README.md) |
| Components | [Exercise 2 — Extract a Component](./exercises/02-extract-component/README.md) |
| Props | [Exercise 3 — Props Drill](./exercises/03-props-drill/README.md) |

## Set up your practice app

From the course root, create a React playground in this phase's `demos` folder:

```bash
npm create vite@latest phases/01-fundamentals/demos/react-playground -- --template react
cd phases/01-fundamentals/demos/react-playground
npm install
npm run dev
```

Open the local address printed by Vite in your browser. Keep the terminal running while you work; stop the development server with `Ctrl+C`.

Use your own student copy of the course. Write and save your practice code in the React project under `demos/react-playground`, not in the exercise instruction folders.

## Mini-project: Pizza Menu

Apply the phase concepts by building a static menu for a pizza restaurant. Start with the [Pizza Menu project](./project-pizza-menu/README.md).

The project should include:

- `Header`, `Menu`, and `PizzaItem` components.
- Pizza data with a name, ingredients, price, and image URL.
- Props to pass each pizza's information to its `PizzaItem`.
- A rendered list of pizza items from the data.
- A clear organization for components, data, and assets.

## Phase completion check

Before moving on, make sure you can explain how JSX describes UI, how components are composed, and how props pass data from parent to child. Your Pizza Menu should run in the browser and display its items from data.

Continue to [Phase 2 — State and Interactivity](../02-state-and-interactivity/README.md) when you are ready to make the UI respond to user actions.
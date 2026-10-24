# Exercise 2 — Extract a Component

Practice identifying a piece of UI and moving it into a reusable functional component.

## Goal

Refactor a small course page so that its course card is rendered by a separate component.

## Where to work

Use the React project in the [Phase 1 demos folder](../../demos/). In `src/App.jsx`, create a simple page with a heading and at least two course cards. If you have not created the project yet, follow [Lesson 2 — Set Up a React Project with Vite](../../lessons/02-project-setup-vite.md) and create it as `react-playground` inside that folder.

## Task

Start with the page content written inside `App`. Identify the markup that represents one course card and extract it into a `CourseCard` component.

## Requirements

- Create a functional component named `CourseCard`.
- Give the component a capitalized name and render it from `App` as a JSX component.
- Render at least two course cards on the page.
- Keep the card markup inside `CourseCard` rather than repeating the full markup in `App`.
- Move `CourseCard` into its own `src/CourseCard.jsx` file.
- Export it from that file and import it into `src/App.jsx` using the matching export style.
- Confirm the browser still renders the page after the refactor.

For now, the cards may show the same content. Passing different content into each card is the next exercise.

## Optional hints

- Components are JavaScript functions that return JSX.
- A custom component name must start with a capital letter so JSX can distinguish it from an HTML element.
- A named export uses braces in both the export and import. A default export does not use braces when imported.
- Check the relative import path if the app cannot find `CourseCard.jsx`.

## Done when

`App` uses the separately defined `CourseCard` component at least twice, the page renders successfully, and you can explain why the component name is capitalized.

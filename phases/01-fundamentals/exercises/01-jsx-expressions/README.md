# Exercise 1 — JSX Expressions

Practice embedding JavaScript expressions in JSX and using common JSX rules.

## Goal

Build a small course welcome panel that displays values from JavaScript variables and expressions.

## Where to work

Use the React project in the [Phase 1 demos folder](../../demos/). In `src/App.jsx`, replace the starter content with your exercise. If you have not created the project yet, follow [Lesson 2 — Set Up a React Project with Vite](../../lessons/02-project-setup-vite.md) and create it as `react-playground` inside that folder.

## Task

Create a welcome panel for a student. Choose a student name, a course name, and a lesson number, then display them in the UI.

## Requirements

- Display a heading that includes the student's name.
- Display the course name and lesson number.
- Include a JavaScript calculation in the rendered text, such as the number of lessons remaining if the course has 8 lessons.
- Use `className` on at least one element.
- Return multiple sibling elements without adding an unnecessary wrapper to the DOM.
- Save the file and confirm the page updates in the browser.

## Optional hints

- Declare values inside the `App` function, then insert them into JSX with curly braces.
- Curly braces can contain expressions such as a variable, arithmetic, or a function call.
- Use a fragment (`<>...</>`) to group siblings without adding a DOM element.
- JSX uses `className` rather than `class`.

## Done when

The page shows the chosen student and course information, includes a calculated value, and renders without a JSX error. Be ready to point out which parts are JavaScript expressions.

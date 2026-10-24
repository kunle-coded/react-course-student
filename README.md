# React Course

A project-based course for learning React, from the fundamentals through testing and performance. Lessons introduce concepts step by step, exercises give students focused practice, and projects bring related skills together in working applications.

## Who this course is for

This course is for learners who know basic JavaScript and want to build interactive user interfaces with React. It assumes familiarity with functions (including arrow functions), arrays and methods such as `map`, objects, destructuring, template literals, and JavaScript modules.

Students should have Node.js and npm installed, be comfortable using a terminal, and understand basic HTML and how browser pages and DOM events work. Familiarity with Git is helpful for receiving course updates and sharing work.

## Learning path

The course is organized into eight phases:

| Phase | Topics | Project |
| --- | --- | --- |
| [01 — Fundamentals](./phases/01-fundamentals/) | React, Vite, JSX, components, props, composition, and project organization | Pizza Menu |
| [02 — State and Interactivity](./phases/02-state-and-interactivity/) | State, events, conditional rendering, lists, and lifting state | Travel List |
| [03 — Effects and Data Fetching](./phases/03-effects-and-data-fetching/) | Effects, asynchronous requests, loading and error states, cleanup, and custom hooks | usePopcorn movie search |
| [04 — Forms](./phases/04-forms/) | Controlled inputs, form state, validation, and submission | Eat-n-Split |
| [05 — Routing](./phases/05-routing/) | React Router, URL parameters, nested layouts, and protected routes | Mini Movie Explorer |
| [06 — State Management](./phases/06-state-management/) | Context, `useReducer`, Redux Toolkit, and choosing where state belongs | Shopping Cart |
| [07 — Performance](./phases/07-performance/) | Re-renders, memoization, code splitting, and profiling | WorldWise |
| [08 — Testing](./phases/08-testing/) | Behavior-focused component tests, user interactions, async UI, and API mocks | Test a To-Do List |

The course also includes larger capstone project ideas in [capstones](./capstones/): an expense tracker, an admin dashboard with authentication, an e-commerce shopping cart, and a quiz app with Redux.

## Getting started

1. Get your own copy of the **student-facing course materials** from your instructor. Keep your work in your own copy rather than editing the instructor's source folder.
2. Install Node.js and npm if they are not already available. Verify the installation in a terminal:

   ```bash
   node --version
   npm --version
   ```

3. Begin with Phase 1 and follow the lessons and exercises in order.
4. For the Phase 1 demos and exercises, create the Vite React playground from the course root:

   ```bash
   npm create vite@latest phases/01-fundamentals/demos/react-playground -- --template react
   cd phases/01-fundamentals/demos/react-playground
   npm install
   npm run dev
   ```

   Open the local URL printed in the terminal. Keep the terminal running while you work; stop the development server with `Ctrl+C`.

5. Read each exercise's `README.md`, complete the work in your React project, and use the phase project to combine the concepts you have practiced.

## How the course is organized

- `phases/` contains the curriculum, grouped by topic.
- Each phase can contain `lessons/`, `exercises/`, `demos/`, a project, and `resources.md`.
- `capstones/` contains larger project ideas for applying skills across multiple phases.
- `docs/` is for course-wide guidance and reference material.
- `shared/` is for assets, snippets, and shared configuration.

The exercise folders contain student instructions. Runnable examples and exercise code belong in the phase's `demos/` project; the exercise folders are not where students write their app code.

## Note for instructors

Lesson files under `phases/*/lessons/` are instructor teaching guides, with run sheets, demo notes, questions, and checkpoints. Do not include those files in a student-facing distribution unless you intend students to receive the instructor notes. Keep the student-facing repository or copy limited to materials students should see.

## Course status

This curriculum is being built out phase by phase. Phase 1 currently has lesson guides and exercise instructions; later phase folders provide the planned structure and will be filled in as the course develops.
# Exercise 3 — Props Drill

Practice passing different data from a parent component to reusable child components.

## Goal

Update your `CourseCard` component so each card can display its own course information using props.

## Where to work

Continue in the React project in the [Phase 1 demos folder](../../demos/), using the `CourseCard` component from [Exercise 2 — Extract a Component](../02-extract-component/README.md). If you have not completed that exercise, create `CourseCard` in `src/CourseCard.jsx` first.

## Task

Show at least three courses. Give each course a title, topic, and lesson count, and pass those values to `CourseCard` from `App`.

## Requirements

- `CourseCard` accepts `title`, `topic`, and `lessonCount` props.
- Display all three values in each card.
- Render at least three `CourseCard` components with different prop values.
- Pass `lessonCount` as a number, not as quoted text.
- Use destructuring to read the props in the component parameter.
- Do not change the received props inside `CourseCard`.
- Confirm that all three cards render with their own information.

## Optional challenge

Add a `level` prop (such as "Beginner" or "Intermediate") and display it on each card.

## Optional hints

- The parent passes props as attributes on the component.
- Use quoted values for strings and curly braces for JavaScript values such as numbers.
- Destructure the props object in the function parameter so each value has a clear name.
- If a value is missing, check that the prop name is spelled the same in the parent and child.

## Done when

At least three cards display different course information, and you can explain which component supplies the props and which component reads them.

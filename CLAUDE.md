# Light Expo App

This is an Expo application.

## Tech Stack
- Expo

## Commands
- `bunx expo run:android` to run the app

## Rules
- Avoid using comments unless absolutely necessary
- Use bun instead of npm

#### React useEffect Guidelines
Before using `useEffect` read: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

Common cases where `useEffect` is NOT needed:
- Transforming data for rendering (use variables or useMemo instead)
- Handling user events (use event handlers instead)
- Resetting state when props change (use key prop or calculate during render)
- Updating state based on props/state changes (calculate during render)

Only use `useEffect` for:
- Synchronizing with external systems (APIs, DOM, third-party libraries)
- Cleanup that must happen when component unmounts

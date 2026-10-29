# CJD Guide

An Expo and React Native app about Creutzfeldt-Jakob disease.

## Start the app

- `npm start`: start Expo, then choose a device.
- `npm run web`: open the web version.
- `npx tsc --noEmit`: check TypeScript for errors.

## Where to edit

- `src/app/index.tsx`: homepage text and its three links. The small `HomeLink` function handles each button's hover, focus, and pressed states.
- `src/app/symptoms.tsx`: symptoms list.
- `src/app/likely-people.tsx`: risk factors.
- `src/app/diagnosis.tsx`: diagnosis information.
- `src/components/app-tabs.tsx`: mobile tabs and icons.
- `src/components/app-tabs.web.tsx`: web tabs.
- `src/constants/theme.ts`: light and dark colors.

Each page has its styles at the bottom. Spacing is written as numbers so you can see and change it directly.

`ContentScreen` provides scrolling, safe areas, and the page heading. `ThemedText` applies text styles and the current text color. `useTheme()` returns the light or dark colors. These helpers keep the common setup in one place.

Expo creates routes from filenames in `src/app`. To add a tab, create a page with a default exported function, then add its filename (without `.tsx`) to the mobile tabs and its URL to the web tabs.

The Figma concept is separate from the current implementation. This refactor does not apply its layout.

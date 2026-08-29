# BeerReact

Make website with beutiful Material UI 3 components with ease in react.

## Why?

BeerCss is a great css framework, but it lacks many great things that make component libraries great. BeerReact brings the best of both worlds together, making it easy to use the BeerCss framework in react with a great set of components.

## Installation

```bash
npm install @siemsiem/beerreact
```

After installation, you can import the components you need in your project. 
If you plan to use the dialogs and snackbars, you will need to wrap your app in the BeerProvider component.

```tsx
import { BeerProvider } from "@siemsiem/beerreact";

export default function App() {
  return (
    <BeerProvider>
      <YourApp />
    </BeerProvider>
  );
}
```

## Components

For a up to date list of components, check the [online storybook](https://6a42b161d347720a4abd308a-lkojdhxuiu.chromatic.com/).
Do note that some components do not have a storybook as they are more helpful as a utility component, such as `Space` (empty div used for spacing) and `TextAndIcon` (used by buttons and other components for displaying text and icons when its uncertain if any wil be provided).

## Feedback and help

If you have any feedback or need help, please create an issue or dm me on discord @siemvk.

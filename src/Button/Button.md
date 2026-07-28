# Button

`<Button>` is the main component for buttons in the library. It does not matter what type of button you want in 99% of cases you want a `<Button>`! 

## Usage

```jsx
import { Button } from '@siemsiem/beerreact';

<Button>Click me</Button>
```

You can use any HTML button attributes on the `<Button>` component, such as `onClick`, `disabled`, `type`, etc.

## Props

All props that are custom to the `<Button>` component are listed below. All other props will be passed down to the underlying HTML button element.

### Icon (Optional)

The material icon name that you want to use for the button. If no icon is provided, no icon will be rendered. If an icon is provided, it will be rendered to the left of the button text (unless the button has a shape or is a FAB, in which case the icon will be rendered without text).

```jsx
<Button icon="add">New</Button>
```

### Size (Generic) (Optional) 

see the generic docs for sizes.

### FAB (Optional)

The FAB prop can be `true` or `false`. If no FAB is provided, the button will render like a normal button. If FAB is `true`, the button will be a floating action button with only an icon inside. This is perfect for buttons that are used for actions like "add", "delete", etc.

> [!IMPORTANT]
> if you want the FAB button to be a circle or square, you must also provide the shape prop. If you do not provide the shape prop, the FAB button will be a button with an icon inside and slightly bigger padding.

```jsx
// FAB button
<Button fab icon="add" shape="circle"/>
```


### Shape (Optional)

The shape prop can be `circle` or `square`. If no shape is provided, the button will render like a normal button. With `circle`, the button will be a circle with only an icon inside, and with `square`, the button will be a square with only an icon inside.
This is perfect for buttons that are used for actions like "add", "delete", etc.

```jsx
// Circle button
<Button shape="circle" icon="add"/>
```

### advancedClasses (please don't) (optional) (deprecated) 

use classes other props provide directly instead of using it with the intended prop.
please don't use this.
I wont remove it but please don't use it.
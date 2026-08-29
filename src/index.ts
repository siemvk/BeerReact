import React from "react";
import "beercss";
import "material-dynamic-colors";

// form items
export { Checkbox, type CheckboxProps } from "./formItems/checkbox/checkbox"
export { Input, type InputProps } from "./formItems/input/input"
export { Radio, type RadioProps } from "./formItems/radio/radio"
export { Switch, type SwitchProps } from "./formItems/switch/switch"
export { Select, type SelectProps } from "./formItems/select/select"
export { Fieldset, type FieldsetProps } from "./formItems/fieldset/fieldset"
export { Slider, type SliderProps } from "./formItems/slider/slider"

// helpers
export { Tooltip, type TooltipProps } from "./helpers/tooltip"
export { AutoNavRail, type AutoNavRailProps } from "./helpers/smartNavRail"
export { Space, type SpaceProps } from "./helpers/space"
export { TextAndIcon, type TextIconProps } from "./helpers/textAndIcon"
export { menuHelper, type menuHelperProps, type menuItem, divider } from "./helpers/menu"

// providers
export { default as BeerProviders } from "./providers/beerProviders";
export { DialogContext, DialogProvider, useDialog, type DialogData, type DialogContextType } from "./providers/dialog"
export { ToastProvider, ToastContext, useToast } from "./providers/toast"

// others
export { Button, type ButtonProps } from "./Button/Button";
export { SplitButton, type SplitButtonProps as SplitButtonProps } from "./ButtonSplit/ButtonSplit";
export { Card, type CardProps } from "./card/card"
export { IconCard, type IconCardProps } from "./IconCard/IconCard"
export { Progress, type ProgressProps } from "./Progress/Progress"
export { List, type ListProps } from "./List/List"

// Navs
export { NavTabs, type NavTabsProps } from "./Navs/NavTabs/NavTabs"
export { NavBar, type NavBarProps } from "./Navs/NavBar/NavBar"
export { NavRail, NavRail as Nav, type NavRailProps, type NavProps, type navItem } from "./Navs/NavRail/NavRail"
export { Flex, type FlexProps } from "./Navs/Flex/Flex"
export { Steppers, type SteppersProps } from "./Navs/steppers/Steppers"

// types
export type { size, pos, space, align, padding } from "./types"

// classnames
export { classNames } from "./classNames"

// html elements
export const Code = (props: React.ComponentPropsWithoutRef<"code">) => React.createElement("code", props);
export const Blockquote = (props: React.ComponentPropsWithoutRef<"blockquote">) => React.createElement("blockquote", props);



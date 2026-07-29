import { InputType } from "storybook/internal/csf"

export type size = "small" | "medium" | "large" | "extra"

export const sb_size: InputType = {
    control: "select",
    options: [
        "small", "medium", "large", "extra", undefined
    ],
    description: "The size defaults to medium. optional",
}

export type pos = "left" | "right" | "top" | "bottom" | ""

export const sb_pos: InputType = {
    control: "select",
    options: [
        "left", "right", "top", "bottom"
    ],
    description: 'waar'
}

export type space = "no-space" | "small-space" | "medium-space" | "large-space" | "space"

export const sb_space: InputType = {
    control: "select",
    options: [
        "no-space", "small-space", "medium-space", "large-space", undefined
    ],
    description: "The spacing between stuff",
}


export type align = "left-align" | "center-align" | "right-align" | "middle-align" | "top-align" | "bottom-align"

export const sb_align: InputType = {
    control: "select",
    options: [
        "left-align", "center-align", "right-align", "top-align", "bottom-align", undefined
    ],
    description: "How do we align stuff?",
}

export type padding = "padding" | "no-padding" | "tiny-padding" | "small-padding" | "medium-padding" | "large-padding"

export const sb_padding: InputType = {
    control: "select",
    options: [
        "padding", "no-padding", "tiny-padding", "small-padding", "medium-padding", "large-padding", undefined
    ],
    description: "The padding size",
}


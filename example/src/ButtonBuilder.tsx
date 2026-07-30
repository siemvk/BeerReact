import { useState } from "react"
import { Button, Fieldset, Radio, Checkbox, Input, Space, Card } from "../../src"
import { size } from "../../src/types"

export default function ButtonBuilder() {
    const [label, setLabel] = useState("My Button")
    const [icon, setIcon] = useState("add")
    const [btnSize, setBtnSize] = useState<size>("medium")
    const [variant, setVariant] = useState<"" | "primary" | "transparent" | "link" | "chip">("")
    const [shape, setShape] = useState<"" | "circle" | "square">("")
    const [rounding, setRounding] = useState<"" | "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round">("")
    const [ripple, setRipple] = useState<"" | "ripple" | "slow-ripple" | "fast-ripple">("")

    const [fab, setFab] = useState(false)
    const [extendedFab, setExtendedFab] = useState(false)
    const [active, setActive] = useState(false)
    const [responsive, setResponsive] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const [clickCount, setClickCount] = useState(0)
    const [copied, setCopied] = useState(false)

    const iconPresets = ["add", "search", "favorite", "check", "delete", "edit", "settings", "download", "send", "home"]

    // Construct generated JSX code snippet
    const propStrings: string[] = []
    if (btnSize && btnSize !== "medium") propStrings.push(`size="${btnSize}"`)
    if (variant) propStrings.push(`variant="${variant}"`)
    if (shape) propStrings.push(`shape="${shape}"`)
    if (rounding) propStrings.push(`rounding="${rounding}"`)
    if (ripple) propStrings.push(`ripple="${ripple}"`)
    if (icon) propStrings.push(`icon="${icon}"`)
    if (fab) propStrings.push(`FAB`)
    if (extendedFab) propStrings.push(`extendedFAB`)
    if (active) propStrings.push(`active`)
    if (responsive) propStrings.push(`responsive`)
    if (disabled) propStrings.push(`disabled`)

    const propsFormatted = propStrings.length > 0 ? " " + propStrings.join(" ") : ""
    const generatedCode = `<Button${propsFormatted}>${label}</Button>`

    const copyCode = () => {
        navigator.clipboard.writeText(generatedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <main className="responsive padding">
            <h2>Button Builder</h2>
            <p className="secondary-text">Configure props to test and generate code for the Button component.</p>
            <Space />

            {/* Live Preview Card */}
            <Card className="padding border center-align" style={{ minHeight: "160px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ padding: "20px" }}>
                    <Button
                        size={btnSize}
                        variant={variant || undefined}
                        shape={shape || undefined}
                        rounding={rounding || undefined}
                        ripple={ripple || undefined}
                        icon={icon || undefined}
                        FAB={fab}
                        extendedFAB={extendedFab}
                        active={active}
                        responsive={responsive}
                        disabled={disabled}
                        onClick={() => setClickCount(prev => prev + 1)}
                    >
                        {label}
                    </Button>
                </div>
                <div className="secondary-text text-small">
                    Clicks: {clickCount} {disabled && "(Disabled)"}
                </div>
            </Card>

            <Space />

            {/* Code Generator Output */}
            <Card className="padding">
                <div className="row center-align">
                    <span className="max bold">Generated Code</span>
                    <Button size="small" variant="transparent" icon={copied ? "check" : "content_copy"} onClick={copyCode}>
                        {copied ? "Copied!" : "Copy JSX"}
                    </Button>
                </div>
                <pre>
                    <code>{generatedCode}</code>
                </pre>
            </Card>

            <Space />

            {/* Controls Form Grid */}
            <div className="grid">
                {/* Content & Icon */}
                <Fieldset className="s12 m6 l6 padding" legend="Content & Icon">
                    <Input
                        label="Button Text"
                        value={label}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
                    />
                    <div hidden>

                        <Input
                            label="Icon Name (Material Symbol)"
                            value={icon}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIcon(e.target.value)}
                        />
                    </div>
                    <div className="row wrap" style={{ gap: "4px" }}>
                        <span className="secondary-text text-small" style={{ width: "100%" }}>Icon:</span>
                        {iconPresets.map(preset => (
                            <Button
                                key={preset}
                                size="small"
                                variant={icon === preset ? "primary" : "transparent"}
                                onClick={() => setIcon(preset)}
                            >
                                {preset}
                            </Button>
                        ))}
                        <Button
                            size="small"
                            variant={icon === "" ? "primary" : "transparent"}
                            onClick={() => setIcon("")}
                        >
                            (None)
                        </Button>
                    </div>
                </Fieldset>

                {/* Flags & Toggles */}
                <Fieldset className="s12 m6 l6 padding" legend="Options">
                    <div className="vertical" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Checkbox checked={fab} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFab(e.target.checked)}>
                            FAB (Floating Action Button)
                        </Checkbox>
                        <Checkbox checked={extendedFab} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExtendedFab(e.target.checked)}>
                            Extended FAB
                        </Checkbox>
                        <Checkbox checked={active} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActive(e.target.checked)}>
                            Active State
                        </Checkbox>
                        <Checkbox checked={responsive} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setResponsive(e.target.checked)}>
                            Responsive (Full Width on mobile)
                        </Checkbox>
                        <Checkbox checked={disabled} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisabled(e.target.checked)}>
                            Disabled
                        </Checkbox>
                    </div>
                </Fieldset>

                {/* Size */}
                <Fieldset legend="Size" className="s12 m6 l6">
                    <Radio name="size" value="small" checked={btnSize === "small"} onChange={() => setBtnSize("small")}>small</Radio>
                    <Radio name="size" value="medium" checked={btnSize === "medium"} onChange={() => setBtnSize("medium")}>medium</Radio>
                    <Radio name="size" value="large" checked={btnSize === "large"} onChange={() => setBtnSize("large")}>large</Radio>
                    <Radio name="size" value="extra" checked={btnSize === "extra"} onChange={() => setBtnSize("extra")}>extra</Radio>
                </Fieldset>

                {/* Shape */}
                <Fieldset legend="Shape" className="s12 m6 l6">
                    <Radio name="shape" value="" checked={shape === ""} onChange={() => setShape("")}>default</Radio>
                    <Radio name="shape" value="circle" checked={shape === "circle"} onChange={() => setShape("circle")}>circle</Radio>
                    <Radio name="shape" value="square" checked={shape === "square"} onChange={() => setShape("square")}>square</Radio>
                </Fieldset>

                {/* Variant */}
                <Fieldset legend="Variant" className="s12 m6 l6">
                    <Radio name="variant" value="" checked={variant === ""} onChange={() => setVariant("")}>default (fill)</Radio>
                    <Radio name="variant" value="primary" checked={variant === "primary"} onChange={() => setVariant("primary")}>primary</Radio>
                    <Radio name="variant" value="transparent" checked={variant === "transparent"} onChange={() => setVariant("transparent")}>transparent</Radio>
                    <Radio name="variant" value="link" checked={variant === "link"} onChange={() => setVariant("link")}>link</Radio>
                    <Radio name="variant" value="chip" checked={variant === "chip"} onChange={() => setVariant("chip")}>chip</Radio>
                </Fieldset>

                {/* Rounding */}
                <Fieldset legend="Rounding" className="s12 m6 l6">
                    <Radio name="rounding" value="" checked={rounding === ""} onChange={() => setRounding("")}>default</Radio>
                    <Radio name="rounding" value="round" checked={rounding === "round"} onChange={() => setRounding("round")}>round</Radio>
                    <Radio name="rounding" value="no-round" checked={rounding === "no-round"} onChange={() => setRounding("no-round")}>no-round</Radio>
                    <Radio name="rounding" value="left-round" checked={rounding === "left-round"} onChange={() => setRounding("left-round")}>left-round</Radio>
                    <Radio name="rounding" value="right-round" checked={rounding === "right-round"} onChange={() => setRounding("right-round")}>right-round</Radio>
                    <Radio name="rounding" value="top-round" checked={rounding === "top-round"} onChange={() => setRounding("top-round")}>top-round</Radio>
                    <Radio name="rounding" value="bottom-round" checked={rounding === "bottom-round"} onChange={() => setRounding("bottom-round")}>bottom-round</Radio>
                </Fieldset>

                {/* Ripple */}
                <Fieldset legend="Ripple" className="s12 m12 l12">
                    <Radio name="ripple" value="" checked={ripple === ""} onChange={() => setRipple("")}>default</Radio>
                    <Radio name="ripple" value="ripple" checked={ripple === "ripple"} onChange={() => setRipple("ripple")}>ripple</Radio>
                    <Radio name="ripple" value="slow-ripple" checked={ripple === "slow-ripple"} onChange={() => setRipple("slow-ripple")}>slow-ripple</Radio>
                    <Radio name="ripple" value="fast-ripple" checked={ripple === "fast-ripple"} onChange={() => setRipple("fast-ripple")}>fast-ripple</Radio>
                </Fieldset>
            </div>
        </main>
    )
}
import { useState } from "react";
import { Card, Checkbox, Fieldset, Input, Radio, Select, Slider, Space, Switch } from "../../../src";

export default function FormsDemo() {
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState("option1");
    const [checkboxState, setCheckboxState] = useState(true);
    const [radioValue, setRadioValue] = useState("a");
    const [switchState, setSwitchState] = useState(true);
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <main className="responsive padding">
            <h2>Form Controls</h2>
            <p className="secondary-text">Test inputs, select menus, checkboxes, radio buttons, switches, and sliders.</p>
            <Space />

            <div className="grid">
                {/* Text Inputs */}
                <Card className="s12 m6 border padding">
                    <h5>Text Inputs</h5>
                    <Space />
                    <Input
                        label="Username"
                        iconPrefix="person"
                        value={inputValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    />
                    <Space />
                    <Input
                        label="Search Query"
                        iconPrefix="search"
                        iconSuffix="clear"
                        placeholder="Type to search..."
                    />
                    <Space />
                    <Input
                        label="Invalid Input Example"
                        invalid={true}
                        output="This field is required"
                        defaultValue="Invalid data"
                    />
                </Card>

                {/* Selection & Toggles */}
                <Card className="s12 m6 border padding">
                    <h5>Select & Switches</h5>
                    <Space />
                    <Select
                        label="Select Option"
                        value={selectValue}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value)}
                    >
                        <option value="option1">Option 1 - Default</option>
                        <option value="option2">Option 2 - Secondary</option>
                        <option value="option3">Option 3 - Advanced</option>
                    </Select>

                    <Space />

                    <div className="row center-align" style={{ justifyContent: "space-between" }}>
                        <span>Toggle Switch (State: {switchState ? "ON" : "OFF"})</span>
                        <Switch
                            icon={switchState ? "check" : "close"}
                            checked={switchState}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSwitchState(e.target.checked)}
                        />
                    </div>

                    <Space />

                    <div className="row center-align" style={{ justifyContent: "space-between" }}>
                        <span>Checkbox (State: {checkboxState ? "Checked" : "Unchecked"})</span>
                        <Checkbox
                            checked={checkboxState}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckboxState(e.target.checked)}
                        >
                            Enable feature
                        </Checkbox>
                    </div>
                </Card>

                {/* Radio Fieldset & Sliders */}
                <Card className="s12 m6 border padding">
                    <h5>Fieldset & Radio Group</h5>
                    <Space />
                    <Fieldset legend="Select Choice">
                        <Radio name="demoRadio" value="a" checked={radioValue === "a"} onChange={() => setRadioValue("a")}>Choice A</Radio>
                        <Radio name="demoRadio" value="b" checked={radioValue === "b"} onChange={() => setRadioValue("b")}>Choice B</Radio>
                        <Radio name="demoRadio" value="c" checked={radioValue === "c"} onChange={() => setRadioValue("c")}>Choice C</Radio>
                    </Fieldset>
                </Card>

                <Card className="s12 m6 border padding">
                    <h5>Range Slider</h5>
                    <Space />
                    <div>
                        <span className="secondary-text">Slider Value: {sliderValue}%</span>
                        <Slider
                            value={sliderValue}
                            min={0}
                            max={100}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSliderValue(Number(e.target.value))}
                        />
                    </div>
                </Card>
            </div>
        </main>
    );
}

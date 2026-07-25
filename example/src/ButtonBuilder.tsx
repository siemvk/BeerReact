import { useRef, useState } from "react"
import { Button, ButtonProps, Fieldset, Radio } from "../../src"
import { size } from "../../src/types"

export default function ButtonBuilder() {
    const [buttonProsp, setButtonProsp] = useState({} as ButtonProps)
    const form = useRef<HTMLFormElement>(null);
    const update = () => {
        // "small" | "medium" | "large" | "extra"
        console.log("klik")
        if (form.current) {
            const data = new FormData(form.current);
            let output = "";
            for (const entry of data) {
                output = `${entry}`;
                console.log(output)
                if (entry[0] !== "forms") {

                    setButtonProsp({
                        ...buttonProsp,

                        [entry[0]]: entry[1],
                    })
                }
                else {
                    setButtonProsp({
                        ...buttonProsp,
                        advancedClasses: [entry[1]] as ButtonProps["advancedClasses"]
                    })
                }
            }
        } else {
            alert("form not found")
        }
    }
    return <main className="responsive">
        <div className="grid">

            <form ref={form}>
                <Fieldset legend="size" onChange={update} id="size" className="s6">
                    <Radio name="size" value={"small"}>small</Radio>
                    <Radio name="size" value={"medium"} defaultChecked={true}>medium</Radio>
                    <Radio name="size" value={"large"}>large</Radio>
                    <Radio name="size" value={"extra"}>extra</Radio>
                </Fieldset>
                {/* "border" | "circle" | "square" | "round"  */}
                <Fieldset legend="forms" onChange={update} id="forms" className="s6">
                    <Radio name="forms" value={"border"}>border</Radio>
                    <Radio name="forms" value={"circle"} defaultChecked={true}>circle</Radio>
                    <Radio name="forms" value={"square"}>square</Radio>
                    <Radio name="forms" value={"round"}>round</Radio>
                </Fieldset>
            </form>
        </div>
        <div style={{
            margin: "2rem",
            textAlign: "center"
        }}>
            <Button {...buttonProsp}>
                My Button
                <div className="badge">10</div>

            </Button>
        </div>
    </main>
}
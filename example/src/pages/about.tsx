import { Button, Card, IconCard, List, Progress, Space, TextAndIcon } from "../../../src";

export default function About() {
    return (
        <main className="responsive padding">
            <nav className="center-align vertical">
                <Space size="large-space" />
                <Space size="large-space" />

                <div className="center-align">
                    <i className="extra"><img src="https://cdn.hackclub.com/01a05816-8d0f-7c64-a740-a07a95220581/20260525_143827.jpg" alt="My cat"></img></i>

                    <h2>BeerReact</h2>
                    <p className="secondary-text">Because I cant remember classes.</p>
                </div>

                <Space size="large-space" />


                {/* feat grid */}
                <div className="grid">
                    <Card className="s12 m6">
                        <nav className="primary-container small-padding min square">
                            <i className="extra fill">code</i>
                        </nav>
                        <h5>Typesafe</h5>
                        <p className="secondary-text">All components are written in TypeScript, so you get type safety and autocompletion out of the box.</p>
                    </Card>
                    <Card className="s12 m6">
                        <nav className="primary-container small-padding min square">
                            <i className="extra fill">bolt</i>
                        </nav>
                        <h5>Lightweight</h5>
                        <p className="secondary-text">BeerReact is a lightweight wrapper around BeerCSS, wich is itself a lightweight CSS framework, so you can be sure that your website loads fast.</p>
                    </Card>
                    <Card className="s12 m6">
                        <nav className="primary-container small-padding min square">
                            <i className="extra fill">brush</i>
                        </nav>
                        <h5>Customizable</h5>
                        <p className="secondary-text">If you need to do something that isn't covered by the default components, you can easily make your own.</p>
                    </Card>
                    <Card className="s12 m6">
                        <nav className="primary-container small-padding min square">
                            <i className="extra fill">open_in_new</i>
                        </nav>
                        <h5>Open Source</h5>
                        <p className="secondary-text">BeerReact is open source, so you can contribute to it and make it even better.</p>
                    </Card>
                </div>
                <p className="secondary-text">And its the only one to feature my cat!</p>
            </nav>
        </main >
    );
}

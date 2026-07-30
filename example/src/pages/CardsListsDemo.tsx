import { Button, Card, IconCard, List, Progress, Space } from "../../../src";

export default function CardsListsDemo() {
    return (
        <main className="responsive padding">
            <h2>Cards, Lists & Progress</h2>
            <p className="secondary-text">Test Cards, IconCards, List items, and Progress bar indicators.</p>
            <Space />

            <div className="grid">
                {/* Cards Section */}
                <Card className="s12 m6 border padding">
                    <h5>Standard Card</h5>
                    <p>Cards contain content and actions about a single subject.</p>
                    <Space />
                    <nav className="right-align">
                        <Button variant="transparent">Secondary</Button>
                        <Button variant="primary">Action</Button>
                    </nav>
                </Card>

                {/* IconCard Section */}
                <div className="s12 m6">
                    <IconCard icon="star" text="Icon Card Title" />
                </div>

                {/* List Section */}
                <Card className="s12 m6 border padding">
                    <h5>List Component</h5>
                    <Space />
                    <List border={true}>
                        <li>
                            <i>folder</i>
                            <div className="max">
                                <div className="bold">Item One</div>
                                <div className="secondary-text text-small">Description line for item 1</div>
                            </div>
                        </li>
                        <li>
                            <i>file_present</i>
                            <div className="max">
                                <div className="bold">Item Two</div>
                                <div className="secondary-text text-small">Description line for item 2</div>
                            </div>
                        </li>
                        <li>
                            <i>star</i>
                            <div className="max">
                                <div className="bold">Item Three</div>
                                <div className="secondary-text text-small">Description line for item 3</div>
                            </div>
                        </li>
                    </List>
                </Card>

                {/* Progress Section */}
                <Card className="s12 m6 border padding">
                    <h5>Progress Indicators</h5>
                    <Space />
                    <div className="vertical" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div>
                            <span className="secondary-text text-small" style={{ display: "block", marginBottom: "8px" }}>Indeterminate Line Progress:</span>
                            <Progress circle={false} indeterminate={true} />
                        </div>
                        <div>
                            <span className="secondary-text text-small" style={{ display: "block", marginBottom: "8px" }}>Wavy Line Progress:</span>
                            <Progress circle={false} wavy={true} indeterminate={true} />
                        </div>
                        <div>
                            <span className="secondary-text text-small" style={{ display: "block", marginBottom: "8px" }}>Circle Progress:</span>
                            <Progress circle={true} indeterminate={true} />
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}

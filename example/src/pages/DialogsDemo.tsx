import { Button, Card, Space, useDialog, useToast } from "../../../src";

export default function DialogsDemo() {
    const { addToast } = useToast();
    const { pushDialog, closeDialog } = useDialog();

    const showBasicToast = () => {
        addToast({
            text: "This is a basic toast notification!"
        });
    };

    const showIconToast = () => {
        addToast({
            text: "Saved changes successfully",
            icon: "check_circle"
        });
    };

    const showErrorToast = () => {
        addToast({
            text: "Failed to connect to server",
            type: "error",
            icon: "error"
        });
    };

    const showActionToast = () => {
        addToast({
            text: "Item deleted from list",
            icon: "delete",
            action: {
                label: "Undo",
                onClick: () => {
                    addToast({
                        text: "Deletion undone",
                        icon: "undo"
                    });
                }
            }
        });
    };

    const showSimpleDialog = () => {
        pushDialog({
            content: (
                <div className="padding">
                    <h5>Simple Dialog</h5>
                    <p>This is a standard modal dialog triggered using the <code>useDialog</code> hook and HTML Popover API.</p>
                    <nav className="right-align">
                        <Button variant="transparent" onClick={closeDialog}>Close</Button>
                    </nav>
                </div>
            )
        });
    };

    const showConfirmDialog = () => {
        pushDialog({
            content: (
                <div className="padding">
                    <h5>Confirm Action</h5>
                    <p>Are you sure you want to delete this project? This action cannot be undone.</p>
                    <nav className="right-align">
                        <Button variant="transparent" onClick={closeDialog}>Cancel</Button>
                        <Button variant="primary" onClick={() => {
                            closeDialog();
                            addToast({ text: "Project deleted", icon: "delete" });
                        }}>Delete</Button>
                    </nav>
                </div>
            )
        });
    };

    const showBottomDialog = () => {
        pushDialog({
            pos: "bottom",
            content: (
                <div className="padding">
                    <h5>Bottom Sheet Dialog</h5>
                    <p>Positioned at the bottom of the screen using HTML Popover API.</p>
                    <nav className="right-align">
                        <Button onClick={closeDialog}>Done</Button>
                    </nav>
                </div>
            )
        });
    };

    return (
        <main className="responsive padding">
            <h2>Dialogs & Toasts</h2>
            <p className="secondary-text">Interactive playground to test modals, dialogs, and toast notifications.</p>
            <Space />

            <div className="grid">
                {/* Toasts Section */}
                <Card className="s12 m6 border padding">
                    <h5>Toast Notifications</h5>
                    <p className="secondary-text">Trigger floating toast messages at the bottom of the screen.</p>
                    <Space />
                    <div className="vertical" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Button icon="info" variant="transparent" onClick={showBasicToast}>
                            Show Basic Toast
                        </Button>
                        <Button icon="check" onClick={showIconToast}>
                            Show Success/Icon Toast
                        </Button>
                        <Button icon="warning" onClick={showErrorToast}>
                            Show Error Toast
                        </Button>
                        <Button icon="restore" onClick={showActionToast}>
                            Show Toast with Action
                        </Button>
                    </div>
                </Card>

                {/* Dialogs Section */}
                <Card className="s12 m6 border padding">
                    <h5>Modal Dialogs</h5>
                    <p className="secondary-text">Open modal dialog overlays for user interactions.</p>
                    <Space />
                    <div className="vertical" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Button icon="chat_bubble" variant="transparent" onClick={showSimpleDialog}>
                            Open Simple Dialog
                        </Button>
                        <Button icon="help" onClick={showConfirmDialog}>
                            Open Confirmation Dialog
                        </Button>
                        <Button icon="vertical_align_bottom" onClick={showBottomDialog}>
                            Open Bottom Sheet Dialog
                        </Button>
                    </div>
                </Card>
            </div>
        </main>
    );
}

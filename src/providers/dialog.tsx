import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import React from 'react';
import { pos } from "../types";

export interface DialogData {
    content: ReactNode;
    pos?: pos;
    className?: string;
    popover?: "" | "auto" | "manual";
}

export interface DialogContextType {
    pushDialog: (dialog: DialogData) => void;
    closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextType>({
    pushDialog: () => { },
    closeDialog: () => { },
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [dialog, setDialog] = useState<DialogData>({
        content: null,
    });

    const closeDialog = () => {
        try {
            if (dialogRef.current && typeof dialogRef.current.hidePopover === "function") {
                dialogRef.current.hidePopover();
            }
        } catch {
            // In case popover is already hidden or not supported
        }
    };

    const pushDialog = (dialogData: DialogData) => {
        setDialog(dialogData);
        requestAnimationFrame(() => {
            try {
                if (dialogRef.current && typeof dialogRef.current.showPopover === "function") {
                    if (!dialogRef.current.matches?.(":popover-open")) {
                        dialogRef.current.showPopover();
                    }
                }
            } catch {
                // In case popover is already open or not supported
            }
        });
    };

    const classNamesList = [dialog.pos, dialog.className].filter(Boolean).join(" ");

    return (
        <DialogContext.Provider value={{ pushDialog, closeDialog }}>
            {children}
            <dialog
                ref={dialogRef}
                id="dialog"
                popover={dialog.popover ?? "auto"}
                className={classNamesList || undefined}
            >
                {dialog.content}
            </dialog>
        </DialogContext.Provider>
    );
};
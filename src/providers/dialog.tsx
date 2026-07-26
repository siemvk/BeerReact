import { createContext, useContext, type ReactNode, useState } from "react";

import React from 'react';
import TextAndIcon from "../helpers/textAndIcon";
import { pos } from "../types";
import { Button } from "../Button/Button";


export interface DialogData {
    content: any,
    pos?: pos
}

export const DialogContext = createContext<{ pushDialog: (toast: Omit<DialogData, 'id'>) => void }>({
    pushDialog: () => { },
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [dialog, setDialog] = useState<DialogData>({
        content: <><h1>Error!</h1><p>The dialog has not been set. please report this to the beer css react</p></>
    });

    const pushDialog = (dialog: DialogData) => {
        setDialog(dialog);
        ui("#dialog")
    };

    return (
        <DialogContext.Provider value={{ pushDialog: pushDialog }}>
            {children}
            <dialog id="dialog" className={`${dialog.pos} `} data-ui="#dialog">
                {dialog.content}
            </dialog>
        </DialogContext.Provider>
    );
};
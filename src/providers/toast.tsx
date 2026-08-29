import { createContext, useContext, type ReactNode, useState } from "react";
import { classNames } from ".."

import React from 'react';
import TextAndIcon from "../helpers/textAndIcon";
import { randomUUID } from "node:crypto";

export type ToastType = "" | "error" | "primary" | "secondary" | "tertiary";

export interface ToastData {
    text: string;
    type?: ToastType;
    icon?: string;
    // Optionele actieknop
    action?: {
        label: string;
        onClick: React.MouseEventHandler<HTMLElement>;
    };
}

export const ToastContext = createContext<{ addToast: (toast: Omit<ToastData, 'id'>) => void }>({
    addToast: () => { },
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toast, setToast] = useState<ToastData>({
        text: "Please make a github issue that you can see this",
        type: "error"
    });

    const addToast = (toast: ToastData) => {
        setToast(toast)
        ui("#toastIam")
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="toast-container">
                <div className={`snackbar ${toast.type || ""}`} id={"toastIam"}>
                    <div className="max">
                        <TextAndIcon
                            icon={toast.icon}>
                            {toast.text}
                        </TextAndIcon>
                    </div>
                    {toast.action &&
                        <a className="inverse-primary-text"
                            onClick={(e) => {
                                e.preventDefault();
                                toast.action?.onClick(e);
                            }}
                        >
                            {toast.action.label}
                        </a>
                    }
                </div>
            </div>
        </ToastContext.Provider>
    );
};
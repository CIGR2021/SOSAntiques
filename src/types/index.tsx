
import { Dispatch, ReactNode, SetStateAction } from "react";

export type AppProviderProps = {
    children: ReactNode,
};

export type AuthenticationType = {
    isAuthenticated: boolean,
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
    showMainMenu: boolean,
    setShowMainMenu: Dispatch<SetStateAction<boolean>>,
    showMenuAside: boolean,
    setShowMenuAside: Dispatch<SetStateAction<boolean>>
};

export type CalculatorType = {
    hideOnUnmount: boolean,
    setHideOnUnmount: Dispatch<SetStateAction<boolean>>,
    result: string,
    setResult: Dispatch<SetStateAction<string>>,
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    expression: string,
    setExpression: Dispatch<SetStateAction<string>>,
    constants: {
        verticalSpace: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | undefined,
        horizontalSpace: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | undefined,
        sizeButton: "xs" | "sm" | "md" | "lg" | "xl" | undefined,
        sizeText: "xs" | "sm" | "md" | "lg" | "xl" | undefined
    },
    calculator: {
        ligar: () => void,
        desligar: () => void,
        add: (str: string | number) => void,
        remove: () => void,
        clear: () => void,
        calc: () => void,
        clearMessage: () => void
    }
};
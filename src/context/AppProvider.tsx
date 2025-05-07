// Authenticatio Context
import { createContext, useCallback, useContext, useState } from "react";
import * as math from 'mathjs';
import Message from "../utils/enum/Message.enum";
import { AppProviderProps, AuthenticationType, CalculatorType } from "../types";

// Contexts
export const AuthenticationContext = createContext({} as AuthenticationType);
export const CalculatorContext = createContext({} as CalculatorType); 

export const AppProvider = ({children}: AppProviderProps) => {
    // State Auth
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [showMainMenu, setShowMainMenu] = useState<boolean>(false);
    const [showMenuAside, setShowMenuAside] = useState<boolean>(false);
    
    // State Calculator
    const [hideOnUnmount, setHideOnUnmount] = useState<boolean>(true);
    const [result, setResult] = useState<string>('0');
    const [message, setMessage] = useState<string>('');
    const [expression, setExpression] = useState<string>('0');
    const verticalSpace = "md" as const
    const horizontalSpace = "sm" as const
    const sizeButton = 'md' as const
    const sizeText = 'lg' as const

    const ligar = useCallback(() => {
        setHideOnUnmount(false);
        setExpression('0');
        setMessage(hideOnUnmount ? Message.called : Message.connected);
        setResult('0');
    }, [hideOnUnmount]);

    const desligar = useCallback(() => {
        setHideOnUnmount(true);
        setExpression('0');
        setMessage(hideOnUnmount ? Message.connected : Message.hangUp);
        setResult('0');
    }, [hideOnUnmount]);
    
    const add = useCallback((str: string | number) => {
        if (hideOnUnmount) return;

        const strValue = str.toString();

        // Se for operador
        if (['+', '-', '*', '/', 'x'].includes(strValue)) {
            setExpression((prev) => {
                if (prev === '0') {
                    setMessage(Message.empty);
                    return prev;
                }
                
                const lastChar = prev[prev.length - 1];
                if (['+', '-', '*', '/', 'x'].includes(lastChar)) {
                    return prev.slice(0, -1) + (strValue === '*' ? 'x' : strValue);
                }
                
                return prev + (strValue === '*' ? 'x' : strValue);
            });
            return;
        }

        // Se for ponto decimal
        if (strValue === '.') {
            setExpression((prev) => {
                const numbers = prev.split(/[+\-*/x]/);
                const lastNumber = numbers[numbers.length - 1];
                if (lastNumber.includes('.')) return prev;
                return prev === '0' ? '0.' : prev + '.';
            });
            return;
        }

        // Se for número
        setExpression((prev) => prev === '0' ? strValue : prev + strValue);
    }, [hideOnUnmount]);

    const remove = useCallback(() => {
        if (hideOnUnmount) {
            setMessage(Message.info);
            return;
        }

        setExpression((prev) => {
            if (prev.length <= 1 || prev === '00') return '0';
            return prev.slice(0, -1) || '0';
        });
    }, [hideOnUnmount]);
    
    const clear = useCallback(() => {
        if (hideOnUnmount) {
            setMessage(Message.info);
            return;
        }
        setExpression('0');
        setMessage('');
    }, [hideOnUnmount]);
    
    const calc = useCallback(() => {
        if (hideOnUnmount) {
            setMessage(Message.info);
            return;
        }

        try {
            if (expression === '0') {
                setMessage(Message.empty);
                return;
            }

            const lastChar = expression[expression.length - 1];
            if (['+', '-', '*', '/', 'x'].includes(lastChar)) {
                setMessage(Message.ivalid);
                return;
            }

            const firstChar = expression[0];
            if (['+', '*', '/', 'x'].includes(firstChar)) {
                setMessage(Message.ivalid);
                return;
            }

            const sanitizedExpression = expression.replace(/x/g, '*');
            const result = math.evaluate(sanitizedExpression);

            if (typeof result !== 'number' || !isFinite(result)) {
                setMessage(Message.errorCalc);
                return;
            }

            const formattedResult = Number(result.toFixed(8)).toString();
            setExpression(formattedResult);
            setResult(formattedResult);
        } catch (error) {
            setMessage(Message.errorExpression);
        }
    }, [expression, hideOnUnmount]);
    
    const clearMessage = useCallback(() => {
        if (message.length) setMessage('');
    }, [message]);

    const constants = {
        verticalSpace,
        horizontalSpace,
        sizeButton,
        sizeText
    }

    const calculator = {
        ligar,
        desligar,
        add,
        remove,
        clear,
        calc,
        clearMessage
    }

    const authProviderValue = {
        isAuthenticated,
        setIsAuthenticated,
        showMainMenu,
        setShowMainMenu,
        showMenuAside,
        setShowMenuAside
    }

    const calculatorProviderValue = {
        hideOnUnmount,
        setHideOnUnmount,
        result,
        setResult,
        message,
        setMessage,
        expression,
        setExpression,
        constants,
        calculator
    }

    return (
        <AuthenticationContext.Provider value={authProviderValue}>
          <CalculatorContext.Provider value={calculatorProviderValue}>
            {children}
          </CalculatorContext.Provider>
        </AuthenticationContext.Provider>
      );
}

export const useAuthentication = () => useContext(AuthenticationContext);
export const useCalculator = () => useContext(CalculatorContext);

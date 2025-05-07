// Authenticatio Context
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import * as math from 'mathjs';

type AppProviderProps = {
    children: ReactNode,
};

type AuthenticationType = {
    isAuthenticated: boolean,
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
    showMainMenu: boolean,
    setShowMainMenu: Dispatch<SetStateAction<boolean>>,
    showMenuAside: boolean,
    setShowMenuAside: Dispatch<SetStateAction<boolean>>
};

type CalculatorType = {
    isHiden: boolean,
    setIsHiden: Dispatch<SetStateAction<boolean>>,
    result: string,
    setResult: Dispatch<SetStateAction<string>>,
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    expression: string,
    setExpression: Dispatch<SetStateAction<string>>,
    constants: {
        spaceV: string,
        space: string,
        sizeButton: string,
        sizeText: string
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

export const AuthenticationContext = createContext({} as AuthenticationType);
export const CalculatorContext = createContext({} as CalculatorType); 

export const AppProvider = ({children}: AppProviderProps) => {
    // State Auth
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [showMainMenu, setShowMainMenu] = useState<boolean>(false);
    const [showMenuAside, setShowMenuAside] = useState<boolean>(false);
    
    // State Calculator
    const [isHiden, setIsHiden] = useState<boolean>(true);
    const [result, setResult] = useState<string>('0');
    const [message, setMessage] = useState<string>('');
    const [expression, setExpression] = useState<string>('0');
    const spaceV = "md" as const
    const space = "sm" as const
    const sizeButton = 'md' as const
    const sizeText = 'lg' as const

    const ligar = () => {
        setIsHiden(false);
        setExpression('0');
        setMessage('');
        setResult('0');
    }

    const desligar = () => {
        setIsHiden(true);
        setExpression('0');
        setResult('0');
    }
    
    const add = (str: string | number) => {
        if (isHiden) {
            return;
        }

        const strValue = str.toString();
        
        // Se for um operador
        if (['+', '-', '*', '/', 'x'].includes(strValue)) {
            setExpression(prev => {
                // Se a expressão estiver vazia ou for '0', não adiciona
                if (prev === '0') {
                    return prev;
                }
                
                // Se o último caractere for um operador, substitui pelo novo operador
                const lastChar = prev[prev.length - 1];
                if (['+', '-', '*', '/', 'x'].includes(lastChar)) {
                    return prev.slice(0, -1) + (strValue === '*' ? 'x' : strValue);
                }
                
                // Adiciona o operador à expressão
                return prev + (strValue === '*' ? 'x' : strValue);
            });
            return;
        }

        // Se for ponto decimal
        if (strValue === '.') {
            setExpression(prev => {
                // Verifica se já existe um ponto no último número
                const numbers = prev.split(/[+\-*/x]/);
                const lastNumber = numbers[numbers.length - 1];
                if (lastNumber.includes('.')) {
                    return prev;
                }
                return prev === '0' ? '0.' : prev + '.';
            });
            return;
        }

        // Se for número
        setExpression(prev => {
            // Se a expressão for '0', substitui pelo número
            if (prev === '0') {
                return strValue;
            }
            
            // Se for zero duplo
            if (strValue === '00') {
                if (prev === '0') {
                    return '00';
                }
            }
            
            // Concatena o número
            return prev + strValue;
        });
    }

    const remove = () => {
        if (isHiden) {
            return;
        }

        setExpression(prev => {
            // Se tiver apenas um dígito ou for '00', retorna '0'
            if (prev.length <= 1 || prev === '00') {
                return '0';
            }
            
            // Remove o último caractere mantendo o resto da expressão
            const newExpression = prev.slice(0, -1);
            
            // Se a expressão ficar vazia, retorna '0'
            return newExpression === '' ? '0' : newExpression;
        });
    }
    
    const clear = () => {
        if (isHiden) {
            return;
        }
        setExpression('0');
        setMessage('');
    }
    
    const calc = () => {
        if (isHiden) {
            return;
        }

        try {
            // Verifica se a expressão é válida
            if (expression === '0') {
                return;
            }

            // Verifica se a expressão termina com um operador
            const lastChar = expression[expression.length - 1];
            if (['+', '-', '*', '/', 'x'].includes(lastChar)) {
                setMessage('Expressão inválida');
                return;
            }

            // Verifica se a expressão começa com operador (exceto sinal negativo)
            const firstChar = expression[0];
            if (['+', '*', '/', 'x'].includes(firstChar)) {
                setMessage('Expressão inválida');
                return;
            }

            // Substitui 'x' por '*' para compatibilidade com mathjs
            const sanitizedExpression = expression.replace(/x/g, '*');
            
            // Avalia a expressão usando mathjs
            const result = math.evaluate(sanitizedExpression);
            
            // Verifica se o resultado é um número válido
            if (typeof result !== 'number' || !isFinite(result)) {
                setMessage('Erro no cálculo');
                return;
            }

            // Formata o resultado para evitar números muito longos
            const formattedResult = Number(result.toFixed(8)).toString();
            setExpression(formattedResult);
            setResult(formattedResult);
        } catch (error) {
            setMessage('Erro na expressão');
        }
    }
    
    const clearMessage = () => {
        message.length && setMessage('');
    }

    const constants = {
        spaceV,
        space,
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
        isHiden,
        setIsHiden,
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

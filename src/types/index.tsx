import { IIconComponentType } from '@gluestack-ui/icon/lib/createIcon';
import { LucideProps } from 'lucide-react-native';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IField {
  title: String | any;
  type: String | any;
  placeholder: String | any;
  icon: String | any;
  message: String | any;
  size: String | any;
  keyType?: String | any;
}

export interface ButtonProps {
  title: string;
}

export interface ICalcButton {
  onPress?: () => void;
  title?: string | undefined;
  testID?: string | undefined;
  disabled?: boolean;
  icon?: IIconComponentType<LucideProps> | undefined;
  type?: 'AC' | 'operation' | 'off' | 'equals' | 'default'; // Adicione o tipo
}

export type AppProviderProps = {
  children: ReactNode;
};

export type AuthenticationType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  showMainMenu: boolean;
  setShowMainMenu: Dispatch<SetStateAction<boolean>>;
  showMenuAside: boolean;
  setShowMenuAside: Dispatch<SetStateAction<boolean>>;
};

export type CalculatorType = {
  hideOnUnmount: boolean;
  setHideOnUnmount: Dispatch<SetStateAction<boolean>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  expression: string;
  setExpression: Dispatch<SetStateAction<string>>;
  constants: {
    verticalSpace:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | undefined;
    horizontalSpace:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | undefined;
    sizeButton: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    sizeText: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  };
  calculator: {
    ligar: () => void;
    desligar: () => void;
    add: (str: string | number) => void;
    remove: () => void;
    clear: () => void;
    calc: () => void;
    clearMessage: () => void;
  };
};

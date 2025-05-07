import { PlayIcon } from "lucide-react-native";

export const getButtonLayout = (handleButtonPress: (value: string | number) => void, calculator: any, setMessage: (msg: string) => void) => [
    // Fila 5
    [
        { icon: PlayIcon, onPress: () => calculator.remove(), testID: "remove-button" },
        { title: "MRC", disabled: true },
        { title: "M-", disabled: true },
        { title: "M+", disabled: true },
        { title: "OFF", onPress: () => calculator.desligar(), testID: "off-button" },
    ],
    // Fila 4
    [
        { title: "%", disabled: true },
        { title: "7", onPress: () => handleButtonPress(7), testID: "number-7" },
        { title: "8", onPress: () => handleButtonPress(8), testID: "number-8" },
        { title: "9", onPress: () => handleButtonPress(9), testID: "number-9" },
        { title: "/", onPress: () => handleButtonPress("/"), testID: "divide-button" },
    ],
    // Fila 3
    [
        { title: "+/-", disabled: true },
        { title: "4", onPress: () => handleButtonPress(4), testID: "number-4" },
        { title: "5", onPress: () => handleButtonPress(5), testID: "number-5" },
        { title: "6", onPress: () => handleButtonPress(6), testID: "number-6" },
        { title: "x", onPress: () => handleButtonPress("*"), testID: "multiply-button" },
    ],
    // Fila 2
    [
        { title: "AC", onPress: () => calculator.ligar(), testID: "ac-button", isBaseButton: true },
        { title: "1", onPress: () => handleButtonPress(1), testID: "number-1", isBaseButton: true },
        { title: "2", onPress: () => handleButtonPress(2), testID: "number-2", isBaseButton: true },
        { title: "3", onPress: () => handleButtonPress(3), testID: "number-3", isBaseButton: true },
        { title: "-", onPress: () => handleButtonPress("-"), testID: "subtract-button", isBaseButton: true },
    ],
    // Fila 1
    [
        { title: "0", onPress: () => handleButtonPress(0), testID: "number-0", isBaseButton: true },
        { title: "00", onPress: () => handleButtonPress("00"), testID: "number-00", isBaseButton: true },
        { title: ".", onPress: () => handleButtonPress("."), testID: "decimal-button", isBaseButton: true },
        { title: "=", onPress: calculator.calc, testID: "equals-button", isBaseButton: true },
        { title: "+", onPress: () => handleButtonPress("+"), testID: "add-button", isBaseButton: true },
    ],
];

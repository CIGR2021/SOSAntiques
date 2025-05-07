import React from "react";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { useCalculator } from "../context/AppProvider";
import { IIconComponentType } from "@gluestack-ui/icon/lib/createIcon";
import { LucideProps } from "lucide-react-native";

interface ICalcButton {
    onPress?: () => void,
    title?: string | undefined,
    testID?: string | undefined,
    disabled?: boolean,
    icon?: IIconComponentType<LucideProps> | undefined
}

const CalcButton = ({ onPress, title, testID = undefined, disabled = false, icon } : ICalcButton) => {
    const {constants} = useCalculator()

    return (
        <Button
            onPress={onPress} 
            size={constants.sizeButton} 
            variant={disabled ? 'outline' : 'solid'} 
            testID={testID}
            disabled={disabled}
        >
            {icon ? (
                <ButtonIcon as={icon} />
            ) : (
                <ButtonText size={constants.sizeText}>{title}</ButtonText>
            )}
        </Button>
    )
};

export default CalcButton;

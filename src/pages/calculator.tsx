import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { PlayIcon } from "lucide-react-native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { useCalculator } from "../context/AppProvider";
import { justifyBetween, styleContainer, styleMessage, styleTitle } from "@/src/styles";

const Calculator = () => {
    const {message, setMessage, isHiden, setIsHiden, expression, constants, calculator} = useCalculator()

    useEffect(() => {
        if (message) {
            const timeoutId = setTimeout(() => {
                calculator.clearMessage();
            }, 5000);
            return () => clearTimeout(timeoutId);
        }
    }, [message, calculator]);

    useEffect(() => {return () => setIsHiden(true)},[setIsHiden])

    const handleButtonPress = (value: string | number) => {
        calculator.add(value);
    }

    return (
        <Card className={styleContainer} variant="outline" size="lg">
            <Box className={styleTitle} testID="calculator-display">
                {!isHiden && <Text testID="display-text">{expression}</Text>}
            </Box>
            {message && <Heading className={styleMessage} testID="calculator-message" size="xl">{message}</Heading>}
            <Center>
                <VStack space={constants.spaceV}>
                    {/* Fila 5 */}
                    <HStack space={constants.space} className={justifyBetween}>
                        <Button onPress={() => calculator.remove()} size={constants.sizeButton} testID="remove-button">
                            <ButtonIcon as={PlayIcon} />
                        </Button>
                        <Button size={constants.sizeButton}>
                            <ButtonText size={constants.sizeText}>MRC</ButtonText>
                        </Button>
                        <Button size={constants.sizeButton}>
                            <ButtonText size={constants.sizeText}>M-</ButtonText>
                        </Button>
                        <Button size={constants.sizeButton}>
                            <ButtonText size={constants.sizeText}>M+</ButtonText>
                        </Button>
                        <Button onPress={() => calculator.desligar()} size={constants.sizeButton} testID="off-button">
                            <ButtonText size={constants.sizeText}>OFF</ButtonText>
                        </Button>
                    </HStack>
                    {/* Fila 4 */}
                    <HStack space={constants.space} className={justifyBetween}>
                        <Button onPress={() => setMessage('Not Implemented')} size={constants.sizeButton} testID="percent-button">
                            <ButtonText size={constants.sizeText}> % </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(7)} size={constants.sizeButton} testID="number-7">
                            <ButtonText size={constants.sizeText}> 7 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(8)} size={constants.sizeButton} testID="number-8">
                            <ButtonText size={constants.sizeText}> 8 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(9)} size={constants.sizeButton} testID="number-9">
                            <ButtonText size={constants.sizeText}> 9 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress('/')} size={constants.sizeButton} testID="divide-button">
                            <ButtonText size={constants.sizeText}> / </ButtonText>
                        </Button>
                    </HStack>
                    {/* Fila 3 */}
                    <HStack space={constants.space} className={justifyBetween}>
                        <Button size={constants.sizeButton}>
                            <ButtonText size={constants.sizeText}>+/-</ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(4)} size={constants.sizeButton} testID="number-4">
                            <ButtonText size={constants.sizeText}> 4 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(5)} size={constants.sizeButton} testID="number-5">
                            <ButtonText size={constants.sizeText}> 5 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(6)} size={constants.sizeButton} testID="number-6">
                            <ButtonText size={constants.sizeText}> 6 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress('*')} size={constants.sizeButton} testID="multiply-button">
                            <ButtonText size={constants.sizeText}> x </ButtonText>
                        </Button>
                    </HStack>
                    {/* Fila 2 */}
                    <HStack space={constants.space} className={justifyBetween}>
                        <Button onPress={() => calculator.ligar()} size={constants.sizeButton} testID="ac-button">
                            <ButtonText size={constants.sizeText}>AC</ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(1)} size={constants.sizeButton} testID="number-1">
                            <ButtonText size={constants.sizeText}> 1 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(2)} size={constants.sizeButton} testID="number-2">
                            <ButtonText size={constants.sizeText}> 2 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress(3)} size={constants.sizeButton} testID="number-3">
                            <ButtonText size={constants.sizeText}> 3 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress('-')} size={constants.sizeButton} testID="subtract-button">
                            <ButtonText size={constants.sizeText}> - </ButtonText>
                        </Button>
                    </HStack>
                    {/* Fila 1 */}
                    <HStack space={constants.space} className={justifyBetween}>
                        <Button onPress={() => handleButtonPress(0)} size={constants.sizeButton} testID="number-0">
                            <ButtonText size={constants.sizeText}> 0 </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress('00')} size={constants.sizeButton} testID="number-00">
                            <ButtonText size={constants.sizeText}>00</ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress('.')} size={constants.sizeButton} testID="decimal-button">
                            <ButtonText size={constants.sizeText}> . </ButtonText>
                        </Button>
                        <Button onPress={calculator.calc} size={constants.sizeButton} testID="equals-button">
                            <ButtonText size={constants.sizeText}> = </ButtonText>
                        </Button>
                        <Button onPress={() => handleButtonPress('+')} size={constants.sizeButton} testID="add-button">
                            <ButtonText size={constants.sizeText}> + </ButtonText>
                        </Button>
                    </HStack>
                </VStack>
            </Center>
        </Card>
    );
}

export default Calculator;

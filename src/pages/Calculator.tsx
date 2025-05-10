import { Box } from '@gluestack/ui/box';
import { Card } from '@gluestack/ui/card';
import { Center } from '@gluestack/ui/center';
import { Heading } from '@gluestack/ui/heading';
import { HStack } from '@gluestack/ui/hstack';
import { VStack } from '@gluestack/ui/vstack';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useCalculator } from '../context/AppProvider';
import {
  justifyBetween,
  styleContainer,
  styleMessage,
  styleTitle,
} from '@/styles';
import CalcButton from '@/components/calc-button';
import { Text } from '@gluestack/ui/text';
import { getButtonLayout } from '@/config/buttonConfig';
import Message from '@/utils/enum/Message.enum';

const Calculator = () => {
  const {
    message,
    setMessage,
    hideOnUnmount,
    setHideOnUnmount,
    constants,
    calculator,
    result,
  } = useCalculator();
  const { clearMessage } = calculator;

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        clearMessage();
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [message, clearMessage]);

  useEffect(() => {
    return () => setHideOnUnmount(true);
  }, [setHideOnUnmount]);

  const handleButtonPress = useCallback(
    (value: string | number) => {
      if (!hideOnUnmount) {
        calculator.add(value);
      } else {
        setMessage(Message.info);
      }
    },
    [hideOnUnmount, calculator, setMessage],
  );

  const buttonLayout = useMemo(
    () => getButtonLayout(handleButtonPress, calculator),
    [handleButtonPress, calculator],
  );

  return (
    <Card className={styleContainer} variant="outline" size="lg">
      <Box className={styleTitle} testID="calculator-display">
        {!hideOnUnmount && <Heading testID="display-text">{result}</Heading>}
      </Box>

      {message && (
        <Text
          className={styleMessage(message)}
          testID="calculator-message"
          size="xl"
        >
          {message}
        </Text>
      )}

      <Center>
        <VStack space={constants.verticalSpace}>
          {buttonLayout.map((row, rowIndex) => (
            <HStack
              key={rowIndex}
              space={constants.horizontalSpace}
              className={justifyBetween}
            >
              {row.map((btn, idx) => (
                <CalcButton
                  key={idx}
                  title={btn.title}
                  onPress={btn.onPress}
                  disabled={btn.disabled}
                  testID={btn.testID}
                  icon={btn.icon}
                  type={btn.type}
                />
              ))}
            </HStack>
          ))}
        </VStack>
      </Center>
    </Card>
  );
};

export default Calculator;

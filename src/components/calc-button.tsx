import { useCalculator } from '@/context/AppProvider';
import { ICalcButton } from '@/types';
import { Button, ButtonIcon, ButtonText } from '@gluestack/ui/button';
import React from 'react';

const CalcButton = (props: ICalcButton) => {
  const { constants, hideOnUnmount: isDisplayOn } = useCalculator();

  // Defina as cores com base no tipo
  const getButtonColor = () => {
    switch (props.type) {
      case 'AC':
        return props.disabled ? '' : 'bg-green-600'; // Verde
      case 'operation':
        return props.disabled ? '' : 'bg-blue-600'; // Azul
      case 'off':
        return isDisplayOn ? 'bg-red-800' : ''; // Vermelho ou cinza
      case 'equals':
        return props.disabled ? '' : 'bg-blue-200'; // Azul mais escuro
      default:
        return ''; // Cor padrão
    }
  };

  return (
    <Button
      className={`rounded-full w-auto min-h-[50px] min-w-[60px] p-2 ${getButtonColor()}`} // Use a cor retornada
      onPress={props.onPress}
      size={constants.sizeButton}
      variant={props.disabled ? 'outline' : 'solid'}
      testID={props.testID}
      disabled={props.disabled}
    >
      {props.icon ? (
        <ButtonIcon as={props.icon} />
      ) : (
        <ButtonText className="shadow-lg" size={constants.sizeText}>
          {props.title}
        </ButtonText>
      )}
    </Button>
  );
};

export default CalcButton;

import React from 'react';
import { useCalculator } from '@/context/AppProvider';
import { IIconComponentType } from '@gluestack-ui/icon/lib/createIcon';
import { LucideProps } from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@gluestack/ui/button';

interface ICalcButton {
  onPress?: () => void;
  title?: string | undefined;
  testID?: string | undefined;
  disabled?: boolean;
  icon?: IIconComponentType<LucideProps> | undefined;
  type?: 'AC' | 'operation' | 'off' | 'equals' | 'default'; // Adicione o tipo
}

const CalcButton = ({
  onPress,
  title,
  testID = undefined,
  disabled = false,
  icon = undefined,
  type = 'default' as const, // Adicione o valor padrão
}: ICalcButton) => {
  const { constants, hideOnUnmount: isDisplayOn } = useCalculator();

  // Defina as cores com base no tipo
  const getButtonColor = () => {
    switch (type) {
      case 'AC':
        return disabled ? '' : 'bg-green-600'; // Verde
      case 'operation':
        return disabled ? '' : 'bg-blue-600'; // Azul
      case 'off':
        return isDisplayOn ? 'bg-red-800' : ''; // Vermelho ou cinza
      case 'equals':
        return disabled ? '' : 'bg-blue-200'; // Azul mais escuro
      default:
        return ''; // Cor padrão
    }
  };

  return (
    <Button
      className={`rounded-full w-auto min-h-[50px] min-w-[60px] p-2 ${getButtonColor()}`} // Use a cor retornada
      onPress={onPress}
      size={constants.sizeButton}
      variant={disabled ? 'outline' : 'solid'}
      testID={testID}
      disabled={disabled}
    >
      {icon ? (
        <ButtonIcon as={icon} />
      ) : (
        <ButtonText className="shadow-lg" size={constants.sizeText}>
          {title}
        </ButtonText>
      )}
    </Button>
  );
};

export default CalcButton;

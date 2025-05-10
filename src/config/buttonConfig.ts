import { PlayIcon } from 'lucide-react-native';

export const getButtonLayout = (
  handleButtonPress: (value: string | number) => void,
  calculator: any,
) => [
  // Fila 5
  [
    {
      icon: PlayIcon,
      onPress: () => calculator.remove(),
      testID: 'remove-button',
      type: 'operation',
    },
    { title: 'MRC', disabled: true, type: 'operation' },
    { title: 'M-', disabled: true, type: 'operation' },
    { title: 'M+', disabled: true, type: 'operation' },
    {
      title: 'OFF',
      onPress: () => calculator.desligar(),
      testID: 'off-button',
      type: 'off',
    },
  ],
  // Fila 4
  [
    {
      title: '%',
      onPress: () => calculator.add('%'),
      testID: 'percent-button',
      type: 'operation',
    },
    {
      title: '7',
      onPress: () => handleButtonPress(7),
      testID: 'number-7',
      type: 'default',
    },
    {
      title: '8',
      onPress: () => handleButtonPress(8),
      testID: 'number-8',
      type: 'default',
    },
    {
      title: '9',
      onPress: () => handleButtonPress(9),
      testID: 'number-9',
      type: 'default',
    },
    {
      title: '/',
      onPress: () => handleButtonPress('/'),
      testID: 'divide-button',
      type: 'operation',
    },
  ],
  // Fila 3
  [
    { title: '+/-', disabled: true, type: 'operation' },
    {
      title: '4',
      onPress: () => handleButtonPress(4),
      testID: 'number-4',
      type: 'default',
    },
    {
      title: '5',
      onPress: () => handleButtonPress(5),
      testID: 'number-5',
      type: 'default',
    },
    {
      title: '6',
      onPress: () => handleButtonPress(6),
      testID: 'number-6',
      type: 'default',
    },
    {
      title: 'x',
      onPress: () => handleButtonPress('*'),
      testID: 'multiply-button',
      type: 'operation',
    },
  ],
  // Fila 2
  [
    {
      title: 'AC',
      onPress: () => calculator.ligar(),
      testID: 'ac-button',
      type: 'AC',
    },
    {
      title: '1',
      onPress: () => handleButtonPress(1),
      testID: 'number-1',
      type: 'default',
    },
    {
      title: '2',
      onPress: () => handleButtonPress(2),
      testID: 'number-2',
      type: 'default',
    },
    {
      title: '3',
      onPress: () => handleButtonPress(3),
      testID: 'number-3',
      type: 'default',
    },
    {
      title: '-',
      onPress: () => handleButtonPress('-'),
      testID: 'subtract-button',
      type: 'operation',
    },
  ],
  // Fila 1
  [
    { title: '0', onPress: () => handleButtonPress(0), testID: 'number-0' },
    {
      title: '00',
      onPress: () => handleButtonPress('00'),
      testID: 'number-00',
    },
    {
      title: '.',
      onPress: () => handleButtonPress('.'),
      testID: 'decimal-button',
    },
    {
      title: '=',
      onPress: calculator.calc,
      testID: 'equals-button',
      type: 'operation',
    },
    {
      title: '+',
      onPress: () => handleButtonPress('+'),
      testID: 'add-button',
      type: 'operation',
    },
  ],
];

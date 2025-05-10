import { Dimensions, StyleSheet } from 'react-native';

enum bgColors {
  success = 'bg-success-800',
  info = 'bg-info-800',
  error = 'bg-error-800',
}

const messageStyles: Record<string, string> = {
  'Ligou!': bgColors.success,
  'Já está ligada!': bgColors.info,
  'Primeiro adicione um número': bgColors.info,
  default: bgColors.error,
};

const styleMessage = (message: string) => {
  const bg = messageStyles[message] || messageStyles.default;
  return `${bg} text-secondary-50 text-center rounded-xl mb-2 p-3`;
};

const justifyBetween = 'justify-between';
const styleContainer =
  'm-1 bg-primary-100 border-2 border-gray-500 rounded-lg shadow-lg';
const styleTitle =
  'bg-primary-0 rounded-xl mb-5 p-5 shadow-lg border-2 border-gray-500';

const getDynamicStyles = () => {
  const { height, width } = Dimensions.get('window');

  return StyleSheet.create({
    imageContainer: {
      flex: 1,
      margin: 5,
    },
    image: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageLogo: {
      width: width * 0.55,
      height: height * 0.3,
      aspectRatio: 1,
      margin: 10,
      borderRadius: 100,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: height * 0.01,
      },
      shadowOpacity: 0.25,
      shadowRadius: width * 0.01,
      elevation: 5,
    },
    greenButton: {
      backgroundColor: '#4CAF50', // Verde
    },
    blueButton: {
      backgroundColor: '#2196F3', // Azul
    },
    redButton: {
      backgroundColor: '#F44336', // Vermelho
    },
    darkBlueButton: {
      backgroundColor: '#1565C0', // Azul mais escuro
    },
    defaultButton: {
      backgroundColor: '#E0E0E0', // Cinza
    },
  });
};

export {
  justifyBetween,
  styleContainer,
  styleMessage,
  styleTitle,
  getDynamicStyles,
};

enum bgColors {
    success = 'bg-success-800',
    info = 'bg-info-800',
    error = 'bg-error-800',
}

const messageStyles: Record<string, string> = {
    'Ligou!': bgColors.success,
    'Já está ligada!': bgColors.info,
    'Primeiro adicione um número': bgColors.info,
    'default': bgColors.error
};

const styleMessage = (message: string) => {
    const bg = messageStyles[message] || messageStyles['default'];
    return `${bg} text-secondary-50 text-center rounded-xl mb-2 p-3`;
  };

const justifyBetween = "justify-between";
const styleContainer = "m-0 bg-primary-100";
const styleTitle = "bg-primary-0 rounded-xl mb-5 p-5";

export {
    justifyBetween,
    styleContainer,
    styleMessage,
    styleTitle
}
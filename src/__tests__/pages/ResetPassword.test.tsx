import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResetPassword from '@/src/pages/ResetPassword';

describe('Reset Password Page', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = render(<ResetPassword />);
    expect(getByText('Recuperar Senha')).toBeTruthy();
  });

  it('deve exibir o formulário de recuperação de senha', () => {
    const { getByTestId } = render(<ResetPassword />);
    expect(getByTestId('reset-password-form')).toBeTruthy();
  });

  it('deve validar o campo de email', () => {
    const { getByTestId, getByText } = render(<ResetPassword />);
    const emailInput = getByTestId('email-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(emailInput, 'email-invalido');
    fireEvent.press(submitButton);

    expect(getByText('Email inválido')).toBeTruthy();
  });
});

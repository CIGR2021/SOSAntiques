import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import Welcome from '@/src/pages/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import i18next, { i18n as I18nType } from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { resources } from '@/src/__mocks__/translations';

// Mock do Alert
jest.spyOn(Alert, 'alert');

// Configuração básica do i18next para testes
const i18nTestInstance: I18nType = i18next.createInstance();
i18nTestInstance.use(initReactI18next).init({
  lng: 'pt',
  fallbackLng: 'pt',
  resources,
});

// Mock do módulo i18n
jest.mock('@/src/config/i18n', () => ({
  ...jest.requireActual('i18next'),
  language: 'pt',
  changeLanguage: jest.fn(),
}));

describe('Welcome Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithNavigation = (component: React.ReactNode) => {
    return render(
      <I18nextProvider i18n={i18nTestInstance}>
        <NavigationContainer>{component}</NavigationContainer>
      </I18nextProvider>,
    );
  };

  it('deve renderizar os componentes principais', () => {
    const { getByTestId, getByText } = renderWithNavigation(<Welcome />);

    expect(getByTestId('welcome-banner')).toBeTruthy();
    expect(getByTestId('welcome-logo')).toBeTruthy();
    expect(getByText('Bem-vindo')).toBeTruthy();
    expect(getByText('Subtítulo')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
    expect(getByText('Registrar')).toBeTruthy();
    expect(getByText('Mudar Idioma')).toBeTruthy();
  });

  it('deve exibir os atributos de acessibilidade corretamente', () => {
    const { getByLabelText } = renderWithNavigation(<Welcome />);

    expect(getByLabelText('Banner do SOS Antiques')).toBeTruthy();
    expect(getByLabelText('Logo do SOS Antiques')).toBeTruthy();
    expect(getByLabelText('Bem-vindo')).toBeTruthy();
    expect(getByLabelText('Subtítulo')).toBeTruthy();
    expect(getByLabelText('Mudar Idioma')).toBeTruthy();
  });

  it('deve trocar o idioma ao clicar no botão de troca de idioma', () => {
    const mockedI18n = require('@/src/config/i18n');
    const { getByText } = renderWithNavigation(<Welcome />);
    const changeLanguageButton = getByText('Mudar Idioma');

    fireEvent.press(changeLanguageButton);

    expect(mockedI18n.changeLanguage).toHaveBeenCalledWith('en');
  });

  it('deve exibir um alerta em caso de erro na troca de idioma', async () => {
    const mockedI18n = require('@/src/config/i18n');
    mockedI18n.changeLanguage.mockRejectedValueOnce(new Error('Erro'));

    const { getByText } = renderWithNavigation(<Welcome />);
    const changeLanguageButton = getByText('Mudar Idioma');

    await act(async () => {
      fireEvent.press(changeLanguageButton);
    });

    expect(Alert.alert).toHaveBeenCalledWith('Erro', 'Erro ao mudar idioma', [
      { text: 'OK' },
    ]);
  });

  it('deve atualizar o texto da interface ao trocar para o idioma inglês', async () => {
    const mockedI18n = require('@/src/config/i18n');
    // Simula um atraso assíncrono mais realista na troca de idioma
    mockedI18n.changeLanguage.mockImplementationOnce(
      (lng: string) =>
        new Promise(
          (resolve) =>
            setTimeout(() => {
              i18nTestInstance.changeLanguage(lng).then(resolve);
            }, 50), // atraso leve para simular latência real
        ),
    );

    const { getByText, queryByText } = renderWithNavigation(<Welcome />);
    const changeLanguageButton = getByText('Mudar Idioma');

    // Verifica o texto inicial em português
    expect(getByText('Bem-vindo')).toBeTruthy();
    expect(getByText('Subtítulo')).toBeTruthy();

    // Simula a troca para o idioma inglês
    await act(async () => {
      fireEvent.press(changeLanguageButton);
    });

    // Verifica se o texto foi atualizado para o inglês
    await waitFor(() => {
      expect(queryByText('Bem-vindo')).toBeNull();
      expect(queryByText('Subtítulo')).toBeNull();
      expect(getByText('Welcome')).toBeTruthy();
      expect(getByText('Subtitle')).toBeTruthy();
    });
  });
});

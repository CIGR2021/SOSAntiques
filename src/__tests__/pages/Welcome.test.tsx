import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '@/src/pages/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Mock das imagens
jest.mock('@/assets/images/bg.jpg', () => 'mock-bg-image');
jest.mock('@/assets/images/logo.jpeg', () => 'mock-logo-image');

// Mock do useNavigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const Stack = createNativeStackNavigator();

const renderWithNavigation = (component: React.ReactElement) => {
  return render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={() => component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('Welcome Screen', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('deve renderizar a tela Welcome corretamente', () => {
    const { getByTestId, getByText } = renderWithNavigation(<Welcome />);
    
    // Verifica se os elementos principais estão presentes
    expect(getByTestId('logo-image')).toBeTruthy();
    expect(getByText('Bem Vindo(a) ao SOS Antiques')).toBeTruthy();
    expect(getByText('App de Produtos Víntages')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
    expect(getByText('Registrar')).toBeTruthy();
  });

  it('deve navegar para a tela de Login ao pressionar o botão Entrar', () => {
    const { getByText } = renderWithNavigation(<Welcome />);
    
    fireEvent.press(getByText('Entrar'));
    expect(mockNavigate).toHaveBeenCalledWith('LoginScreen');
  });

  it('deve navegar para a tela de Registro ao pressionar o botão Registrar', () => {
    const { getByText } = renderWithNavigation(<Welcome />);
    
    fireEvent.press(getByText('Registrar'));
    expect(mockNavigate).toHaveBeenCalledWith('RegisterScreen');
  });

  it('deve ter o layout correto com SafeAreaView e ImageBackground', () => {
    const { getByTestId } = renderWithNavigation(<Welcome />);
    
    // Verifica se o container principal está presente
    expect(getByTestId('app-container')).toBeTruthy();
  });

  it('deve ter os botões com o estilo correto', () => {
    const { getByText } = renderWithNavigation(<Welcome />);
    
    const entrarButton = getByText('Entrar');
    const registrarButton = getByText('Registrar');
    
    // Verifica se os botões têm as classes corretas
    expect(entrarButton.props.className).toContain('rounded-full');
    expect(registrarButton.props.className).toContain('rounded-full');
  });
});

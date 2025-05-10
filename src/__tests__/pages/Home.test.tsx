import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@/pages/Home';

// Envolvendo o componente Home com NavigationContainer
const renderWithNavigation = (component: React.ReactElement) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('Home Page', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = renderWithNavigation(<Home />);
    expect(getByText('Bem-vindo à página inicial')).toBeTruthy();
  });

  it('deve exibir o menu principal', () => {
    const { getByTestId } = renderWithNavigation(<Home />);
    expect(getByTestId('main-menu')).toBeTruthy();
  });
});

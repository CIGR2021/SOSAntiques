import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Catalog from '@/src/pages/Catalog';

// Envolvendo o componente Catalog com NavigationContainer
const renderWithNavigation = (component: React.ReactElement) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('Catalog Page', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = renderWithNavigation(<Catalog />);
    expect(getByText('Catálogo de Produtos')).toBeTruthy();
  });

  it('deve exibir a lista de produtos', () => {
    const { getByTestId } = renderWithNavigation(<Catalog />);
    expect(getByTestId('product-list')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';

// Mock do arquivo CSS
jest.mock('./global.css', () => ({}));

// Mock dos componentes necessários
jest.mock('@/components/ui/gluestack-ui-provider', () => ({
  GluestackUIProvider: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('./src/routes', () => 'Routes');
jest.mock('./src/context/AppProvider', () => ({
  AppProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-container')).toBeTruthy();
  });
}); 
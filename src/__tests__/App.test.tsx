import React from 'react';
import { render } from '@testing-library/react-native';
import App from '@SOSAntiques/App';

// Mock do arquivo CSS
jest.mock('./global.css', () => ({}));

// Mock dos componentes necessários
jest.mock('@/components/ui/gluestack-ui-provider', () => ({
  GluestackUIProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

jest.mock('@/src/routes', () => {
  const { Text } = require('react-native'); // Importar dentro do mock
  return () => <Text testID="mocked-routes">Mocked Routes</Text>;
});

jest.mock('@/src/context/AppProvider', () => ({
  AppProvider: ({ children }: { children: React.ReactNode }) => {
    const MockedContext = require('react').createContext({ isLoggedIn: false });
    return (
      <MockedContext.Provider value={{ isLoggedIn: true }}>
        {children}
      </MockedContext.Provider>
    );
  },
}));

jest.mock('react-native/Libraries/Utilities/useWindowDimensions', () => {
  return jest.fn(() => ({
    width: 360,
    height: 640,
    scale: 2,
    fontScale: 1,
  }));
});

describe('App', () => {
  it('renderiza sem travar', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-container')).toBeTruthy();
    expect(getByTestId('mocked-routes')).toBeTruthy(); // Verificando o mock de Routes
  });
  it('JSX retornado', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

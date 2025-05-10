/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AppProvider } from './src/context/AppProvider';
import { Box } from './components/ui/box';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/config/i18n';

const App = () => {
  return (
    <Box className="flex-1" testID="app-container">
      <I18nextProvider i18n={i18n}>
        <GluestackUIProvider>
          <AppProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </AppProvider>
        </GluestackUIProvider>
      </I18nextProvider>
    </Box>
  );
};

export default App;

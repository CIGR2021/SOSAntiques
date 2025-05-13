/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'global.css';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import { Box } from '@gluestack/ui/box';
import i18n from '@/config/i18n';
import { GluestackUIProvider } from '@gluestack/ui/gluestack-ui-provider';
import { AppProvider } from '@/context/AppProvider';
import Routes from '@/routes';

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

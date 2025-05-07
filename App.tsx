/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import './global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AppProvider } from './src/context/AppProvider';
import { Box } from './components/ui/box';

const App = () => {
  return (
    <Box style={{flex: 1}} testID="app-container">
      <GluestackUIProvider>
        <AppProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AppProvider>
      </GluestackUIProvider>
    </Box>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;

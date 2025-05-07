import React, { useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/src/pages/Home';
import Catalog from '@/src/pages/Catalog';
import Calculator from '@/src/pages/Calculator';
import { useAuthentication } from '@/src/context/AppProvider';

const Stack = createNativeStackNavigator();

const ApplicationStack = () => {
  const CONTEXT_STATE = useAuthentication();

  useEffect(() => {
    CONTEXT_STATE.setIsAuthenticated(true);
  }, [CONTEXT_STATE.isAuthenticated])

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{title: 'Catálogo'}}
      />
      <Stack.Screen
        name="NewsScreen"
        component={Catalog}
        options={{title: 'Novidades'}}
      />
      <Stack.Screen
        name="CalculatorScreen"
        component={Calculator}
        options={{title: 'Calculator'}}
      />
    </Stack.Navigator>
  );
};

export default ApplicationStack;

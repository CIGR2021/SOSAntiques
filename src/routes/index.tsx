import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthentication } from '@/context/AppProvider';
import AuthenticationStack from './components/authenticationStack';
import ApplicationStack from './components/applicationStack';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
  unmountInactiveRoutes: true,
};

const Routes = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  useEffect(() => {
    setIsAuthenticated(isAuthenticated);
  }, [isAuthenticated, setIsAuthenticated]);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen
          name="AuthenticationStack"
          component={AuthenticationStack}
          options={options}
        />
      ) : (
        <Stack.Screen
          name="ApplicationStack"
          component={ApplicationStack}
          options={options}
        />
      )}
    </Stack.Navigator>
  );
};

export default Routes;

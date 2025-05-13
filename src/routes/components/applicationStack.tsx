import React, { lazy, Suspense, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthentication } from '@/context/AppProvider';
import { Spinner } from '@gluestack/ui/spinner';

const Stack = createNativeStackNavigator();

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const Catalog = lazy(() => import('@/pages/Catalog'));
const Calculator = lazy(() => import('@/pages/Calculator'));

const ApplicationStack = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  useEffect(() => {
    setIsAuthenticated(true);
  }, [isAuthenticated, setIsAuthenticated]);

  return (
    <Suspense fallback={<Spinner color={'blue'} size={'large'} />}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ title: 'Catálogo' }}
        />
        <Stack.Screen
          name="NewsScreen"
          component={Catalog}
          options={{ title: 'Novidades' }}
        />
        <Stack.Screen
          name="CalculatorScreen"
          component={Calculator}
          options={{ title: 'Calculator' }}
        />
      </Stack.Navigator>
    </Suspense>
  );
};

export default ApplicationStack;

import React, { lazy, Suspense } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Spinner } from '@gluestack/ui/spinner';

const Stack = createNativeStackNavigator();

// Lazy load pages
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
const Welcome = lazy(() => import('@/pages/Welcome'));

const AuthenticationStack = () => {
  return (
    <Suspense fallback={<Spinner color={'blue'} size={'large'} />}>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{ title: 'Tela de Login' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={Register}
          options={{ title: 'Tela de Cadastro' }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPassword}
          options={{ title: 'Tela de Recuperar a Senha' }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={{ title: 'Bem vindo(a)' }}
        />
      </Stack.Navigator>
    </Suspense>
  );
};

export default AuthenticationStack;

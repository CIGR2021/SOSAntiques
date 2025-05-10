import React, { lazy, Suspense } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@/src/pages/Welcome';

const Stack = createNativeStackNavigator();

// Lazy load pages
const Login = lazy(() => import('@/src/pages/Login'));
const Register = lazy(() => import('@/src/pages/Register'));
const ResetPassword = lazy(() => import('@/src/pages/ResetPassword'));

const AuthenticationStack = () => {
  return (
    <Suspense fallback={<></>}>
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

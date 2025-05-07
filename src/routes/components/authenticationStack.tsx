import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "@/src/pages/Login";
import Register from "@/src/pages/Register";
import ResetPassword from "@/src/pages/ResetPassword";
import Welcome from "@/src/pages/Welcome";

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
	return (
		<Stack.Navigator initialRouteName="WelcomeScreen">
			<Stack.Screen name="LoginScreen" component={Login} options={{title: 'Tela de Login'}} />
			<Stack.Screen name="RegisterScreen" component={Register} options={{title: 'Tela de Cadastro'}} />
			<Stack.Screen name="ResetPasswordScreen" component={ResetPassword} options={{title: 'Tela de Recuperar a Senha'}} />
			<Stack.Screen name="WelcomeScreen" component={Welcome} options={{title: 'Bem vindo(a)'}} />
		</Stack.Navigator>
	);
};

export default AuthenticationStack;

import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationStack from "./components/authenticationStack";
import ApplicationStack from "./components/applicationStack";
import { useAuthentication } from "../context/AppProvider";

const Stack = createNativeStackNavigator();

const options = {
	headerShown: false,
	unmountInactiveRoutes: true,
};

const Routes = () => {
    const AUTH = useAuthentication();
    
    useEffect(() => {
        AUTH.setIsAuthenticated(AUTH.isAuthenticated)
    },[AUTH.isAuthenticated])

    return (
        <Stack.Navigator>
            {!AUTH.isAuthenticated ? (
                <Stack.Screen name="AuthenticationStack" component={AuthenticationStack} options={options} />
            ) : (
                <Stack.Screen name="ApplicationStack" component={ApplicationStack} options={options} />
            )}
        </Stack.Navigator>
    )
}

export default Routes;

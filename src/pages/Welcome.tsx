import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const banner = '../assets/images/bg.jpg';
const logo = '../assets/images/logo.jpeg';

const Welcome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1" edges={['left', 'right']}>
                <ImageBackground className="flex-1 justify-center rounded-full m-1" source={require(banner)} resizeMode="cover">
                    <Center className="p-5">
                        <VStack space="xl">
                            <Center>
                                <Image
                                    className="rounded-full mb-2"
                                    size="xl"
                                    source={require(logo)}
                                    alt="Logo SOSAntiques"
                                    testID="logo-image"
                                />
                                <Heading className="text-center p-2" size="2xl">Bem Vindo(a) ao SOS Antiques</Heading>
                                <Text>App de Produtos Víntages</Text>
                            </Center>
                            <Center>
                                <HStack space="md">
                                    <Button
                                    className="rounded-full w-auto min-h-[50px] min-w-[120px]"
                                    variant="solid"
                                    size="md"
                                    onPress={() => navigation.navigate('LoginScreen')}>
                                    <ButtonText size="xl">Entrar</ButtonText>
                                    </Button>
                                    <Button
                                    className="rounded-full bg-secondary-50 w-auto min-h-[50px] min-w-[160px]"
                                    variant="outline"
                                    size="md"
                                    onPress={() => navigation.navigate('RegisterScreen')}>
                                    <ButtonText size="xl">Registrar</ButtonText>
                                    </Button>
                                </HStack>
                            </Center>
                        </VStack>
                    </Center>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Welcome;

import React from 'react';
import { Center } from '@/components/ui/center';
import Field from '../components/field';
import { LockIcon, MailIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonGroup, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { FormControl } from '@/components/ui/form-control';
import { useAuthentication } from '../context/AppProvider';
import FastImage from 'react-native-fast-image';
import { getDynamicStyles } from '../styles';
import images from '../config/const';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const CONTEXT_STATE = useAuthentication();
  const styles = getDynamicStyles();

  return (
    <ScrollView>
      <Center>
        <Card className="mt-2 mb-5" variant="outline" size="lg">
          <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled
              >
                <VStack space="xl">
                  <Center>
                    <FastImage
                      style={styles.imageLogo}
                      source={images.logo}
                      resizeMode={FastImage.resizeMode.contain}
                      testID="logo-image"
                    />
                    <Heading size="2xl">Login</Heading>
                  </Center>
                  <Divider />
                </VStack>
                <FormControl
                  size="md"
                  isDisabled={false}
                  isReadOnly={false}
                  isRequired={false}
                >
                  <VStack space="xl" className="mt-8">
                    <Field
                      type={'email'}
                      title={'Email'}
                      placeholder={'@mail.com'}
                      icon={MailIcon}
                      message={'Deve ter pelo menos 6 caracteres.'}
                      size={'xl'}
                    />
                    <Field
                      type={'password'}
                      title={'Password'}
                      placeholder={'informe a senha'}
                      icon={LockIcon}
                      message={'Deve ter pelo menos 6 caracteres.'}
                      size={'xl'}
                    />
                    <Center>
                      <ButtonGroup space="sm">
                        <Button
                          className="rounded-full w-auto min-h-[50px] min-w-[160px]"
                          variant="link"
                          size="md"
                          onPress={() =>
                            navigation.navigate('ResetPasswordScreen')
                          }
                        >
                          <ButtonText size="xl">Esqueceu a senha?</ButtonText>
                        </Button>
                        <Button
                          className="rounded-full w-auto min-h-[50px] min-w-[60px]"
                          variant="solid"
                          size="md"
                          onPress={() => CONTEXT_STATE.setIsAuthenticated(true)}
                        >
                          <ButtonText size="xl">Entrar</ButtonText>
                        </Button>
                        <Button
                          className="rounded-full w-auto min-h-[50px] min-w-[160px]"
                          variant="outline"
                          size="md"
                          onPress={() => navigation.navigate('RegisterScreen')}
                        >
                          <ButtonText size="xl">Cadastrar</ButtonText>
                        </Button>
                      </ButtonGroup>
                    </Center>
                  </VStack>
                </FormControl>
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </Card>
      </Center>
    </ScrollView>
  );
};

export default Login;

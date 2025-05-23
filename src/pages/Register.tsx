import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { getDynamicStyles } from '@/styles';
import images from '@/config/const';
import Field from '@/components/field';
import { Center } from '@gluestack/ui/center';
import { Card } from '@gluestack/ui/card';
import { VStack } from '@gluestack/ui/vstack';
import { Heading } from '@gluestack/ui/heading';
import { Badge } from '@gluestack/ui/badge';
import { Button, ButtonGroup, ButtonText } from '@gluestack/ui/button';
import {
  CalendarDaysIcon,
  IdCardIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react-native';
import { Divider } from '@gluestack/ui/divider';

const Register = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const styles = getDynamicStyles();

  return (
    <ScrollView>
      <Center>
        <Card className="mt-5" variant="outline" size="lg">
          <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled
              >
                <VStack space="xl" className="mt-8">
                  <Center>
                    <FastImage
                      style={styles.imageLogo}
                      source={images.logo}
                      resizeMode={FastImage.resizeMode.contain}
                      testID="logo-image"
                    />
                    <Heading className="text-center" size="2xl">
                      Preencher os campos com seus dados
                    </Heading>
                  </Center>
                  <Divider />
                  <Field
                    type={'nome'}
                    title={'Nome Completo'}
                    placeholder={'Nome Completo'}
                    icon={UserIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Field
                    type={'text'}
                    keyType={'phone-pad'}
                    title={'Telefone Celular'}
                    placeholder={'Digite somente números'}
                    icon={PhoneIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Field
                    type={'text'}
                    title={'CPF'}
                    keyType={'phone-pad'}
                    placeholder={'Digite somente números'}
                    icon={IdCardIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Field
                    type={'text'}
                    title={'Data de Nascimento'}
                    placeholder={'dd/mm/aaaa'}
                    icon={CalendarDaysIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Field
                    type={'email'}
                    title={'E-mail'}
                    placeholder={'@mail.com'}
                    icon={MailIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Field
                    type={'password'}
                    title={'Senha'}
                    placeholder={'informe a senha'}
                    icon={LockIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Badge>
                    <Text>Campos com (*) são obrigatório</Text>
                  </Badge>
                  <Center>
                    <ButtonGroup space="xl">
                      <Button
                        className="rounded-full w-auto min-h-[50px] min-w-[60px]"
                        variant="solid"
                        size="md"
                        onPress={() => navigation.navigate('LoginScreen')}
                      >
                        <ButtonText size="xl">Cadastrar</ButtonText>
                      </Button>
                    </ButtonGroup>
                  </Center>
                </VStack>
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </Card>
      </Center>
    </ScrollView>
  );
};

export default Register;

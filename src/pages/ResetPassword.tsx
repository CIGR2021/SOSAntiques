import { Card } from 'components/ui/card';
import { Center } from 'components/ui/center';
import { VStack } from 'components/ui/vstack';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Heading } from 'components/ui/heading';
import { Divider } from 'components/ui/divider';
import Field from 'src/components/field';
import { MailIcon } from 'components/ui/icon';
import { Button, ButtonGroup, ButtonText } from 'components/ui/button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import { getDynamicStyles } from 'src/styles';
import images from 'src/config/const';

const ResetPassword = () => {
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
                    <Heading size="2xl">Esqueceu sua senha?</Heading>
                  </Center>
                  <Divider />
                  <Field
                    type={'email'}
                    title={'Email'}
                    placeholder={'@mail.com'}
                    icon={MailIcon}
                    message={'Deve ter pelo menos 6 caracteres.'}
                    size={'xl'}
                  />
                  <Center>
                    <ButtonGroup space="xl">
                      <Button
                        className="rounded-full w-auto min-h-[50px] min-w-[60px]"
                        variant="solid"
                        size="md"
                        onPress={() => navigation.navigate('LoginScreen')}
                      >
                        <ButtonText size="xl">Receber instruções</ButtonText>
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

export default ResetPassword;

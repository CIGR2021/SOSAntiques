import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import { getDynamicStyles } from '@/styles';
import images from '@/config/const';
import Field from '@/components/field';
import { Center } from '@gluestack/ui/center';
import { Card } from '@gluestack/ui/card';
import { VStack } from '@gluestack/ui/vstack';
import { Heading } from '@gluestack/ui/heading';
import { Divider } from '@gluestack/ui/divider';
import { Button, ButtonGroup, ButtonText } from '@gluestack/ui/button';
import { MailIcon } from 'lucide-react-native';

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

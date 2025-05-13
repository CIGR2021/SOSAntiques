import { Center } from 'components/ui/center';
import { Heading } from 'components/ui/heading';
import FastImage from 'react-native-fast-image';
import { VStack } from 'components/ui/vstack';
import React, { useCallback, useMemo } from 'react';
import { Alert, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getDynamicStyles } from 'src/styles';
import images from 'src/config/const';
import LoginButton from 'src/components/login-button';
import RegisterButton from 'src/components/register-button';
import { useTranslation } from 'react-i18next';
import { Button, ButtonIcon, ButtonText } from 'components/ui/button';
import i18n from 'src/config/i18n';
import { LanguagesIcon } from 'lucide-react-native';
import { Box } from 'components/ui/box';

const Welcome = () => {
  const { t } = useTranslation();
  const styles = getDynamicStyles();

  // Memoriza o idioma atual e troca para o outro idioma
  const idioma = useMemo(() => {
    if (i18n.language === 'pt') {
      return 'en';
    }
    if (i18n.language === 'en') {
      return 'es';
    }
    return 'pt'; // Caso o idioma atual seja 'es', volta para 'pt'
  }, [i18n.language]);

  // Memorizar a função de troca de idioma
  const handleLanguageChange = useCallback(async () => {
    try {
      await i18n.changeLanguage(idioma);
    } catch (error) {
      Alert.alert(
        t('welcome.errorTitle'), // Título do alerta
        t('welcome.errorMessage'), // Mensagem do alerta
        [{ text: t('welcome.ok') }], // Botão de confirmação
      );
    }
  }, [idioma, t]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={['left', 'right']}>
        <FastImage
          style={[styles.image, styles.imageContainer]}
          source={images.banner}
          resizeMode={FastImage.resizeMode.cover}
        >
          <Box
            testID="welcome-banner"
            accessible={true}
            accessibilityLabel={t('welcome.bannerDescription')}
            accessibilityRole="image"
          >
            <Center className="p-5">
              <VStack space="xl">
                <Center>
                  <Box
                    testID="welcome-logo"
                    accessible={true}
                    accessibilityLabel={t('welcome.logoDescription')}
                    accessibilityRole="image"
                  >
                    <FastImage
                      style={styles.imageLogo}
                      source={images.logo}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </Box>
                  <Heading
                    className="text-center p-2"
                    size="2xl"
                    accessible={true}
                    accessibilityLabel={t('welcome.title')}
                  >
                    {t('welcome.title')}
                  </Heading>
                  <Text
                    className="text-center"
                    accessible={true}
                    accessibilityLabel={t('welcome.subtitle')}
                  >
                    {t('welcome.subtitle')}
                  </Text>
                </Center>
                <Center>
                  <VStack space="md">
                    <LoginButton title={t('welcome.login')} />
                    <RegisterButton title={t('welcome.register')} />
                    <Button
                      className="rounded-full w-auto min-h-[50px] min-w-[120px]"
                      variant="solid"
                      size="md"
                      onPress={handleLanguageChange} // Usando a função memorizada
                      accessible={true}
                      accessibilityLabel={t('welcome.changeLanguage')}
                    >
                      <ButtonIcon as={LanguagesIcon} />
                      <ButtonText size="xl">
                        {t('welcome.changeLanguage')}
                      </ButtonText>
                    </Button>
                  </VStack>
                </Center>
              </VStack>
            </Center>
          </Box>
        </FastImage>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Welcome;

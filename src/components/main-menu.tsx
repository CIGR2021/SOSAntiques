import React from 'react';
import { Button, ButtonIcon, ButtonText } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import { Box } from 'components/ui/box';
import { Divider } from 'components/ui/divider';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from 'components/ui/drawer';
import { Avatar, AvatarFallbackText, AvatarImage } from 'components/ui/avatar';
import { VStack } from 'components/ui/vstack';
import { Text } from 'components/ui/text';
import { Pressable } from 'react-native';
import {
  LogOut,
  ShoppingCart,
  Wallet,
  MenuIcon,
  User,
} from 'lucide-react-native';
import { useAuthentication } from 'src/context/AppProvider';
import images from 'src/config/const';

const MainMenu = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const CONTEXT_STATE = useAuthentication();

  return (
    <Box>
      <Button
        testID="menu-button"
        className="w-auto"
        size="xl"
        onPress={() => {
          CONTEXT_STATE.setShowMainMenu(true);
        }}
      >
        <ButtonIcon as={MenuIcon} />
      </Button>
      <Drawer
        isOpen={CONTEXT_STATE.showMainMenu}
        onClose={() => {
          CONTEXT_STATE.setShowMainMenu(false);
        }}
      >
        <DrawerBackdrop testID="drawer-backdrop" />
        <DrawerContent className="w-[270px] md:w-[300px]">
          <DrawerHeader className="justify-center flex-col gap-2">
            <Avatar testID="user-avatar" size="2xl">
              <AvatarFallbackText>User Image</AvatarFallbackText>
              <AvatarImage source={images.avatar} />
            </Avatar>
            <VStack className="justify-center items-center content-center">
              <Text testID="user-name" size="lg">
                User Name
              </Text>
              <Text
                testID="user-email"
                size="sm"
                className="text-typography-600"
              >
                abc@gmail.com
              </Text>
            </VStack>
          </DrawerHeader>
          <Divider className="my-4" />
          <DrawerBody contentContainerClassName="gap-2">
            <Pressable
              // onPress={() => (
              //   navigation.navigate('NewsScreen', {name: 'Novidades'}),
              //   CONTEXT_STATE.setShowMainMenu(false)
              // )}
              className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md"
            >
              <Icon as={User} size="lg" className="text-typography-600" />
              <Text size="lg">Meu Perfil</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon
                as={ShoppingCart}
                size="lg"
                className="text-typography-600"
              />
              <Text size="lg">Meus Pedidos</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon
                as={ShoppingCart}
                size="lg"
                className="text-typography-600"
              />
              <Text size="lg">Lista de Desejos</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={Wallet} size="lg" className="text-typography-600" />
              <Text size="lg">Central de Ajuda</Text>
            </Pressable>
          </DrawerBody>
          <DrawerFooter>
            <Button
              className="w-full gap-2"
              variant="outline"
              action="secondary"
              onPress={() => (
                CONTEXT_STATE.setIsAuthenticated(false),
                CONTEXT_STATE.setShowMainMenu(false)
              )}
            >
              <ButtonText>Sair da Consta</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MainMenu;

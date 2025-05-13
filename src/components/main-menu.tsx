import React from 'react';
import { Pressable } from 'react-native';
import { useAuthentication } from '@/context/AppProvider';
import images from '@/config/const';
import { Button, ButtonIcon, ButtonText } from '@gluestack/ui/button';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@gluestack/ui/drawer';
import { Avatar, AvatarFallbackText, AvatarImage } from '@gluestack/ui/avatar';
import { VStack } from '@gluestack/ui/vstack';
import { Text } from '@gluestack/ui/text';
import { Divider } from '@gluestack/ui/divider';
import { Icon } from '@gluestack/ui/icon';
import {
  LogOut,
  ShoppingCart,
  Wallet,
  MenuIcon,
  User,
  Box,
} from 'lucide-react-native';

const MainMenu = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { setIsAuthenticated, setShowMainMenu, showMainMenu } =
    useAuthentication();

  return (
    <Box>
      <Button
        testID="menu-button"
        className="w-auto"
        size="xl"
        onPress={() => {
          setShowMainMenu(true);
        }}
      >
        <ButtonIcon as={MenuIcon} />
      </Button>
      <Drawer
        isOpen={showMainMenu}
        onClose={() => {
          setShowMainMenu(false);
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
              //   setShowMainMenu(false)
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
              onPress={() => {
                setIsAuthenticated(false);
                setShowMainMenu(false);
              }}
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

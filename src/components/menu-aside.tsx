import React from 'react';
import { Button, ButtonIcon, ButtonText } from '@gluestack/ui/button';
import { Icon } from '@gluestack/ui/icon';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box } from '@gluestack/ui/box';
import { Divider } from '@gluestack/ui/divider';
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
import { Pressable } from 'react-native';
import {
  Home,
  LogOut,
  BadgePlusIcon,
  PhoneIcon,
  ShoppingCart,
  StarIcon,
  Wallet,
} from 'lucide-react-native';
import { useAuthentication } from '@/context/AppProvider';
import images from '@/config/const';

const MenuAside = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const CONTEXT_STATE = useAuthentication();

  return (
    <Box>
      <Button
        testID="menu-aside-button"
        className="w-auto"
        size="xl"
        onPress={() => {
          CONTEXT_STATE.setShowMenuAside(true);
        }}
      >
        <ButtonIcon as={BadgePlusIcon} />
      </Button>
      <Drawer
        isOpen={CONTEXT_STATE.showMenuAside}
        onClose={() => {
          CONTEXT_STATE.setShowMenuAside(false);
        }}
      >
        <DrawerBackdrop testID="drawer-backdrop" />
        <DrawerContent className="w-[270px] md:w-[300px]">
          <DrawerHeader className="justify-center flex-col gap-2">
            <Avatar testID="user-avatar" size="2xl">
              <AvatarFallbackText>User Image</AvatarFallbackText>
              <AvatarImage source={images.avatar} />
            </Avatar>
            <VStack className="justify-center items-center">
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
              onPress={() => (
                navigation.navigate('NewsScreen', { name: 'Novidades' }),
                CONTEXT_STATE.setShowMenuAside(false)
              )}
              className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md"
            >
              <Icon as={Home} size="lg" className="text-typography-600" />
              <Text size="lg">Novidades</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon
                as={ShoppingCart}
                size="lg"
                className="text-typography-600"
              />
              <Text size="lg">Itens de Venda</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon
                as={ShoppingCart}
                size="lg"
                className="text-typography-600"
              />
              <Text size="lg">Itens de Troca</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={Wallet} size="lg" className="text-typography-600" />
              <Text size="lg">Doações</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={StarIcon} size="lg" className="text-typography-600" />
              <Text size="lg">Lista de Desejos</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={PhoneIcon} size="lg" className="text-typography-600" />
              <Text size="lg">Sobre Nós</Text>
            </Pressable>
          </DrawerBody>
          <DrawerFooter>
            <Button
              className="w-full gap-2"
              variant="outline"
              action="secondary"
              onPress={() => (
                CONTEXT_STATE.setIsAuthenticated(false),
                CONTEXT_STATE.setShowMenuAside(false)
              )}
            >
              <ButtonText>Sair da Conta</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MenuAside;

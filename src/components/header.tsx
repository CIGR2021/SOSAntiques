import { Center } from 'components/ui/center';
import MainMenu from './main-menu';
import { Card } from 'components/ui/card';
import { HStack } from 'components/ui/hstack';
import { Button, ButtonIcon } from 'components/ui/button';
import { CalculatorIcon } from 'lucide-react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Card testID="header-card" className="m-0" variant="outline" size="lg">
      <Center className="m-auto p-auto">
        <HStack space="md">
          <MainMenu />
          <Center>
            <Button
              testID="calculator-button"
              onPress={() => navigation.navigate('CalculatorScreen')}
              size="xl"
            >
              <ButtonIcon as={CalculatorIcon} />
            </Button>
          </Center>
        </HStack>
      </Center>
    </Card>
  );
};

export default Header;

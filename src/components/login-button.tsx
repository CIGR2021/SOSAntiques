import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonProps } from '@/types';
import { Button, ButtonIcon, ButtonText } from '@gluestack/ui/button';
import { LogInIcon } from 'lucide-react-native';

const LoginButton: React.FC<ButtonProps> = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Button
      className="rounded-full w-auto min-h-[50px] min-w-[120px]"
      variant="solid"
      size="md"
      onPress={() => navigation.navigate('LoginScreen')}
    >
      <ButtonIcon as={LogInIcon} />
      <ButtonText size="xl">{props.title}</ButtonText>
    </Button>
  );
};

export default LoginButton;

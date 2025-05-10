import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LogInIcon } from 'lucide-react-native';

interface LoginButtonProps {
  title: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ title }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Button
      className="rounded-full w-auto min-h-[50px] min-w-[120px]"
      variant="solid"
      size="md"
      onPress={() => navigation.navigate('LoginScreen')}
    >
      <ButtonIcon as={LogInIcon} />
      <ButtonText size="xl">{title}</ButtonText>
    </Button>
  );
};

export default LoginButton;

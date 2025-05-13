import { ButtonProps } from '@/types';
import { Button, ButtonIcon, ButtonText } from '@gluestack/ui/button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserPlus2Icon } from 'lucide-react-native';

const RegisterButton: React.FC<ButtonProps> = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Button
      className="rounded-full bg-secondary-50 w-auto min-h-[50px] min-w-[160px]"
      variant="outline"
      size="md"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      <ButtonIcon as={UserPlus2Icon} />
      <ButtonText size="xl">{props.title}</ButtonText>
    </Button>
  );
};

export default RegisterButton;

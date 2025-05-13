import {
  FormControlHelper,
  FormControlHelperText,
} from 'components/ui/form-control';
import { Input, InputField } from 'components/ui/input';
import { Icon } from 'components/ui/icon';
import { useState } from 'react';
import { Text } from 'react-native';
import { Heading } from 'components/ui/heading';
import { Box } from 'components/ui/box';
import { VStack } from 'components/ui/vstack';

interface IField {
  title: String | any;
  type: String | any;
  placeholder: String | any;
  icon: String | any;
  message: String | any;
  size: String | any;
  keyType?: String | any;
}

const Field = ({
  title,
  type,
  placeholder,
  icon,
  message,
  size,
  keyType,
}: IField) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <VStack>
      <Heading testID="field-title">{title}</Heading>
      <Box className="w-full min-w-[300px] rounded-lg border border-background-200 p-4">
        <Input className="my-1" size={size}>
          <InputField
            testID="field-input"
            type={type}
            keyboardType={keyType}
            placeholder={placeholder}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <Icon className="m-1" as={icon} size={size} />
        </Input>
        {inputValue && inputValue.length < 6 && (
          <FormControlHelper>
            <FormControlHelperText>
              <Text testID="field-error" className="text-red">
                {message}
              </Text>
            </FormControlHelperText>
          </FormControlHelper>
        )}
      </Box>
    </VStack>
  );
};

export default Field;

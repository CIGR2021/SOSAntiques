import { useState } from 'react';
import { Text } from 'react-native';
import { IField } from '@/types';
import { Box } from '@gluestack/ui/box';
import {
  FormControlHelper,
  FormControlHelperText,
} from '@gluestack/ui/form-control';
import { Heading } from '@gluestack/ui/heading';
import { Icon } from '@gluestack/ui/icon';
import { Input, InputField } from '@gluestack/ui/input';
import { VStack } from '@gluestack/ui/vstack';

const Field = (props: IField) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <VStack>
      <Heading testID="field-title">{props.title}</Heading>
      <Box className="w-full min-w-[300px] rounded-lg border border-background-200 p-4">
        <Input className="my-1" size={props.size}>
          <InputField
            testID="field-input"
            type={props.type}
            keyboardType={props.keyType}
            placeholder={props.placeholder}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <Icon className="m-1" as={props.icon} size={props.size} />
        </Input>
        {inputValue && inputValue.length < 6 && (
          <FormControlHelper>
            <FormControlHelperText>
              <Text testID="field-error" className="text-red">
                {props.message}
              </Text>
            </FormControlHelperText>
          </FormControlHelper>
        )}
      </Box>
    </VStack>
  );
};

export default Field;

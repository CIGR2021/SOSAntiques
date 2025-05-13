import { VStack } from '@gluestack/ui/vstack';
import React from 'react';
import Header from '@/components/header';
import Catalog from './Catalog';

const Home = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <VStack space="lg" className="m-2">
      <Header />
      <Catalog />
    </VStack>
  );
};

export default Home;

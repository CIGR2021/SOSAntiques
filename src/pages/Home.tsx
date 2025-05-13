import React from 'react';
import Catalog from './Catalog';
import { VStack } from 'components/ui/vstack';
import Header from 'src/components/header';

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

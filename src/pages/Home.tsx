import React, { useState } from 'react';
import Catalog from './Catalog';
import { VStack } from '@/components/ui/vstack';
import Header from '../components/header';

const Home = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [showCam, setShowCam] = useState(false);
  return (
    <VStack space='lg' className='m-2'>
      <Header />
      <Catalog />
    </VStack>
  );
};

export default Home;

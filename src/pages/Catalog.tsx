import {Center} from '@/components/ui/center';
import {Heading} from '@/components/ui/heading';
import {Card} from '@/components/ui/card';
import MenuAside from '../components/menu-aside';
import {HStack} from '@/components/ui/hstack';

const Catalog = () => {
  return (
    <Card className="m-0" variant="outline" size="lg">
      <Center className="bg-secondary-400 p-2 rounded-xl">
        <HStack space="md">
            <Center>
              <Heading size="xl">Novidades</Heading>
            </Center>
            <MenuAside />
        </HStack>
      </Center>
    </Card>
  );
};

export default Catalog;

import MenuAside from '@/components/menu-aside';
import { Card } from '@gluestack/ui/card';
import { Center } from '@gluestack/ui/center';
import { Heading } from '@gluestack/ui/heading';
import { HStack } from '@gluestack/ui/hstack';

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

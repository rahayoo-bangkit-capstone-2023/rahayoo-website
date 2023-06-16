import {Avatar, Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardTransactions = () => {
   return (
      <Card
         css={{
            mw: '375px',
            height: 'auto',
            bg: '$accents0',
            borderRadius: '$xl',
            // alignContent: 'start',
            justifyContent: 'start',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}} justify={'center'}>
               <Text h3 css={{textAlign: 'center'}}>
                  Highlight
               </Text>
            </Flex>
            <Flex
               css={{gap: '$6', py: '$4'}}
               // align={'center'}

               direction={'column'}
            >
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Jose Perez
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  High Stress Level
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     😌
                  </Text>
               </Flex>

               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Andrew Steven
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  High Stress Level
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                  😌
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Ruben Garcia
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  High Stress Level
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                  😌
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Perla Garcia
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  High Stress Level
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                  😌
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Mathew Funez
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  High Stress Level
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                  😌
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Carlos Diaz
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     High Stress Level
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                  😌
                  </Text>
               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};

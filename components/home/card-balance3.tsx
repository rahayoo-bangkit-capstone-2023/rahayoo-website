import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance3 = () => {
   const delegatedWork = 30;
   const completedWork = 28;
   const overdueWork = 2;
   const presentage = ((completedWork / delegatedWork) * 100).toFixed(2);
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$green600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <img src='https://storage.googleapis.com/cdn-anyproject/Group%2015.svg'/>
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}} weight={'bold'}>
                     Productivity
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
               <Text
                  span
                  size={'$xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                  {presentage}%
               </Text>
               <Text span css={{color: '$red600'}} size={'$xs'}>
                  + 4.5%
               </Text>
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Flex direction={'column'}>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {delegatedWork}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     Delegated Works
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {completedWork}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     Completed Works
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {overdueWork}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     Overdue Works
                  </Text>
               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};

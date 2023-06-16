import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance1 = () => {
   const actualStressLevel = 30;
   const maxStressLevel = 40;
   const presentage = (actualStressLevel / maxStressLevel) * 100;
   const progress = 35 - presentage;
   const isPositive = progress > 0;
   const upDown = (isPositive ? '↓' : '↑');
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
            background: 'linear-gradient(45deg, rgba(6,0,115,1) 0%, rgba(9,9,121,1) 39%, rgba(0,97,255,1) 100%)'
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <img src='https://storage.googleapis.com/cdn-anyproject/stresslevel.svg'/>
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                     <b>Stress Level</b>
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$1', py: '$4'}} align={'center'}>
               <Text
                  span
                  size={'$3xl'}
                  css={{
                     textGradient: "45deg, $yellow600 -20%, $red600 100%",
                   }}
                  weight={'semibold'}
               >{actualStressLevel}</Text>
               <Text
                  span
                  size={'$md'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >/{maxStressLevel}
               </Text>
            </Flex>
            <Flex css={{gap: '$3'}} align={'center'}>

               <Text
                  span
                  size={'$md'}
                  css={{color: 'red'}}
                  weight={'semibold'}
               >  {presentage}% 
               </Text>
               <Text
                  span
                  size={'$xs'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               > stress level
               </Text>
               <Box>
                  <Text
                     span
                     size={'$xl'}
                     css={{color: '$green600'}}
                     weight={'extrabold'}
                  >
                     {upDown}
                  </Text>
                  <Text span size={'$xl'} css={{color: '$white'}}>
                     {Math.abs(progress)}%
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};

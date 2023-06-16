import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Image } from '@nextui-org/react';


export const CardBalance2 = () => {
   const worstPrecentage = 0.5;
   const bestPrecentage = 0.8;
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$accents0',
            borderRadius: '$xl',
            px: '$6',
            background: 'linear-gradient(-45deg, rgba(212,77,252,1) 0%, rgba(121,35,145,1) 42%, rgba(67,0,87,1) 100%)'
         }}>
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community color={'$accents9'} />
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                     <b>Mood Condition</b>
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$10'}} align={'center'}>
               <img src='https://storage.googleapis.com/cdn-anyproject/%F0%9F%98%81.svg'/>
               <Text span css={{textGradient: "45deg, $yellow600 -20%, $red600 100%"}} size={'$md'} weight={'bold'}>
                  Majority
               </Text>
            </Flex>
            {/* <FleSx css={{gap: '$12'}} align={'center'}> */}
               {/* <Flex direction={'column'}>
                  <Image src='https://storage.googleapis.com/cdn-anyproject/%F0%9F%98%81.svg'/>
                  <Text span size={'$xs'} weight={'semibold'}>
                     {worstPrecentage * 100}% Worst
                  </Text>
               </Flex>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {'↑'}
                  </Text>
                  <Text span size={'$xs'}>
                     54,120 USD
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'⭐'}
                  </Text>
                  <Text span size={'$xs'}>
                     150 VIP
                  </Text>
               </Box>
            </Flex> */}
         </Card.Body>
      </Card>
   );
};

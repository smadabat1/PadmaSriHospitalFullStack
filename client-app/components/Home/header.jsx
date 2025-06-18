import { View } from 'react-native'
import React from 'react'
import { getGreetingBasedOnTime } from '~/lib/utils';
import { Text } from '~/components/ui/text';

export default function Header() {
    const greeting = getGreetingBasedOnTime();

  return (
    <View>
      <Text className='text-2xl font-bold'><Text className='text-2xl text-primary'>{greeting},</Text> Pavan</Text>
      <Text className='text-muted-foreground'>How are you doing today ?</Text>
    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import TabSafeView from '~/components/TabSafeView'

export default function Sprofile() {
  return (
    <TabSafeView>
      <View className="flex-1 p-4">
      <Text>News</Text>
      </View>
    </TabSafeView>
  )
}
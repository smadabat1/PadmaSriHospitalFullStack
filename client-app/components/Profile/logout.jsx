import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import LogoutDialog from './logoutDialog'

export default function Logout() {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <View className='gap-y-6'>
      <Text className='text-muted-foreground font-bold'>v1.0.0</Text>
      <Pressable onPress={() => setOpenLoginModal(true)}><Text className='text-destructive'>Logout</Text></Pressable>
      <LogoutDialog open={openLoginModal} onOpenChange={setOpenLoginModal} />
    </View>
  )
}
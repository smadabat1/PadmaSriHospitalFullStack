import { View, Text } from 'react-native'
import React from 'react'
import ScheduleAppointment from './scheduleAppointment'
import Header from './header'
import ServicesMain from './Services/main'

export default function Main() {
  return (
    <View className='flex-1 gap-y-8'>
      <Header />
      <ScheduleAppointment />
      <ServicesMain />
    </View>
  )
}
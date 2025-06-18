import { View } from 'react-native';
import React from 'react';
import { Text } from '~/components/ui/text';
import dayjs from 'dayjs';
import { calculatedDataKeys } from '~/lib/constants';
import { Droplets, TreePalm, Clock4, CloudSun, CalendarCheck2 } from '~/lib/icons';

export default function CalculationComponentItem({ data }) {
    if(data.key === calculatedDataKeys.prevPeriodStartingDate){
        return (
            <View className='shadow-sm elevation rounded-xl p-4 gap-y-12 justify-between w-48 bg-pastel3 relative overflow-hidden'>
              <Text className='font-semibold'>{data.title}</Text>
              <Text className='font-bold text-2xl self-end'>{dayjs(data.value).format("MMM D")}</Text>
              <Droplets className='absolute text-pastel3-foreground/5 z-[-1] bottom-1 left-[-20]' size={80}/>
            </View>
        )
    }
    if(data.key === calculatedDataKeys.fertileWindowStart){
        const startDate = dayjs(data.value);
        const calValue = `${startDate.format("MMM")} ${startDate.format("D")} - ${startDate.add(5, "day").format("D")}`
        return (
            <View className='shadow-sm elevation rounded-xl p-4 gap-y-12 justify-between w-72 bg-pastel1 relative overflow-hidden'>
              <Text className='font-semibold'>{data.title}</Text>
              <Text className='font-bold text-2xl self-end'>{calValue}</Text>
              <CalendarCheck2 className='absolute text-pastel1-foreground/5 z-[-1] bottom-1 left-1' size={80}/>
            </View>
        )
    }

    if(data.key === calculatedDataKeys.ovulationDate){
        return (
            <View className='shadow-sm elevation rounded-xl p-4 w-56 gap-y-12 justify-between bg-pastel5 relative overflow-hidden'>
              <Text className='font-semibold'>{data.title}</Text>
              <Text className='font-bold text-2xl self-end'>{dayjs(data.value).format("MMM D")}</Text>
              <Clock4 className='absolute text-pastel5-foreground/5 z-[-1] bottom-0 left-1' size={80}/>
            </View>
        )
    }

    if(data.key === calculatedDataKeys.nextPeriod){
        return (
            <View className='shadow-sm elevation rounded-xl p-4 w-56 gap-y-12 justify-between bg-pastel2 relative overflow-hidden'>
              <Text className='font-semibold'>{data.title}</Text>
              <Text className='font-bold text-2xl self-end'>{dayjs(data.value).format("MMM D")}</Text>
              <CloudSun className='absolute text-pastel2-foreground/5 z-[-1] bottom-0' size={89}/>
            </View>
        )
    }

    if(data.key === calculatedDataKeys.earliestPossibleTest){
        return (
            <View className='shadow-sm elevation rounded-xl p-4 w-56 gap-y-12 justify-between bg-pastel4 relative overflow-hidden'>
              <Text className='font-semibold'>{data.title}</Text>
              <Text className='font-bold text-2xl self-end'>{dayjs(data.value).format("MMM D")}</Text>
              <TreePalm className='absolute text-pastel4-foreground/5 z-[-1] bottom-0' size={90}/>
            </View>
        )
    }
  return null;
}
import { View } from 'react-native'
import React, { useRef } from 'react';
import Main from '~/components/Profile/Purchase/main';
import PurchaseBottomSheet from '~/components/Profile/Purchase/purchaseBottomSheet';

export default function Purchase() {
  const purchaseBottomSheetRef = useRef(null);

  const openSheet = () => {
    purchaseBottomSheetRef?.current.present();
  }

  const closeSheet = () => {
    purchaseBottomSheetRef?.current.hide();
  }

  return (
    <View className='flex-1 p-4'>
      <PurchaseBottomSheet ref={purchaseBottomSheetRef} />
      <Main openSheet={openSheet} closeSheet={closeSheet} />
    </View>
  )
}
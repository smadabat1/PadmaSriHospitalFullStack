import { View } from "react-native";
import React, { useRef } from "react";
import Main from "~/components/Services/main";
import ServiceBottomSheet from "~/components/Services/serviceBottomSheet";

export default function index() {
  const serviceBottomSheetRef = useRef(null);

  const openSheet = () => {
    serviceBottomSheetRef?.current.present();
  };

  const closeSheet = () => {
    serviceBottomSheetRef?.current.hide();
  };
  return (
    <View className="flex-1 p-4">
      <ServiceBottomSheet ref={serviceBottomSheetRef} />
      <Main openSheet={openSheet} closeSheet={closeSheet} />
    </View>
  );
}

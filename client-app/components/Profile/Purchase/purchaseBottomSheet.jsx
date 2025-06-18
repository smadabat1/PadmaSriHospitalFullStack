import { View } from "react-native";
import { forwardRef, useEffect, useMemo, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Text } from "~/components/ui/text";
import { usePurchaseStore } from "~/lib/store";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { errorNotification } from "~/components/notification";
import { Button } from "~/components/ui/button";
import UIItemsCarousel from "./Carousel";
import TrimesterList from "./trimesterList";
import PriceComponent from "./priceComponent";

const PurchaseBottomSheet = forwardRef((_, ref) => {
  const snapPoints = useMemo(() => ["90%"], []);
  const selectedFeature = usePurchaseStore((state) => state.selectedFeature);
  const { dismiss } = useBottomSheetModal();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const firstTimeRef = useRef(true);

  useEffect(() => {
    if (firstTimeRef) {
      firstTimeRef.current = false;
      return;
    }

    if (!selectedFeature) {
      errorNotification("Internal Error - , try again later");
      dismiss("purchase_bs");
    }
  }, [selectedFeature]);

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      topInset={insets.top + 10}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
        backgroundStyle={{
            backgroundColor: theme.colors.background,
        }}
      name="purchase_bs"
      backdropComponent={(props) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />}
    >
      <BottomSheetScrollView
        className="flex-1 p-4 bg-background gap-y-4"
        contentContainerStyle={{
          paddingBottom: insets.bottom + 80,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 gap-y-8">
          <View>
            <Text className="font-bold text-2xl text-wrap" numberOfLines={3} ellipsizeMode="end">
              {selectedFeature?.title}
            </Text>
            <Text className="text-sm text-muted-foreground">{selectedFeature?.description}</Text>
          </View>
          <View>
            <Text>{selectedFeature?.detailed_info}</Text>
          </View>
          <View>
            <PriceComponent selectedFeature={selectedFeature}/>
          </View>
          <View className="gap-y-4" style={{height: 400}}>
            <Text className="font-bold text-xl"><Text className="text-primary text-xl">Trimester-Specific</Text> Nutritional strategy</Text>
            <TrimesterList />
          </View>
          <View>
            <Text className="text-xl font-bold">What's Included</Text>
            <View className="px-2 pt-2">
              {(selectedFeature?.features_included || []).map((feature) => (
                <View key={feature.id}>
                  <Text>{"\u2022"} {feature.title}</Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <UIItemsCarousel />
          </View>
          <View>
            <Text className="text-xl font-bold">Health Benefits</Text>
            <View className="px-2 pt-2">
              {(selectedFeature?.health_benefits || []).map((benefit) => (
                <View key={benefit.id}>
                  <Text>{"\u2022"} {benefit.title}</Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Button><Text>Purchase</Text></Button>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default PurchaseBottomSheet;

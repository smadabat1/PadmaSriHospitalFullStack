import { View } from "react-native";
import { forwardRef, useMemo, useRef, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Text } from "~/components/ui/text";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useServicesStore } from "~/lib/store";
import { errorNotification } from "~/components/notification";
import SectionRenderer from "./sectionRenderer";
import ClosingRenderer from "./closingRenderer";

const ServiceBottomSheet = forwardRef((_, ref) => {
  const snapPoints = useMemo(() => ["90%"], []);
  const selectedService = useServicesStore((state) => state.selectedService);
  const { dismiss } = useBottomSheetModal();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const firstTimeRef = useRef(true);

  useEffect(() => {
    if (firstTimeRef) {
      firstTimeRef.current = false;
      return;
    }

    if (!selectedService) {
      errorNotification("Internal Error - , try again later");
      dismiss("service_bs");
    }
  }, [selectedService]);

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
      name="service_bs"
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
            <View className="gap-y-2">
                <Text className="text-xl font-bold text-primary">{selectedService.title}</Text>
                <Text>{selectedService.subtitle}</Text>
            </View>
            <View>
                <Text>{selectedService.description}</Text>
            </View>
            {selectedService.sections && selectedService.sections.length && <SectionRenderer sections={selectedService.sections}/>}
            {selectedService.closing && selectedService.closing.length && <ClosingRenderer closing={selectedService.closing}/>}
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default ServiceBottomSheet;

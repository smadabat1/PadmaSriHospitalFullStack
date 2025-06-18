import { create } from "zustand";

export const usePurchaseStore = create((set) => ({
    selectedFeature: undefined,
    setSelectedFeature: (value) => set({ selectedFeature: value}),
}));
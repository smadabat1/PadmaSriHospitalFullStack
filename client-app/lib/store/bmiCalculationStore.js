import { create } from "zustand";

export const useBmiCalculationStore = create((set) => ({
    height: "",
    setHeight: (value) => set({ height: value }),

    weight: "",
    setWeight: (value) => set({ weight: value }),

    graphSelectedIndex: 0,
    setGraphSelectedIndex: (value) => set({ graphSelectedIndex: value})
}));
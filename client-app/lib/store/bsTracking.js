import { create } from "zustand";

export const useBsTrackingStore = create((set) => ({
    day: "",
    setDay: (value) => set({ day: value }),

    time: "",
    setTime: (value) => set({ time: value }),
    
    beforeMeal: "", //systolic
    setBeforeMeal: (value) => set({ beforeMeal: value }),

    afterMeal: "", //diastolic
    setAfterMeal: (value) => set({ afterMeal: value }),
}));
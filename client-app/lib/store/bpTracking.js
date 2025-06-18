import { create } from "zustand";

export const useBpTrackingStore = create((set) => ({
    day: "",
    setDay: (value) => set({ day: value }),

    time: "",
    setTime: (value) => set({ time: value }),
    
    upper: "", //systolic
    setUpper: (value) => set({ upper: value }),

    lower: "", //diastolic
    setLower: (value) => set({ lower: value }),
}));
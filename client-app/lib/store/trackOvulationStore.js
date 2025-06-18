import { create } from "zustand";

export const useTrackOvulationStore = create((set) => ({
    prevPeriodStartingDate: "",
    setPrevPeriodStartingDate: (value) => set({ prevPeriodStartingDate: value }),

    averageInterval: "",
    setAverageInteval: (value) => set({ averageInterval: value }),
}));
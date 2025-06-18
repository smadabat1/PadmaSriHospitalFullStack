import { create } from "zustand";

export const useServicesStore = create((set) => ({
  selectedService: undefined,
  setSelectedService: (value) => set({ selectedService: value }),
}));

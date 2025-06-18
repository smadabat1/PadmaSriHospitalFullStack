import { create } from "zustand";

export const useAppSettingsStore = create((set) => ({
    rating: 0,
    setRating: (value) => set({ rating: value}),

    feedbackOptions: [],
    setFeedbackOptions: (value) =>  set({ feedbackOptions: value}),

    clearFeedbackData: () => set({
        rating: 0,
        feedbackOptions: []
    })
}));
import { create } from "zustand";

export const useVideoCallStore = create((set) => ({
    meetingUrl: "https://smadabat.daily.co/IUv9ta12D46Mo9y7Lb8G",
    setMeetingUrl: (value) => set({ meetingUrl: value }),

    meetingObject: null,
    setMeetingObject: (value) => set({ meetingObject: value}),

    micStatus: true,
    setMicStatus: (value) => set({ micStatus: value}),

    speakerStatus: true,
    setSpeakerStatus: (value) => set({ speakerStatus: value}),

    videoStatus: false,
    setVideoStatus: (value) => set({ videoStatus: value}),
}));
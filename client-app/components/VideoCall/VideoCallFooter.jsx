import { Platform, View } from "react-native";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Toggle } from "~/components/ui/toggle";
import { MicOff, X, Video, Volume1 } from "~/lib/icons";
import { cn } from "~/lib/utils";
import { useVideoCallStore } from "~/lib/store/videoCallStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLabel } from "~/lib/utils";

export default function VideoCallFooter({ leaveRoom }) {
  const insets = useSafeAreaInsets();
  const micStatus = useVideoCallStore((state) => state.micStatus);
  const setMicStatus = useVideoCallStore((state) => state.setMicStatus);

  const speakerStatus = useVideoCallStore((state) => state.speakerStatus);
  const setSpeakerStatus = useVideoCallStore((state) => state.setSpeakerStatus);

  const videoStatus = useVideoCallStore((state) => state.videoStatus);
  const setVideoStatus = useVideoCallStore((state) => state.setVideoStatus);

  const meetingObject = useVideoCallStore((state) => state.meetingObject);
  const [audioDevicesItems, setAudioDevicesItems] = useState([]);
  const [cameraDeviceItems, setCameraDevicesItems] = useState([]);

  const micClassName = cn("rounded-full", micStatus ? "bg-primary" : "bg-muted");
  const micIconClassName = cn("", micStatus ? "text-white" : "text-muted-foreground");

  const videoClassName = cn("rounded-full", videoStatus ? "bg-primary" : "bg-muted");
  const videoIconClassName = cn("", videoStatus ? "text-white" : "text-muted-foreground");

  const speakerClassName = cn("rounded-full", videoStatus ? "bg-primary" : "bg-muted");
  const speakerIconClassName = cn("", videoStatus ? "text-white" : "text-muted-foreground");

  useEffect(() => {
    if (!meetingObject || !Object.keys(meetingObject).length) return;

    const loadDevicesInfo = async () => {
      const devicesAvailable = await meetingObject?.enumerateDevices();
      updateAvailableDevices(devicesAvailable?.devices);
    };

    loadDevicesInfo();
  }, [meetingObject]);

  const getCameraValue = useMemo(() => {
    return videoStatus ? "": "CAMERA_USER"
  }, [meetingObject, videoStatus]);

  //this useEffect is to enable the video
  useEffect(() => {
    if (!meetingObject || !Object.keys(meetingObject).length) return;

    meetingObject?.setLocalVideo(videoStatus);
    meetingObject?.setCamera(getCameraValue);
  }, [meetingObject, getCameraValue]);

  const getSpeakerValue = useMemo(() => {
    return speakerStatus ? "WIRED_OR_EARPIECE": "SPEAKERPHONE"
  }, [meetingObject, speakerStatus]);

  //this useEffect is to enable the audio
  useEffect(() => {
    if (!meetingObject || !Object.keys(meetingObject).length) return;

    meetingObject?.setAudioDevice(getSpeakerValue);
  }, [meetingObject, getSpeakerValue]);

  const refreshSelectedDevice = useCallback(async () => {
    console.error("refreshing");
    const devicesInUse = await meetingObject?.getInputDevices();
    console.error({ devicesInUse });
    console.error("refreshing not yet completed");
  }, [meetingObject]);

  const updateAvailableDevices = useCallback(
    (devices) => {
      const inputDevices = devices
        ?.filter((device) => device.kind === "videoinput")
        .map((device) => {
          return {
            value: device.deviceId,
            label: getLabel(device.label),
            originalValue: device,
          };
        });

      const outputDevices = devices
        .filter((device) => device.kind === "audio")
        .map((device) => {
          return {
            value: device.deviceId,
            label: getLabel(device.label),
            originalValue: device,
          };
        });

      console.error({ inputDevices });
      console.error({ outputDevices });
      setCameraDevicesItems(inputDevices || []);
      setAudioDevicesItems(outputDevices || []);
      //refreshSelectedDevice();
    },
    [refreshSelectedDevice]
  );

  return (
    <View
      className="absolute self-center bg-card shadow-sm rounded-xl h-16 flex flex-row justify-center items-center gap-x-4 p-6"
      style={{ bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 20 }), elevation: 5 }}
    >
      <Toggle pressed={micStatus} onPressedChange={setMicStatus} aria-label="Toggle Mic" className={micClassName}>
        <MicOff size={18} className={micIconClassName} />
      </Toggle>
      <Toggle pressed={speakerStatus} onPressedChange={setSpeakerStatus} aria-label="Toggle Video" className={speakerClassName}>
        <Volume1 size={18} className={speakerIconClassName} />
      </Toggle>
      <Toggle pressed={videoStatus} onPressedChange={setVideoStatus} aria-label="Toggle Video" className={videoClassName}>
        <Video size={18} className={videoIconClassName} />
      </Toggle>
      <Toggle pressed={true} onPressedChange={() => leaveRoom()} paria-label="Cancel" className="rounded-full bg-red-500 ">
        <X size={18} className="text-white" />
      </Toggle>
    </View>
  );
}

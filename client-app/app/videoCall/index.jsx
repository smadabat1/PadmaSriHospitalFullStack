import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useVideoCallStore } from "~/lib/store/videoCallStore";
import { Text } from "~/components/ui/text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Daily, { DailyMediaView } from "@daily-co/react-native-daily-js";
import { VCAppState } from "~/lib/constants";
import { router, useFocusEffect } from "expo-router";
import VideoCallFooter from "~/components/VideoCall/VideoCallFooter";
import { useTheme } from "@react-navigation/native";
import { CircleUser, Stethoscope } from "~/lib/icons";
import { Separator } from "~/components/ui/separator";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  dailyMediaView: {
    flex: 1,
    borderRadius: 20
  },
});

//Main video call component
export default function Index() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const meetingUrl = useVideoCallStore((state) => state.meetingUrl);
  const setMeetingUrl = useVideoCallStore((state) => state.setMeetingUrl);
  const meetingObject = useVideoCallStore((state) => state.meetingObject);
  const setMeetingObject = useVideoCallStore((state) => state.setMeetingObject);

  const [loading, setLoading] = useState(true);
  const [appState, setAppState] = useState(VCAppState.Idle);
  const [videoTrack, setVideoTrack] = useState();
  const [localVideoTrack, setLocalVideoTrack] = useState();
  const [remoteParticipantCount, setRemoteParticipantCount] = useState(0);

  const handleNewParticipantsState = (event) => {
    //console.error(event);
    const participant = event.participant;
    // Early out as needed to avoid display the local participant's video
    if (participant.local) {
      console.error({ participant });
      const lVideoTrack = participant.tracks.video;
      setLocalVideoTrack(lVideoTrack);
      return;
    }

    const videoTrack = participant.tracks.video;
    setVideoTrack(videoTrack);
    // Set participant count minus the local participant
    setRemoteParticipantCount(meetingObject.participantCounts().present - 1);
  };

  const joinRoom = async () => {
    try {
      setAppState(VCAppState.Joining);
      await meetingObject.join({
        url: meetingUrl,
      });

      //console.error(meetingObject.participants());
      setLoading(false);
    } catch (error) {
      console.error(error);
      setAppState(VCAppState.Error);
    }
  };

  const leaveRoom = async () => {
    console.log("Leaving the room");
    setAppState(VCAppState.Leaving);
    await meetingObject.leave();

    meetingObject.destroy();
    setMeetingObject(null);
    setVideoTrack(null);
    setRemoteParticipantCount(0);
    setLoading(true);
    //TODO: route to rating the video page
    router.back();
  };

  useEffect(() => {
    if (!meetingObject || !Object.keys(meetingObject).length) return;

    console.error("Meeting object present");
    meetingObject
      .on("joined-meeting", () => setAppState(VCAppState.Joined))
      .on("left-meeting", () => setAppState(VCAppState.Idle))
      .on("participant-joined", handleNewParticipantsState)
      .on("participant-updated", handleNewParticipantsState)
      .on("participant-left", handleNewParticipantsState);

    joinRoom();
  }, [meetingObject]);

  //when the page is removed if the meetingObject is present then we are destorying and then setting it as null.
  useFocusEffect(
    useCallback(() => {
      return () => {
        if (meetingObject) {
          console.error("call object present - destroying");
          meetingObject.destroy();
          setMeetingObject(null);
          setVideoTrack(null);
          setRemoteParticipantCount(0);
          setLoading(true);
        }
      };
    }, [meetingObject])
  );

  // once the meeting url is created then create call object
  useEffect(() => {
    if (meetingUrl) {
      const response = Daily.createCallObject();
      setMeetingObject(response);
    }
  }, [meetingUrl]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        }}
      >
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator color={theme.colors.primary} size={"small"} />
        </View>
      </View>
    );
  }

  const renderlocalUserVideo = () => {
    if (localVideoTrack.state === "off") {
      return (
        <View className="flex-1 justify-center items-center gap-y-4">
          <CircleUser size={48} className="text-muted-foreground" />
          <Text className="text-sm text-muted-foreground" r>
            Video turned off, turn on video
          </Text>
        </View>
      );
    }
    return (
      <View className="flex-1">
        <DailyMediaView videoTrack={localVideoTrack.persistentTrack} mirror={true} objectFit="cover" style={styles.dailyMediaView} />
      </View>
    );
  };

  const renderRemoteUserVideo = () => {
    if (videoTrack.state === "off") {
      return (
        <View className="flex-1 justify-center items-center gap-y-4">
          <Stethoscope size={48} className="text-muted-foreground" />
          <Text className="text-sm text-muted-foreground" r>
            Doctor's Video turned off
          </Text>
        </View>
      );
    }
    return (
      <View className="flex-1">
        <DailyMediaView videoTrack={videoTrack.persistentTrack} mirror={true} objectFit="cover" style={styles.dailyMediaView} />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {
        <View className="flex-1 relative">
          {remoteParticipantCount > 0 ? (
            <View className="flex-1">
              <View className="h-1/2 w-full p-4 rounded-xl">
                {renderRemoteUserVideo()}
              </View>
              <Separator />
              <View className="h-1/2 w-full p-4 rounded-xl">
                {renderlocalUserVideo()}
              </View>
            </View>
          ) : (
            renderlocalUserVideo()
          )}
          <VideoCallFooter leaveRoom={leaveRoom} />
        </View>
      }
      {appState === VCAppState.Error && <Text>Error while joining the room.</Text>}
    </View>
  );
}

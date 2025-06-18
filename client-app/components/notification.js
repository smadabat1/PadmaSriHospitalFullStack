import Toast, { BaseToast } from "react-native-toast-message";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "rgb(34 197 94)" }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "rgb(59 130 246)" }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "rgb(239 68 68)" }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
  warning: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "rgb(234 179 8)" }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
};

export const successNotification = (message) => {
  Toast.show({
    type: "success",
    text1: "Success",
    text2: message,
    position: "bottom",
    text1Style:{
      fontSize: 15,
      fontWeight: "800",
    },
    text2Style:{
      fontSize: 13,
      fontWeight: "500",
    }
  });
};

export const errorNotification = (message) => {
  Toast.show({
    type: "error",
    text1: "Error",
    text2: message,
    position: "bottom",
    text1Style:{
      fontSize: 15,
      fontWeight: "800",
    },
    text2Style:{
      fontSize: 13,
      fontWeight: "500",
    }
  });
};

export const warningNotification = (message) => {
  Toast.show({
    type: "warning",
    text1: "Warning",
    text2: message,
    position: "bottom",
    text1Style:{
      fontSize: 15,
      fontWeight: "800",
    },
    text2Style:{
      fontSize: 13,
      fontWeight: "500",
    }
  });
};

export const infoNotification = (message) => {
  Toast.show({
    type: "info",
    text1: "Info",
    text2: message,
    position: "bottom",
    text1Style:{
      fontSize: 15,
      fontWeight: "800",
    },
    text2Style:{
      fontSize: 13,
      fontWeight: "500",
    }
  });
};

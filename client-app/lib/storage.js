import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
    id: "padmasri-client-android-app",
    encryptionKey: "ThisisthesecretKey"
});
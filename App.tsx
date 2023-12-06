import { StyleSheet, View } from "react-native";
import ImageInput from "./app/components/ImageInput";
import FormScreen from "./app/screens/FormScreen";
import AppImageSelector from "./app/components/AppImageSelector";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

import { StyleSheet, TextInput, View } from "react-native";
import FormScreen from "./app/screens/FormScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FormScreen />
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

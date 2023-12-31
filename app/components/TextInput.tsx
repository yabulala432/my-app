import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface AppTextInputProps {
  icon: any;
  rightIcon?: any;
  onPressRightIcon?: any;
  [x: string]: any;
}

function AppTextInput({
  icon,
  rightIcon,
  onPressRightIcon,
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={styles.textInputContainer}>
      <MaterialCommunityIcons name={icon} size={25} color={"#6e6969"} />
      <TextInput style={styles.textInput} {...otherProps} />
      {rightIcon && (
        <TouchableOpacity style={styles.rightIcon} onPress={onPressRightIcon}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={25}
            color={"#6e6969"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "#0c0c0c",
    marginLeft: 10,
    width: "80%",
  },
  rightIcon: {
    position: "absolute",
    right: "5%",
  },
});

export default AppTextInput;

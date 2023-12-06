import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

interface props {
  icon?: any;
  rightIcon?: any;
  onPressRightIcon?: any;
  onChangeText?: any;
  placeholder?: string;
  numberOfLines?: number;
  textAlignVertical?: any;
  textBreakStrategy?: any;
  underlineColorAndroid?: any;
}

function AppTextInput({
  icon,
  rightIcon,
  onPressRightIcon,
  onChangeText,
  placeholder,
  numberOfLines = 1,
  textAlignVertical,
  textBreakStrategy,
  underlineColorAndroid,
}: props) {
  return (
    <>
      {/* title of the text input */}
      <View style={styles.titleContainer}>
        <AppText style={{ color: "#6e6969" }}>
          {placeholder?.toLocaleUpperCase()} :
        </AppText>
      </View>
      <View style={styles.textInputContainer}>
        <MaterialCommunityIcons name={icon} size={25} color={"#6e6969"} />
        <TextInput
          numberOfLines={numberOfLines}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          textAlignVertical={textAlignVertical}
          textBreakStrategy={textBreakStrategy}
          underlineColorAndroid={underlineColorAndroid}
        />
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
    </>
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
    overflow: "scroll",
  },
  rightIcon: {
    position: "absolute",
    right: "5%",
  },
  titleContainer: {
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
});

export default AppTextInput;

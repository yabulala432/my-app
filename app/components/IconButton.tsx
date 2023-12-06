import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
  name: any;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const IconButton = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}: IconProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size - size * 0.4}
        color={iconColor}
      />
    </View>
  );
};

export default IconButton;

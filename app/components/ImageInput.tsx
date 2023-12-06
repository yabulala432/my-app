import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert } from "react-native";

import colors from "../config/colors";

interface props {}

function ImageInput() {
  const [imageUri, setImageUri] = useState<any>();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
        allowsMultipleSelection: false,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        console.log(result.assets[0].uri, imageUri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Sure ?", [
        {
          text: "yes",
          onPress: () => {
            setImageUri(null);
          },
        },
        {
          text: "no",
        },
      ]);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={selectImage}>
        <View style={styles.iconButton}>
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        </View>
      </TouchableWithoutFeedback>
      {imageUri && (
        <TouchableWithoutFeedback onPress={handlePress}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    gap: 5,
  },
  iconButton: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  image: {
    borderRadius: 15,
    height: 150,
    overflow: "hidden",
    width: 150,
  },
});
export default ImageInput;

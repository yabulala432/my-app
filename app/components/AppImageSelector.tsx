import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ImageRenderer from "./ImageRenderer";

const AppImageSelector = ({ size = 40, color = "#989494", style = {} }) => {
  const [images, setImages] = useState<any>([]);

  const hadleCameraIconPress = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted) {
      return true;
    } else {
      return false;
    }
  };

  const selectImage = async () => {
    if (await hadleCameraIconPress()) {
      const selectResult = await ImagePicker.launchImageLibraryAsync();
      if (selectResult.canceled) {
        return null;
      } else if (selectResult.assets) {
        const [{ uri }] = selectResult.assets;
        setImages([...images, { uri: uri, id: images.length }]);
        console.log(images);
      }
    }
  };

  const handleDelete = (id: any) => {
    setImages(images.filter((item: any) => item.id != id));
  };

  useEffect(() => {
    hadleCameraIconPress();
  }, []);

  return (
    <View style={styles.container}>
      {images.length > 0 && (
        <View style={styles.view1}>
          <ImageRenderer onPress={handleDelete} images={images} />
        </View>
      )}

      <View style={(styles.view2, { justifyContent: "center" })}>
        <TouchableOpacity style={styles.iconContainer} onPress={selectImage}>
          <View>
            <MaterialCommunityIcons name="camera" size={size} color={color} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "red",
    height: 185,
    padding: 10,
    position: "relative",
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    justifyContent: "center",
    height: 100,
    width: 100,
  },
  view1: {
    justifyContent: "center",
    maxWidth: "72%",
  },
  view2: {
    // flexGrow: 2,
    justifyContent: "center",
    width: "28%",
  },
});
export default AppImageSelector;

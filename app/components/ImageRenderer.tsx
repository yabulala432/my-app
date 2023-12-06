import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface props {
  images: any;
  onPress: (id: any) => void;
}

function ImageRenderer({ images, onPress }: props) {
  return (
    <View style={styles.container}>
      {
        <FlatList
          data={images}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.ImageContainer}>
                <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.uri }}
                    resizeMode="stretch"
                  />
                </TouchableWithoutFeedback>
              </View>
            );
          }}
          horizontal={true}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  ImageContainer: {
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    height: 130,
    margin: 2,
    overflow: "hidden",
    width: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageRenderer;

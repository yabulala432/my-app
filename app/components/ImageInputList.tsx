import React, { useRef } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import ImageInput from "./ImageInput";

interface props {
  imageUris: any;
  onRemoveImage: any;
  onAddImage: any;
}

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }: props) {
  const scrollView = useRef<ScrollView>();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => {}}
        horizontal={true}
      >
        <View style={styles.container}>
          {imageUris.map((uri: any) => (
            <View key={uri} style={styles.itemContainer}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => {
                  onRemoveImage(uri);
                }}
              />
            </View>
          ))}
          <ImageInput
            onChangeImage={(uri: any) => {
              scrollView.current?.scrollToEnd();
              onAddImage(uri);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemContainer: {
    marginRight: 10,
    marginVertical: 3,
  },
});
export default ImageInputList;

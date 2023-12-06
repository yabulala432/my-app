import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Formik } from "formik";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ImageInput from "../components/ImageInput";
import AppText from "../components/AppText";

function FormScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          initialValues={{ title: "", price: "", description: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <View style={styles.inputFields}>
                <AppTextInput
                  onChangeText={handleChange("title")}
                  placeholder={"title"}
                />
                <View style={styles.row}>
                  <AppText children={"Amharic Image : "} />
                  <ImageInput />
                </View>

                <View style={styles.row}>
                  <AppText children={"Geez Image : "} />
                  <ImageInput />
                </View>

                <AppTextInput
                  onChangeText={handleChange("price")}
                  placeholder={"audio"}
                />
                <AppTextInput
                  onChangeText={handleChange("description")}
                  placeholder={"description"}
                  numberOfLines={5}
                  textAlignVertical={"top"}
                  textBreakStrategy={"highQuality"}
                  underlineColorAndroid={"transparent"}
                />
              </View>
              <AppButton title={"Submit"} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputFields: {
    marginBottom: 50,
  },
  row: {
    backgroundColor: "#ebdbb2",
    padding: 10,
    borderRadius: 10,
  },
});
export default FormScreen;

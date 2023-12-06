import React from "react";
import { StyleSheet, View } from "react-native";

import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ImageInput from "../components/ImageInput";

function FormScreen() {
  return (
    <>
      <ImageInput />
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
                <AppTextInput
                  onChangeText={handleChange("price")}
                  placeholder={"price"}
                />
                <AppTextInput
                  onChangeText={handleChange("description")}
                  placeholder={"description"}
                />
              </View>
              <AppButton title={"Submit"} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputFields: {
    marginBottom: 50,
  },
});
export default FormScreen;

import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Colors from "../constans/Colors";
  import Font from "../constans/Font";
  import FontSize from "../constans/FontSize";
  import Spacing from "../constans/Spacing";
  
  const AppTextInput= ({ ...otherProps }) => {
    const [focused, setFocused] = useState(false);
    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={Colors.darkText}
        style={[
          {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.primary,
            padding: Spacing * 2,
            backgroundColor: Colors.lightPrimary,
            borderRadius: Spacing,
            marginVertical: Spacing,
          },
          focused && {
            borderWidth: 0,
            borderColor: Colors.primary,
            shadowOffset: { width: 4, height: Spacing },
            shadowColor: Colors.primary,
            shadowOpacity: 0.2,
            shadowRadius: Spacing,
          },
        ]}
        { ...otherProps }
      />
    );
  };
  
  export default AppTextInput;
  
  const styles = StyleSheet.create({});
import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constans/Spacing";
  import FontSize from "../constans/FontSize";
  import Colors from "../constans/Colors";
  import Font from "../constans/Font";
  
  
  
  const Home = () => {
    return (
      <SafeAreaView style={styles.Container}>
        <View>
          <ImageBackground
            style={{
              height: 500 / 2.5,
              marginTop:30,
            }}
            resizeMode="contain"
            source={require("../assets/Logo.png")}
          />
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
            }}
          >
            <Text
              style={{
                marginTop:'30px',
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                textAlign: "center",
              }}
            >
              Pesquisas
            </Text>
  
            <Text
              style={{
                
                fontSize: FontSize.medium,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "center",
                marginTop: Spacing * 2,
              }}
            >
              Para poder ver los resultados introduzca sus datos correctamente
              , si tiene algun problema puede ver la  guia rapida
               <Text style={
                {
                    color: Colors.primary,
                    textDecorationLine:'underline',
                    
                }
               } color="red"> precione Aqui</Text>
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              paddingTop: Spacing * 6,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "100%",
                marginTop:'50px',
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                justifyContent:'center',
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
            >
              <Text
                style={{
               
                  fontFamily: Font["poppins-bold"],
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                  
                }}
              >
                Ingresar datos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              
              style={{
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
              }}
            >
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    Container:{
  width:360,
  height:"100%"
    }
  });
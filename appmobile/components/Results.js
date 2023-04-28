import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constans/Spacing";
  import FontSize from "../constans/FontSize";
  import Colors from "../constans/Colors";
  import Font from "../constans/Font";
  import { Ionicons } from "@expo/vector-icons";
  import AppTextInput from "../components/AppTextInput";
  import { useEffect } from "react";
  import { useState } from "react";
import { useDatos } from "../context/datos";
  const Results =() => {
   const {carnet,barras}=useDatos();
    const [results, setResults] = useState([]);

    const Mostratresults= async()=>{
     const reponse= await fetch(`http://127.0.0.1:8000/api/resulst`,
     {
      method:"POST",
      headers:{
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        ci:carnet,
        codigo_barras:barras
      })
     })
     const datos= await reponse?.json();
     setResults(datos);
     
    }
    console.log(results)
    useEffect(() => {
        Mostratresults();
    }, []);
    return (
      <SafeAreaView style={styles.Container}>
        <View
          style={{
            padding: Spacing * 2,
            backgroundColor:"#fff",
            margin:15,
            borderRadius:10,
            
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                marginVertical: Spacing * 3,
               textAlign:'center',
              }}
            >
              RESULTADO DEL LABORATORIO
            </Text>
          </View>
          {
            results.map((v,i)=>(
              <>
              <View key={i}
            style={{
              marginVertical: Spacing * 3,
              width:"100%",
              padding:"10px",
              
            }}
          >
            <View style={styles.Viewrows}>
                <Text style={styles.Textt}>DATOS PERSONALES</Text>
            </View>
            <View style={styles.Viewrows}>
                <Text style={styles.Texlabel}>Nombre y Apellido de Madre:</Text>
                <Text style={styles.Textdatos}>{v.madre}</Text>
            </View>
            <View style={styles.Viewrows}>
                <Text style={styles.Texlabel}>Carnet de Madre:</Text>
                <Text style={styles.Textdatos}>{v.ci}</Text>
            </View>
            <View style={styles.Viewrows}>
                <Text style={styles.Texlabel}>Nombre de Hij@:</Text>
                <Text style={styles.Textdatos}>{v.nombre}</Text>
            </View>
            <View style={styles.Viewrows}>
                <Text style={styles.Texlabel}>Codigo de barra:</Text>
                <Text style={styles.Textdatos}>{v.codigo_barras}</Text>
            </View>
            <View style={styles.Viewrows}>
                <Text style={styles.Texlabel}>Fecha toma muestra:</Text>
                <Text style={styles.Textdatos}>{v.fecha_toma_muestra}</Text>
            </View>
            <View style={styles.Viewrows}>
                <Text  style={styles.Texlabel}>Resultado:</Text>
                <Text style={styles.Textdatos}></Text>
            </View>
        </View>
              </>  
            ))
          }
        
          <TouchableOpacity
        
            style={{
              padding: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Contactate de inmediato
            </Text>
  
            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
               <Ionicons
                name="logo-instagram"
                color={Colors.text}
                size={Spacing * 2}
              />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: "#74c69d",
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                name="logo-whatsapp"
                color={Colors.text}
                size={Spacing * 2}
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Results;
  
  const styles = StyleSheet.create({
    Container:{
        width:"100%",
        height:"100%",
        backgroundColor:Colors.primary
    },
    Viewrows:{
        height:50,
        width:"100%",
        flexDirection:'row',
        margin:5,
        borderBottomWidth:"0.5px",
        borderColor:"rgba(0,0,0,.5)"
    },
    Textt:{
        width:"50%",
        fontWeight:800,
        fontFamily: Font["poppins-semiBold"],
        color: Colors.text,
        textAlign: 'left',
        fontSize: FontSize.large,
      },
      Texlabel:{
      width:"50%"
      },
      Textdatos:{
        width:"50%",
        fontWeight:700,
        fontSize:'17px'
      }
  });
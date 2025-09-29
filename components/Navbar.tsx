import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Navbar(){
  return (
  <View style={styles.container}>
  <Text style={styles.text}>Saved</Text>
  <Image
   source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" }}
   style={styles.profile}/></View>);
}
const styles=StyleSheet.create({
container:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 15,
  backgroundColor: "black",
},
text:{
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
   profile:{
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

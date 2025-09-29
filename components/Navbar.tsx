import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Navbar(){
  return (
  
  <View>

  <View style={styles.container}>
  <Image
   source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" }}
   style={styles.profile}/>
   </View>

   <View style={styles.container2} >
    <Text style={styles.text1}>follower</Text>
    <Text style={styles.text2}>Saved</Text>
    <Text style={styles.text3}>following</Text>
   </View>

  </View>
  );
}
const styles=StyleSheet.create({
container:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 15,
  backgroundColor: "black",
},
container2:{
  flexDirection: "row",
  justifyContent: "space-around",

},
text1:{
    color: "gray",
    fontSize: 18,
   
  },
  text2:{
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  text3:{
    color: "gray",
    fontSize: 18,
   
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

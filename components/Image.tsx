import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Img({uri}:{ uri:string }){
  return (
    <View style={styles.cardcont}>
    <Image source={{uri}} style={styles.image} />
    </View>
  );
}
const styles=StyleSheet.create({
cardcont:{
    width:"48%",
    margin:"1%",
    borderRadius:8,
    overflow:"hidden",
  },
  image:{
    width:"100%",
    height:150,
  },
});

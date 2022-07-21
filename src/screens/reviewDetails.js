import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "./card";
export default function ReviewDetails(){
    const {params} = useRoute();
    const rating=params.rating;
    const images = {
        ratings:{
            '1':require('../assets/rating-1.png'),
            '2':require('../assets/rating-2.png'),
            '3':require('../assets/rating-3.png'),
            '4':require('../assets/rating-4.png'),
            '5':require('../assets/rating-5.png'),

        }
    }
    console.log(params);
    return (
        <View style={styles.container}>
           <Card>
                <Text style={globalStyles.text}>Review Details Screen</Text>
                <Text>{params.text}</Text>
                
                <View style={styles.rating}>
                    <Text>Rating:</Text>
                    <Image source={images.ratings[rating]} />
                    {/* <Text>{params.key}</Text> */}
                </View>
           </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:24
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderColor:'#eee'
    }
})
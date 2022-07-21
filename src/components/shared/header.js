import React from "react";
import { StyleSheet, View,Text, Image, ImageBackground } from "react-native";
import  Icon from "react-native-vector-icons/AntDesign";
export default function Header(){
    return(
        <ImageBackground source={require('../../assets/game_bg.png')} style={styles.header}> 
            <Icon name='home' size={26}/>
            <View style={styles.headerText}>
                <Image source={require('../../assets/heart_logo.png')} style={styles.imageIcon}/>
                <Text>Home</Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    imageIcon:{
        width:30,
        height:30,
        marginRight:5
    }
})
import React,{useState} from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export function Products() {
    const styles = StyleSheet.create({
        container:{
            flex:1,
            marginHorizontal:20
        },
        input:{
            borderWidth : 1,
            borderColor:"#777",
            width:200,
            padding:10,
            marginBottom:24
        },
        item:{
            padding : 20,
            backgroundColor:"pink",
            marginTop:24,
            fontSize:16
        }
    })
    const [name,setName] =  useState("shan")
    const [age,setAge] = useState(25)
    const [people,setPeople] = useState([
        {name:'Shan',id:1},
        {name:'Yoshi',id:2},
        {name:'Suzan',id:3},
        {name:'Musuko',id:4},
        {name:'Yuki',id:5},
        {name:'Luigi',id:6},
        {name:'Mario',id:7},
        {name:'Michel',id:8},
        {name:'Davis',id:9},
    ])
    const pressHandler = (id) => {
        console.log(id);
    }
  return (
    <View style={styles.container}>
        <Text>Products Page</Text>
        <TextInput 
           multiline
           style={styles.input}
           placeholder="Enter Your Name"
           onChangeText={(val)=>{setName(val)}}
        />
        <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder="Enter Your Age"
            onChangeText={(val)=>{setAge(val)}}
        />
        <Text>Name : {name} and Age:  {age}</Text>
        {/* <ScrollView>
            {
                people.map(person => {
                    return (
                    <View key={person.key}>
                        <Text style={styles.item}>{person.name}</Text>
                    </View>)
                })
            }
        </ScrollView> */}
        <FlatList
            
            keyExtractor={(item)=>{item.id}}
            data={people}
            renderItem={({item})=>{
             return  (
                <TouchableOpacity onPress={()=> pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
            
         />
    </View>
  )
}

export default Products
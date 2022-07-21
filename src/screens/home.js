import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AddTodo} from '../components/addTodo';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import { globalStyles } from '../styles/global';
import ReviewForm from './reviewForm';

export const Home=()=>{
    const [modalOpen,setModalOpen] = useState(false);
    const {navigate} = useNavigation();
    const [todos,setTodos] = useState([
        { text: 'buy coffee', body:"lorem isume ....",  rating:'2',key: '1'},
        { text: 'create an app', body:"lorem isume ....",  rating:'3',key: '2'},
        { text: 'play on the switch', body:"lorem isume ....",  rating:'1',key: '3'},
    ])
    // const [items,setItems] = useState([
    //     { text: 'buy coffee', body:"lorem isume ....",  key: '1'},
    //     { text: 'create an app', body:"lorem isume ....",  key: '2'},
    //     { text: 'play on the switch', body:"lorem isume ....",  key: '3'},
    // ])
    const addForm=(todo)=>{
        todo.key=Math.random().toString();
        setTodos((prevTodos)=>{
            return [
                todo,
                ...prevTodos
            ]
        })
        setModalOpen(false)
    }
    const pressHandler=(key) => {
        setTodos((prevTodos) => {
           return prevTodos.filter(todo => todo.key != key)
        })
    }
    const submitHandler = (text)=>{
        // console.log(text,"text");
        if(text.length > 3){
            setTodos((prevTodos)=>{
                return [
                    {text:text,key:Math.random().toString()},
                    ...prevTodos
                ]
            })
        }else{
            Alert.alert('OOPS!','Todos must be over 3 chars long',[
                {text:'understood',onPress:()=>console.log('alert closed')}
            ])
        }

    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            
            <View style={styles.container}>
            {/* header */}
            <Header />
            <View>
                <Text style={globalStyles.text}>Home Screen</Text>
                <Icon name='plus' size={32} style={styles.modalToggle}
                    onPress={()=>{setModalOpen(true)}}
                />

                <Modal visible={modalOpen} animationType="slide">
                    <View>
                    <Icon name='close' size={32} style={{...styles.modalToggle,...styles.modalClose}}
                        onPress={()=>{setModalOpen(false)}}
                    />
                        {/* <Text>Hello From The Modal </Text> */}
                        <ReviewForm addForm={addForm} setModalOpen={setModalOpen}/>
                    </View>
                </Modal>

                <FlatList 
                    data={todos}
                    renderItem={({item}) =>(
                        <TouchableOpacity onPress={()=>navigate('reviewdetails',item)}>
                            <Text style={styles.itemText}>{item.text}</Text>
                        </TouchableOpacity>
    )}
                />
            </View>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.content}>
                {/*to Form */}
                <View style={styles.list}> 
                    <FlatList
                        keyExtractor={(item)=> item.key}
                        data={todos}
                        renderItem={({item})=>(
                           <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                    />
                </View>
            </View>

            <View>
                <Text>Hello World!</Text>
                <Button title='Go To Products' onPress={()=>{navigate("products")}}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
        
    )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    content:{
        padding:40,
    },
    list:{
        marginTop:20,
    },
    itemText:{
        marginVertical:20,
        padding:20,
    },
    modalToggle:{
        padding:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    }
})
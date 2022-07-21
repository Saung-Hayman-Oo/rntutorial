import React,{useState} from "react";
import { TextInput, View  ,StyleSheet, Button} from "react-native";

export function AddTodo({submitHandler}){
    const [text,setText] = useState();
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo ..."
                onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title="add todo" color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        
        marginVertical:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderColor:'#ddd',
        borderBottomWidth:1
    }
})
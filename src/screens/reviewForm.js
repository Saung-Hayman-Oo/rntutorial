import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";

export default function ReviewForm({addForm}){
    return (
        <View>
            <Formik
                initialValues={{text:'',body:'',rating:''}}
                onSubmit={(values)=>{
                    console.log(values)
                    addForm(values);
                   
                }}
            >
                {
                    (props)=>(
                        <View>
                            <TextInput 
                                placeholder="Text"
                                style={{borderWidth:1,borderColor:'#333',padding:7,marginHorizontal:5,marginVertical:10}}
                                onChangeText={props.handleChange('text')}
                                value={props.values.text}
                            />
                             <TextInput 
                                placeholder="body"
                                multiline
                                style={{borderWidth:1,borderColor:'#333',padding:7,marginHorizontal:5,marginVertical:10}}
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                            />
                             <TextInput 
                                keyboardType="numeric"
                                placeholder="key 1-5"
                                style={{borderWidth:1,borderColor:'#333',padding:7,marginHorizontal:5,marginVertical:10}}
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                            />
                            <Button
                             style={{marginHorizontal:5}}
                             title="Submit"
                             color='maroon'
                             onPress={props.handleSubmit}/>
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}
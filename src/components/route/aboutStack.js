import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../../screens/about';

export const AboutStack = () => {
    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={
                {
                    headerStyle:{backgroundColor:'#ddd'},
                    title:"Home",
                    headerShown:true
                }
                }
            >
                <stack.Screen name="about" component={About}/>
                
            </stack.Navigator>
        </NavigationContainer>
    )
}
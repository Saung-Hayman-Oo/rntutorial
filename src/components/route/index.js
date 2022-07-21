import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home}  from '../../screens/home';
import {Products} from '../../screens/products';
import ReviewDetails from '../../screens/reviewDetails';
import Header from '../shared/header';

export const MainRoute = () => {
    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <stack.Navigator
                // screenOptions={
                //     {headerStyle:{backgroundColor:'#ddd'},
                //     headerShown:true
                // }
                // }
            >
                <stack.Screen name="home" component={Home} options={{
                    headerTitle:()=><Header />
                }}/>
                <stack.Screen name="products" component={Products}/>
                <stack.Screen name="reviewdetails" component={ReviewDetails}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
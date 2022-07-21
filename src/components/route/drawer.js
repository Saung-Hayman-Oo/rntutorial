import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";
import { MainRoute } from ".";
import { AboutStack } from "./aboutStack";

export const DrawerNavigator = () => {
    const drawer = createDrawerNavigator();
    return (
       <NavigationContainer>
         <drawer.Navigator>
                <drawer.Screen name="home" component={ MainRoute } />
                <drawer.Screen name="about" component={ AboutStack } />
            </drawer.Navigator>
       </NavigationContainer>
           
        
    )
}
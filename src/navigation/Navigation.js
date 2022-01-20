import React from 'react';
import {View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from '../screens/SearchScreen';
import ResultsShowScreen from '../screens/ResultsShowScreen';

const StackNavigation = () =>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName='SearchScreen' >
            <Stack.Screen name = "SearchScreen" component={SearchScreen}/>
            <Stack.Screen name = "ResultsShowScreen" component={ResultsShowScreen}/>
        </Stack.Navigator>
    )
}
// const DrawerNavigation = ()=>{
//     const Drawer  =createDrawerNavigator();
//     return(
//         <Drawer.Navigator>

//         </Drawer.Navigator>
//     )
// }

const BottomNavigation = () =>{
    const Bottom = createBottomTabNavigator();
    return(
        <Bottom.Navigator>

        </Bottom.Navigator>
    )
}

const Navigation = () => {
    return (
       
           <StackNavigation/>
        
    )
}

export default Navigation

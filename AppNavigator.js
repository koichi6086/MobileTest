import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import FriendList from './FriendList';
import FriendScreen from './FriendScreen';

const Stack = createStackNavigator();

function TopLevelNavigator() {
    return(
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{cardStyle: { backgroundColor: 'white' }}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerLeft: null}} />
            <Stack.Screen name="FriendList" component={FriendList} />
            <Stack.Screen name="FriendScreen" component={FriendScreen} />
        </Stack.Navigator>
    )
}

export default class App extends Component {
    render(){
        return(
            <NavigationContainer><TopLevelNavigator /></NavigationContainer>
        )
    }
}
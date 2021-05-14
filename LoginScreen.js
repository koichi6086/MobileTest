import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { updateUser } from './actions';

const App = (props) => {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUsers = () => {
        axios.get('https://randomuser.me/api/')
        .then((res)=>{
            setUser(res.data.results[0]);
        })
    }

    useEffect(()=>{
        getUsers();
    }, [])

    useEffect(()=>{
        if(user !== null)
        {
            setUsername(user.login.username);
            setPassword(user.login.password);
        }
    }, [user])

    const login = () => {
        if(user.login.username === username)
        {
            if(user.login.password === password)
            {
                props.updateUser(user);
                props.navigation.navigate("ProfileScreen");
            }
            else
            {
                alert("Incorrect password.")
            }
        }
        else
        {
            alert("Incorrect username.")
        }
    }

    return(
        <View>
            <View style={{margin: 50}}>
                {
                    user !== null &&
                    <View style={{margin: 10}}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={{uri: user.picture.medium}} style={{height: 100, width: 100, borderRadius: 50}} />
                        </View>
                        <Text>Username</Text>
                        <TextInput style={{padding: 5, borderWidth: 1, borderColor: 'lightgrey'}} value={username} onChangeText={(value)=>{setUsername(value)}} />
                        <Text>Password</Text>
                        <TextInput style={{padding: 5, borderWidth: 1, borderColor: 'lightgrey'}} value={password} onChangeText={(value)=>{setPassword(value)}} secureTextEntry={true} />
                    </View>
                }
                <TouchableOpacity style={{alignItems: 'center', borderRadius: 5, backgroundColor: 'navy', padding: 10, margin: 10}} onPress={()=>{login()}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
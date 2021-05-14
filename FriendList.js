import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { updateFriend } from './actions';

function FriendItem({item, index, props}){

    return(
        <TouchableOpacity style={{margin: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, flexDirection: 'row', alignItems: 'center'}} onPress={()=>{props.navigation.navigate("FriendScreen"); props.updateFriend(item)}}>
            <Image source={{uri: item.picture.medium}} style={{height: 80, width: 80}} />
            <Text style={{flex: 1, textAlign: 'center'}}>{item.name.first} {item.name.last}</Text>
        </TouchableOpacity>
    )
}

const App = (props) => {

    const [friends, setFriends] = useState([]);

    const getUsers = () => {
        axios.get('https://randomuser.me/api/?results=10')
        .then((res)=>{
            setFriends(friends.concat(res.data.results));
        })
    }

    useEffect(()=>{
        getUsers();
    }, [])

    return(
        <View>
            <FlatList 
            data={friends}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index})=>{
                return(
                    <FriendItem item={item} index={index} props={props} />
                )
            }}
            onEndReached={(e)=>{
                getUsers();
            }}
            onEndReachedThreshold={0.5}
            />
        </View>
    )
}

function mapStateToProps(state){
    return{
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateFriend
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

const App = (props) => {

    props.navigation.setOptions({headerStyle: {backgroundColor: 'orange'}});

    return(
        <ScrollView>
            <View style={{alignItems: 'center', padding: 10}}>
                <Image source={{uri: props.friend.picture.medium}} style={{height: 150, width: 150, borderWidth: 1, borderRadius: 50}} />
            </View>
            <View style={{padding: 10}}>
                <View style={{margin: 10}}>
                    <Text>First Name:</Text>
                    <View style={styles.input}>
                        <Text style={{textAlign: 'left'}}>{props.friend.name.first}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}>
                    <Text>Last Name:</Text>
                    <View style={styles.input}>
                        <Text style={{textAlign: 'left'}}>{props.friend.name.last}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}>
                    <Text>Email:</Text>
                    <View style={styles.input}>
                        <Text>{props.friend.email}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}>
                    <Text>Date of birth:</Text>
                    <View style={styles.input}>
                        <Text>{moment(props.friend.dob.date).format("D MMMM YYYY")}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}>
                    <Text>Address:</Text>
                    <View style={styles.input}>
                        <Text style={{textAlign: 'left'}}>{props.friend.location.street.number} {props.friend.location.street.name}, {`\n` + props.friend.location.state}, {props.friend.location.city}, {`\n` + props.friend.location.country} {props.friend.location.postcode}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}>
                    <Text>Phone:</Text>
                    <View style={styles.input}>
                        <Text>{props.friend.cell}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 5
    }
})

function mapStateToProps(state){
    return{
        user: state.user.user,
        friend: state.user.friend
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
        
    )
}

export default SearchBar
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:"#f0eeee",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10,
        },
        inputStyle:{
            flex:1,
            fontSize:18,
        },
        iconStyle:{
            fontSize:35,
            alignSelf:'center',
            marginHorizontal:15,
        }
})
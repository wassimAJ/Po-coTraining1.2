import React,{useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
             <SearchBar term={term} onTermChange={newTerm=>setTerm(newTerm)} onTermSubmit={()=>console.log("something")} />
             <Text>{term} aahahaah</Text>
        </View>
       
    )
}

export default SearchScreen
const style = StyleSheet.create({

})
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const id = route.params.id;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    await yelp.get(`/${id}`).then((resp) => {
      setResult(resp.data);
    });
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return <> {result ? <View>
      <Text>{result.name}</Text>
      <FlatList 
      data={result.photos}
      keyExtractor={(photo)=>photo}
      renderItem={({item})=>(
          <Image style={styles.image} source={item}/>
      )}
      />
  </View> : <></>}</>
};

export default ResultsShowScreen;
const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

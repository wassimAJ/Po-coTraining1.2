import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();

const filterResultsByPrice= (price)=>{
    return results.filter(res=>{
        return res.price ===price;
    })
}

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage?<Text>{errorMessage}</Text>:null}
      <ScrollView>
        <Text>we have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"  />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
const style = StyleSheet.create({});

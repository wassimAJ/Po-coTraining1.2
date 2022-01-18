import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("./search", {
        limit: 50,
        term: searchTerm,
        location: "san jose",
      });
      setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage("Something went wrong");
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage?<Text>{errorMessage}</Text>:null}
      <Text>we have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;
const style = StyleSheet.create({});

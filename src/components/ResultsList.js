import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  return (
    <>
      {results ? (
        <View>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={results}
            keyExtractor={(res) => res.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ResultsShowScreen", { id: item.id })
                  }
                >
                  <ResultDetail result={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ResultsList;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

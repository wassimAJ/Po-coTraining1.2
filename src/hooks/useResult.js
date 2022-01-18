import {useState, useEffect} from 'react';
import yelp from '../api/yelp'


export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
       searchApi('pizza');
    }, [])
  
    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get("./search", {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        });
        setResults(response.data.businesses);
      } catch (err) {
          console.log("error", err)
          setErrorMessage("Something went wrong", err);
      }
    };
    return [searchApi, results, errorMessage];
};
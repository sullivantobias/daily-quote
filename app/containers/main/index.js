import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';

import {styles} from './styles';

export const MainScreen = ({light, isData}) => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    isData(quote, author);
     setTimeout(() => getQuote(), 5000);
  });

  const getQuote = () => {
    fetch('https://quotes.rest/qod', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setQuote(responseJson.contents.quotes[0].quote);
        setAuthor(responseJson.contents.quotes[0].author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {quote && author ? (
        <>
          <Text style={[styles.quote, light && styles.light]}>{quote}</Text>
          <Text style={[styles.author, light && styles.light]}>{author}</Text>
        </>
      ) : (
        <ActivityIndicator color="#fff" size="large" />
      )}
    </>
  );
};

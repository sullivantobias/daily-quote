import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

import {styles} from './styles';

export const MainScreen = ({light}) => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => getQuote());

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
          <Text style={[styles.author, light && styles.light ]}>{author}</Text>
        </>
      ) : (
        <ActivityIndicator color="#fff" size="large" />
      )}
    </>
  );
};

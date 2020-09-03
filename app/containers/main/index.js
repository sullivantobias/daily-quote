import React, {useState, useEffect} from 'react';
import { Text, ActivityIndicator, Animated } from 'react-native';

import {styles} from './styles';

export const MainScreen = ({light, isData}) => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    isData(quote, author);
       getQuote();

       Animated.timing(animation, {
         toValue: 1,
         duration: 500,
         useNativeDriver: false
       }).start();
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
        <Animated.View style={[styles.container, { opacity: animation }]}>
          <Text style={[styles.quote, light && styles.light]}>{quote}</Text>
          <Text style={[styles.author, light && styles.light]}>{author}</Text>
        </Animated.View>
      ) : (
        <ActivityIndicator color="#fff" size="large" />
      )}
    </>
  );
};

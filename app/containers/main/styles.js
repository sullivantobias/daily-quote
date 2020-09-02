import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  quote: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
  },
  author: {
    marginVertical: responsiveHeight(5),
    color: '#fff',
    fontSize: responsiveFontSize(2.5),
    fontStyle: 'italic',
  },
  light: {
    color: '#000'
  }
});

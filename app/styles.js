import {StyleSheet} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    dark: {
        backgroundColor: '#000',
    },
    light: {
        backgroundColor: '#fff',
    }
});
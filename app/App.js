import React, { useState } from 'react';
import {MainScreen} from './containers/main';
import {StatusBar, Switch, Animated} from 'react-native';

import {styles} from './styles';

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [data, setData] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    Animated.timing(animation, {
        toValue: !isEnabled ? 0 : 1,
        duration: 500,
        useNativeDriver: false
    }).start();

    const bc = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#000' , '#fff']
    });

    return (
        <Animated.View style={[styles.container, { backgroundColor: bc } ]}>
            { data && <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5ec00" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
            /> }
          <StatusBar barStyle={isEnabled ? 'dark-content' : 'light-content'} />
          <MainScreen isData={(quote, author) => quote && author && setData(true)} light={ isEnabled } />
        </Animated.View>
  );
};

export default App;

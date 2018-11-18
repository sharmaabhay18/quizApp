import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
    static navigationOptions = {
      headerTitleStyle: { textAlign: 'center',flex:1  },
      title: 'Home',

      headerBackTitle: null
    };

    render() {
    return (
        <View style={style.containerStyle}>
            <Button
              title='Start Quiz'
              large
              onPress={() => this.props.navigation.navigate('Test')}
            />
        </View>
    );
    }
}

const style = {
 containerStyle: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#ddd'
 }
}

export default Home;

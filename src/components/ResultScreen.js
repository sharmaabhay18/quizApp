import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { StackActions, NavigationActions } from 'react-navigation';

class ResultScreen extends Component {
    static navigationOptions = {
        headerTitleStyle: { textAlign: 'center',flex:1,marginRight: '25%'  },
        title: 'Result'
      };

    render() {
    const { sumScore } = this.props.navigation.state.params;
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
        return(
          <View>
              <Card
                title='Your Score'
              >
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={style.textStyle}>{sumScore}/10</Text>
                </View>
              </Card>
              <View style={{ marginTop: 15}}>
              <Button
                title='Play Again'
                style={style.buttonStyle}
                onPress={() => this.props.navigation.dispatch(resetAction)}
              />
              </View>
          </View>
        );
    }
}

const style = {
    textStyle: {
        fontSize: 80,
        fontWeight: 'bold'
    },buttonStyle: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: '1%',
    marginRight: '1%'
  }
}

export default ResultScreen;

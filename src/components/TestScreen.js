import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import quiz from '../quiz.json';
import Card from './common/Card';

const DATA = quiz.data;

class TestScreen extends Component {
    static navigationOptions = {
      headerTitleStyle: { textAlign: 'center',flex:1, marginRight: '25%'  },
      title: 'Quiz Time',
      headerBackTitle: null
    };
    constructor(){
      super();
      this.state = { sumScore: 0 };
    }

    onPressHandler(value, item) {
      console.log(value);
      console.log(item);
      const { id, answer } = item;
      if( id && answer === value){
        this.setState(prevState => ({ sumScore: prevState.sumScore + 1 }));
      } else if(this.state.sumScore > 0 && answer !== value){
        this.setState(prevState => ({ sumScore: prevState.sumScore  }));
      } else if(this.state.sumScore <= 0 && answer !== value ){
        this.setState({ sumScore: 0 })
      }

  }
    renderCard = d => {
      return (<Card
        onRef={ref => (this.onPress = ref)}
        onPress={this.onPressHandler.bind(this)}
        data={d}
       />)
    }

    render() {
      console.log(this.state.sumScore);
      const { sumScore } = this.state;
        return(
          <ScrollView style={{ marginBottom: 15}}>
            <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center'}}>
             <Text> Quiz On Movies Dialogue </Text>
            </View>
              <FlatList
                data={DATA}
                renderItem={this.renderCard}
                keyExtractor={DATA => DATA.id}
              />
              <View style={{ marginTop: 15}}>
              <Button
                title='Submit'
                style={style.buttonStyle}
                onPress={() => this.props.navigation.navigate('Result',{ sumScore })}
              />
              </View>
          </ScrollView>
        );
    }
}

const style = {
  buttonStyle: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: '2%',
    marginRight: '2%'
  },
  textStyle: {
    fontSize: 22,
    textAlign: 'center'
  }
}
export default TestScreen;

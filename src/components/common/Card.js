import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class Card extends Component {
    

    
    
    render() {
    const { item } = this.props.data;   
    const { constainerStyle,
            questionStyle,
            optionsView,
            questionTextStyle } = style; 
    return (
       <View style={{ marginTop: 15}}>
       <View style={constainerStyle}>
           <View style={questionStyle}>
               <Text style={questionTextStyle}>{item.question}</Text>
           </View>
           <View style={optionsView}>
           <RadioForm 
             radio_props={item.options}
             initial={-1}
             disabled={false}
             buttonSize={12}
             animation={true}
             onPress={(value) => {
                 this.props.onPress(value, item);
                }}
           />
           </View>
       </View>
       </View>
    );
  }
}

const style = {
    constainerStyle: {
        borderWidth: 0,
        borderRadius: 4,
        justifyContent: 'space-around',
        marginLeft: '5%',
        marginRight: '5%',
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        shadowOffset:{  width: 8,  height: 8,  },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    questionStyle: {
        justifyContent: 'center',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    questionTextStyle: {
        fontSize: 18,
        textAlign: 'center'
    },
    optionsView: {
        padding: 5,
        paddingTop: 10
    }
}

export default Card;
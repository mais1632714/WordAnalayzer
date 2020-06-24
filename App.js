import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native';
import {Styles} from './Styles';
export default class App extends Component {


 constructor(){
    super();
    this.state={
      word:' ',
      char_length:0,
      vowel:0,
      const1:0,
     }
  }

     wordAnalyzer= () =>{
    let const1=0,vowel=0,char=0;
    let word=this.state.word;
    
    var input=word.split("");
    char=input.length;
    for(var i=0;i<input.length;i++){
      let alphabet=input[i].toUpperCase();
      if(alphabet=='A' || alphabet=='E' || alphabet=='I' || alphabet=='O' ||             alphabet=='U')
        vowel++;
      else
        const1++;
    }
    this.setState({char:char,vowel:vowel,const1:const1});

 }


  render(){
  return (
    <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Word:'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.wordAnalyzer} title='Analyze word'/>
        <Text></Text>
        <Text style={Styles.instructions}>Length of the word: {this.state.char}  </Text>
        <Text style={Styles.instructions}>Vowel: {this.state.vowel}  </Text>
        <Text style={Styles.instructions}>Consonants: {this.state.const1}  </Text>
        </View>
      </View>
  );
}
}
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component{
 constructor(){
   super()
   this.state={
     text:' ',
     displayText:' '
   }
 }
 render(){
   return(
     <View>
     <Header
     backgroundColor={'orange'}
     centerComponent={{text:'Monkey Chunkey',style:{color:'black',fontSize:20}}}/>
     <TextInput
     onChangeText={(text)=>{
       this.setState({
         text:text
       })
     }}
     value={this.state.text}
     style={styles.inputBox}/>
     <TouchableOpacity style={styles.button} onPress={()=>{
       this.setState({
         displayText:this.state.text
       })
     }}>
     <Text style={styles.btntxt}>Go</Text>
     </TouchableOpacity>
     <Text style={styles.displaytxt}>{this.state.displayText}</Text>
     </View>
   );
 } 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    borderWidth:4,
    height:40,
    textAlign:'center'
  },
  button:{
    backgroundColor:'red',
    width:'50%',
    height:45,
    alignSelf:'center',
    marginTop:20,
    borderRadius:10
  },
  btntxt:{
    textAlign:'center',
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    justifyContent:'center',
    marginTop:4
  },
  displaytxt:{
    margin:15,
    fontSize:25,
    textAlign:'center',
    justifyContent:'center',
    fontWeight:'bold',
    marginTop:20,
    padding:20
  }
});

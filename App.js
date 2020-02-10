import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList,Dimensions } from 'react-native'
import { Right } from 'native-base';

const dataList = [{key:'560.4'}, {key:'262'}, {key:'168'}, {key:'1.43k'}, {key:'1.8'},{key:'2.1'}]
const numColumns =2
const WIDTH = Dimensions.get('window').width
export default class App extends Component {

  _renderItem = ({item, index}) => {

    let {itemstyle,itemText,itemfooter,itemText1,itemText2,itemText3,itemText4,itemText5,ItemRigt} = styles

    return(

      <View style={itemstyle}>

        <Text style = {itemText4}>Sales Revenue (AED)</Text>
        <Text style={itemText2}>MTD as of 17-Jun-19</Text>
        <Text style={itemText1}>{item.key}</Text>
       
        <View style={ItemRigt}>
        <Text style={itemText5}>target 7.42Mn</Text>

        </View>

        <View style = {itemfooter}>

        <Text style={itemText3}>70%</Text>
        
        



        </View>






      </View>
    )

  }



  render() {

    let{Container,itemText} =styles

    return (
      
      
        <View style={Container}>
          

          <FlatList 
          data={dataList}
          renderItem={this._renderItem}
          
          keyExtractor={(item, index) => index.toString()}
          numColumns ={numColumns}

          />

         
        </View>


    )
  }
}

const styles = StyleSheet.create({

 

  Container:{
    flex:1,
    marginTop:80,
   backgroundColor:'#000000'
  },

  

  itemstyle:{

    backgroundColor : '#222222',
    flex : 1,
    margin:15,
    height:WIDTH / numColumns, 

  },
  itemfooter:{

    marginTop :50,
    marginBottom:5,
    marginLeft:5,
    marginRight:5,
  
    backgroundColor : '#363834',
    flex :1,
    
  },
  ItemRigt:{
    
    alignItems:'center',
    justifyContent:'center'
    
  },


  itemText:{
    color : '#fff',
    fontSize:10,
    marginLeft:5
    
  },
  itemText1:{
    color : '#fff',
    fontSize:30,
    marginTop:40,
    marginLeft:5
    
  },
  itemText2:{
    color : '#fff',
    fontSize:8,
    marginLeft:5
    
  },
  itemText3:{
    color : '#fff',
    fontSize:15,
    marginTop:10,
    marginLeft:5,
    backgroundColor:'#377E22',
    width:100,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    
  },
  itemText4:{
    color : '#fff',
    fontSize:15,
    marginLeft:5
    
  },

  itemText5:{
    flex:1,
    color : '#fff',
    fontSize:5,
    marginLeft:5,
    alignItems:'center',
    justifyContent:'center'

    

    
  },
  


});
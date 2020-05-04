import React from 'react'
import{View, Text,TouchableOpacity,FlatList,Image,ScrollView} from 'react-native'
import axios from 'axios'
import  { useState, useEffect } from "react";
export default function Profile({ navigation }) {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState("");

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await axios(
      'https://jsonplaceholder.typicode.com/posts',
    );
    setData(response.data)
  }
  const ph=" https://source.unsplash.com/random"
  setPhoto(ph)
  fetchData();
  
}, []); 
    return (
      <View style=  {{flex:1,backgroundColor:"white"}} >
          
            <FlatList  
      
      
                   data={data} 
                   
                    renderItem={({item,separators}) =>  
                        <TouchableOpacity style={{ marginTop:20, alignItems: 'center'}}
                        onPress={()=>navigation.navigate('Details',{itemId:item.id,itemBody:item.body,itemTitle:item.title}) }
                        >
  <Image style={{width:950,height:250}}source={{uri :photo+"/"+item.id}} ></Image>
<Text style={{ marginTop:5, alignItems: 'center',color:  "black",fontWeight:"bold",fontSize:20}}> {item.title}</Text>
                                              
                              </TouchableOpacity>

                            
                            }  
                            keyExtractor={item=>item.id}
                        
                />  
            <Text>
           

    </Text>
        
      </View>
    );
  }
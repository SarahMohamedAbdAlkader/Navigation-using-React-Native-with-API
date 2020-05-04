
import React from 'react'
import {userParams} from 'react'
import{View, Text,TouchableOpacity,Image} from 'react-native'

export default function Details({route,navigation}) {
    const {itemId}=route.params;
    const {itemTitle}=route.params;
    const {itemBody}=route.params;
console.log(route.params)

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

    <Text style={{fontSize:25,fontWeight:"bold"}}>{itemTitle}</Text>
        <Image style={{width:950,height:300, margin:2}}source={{uri :"https://source.unsplash.com/random"+"/"+{itemId}}} ></Image>
    <Text style={{fontWeight:"bold",fontSize:20}}>{itemBody}</Text>
      </View>
    );
  }


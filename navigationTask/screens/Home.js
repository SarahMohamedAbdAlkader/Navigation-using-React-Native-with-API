
import React from 'react'
import{View, Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function Home({navigation}) {


    return (
        <View style={styles.container} >

        <TouchableOpacity 
        style={styles.button}
          title="Go to Posts"
          onPress={() => navigation.navigate('Posts')}
          
        >
             <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>Get Posts</Text>
        </TouchableOpacity>
       
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      backgroundColor:"white"
      
    },
    button: {
      alignItems: "center",
      backgroundColor: "purple",
     borderRadius:7,
      padding: 10
    },
  })
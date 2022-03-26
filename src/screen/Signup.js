import React from 'react'
import { SafeAreaView, StyleSheet, View, } from "react-native";
import { TextInput, Button } from 'react-native-paper';


export default function Signup() {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            mode="outlined"
            
            placeholder="Name"
            
          /> 
          <TextInput
            style={styles.input}
            mode="outlined"
            
            placeholder="Email"
            
          />  
          <TextInput
            style={styles.input}
            mode="outlined"
            
            placeholder="Password"
            
          /> 
           <View style={styles.btn}>
                <Button mode="contained">
                    Submit
                </Button>
           </View>
      </View>
    );
    
};
const styles = StyleSheet.create({
   
    container:{
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#000000'
       
    },
    btn:{
       marginTop: 10,
       margin: 10,
    },
    input:{
        margin: 10,
    }
    
});

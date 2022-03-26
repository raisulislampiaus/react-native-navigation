import React, { useRef, useEffect } from 'react'
import { View, Text, Image, ImageBackground, Animated, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';


const Data = [
   {
       key:1,
       amount:70,
       svg:{fill:Colors.colors.light}
   },
   {
    key:2,
    amount:80,
    svg:{fill:Colors.colors.yellow}
}
]
export default function Home() {
    const fadeAnim = useRef(new Animated.ValueXY()).current;
    useEffect(()=> {
        Animated.timing(fadeAnim, {
            toValue: {X:800,y:0},
            delay: 1000,
            useNativeDriver:false
          }).start();
    })
    return (
        <View style={styles.HomePage}>
            <ImageBackground
             source={require('../images/bitmap.png')}
             style={styles.imageBg}
            >
               <View style={styles.ContainerPage}>
                 <View style={{ flex: 5 }}>
                        <Icon3 
                            name='menu'
                            color={Colors.colors.light}
                            size={26}
                        />
                       
                 </View>
                    <View style={{ flexDirection: "row" }}>
                        <Icon2 
                           name='weather-cloudy'   
                           color={Colors.colors.light}
                           size={26}
                        />
					</View>
               </View>
            </ImageBackground>
        </View>
    )
};
const styles = StyleSheet.create({
    HomePage:{
        backgroundColor: Colors.colors.light,
		flex: 1,
    },
    ContainerPage:{
        flexDirection: "row",
		alignItems: "center",
		marginTop: 40,
		marginHorizontal: 20,
    },
    imageBg:{
        width: 368,
		height: 640,
    },
    iconnn:{
        marginTop: -20,
		marginHorizontal: 1.5,
    },
    img2:{
        width: 40,
		height: 40,
		borderRadius: 10,
    },


})


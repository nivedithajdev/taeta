import React from "react";
import {StyelSheet} from "react-native "
import{createMaterialBottomTabNavigator}from "@react-navigation/material-bottom-tabs"
import Ionicons from "react-native-vector-icons/ionicons"
import{ RFValue}from "react-native-responsive-fontSize"

import Home from "../screens/Home"
import Create from "../screens/Create";
const Tab=createMaterialBottomTabNavigator()

const BottomTabNavigator=()=>{
return(
<Tab.Navigator
labeled={false}
barStyle= {StyleSheet.BottomTabStyle}
screenOptions ={({route})=>({
TabBarIcon=({focus,color,size})=>{
let iconName 
if (route.name==="Home"){
    iconName =focused ? "add-circle ":"add-circle-outline "
}
return(
    <Ionicons 
    name ={iconName }
    size={RFValue}
    color={color}
    style={StyleSheet.icons }
    />
)
}
})}
activeColor={"white"}
inactiveColor={"gray"}
>
<Tab.Screen name="Home" component ={Home }/>
<Tab.Screen name="Create" component ={Create  }/>
</Tab.Navigator>
)
}

const styles=StyleSheet.create ({
bottomTabStyle:{
backgroundColor:"purple",
height:"8%",
borderTopLeftRadius:15,
borderTopRightRadius:15,
overFlow:"hidden",
position:"absolute"
} ,
icons:{
width:RFValue(40),
height:RFValue(40),        
}
})

export default BottomTabNavigator()






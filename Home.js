import React, { Component } from 'react';
import { Text, View ,StyleSheet,ImageBackground} from 'react-native';
import { Header } from 'react-native-elements';
import Create from './Create'
import AppHeader from '../components/AppHeader'
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
    "AbrilFatface-Regular": require("../assets/fonts/AbrilFatface-Regular.ttf")
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
          };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

    render() {
       if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
        return (
 <ImageBackground
        style={{flex: 1}}
        source={{
          uri:"https://th.bing.com/th/id/R.7d481dd16163a04608bd44837af39fde?rik=ZCbvTtoIJl6pRQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f2nqffyV.jpg&ehk=Mbst7dPhKGdO3hnZCglSgBp%2ba6hTJSDJPO%2fTi%2bwEGJs%3d&risl=&pid=ImgRaw&r=0"        
        }}>
          
            <View style={styles.container}>
               
               <AppHeader/>  
               <Text style={styles.text}>daily fact</Text>
               <Text style={styles.texton}>Seals spend 90% of there life holding there breath.</Text>
              </View>
                </ImageBackground>
        )      
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:300
    },
    text:{
    alignItems:'center',
    marginTop:10,
    color:'lightblue',
    fontSize:30,
    fontFamily:  "AbrilFatface-Regular",
    },
    texton:{
    alignItems:'center',
    marginTop:30,
    marginLeft:30,
    color:'lightblue',
    fontSize:25,
    fontFamily:  "AbrilFatface-Regular",
    },

    });
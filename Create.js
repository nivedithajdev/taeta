
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Header } from 'react-native-elements';
import Note from '../components/Note'
import AppHeader from '../components/AppHeader'
import DateTimePickerTest from './DateTimePickerTest'
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
let customFonts = {
  "AbrilFatface-Regular": require("../assets/fonts/AbrilFatface-Regular.ttf")
};

export default class Create extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          fontsLoaded: false,
          datevalue:"",
            noteArray: [],
            noteText: '',
            
        }
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

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)}
            />
        })


        return (
          <ImageBackground
        style={{flex: 1}}
        source={{
          uri:'https://th.bing.com/th/id/R.e568fec50d214ca390144e7a1c19c56e?rik=%2fS%2b4boP5n8TuSQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_RAlP3BmEW1Q%2fTQX68D_0exI%2fAAAAAAAACRc%2fA8dCHuYk0hA%2fs1600%2fThe-best-top-spring-desktop-wallpapers-4.jpg&ehk=jzvCOYx%2fhB8uWd31v2Ii1Mn5RvbuM9UkazhFMG9mlMM%3d&risl=&pid=ImgRaw&r=0'    
        }}>
            <View style={styles.container}>
            <AppHeader/>
             <View style={styles.scrollContainer}>
                    {notes}
               </View>

                <View style={styles.footer}>
                   <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Task'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

             
                <DateTimePickerTest/>
                 
            </View>
             </ImageBackground>
        );
    }

    addTask() {
        if (this.state.noteText) {
            var date = new Date()
           
            this.state.noteArray.push({
              'note':this.state.noteText,
               'date' : date.getFullYear()+
               '/' +(date.getMonth() + 1)+
               '/' + date.getDate()+
                ','+date.getHours()+":"+
                 date.getMinutes()+":"+
                 date.getSeconds()
              
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText:this.state.noteText});
        }

    }

    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3933FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 28,
       fontFamily:  "AbrilFatface-Regular"
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        zIndex: 10,
        width: "50%",
        
    },
    textInput: {
       padding: 20,
      backgroundColor: 'black',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        alignSelf: 'stretch',
        color: 'white',
           fontSize:18,
       fontFamily:  "AbrilFatface-Regular",
     

      
        
    },
    addButton: {
      width: '30%', 
      height: 50, 
      borderRadius:30,
      backgroundColor: 'white', 
      justifyContent: 'center', 
      alignItems: 'center',
      top:120,
       right:0,
       left:150
      
   
    },
    addButtonText: {
        color:"#09022A",
        fontSize: 16,
         fontFamily:  "AbrilFatface-Regular",
        justifyContent:'center',
       

    },
});

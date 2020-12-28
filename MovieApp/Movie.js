import React, {Component} from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Header from './Header';
import ImageCard from './ImageCard';
import {styles} from './MovieStyles'

//const url = 'https://api.tvmaze.com/shows?page=1'
const url1 = 'https://api.tvmaze.com/search/shows?q=';
const url = 'https://api.tvmaze.com/search/shows?q=star';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeInput: '',
      title: 'YOUR  ONLINE  CINEMA',
      data: [],
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data});
      console.log({data});
    } catch (e) {
      
      console.log('URL is wrong');
    }
  };

  getSearch = async () => {
    try {
      if (this.state.changeInput != '') {
        const response = await fetch(url1 + this.state.changeInput);
        const data = await response.json();
        this.setState({data});
        console.log({data});
      }
    } catch (e) {
      console.log('url is wrong');
    }
  };

 

  
  render() {
    const {title, data} = this.state;
    let rows = [];
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Header title={title} />
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <TextInput
            placeholder="Search movie"
            placeholderTextColor="#666"
            style={styles.im}
            onChangeText={text => this.setState({changeInput: text})}
            //value = {this.state.changeInput}
          />


          <TouchableOpacity
            onPress={() => this.getSearch(this.changeInput)}
            style={styles.searchButton}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>S E A R C H</Text>
          </TouchableOpacity>
       </View>


        <View>
          <TouchableOpacity
            onPress={() => this.componentDidMount()}
            style={styles.mainButton}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>M A I N    M E N U</Text>
          </TouchableOpacity>
        </View>

          
        <ScrollView >



          <View style={styles.container}>
            <View style={styles.row}>
              {data.map(item => (
                <ImageCard data={item} key={item.id} />
              ))}
            </View>
          </View>

        </ScrollView>
        
      </View>
    );
  }
}


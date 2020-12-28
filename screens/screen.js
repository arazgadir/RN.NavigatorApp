import React from 'react';
import {Text, View, Button, ImageBackground, } from 'react-native';
import StyledText from 'react-native-styled-text';
import { WebView } from 'react-native-webview';
import {styles} from './screenStyles'




const movieImage = { uri: "https://images-na.ssl-images-amazon.com/images/I/515kE2dEFaL._AC_.jpg" };
const calcImage = { uri: 'https://thumbs.dreamstime.com/z/office-tools-isolated-black-background-close-up-business-work-concept-open-notebook-blank-pages-leather-cover-175712794.jpg'}
const homeImage = { uri: 'https://s3.amazonaws.com/www-inside-design/uploads/2018/10/black-mirror-810x810.jpg'}




export const HomeScreen = ({navigation, route}) => {
  return (
    
     
     <ImageBackground source={homeImage} style={styles.screenImage}>
       <View style = {{paddingTop: 10}}>
          <StyledText
          style={styles.mainmenu}>
          {"<b>MAIN MENU</b>"}
         </StyledText>
      </View>
    
    </ImageBackground>
    
  );
}





export const NewsScreen = ({navigation, route}) => {
  return (
    
     <WebView
      source={{ uri: 'https://1news.az/' }}
      style={{ marginTop: 20 }}
    />
  );
};





export const EntertaimentScreen = ({navigation, route}) => {
  return (
   
    <ImageBackground source={movieImage} style={styles.screenImage}>
      <View style={styles.movieCalc}>
      <Button  onPress={() => navigation.navigate('Movie App')} title="MOVIE APP" />
      <Button  onPress={() => navigation.navigate("Home")} title="MAIN MENU" />
      </View>
     </ImageBackground>
    
  );
}




export const ToolsScreen = ({navigation, route}) => {
  return (

    <ImageBackground source={calcImage} style={styles.screenImage}>
      <View style={styles.movieCalc}>
      <Button  onPress={() => navigation.navigate('Calculator')} title="CALCULATOR" />
      <Button  onPress={() => navigation.navigate("Home")} title="MAIN MENU" />
      </View>
    </ImageBackground>
  );
}










export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Profile!</Text>
    </View>
  );
}


export const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
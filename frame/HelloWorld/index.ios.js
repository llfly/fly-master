/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var MOCKED_MOVIES_DATA = [
   {title: '东京热', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HelloWorld extends Component {
    render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  BackAndroid,
  View
} from 'react-native';

import MainScreen from './MainScreen';

class MyProject extends Component {
   configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid
    }

    renderScene(router, navigator){
      var Component = router.component;
      this._navigator = navigator;
      switch(router.id){
        case "main":
          Component = MainScreen;
          break;
        case "feed":
          Component = FeedView;
          break;
        default: //default view
          Component = DefaultView;
      }

      return <Component navigator={navigator} />
    }

    componentDidMount() {
      var navigator = this._navigator;
      BackAndroid.addEventListener('hardwareBackPress', function() {
          if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
          }
          return false;
      });
    }


    componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);

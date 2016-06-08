'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  BackAndroid,
  View
} from 'react-native';

import Header from './Header';
import MainPage from './home/MainPage';
var ScrollableTabView = require('react-native-scrollable-tab-view');
const HOME = 'home';

export default class MainScreen extends Component {


	constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

     render() {
        return (
            <View style={{flex: 1}}>
                 <Header />
                 <ScrollableTabView tabBarTextStyle={styles.tabBarTextStyle} style={{marginTop: 20 }}>
				        <MainPage renderIcon={require('./images/main/nav.png')} tabLabel='发布中'></MainPage>
      					<MainPage renderIcon={require('./images/main/nav.png')} tabLabel='待发车'></MainPage>
      					<MainPage renderIcon={require('./images/main/nav.png')} tabLabel='在途中'></MainPage>
      					<MainPage renderIcon={require('./images/main/nav.png')} tabLabel='待签收'></MainPage>
      			</ScrollableTabView>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
     welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    },
    tabBarTextStyle:{
    	fontSize:25
    }
});
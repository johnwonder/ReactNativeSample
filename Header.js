'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
      Alert,
  Text,
  BackAndroid,
  Platform,
   Image,
  View
} from 'react-native';

import ImageButton from './home/ImageButton';

export default class Header extends Component {

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    render() {
        return (
            <View style={styles.container}>
              <ImageButton renderIcon={require('./images/header/back.png')}
                                    showText={'回退'}
                                    tag={'wdgz'}
                                    containerstyle={styles.cellfixed}
                                    onClick={this._onMenuClick}/>
                
              <View style={styles.cell}>
                 <Text style={styles.title}>
                      真好运货主App   
                </Text>
              </View>
              <View style={styles.cellfixed}>
              </View>
            
              
                 
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        justifyContent: 'center',
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 100,   // 处理iOS状态栏
        backgroundColor: '#5F79E8',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    title:{
        color:'#FFFFFF',
        fontSize: 30
    },
    back: {
        height: 52,
        width: 52,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    cell:{
            flex: 1,
              flexDirection: 'row',   // 水平排布
                justifyContent: 'center',
                 alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中

    },
    cellfixed: {
         flexDirection: 'row',   // 水平排布
          justifyContent: 'center',
            alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
            width: 80
    } 
});
/**
 * Created by yuanguozheng on 16/1/22.
 */
'use strict';

import React, { Component } from 'react';
const {
  PropTypes,
} = React;
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
     Alert,
         ListView,
  BackAndroid,
  Platform,
   Image,
TouchableWithoutFeedback,
  View
} from 'react-native';

const len = 160;

export default class MainPage extends Component {

    static propTypes = {
        containerstyle:PropTypes.number,
        showText: PropTypes.string,  // 显示标题\文字
         renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
        this._onMenuClick = this._onMenuClick.bind(this);
        this._onRecommendClick = this._onRecommendClick.bind(this);
        this._renderRow = this._renderRow.bind(this);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 实际的DataSources存放在state中
        this.state = {
            listData: ds
        }
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

     _onRecommendClick(wareId) {
        let url = 'http://item.m.jd.com/product/' + wareId + '.html';
        this.props.nav.push({
            id: 'webview',
            title: 'webiew',
            url: url
        });
    }

    componentWillMount() {
        fetch('http://m.jd.com/index/recommend.action?_format_=json&page=1')
            .then((res)=> res.json())
            .then((str)=> {
                let arr = JSON.parse(str.recommend).wareInfoList;
                var rows = [];
                for (let i = 0; i < arr.length; i += 2) {
                    var item = {id: i, left: null, right: null};
                    item.left = (arr[i]);
                    if (i < arr.length - 1) {
                        item.right = (arr[i + 1]);
                    }
                    rows.push(item);
                }
                var ds = this.state.listData.cloneWithRows(rows);
                this.setState({listData: ds});
            });
    }

    _renderRow(rowData) {
        return (
            <View style={{backgroundColor:'white',padding:10,marginTop:20,marginLeft:20,marginRight:20}}>
                 <View style={{flexDirection:'row',paddingBottom:20,borderBottomColor :'#ccc',borderBottomWidth :2}}>

                 <Text style={{textAlign:'left',fontSize:30}}>单号：123456</Text>
                 <Text style={{position:'absolute',right:0,fontSize:30}}>2016-2-1 12:52:12</Text>
                 </View>

                 <View style={{flex:1,flexDirection:'row',padding:30,borderBottomColor :'#ccc',borderBottomWidth :2}}>
                    <View style={styles.titlefixed}>
                      <Text style={{fontSize:35,color:'#5F79E8'}}>江苏省无锡市</Text>

                      <Text style={{fontSize:30}}>宜兴市</Text>
                    </View>
                    <View style={{flex:1,justifyContent: 'center',alignItems:'center',}}>
                      <Image style={styles.titleImg} source={this.props.renderIcon}/>
                    </View>
                    <View style={styles.titlefixed}>
                    <Text style={{fontSize:35,color:'#5F79E8'}}>江苏省无锡市</Text>

                      <Text style={{fontSize:30}}>宜兴市</Text>
                    </View>
                 </View>

                  <View style={{flex:1,flexDirection:'row',paddingTop:20}}>
                    <View style={{flex:1,justifyContent: 'center',borderRightColor:'#ccc',borderRightWidth :1,alignItems:'center',}}>
                      <Text style={{fontSize:35,color:'black'}}>蔬菜</Text>
 
                    </View>
                    <View style={{flex:1,justifyContent: 'center',borderRightColor:'#ccc',borderRightWidth :1,alignItems:'center',}}>
                   <Text style={{fontSize:35,color:'black'}}>25吨</Text>
                    </View>
                    <View style={{flex:1,justifyContent: 'center',alignItems:'center',}}>
                     <Text style={{fontSize:35,color:'black'}}>2700元</Text>
                    </View>
                 </View>
            </View>
        );
    }

    render() {
        return (
            <ListView
                style={{flex:1,backgroundColor:'#ccc'}}
                dataSource={this.state.listData}
                renderRow={this._renderRow}>
            </ListView>
        )
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 52,
        height: 52,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    showText: {
        fontSize: 12
    },
    cellfixed: {
         flexDirection: 'row',   // 水平排布
          justifyContent: 'center',
            alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
            width: 80
    },
    titlefixed: {
          justifyContent: 'center',
            alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
            width: 220
    },
    titleImg: {
        width: 80,
        height: 72,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
});
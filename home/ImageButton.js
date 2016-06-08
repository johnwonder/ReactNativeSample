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
  BackAndroid,
  Platform,
   Image,
TouchableWithoutFeedback,
  View
} from 'react-native';

export default class ImageButton extends Component {

    static propTypes = {
        containerstyle:View.propTypes.style,
        renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        showText: PropTypes.string,  // 显示标题\文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={this.props.containerstyle}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                </View>
            </TouchableWithoutFeedback>
        );
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
    }
});
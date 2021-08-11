import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  DeviceEventEmitter,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


let that = null;

export default class MyView extends React.Component {

  constructor(props) {
    super(props)
    that = this;
    this.state = {
    }
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "my view",
      headerBackTitle: '     ',
      headerBackImage: (
        <Image
          style={{ height: 28, width: 28, marginLeft: 20 }}
          source={require('./images/icon_navigator_back.png')}
          onPress={() => {
            console.log("======goBack======");
            navigation.goBack();
          }}
        />
      ),
      headerStyle: {
        backgroundColor: "#fff", //背景色
      },
      headerTintColor: '#333333', //文字和箭头颜色
      headerTitleStyle: {
        //文本样式
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },
      headerRight: (
        <TouchableOpacity
          style={{
            height: 24,
            width: 44,
          }}
          onPress={() => {
            that?.naviShare();
          }
          }>
          <Image
            style={{ height: 24, width: 24, marginRight: 10 }}
            source={require('./images/shared.png')}
          />
        </TouchableOpacity>
      ),

      headerShown: true,
      headerHideShadow: true,
    };
  };
  componentDidMount() {
  }


  naviShare() {
    console.log("=========");
  }

  render() {
    return (<View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'red' }}>
        <Text>aaasaasasasas</Text>
      </View>

    </View>)
  }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TopicList from './App/Component/TopicList'
import ApiRequest from  './App/Api/service'

export default class native extends Component {
  constructor() {
    super()
    this.state = {
      blogs: []
    }
  }


  componentDidMount() {
    ApiRequest.getBlogs().then((response) => {
      // console.log(data)
      this.setState({
        blogs: response.data
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TopicList blogs={this.state.blogs}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 22
  }
});

AppRegistry.registerComponent('native', () => native);

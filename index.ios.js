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
import TopicList from './App/TopicList'

export default class native extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    return fetch('https://news-at.zhihu.com/api/3/stories/latest')
      .then((response) => response.json())
      .then((responseJson) => {
        return this.setState({
          stories: responseJson.stories
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TopicList stories={this.state.stories}/>
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

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Temp from './App/Component/Temp'
import TopicList from './App/Component/TopicList'
import BlogDetail from './App/Container/BlogDetail'
import Icon from 'react-native-vector-icons/Ionicons';

const iconConfig = {
  'blog': 'ios-document-outline',
  'search': 'ios-search-outline',
  'mine': 'ios-home-outline'
}

export default class native extends Component {

  render() {
    const TabIcon = ({ title, name }) => {
      return (
        <View >
          <Icon style={styles.tabIcon} name={iconConfig[name]} size={25} color="#8E9BFF"/>
          <Text style={styles.tabbartext}>
            {title}
          </Text>
        </View>
      );
    };

    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={ styles.tabbar }
          >
            <Scene key="blog" title="博客" icon={TabIcon}>
              <Scene key="topicList" style={styles.container} component={ TopicList }
                     title="博客园" initial={true}/>
              <Scene key="blogDetail" style={styles.container} component={ BlogDetail }
                     title="正文"/>
            </Scene>
            <Scene key="search" title="搜索" icon={TabIcon}>
              <Scene
                key="blue"
                component={Temp}
                title="Blue"
              />
              <Scene
                key="maize"
                component={Temp}
                title="Maize"
              />
            </Scene>
            <Scene key="mine" title="我的" icon={TabIcon}>
              <Scene
                key="blue"
                component={Temp}
                title="Blue"
              />
              <Scene
                key="maize"
                component={Temp}
                title="Maize"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 64
  },
  tabbar: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderTopColor: '#b9b9b9'
  },
  tabIcon: {
    textAlign: 'center'
  },
  tabbartext: {
    color: 'gray',
    fontSize: 8,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('native', () => native);

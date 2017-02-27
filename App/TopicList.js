import React, { Component } from 'react';
import { View, Image, ListView, StyleSheet, Text } from 'react-native';
import  moment from 'moment';

export default class TopicList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      dataSource: ds.cloneWithRows(props.stories)
    })
  }


  renderRow(rowData) {
    let imageUrl = rowData.images[0]
    if (imageUrl.indexOf('https') == -1) {
      imageUrl = imageUrl.replace('http', 'https')
    }
    return (
      <View style={styles.listItem}>
        <View style={styles.list1}>
          <Text style={styles.text1}>{rowData.title || ''}</Text>
          <Text style={styles.text2}>更新时间：{moment().format('YYYY-MM-DD HH:mm:ss')}</Text>
        </View>
        <View style={styles.list2}>
          <Image source={{uri: imageUrl}}
                 style={styles.icon}/>
        </View>
      </View>)

  }

  render() {
    return (
      <ListView style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={(rowData)=> this.renderRow(rowData)}
                enableEmptySections={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {},
  listItem: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#b9b9b9',
    flexDirection: 'row',
  },
  list1: {
    flex: 3,
    padding: 5,
    flexDirection: 'column',
  },
  list2: {
    flex: 2,
    padding: 2
  },
  text1: {
    fontSize: 15,
    flex: 3,
    lineHeight: 20
  },
  text2: {
    fontSize: 10,
    flex: 1
  },
  icon: {
    width: 130,
    height: 70,
    margin: 2
  },
  listItemText: {}
});
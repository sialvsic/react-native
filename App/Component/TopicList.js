import React, { Component } from 'react';
import { TouchableHighlight, View, Image, ListView, StyleSheet, Text } from 'react-native';
import  moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TopicList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
    this.open = this.open.bind(this)
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      dataSource: ds.cloneWithRows(props.blogs)
    })
  }

  open() {
    console.log('open')
  }


  renderRow(rowData) {
    let imageUrl = {
      url: rowData.Avatar
    };

    if (imageUrl.url == 'https://pic.cnblogs.com/face/') {
      imageUrl = require('../Resources/quicksearchbox1.png')
    }
    // console.log(moment(rowData.PostDate).format("YYYY/MM/DD, HH:mm:ss"))
    return (
      <View style={styles.listItem}>
        <View style={styles.listTop}>
          <Image source={ imageUrl}
                 resizeMode={'contain'}
                 style={styles.avatar}/>
          <Text style={styles.author}>{rowData.Author}</Text>
          <Text style={styles.view}>
            <Icon name="md-map" size={14} color="#4F8EF7"/>
            {" " + rowData.ViewCount}
          </Text>
        </View>
        <TouchableHighlight style={styles.listMiddle} underlayColor="#F8F8F8" onPress={()=>this.open()}>
          <Text style={styles.title} numberOfLines={2}>{rowData.Title || ''}</Text>
        </TouchableHighlight>

        <View style={styles.listBottom}>

          <Text style={styles.like}>
            <Icon name="md-heart-outline" size={18} color="#ff0000"/>
            {" " + rowData.DiggCount}
          </Text>

          <Text style={styles.comments}>
            <Icon name="ios-text" size={17} color="#8E9BFF"/>
            {" " + rowData.CommentCount}
          </Text>
          <Text style={styles.time}>更新时间：{moment(rowData.PostDate).format("M月DD日, HH:mm")}</Text>
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
  listItem: {
    height: 120,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#b9b9b9',
    padding: 2
  },
  listTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  listMiddle: {
    flex: 1,
  },
  listBottom: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5
  },
  avatar: {
    width: 35,
    height: 35,
    margin: 2,
    marginLeft: 5,
    borderRadius: 5
  },
  author: {
    lineHeight: 40,
    marginLeft: 10,
    fontSize: 15
  },
  view: {
    lineHeight: 40,
    position: 'absolute',
    right: 10,
    width: 50
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
    paddingLeft: 5,
    paddingRight: 5
  },
  like: {
    lineHeight: 40,
    fontSize: 16,
    flex: 1
  },
  comments: {
    lineHeight: 40,
    fontSize: 16,
    flex: 1,
    marginLeft: 10
  },
  time: {
    lineHeight: 40,
    fontSize: 12,
    textAlign: 'right',
    flex: 8
  }

});
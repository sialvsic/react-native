import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ApiRequest from  '../Api/service';
import { WebView } from 'react-native';

export  default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: ""
    }
  }

  componentDidMount() {
    const { blogId } = this.props;
    ApiRequest.getBlogDetail(blogId).then((response) => {
      this.setState({
        contents: response.data
      })
    })
  }

  render() {
    return (
      <WebView
        source={{html:this.state.contents}}
        style={{ marginTop: 20 }}
      />
    )
  }
}
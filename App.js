import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import {send, subscribe} from 'react-native-training-chat-server';

const NAME ='Franklin Floresca';
const CHANNEL = 'Reactivate';

export default class App extends React.Component {
  state = {
    typing: '',
    messages: [],
  };

  componentWillMount() {
    subscribe(CHANNEL, messages => {
      this.setState({ messages });
    });
  }

  renderItem({item}) {
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.messages} renderItem={this.renderItem} />
        <View style={styles.footer}>
          <TextInput
            value={this.state.typing}
            onChangeText={text => this.setState({typing:text})}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type something nice"
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
});

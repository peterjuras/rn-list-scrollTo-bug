import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
  listView: {
    flex: 1
  },
  listItem: {
    height: 100
  }
});

const data = [];
for (let index = 0; index < 1000; index++) {
  data.push({
    key: index,
    index
  });
}

export default class List extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.listView.scrollToOffset({ offset: 8000 });
    }, 0); // Workaround #1: Set timeout to something very high, e.g. 3000
    // However this creates a bad user experience, because the user sees the
    // list jumping.
    // The list still doesn't scroll to the desired position on Android, but
    // closer to it.
  }
  captureRef = (listView) => {
    this.listView = listView;
  }
  render() {
    return (
      <FlatList
        ref={this.captureRef}
        style={styles.listView}

        /*
        *
        * Workaround #2:
        *
        * Settings initialNumToRender to 1000 will work on Android
        * but it takes very long to render everything and might crash on
        * low end devices.
        *
        */
        // initialNumToRender={1000}

        data={data}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{`This is list item #${item.index}`}</Text>
        )}
      />
    );
  }
}

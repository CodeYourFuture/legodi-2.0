import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
import { Constants } from 'expo'

export default class Article extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.center}>
            <Image
              style={styles.image}
              source={{ uri: 'http://placehold.it/300x200' }}
            />
          </View>
          <View style={[styles.center, { padding: 15 }]}>
            <Text style={styles.title}>{this.props.navigation.getParam('title', 'Default Title')}</Text>
          </View>
          <View style={styles.paddingSides}>
            <Text style={{ fontSize: 20 }}>{this.props.navigation.getParam('description', 'Default description')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e5ba4f',
    paddingTop: 10
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 200
  },
  title: {
    fontSize: 28
  },
  paddingSides: {
    paddingLeft: 10,
    paddingRight: 10
  }
})

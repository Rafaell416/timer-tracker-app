import React from 'react'
import { 
  StyleSheet, 
  Text, View 
} from 'react-native'
import Header from '@/components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Time Tracker"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

import React from 'react'
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native'
import { AppLoading } from 'expo'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Timer from '@/components/Timer'
import { MaterialIcons } from '@expo/vector-icons'
import { cacheFonts } from './src/utils'

export default class App extends React.Component {
  state = { isReady: false }

  _preloadAssets = async () => {
    const fontAssets = cacheFonts([
      { 'proxima-nova-semibold': require('./assets/fonts/proxima-nova-semibold.otf') }
    ])

    await Promise.all([...fontAssets])
  } 

  render() {
    const { isReady } = this.state
    if ( !isReady ) {
      return (
        <AppLoading
          startAsync={ this._preloadAssets }
          onFinish={() => this.setState({ isReady: true })}
        />
      )
    } else {
        return (
          <View style={styles.container}>
            <Header title="Time Tracker"/>
            <View style={styles.buttonContainer}>
              <Button 
                textStyles={ styles.buttonTextStyles }
                containerStyles={ styles.buttonContainerStyles }
              >
                <MaterialIcons name="add" size={25} color="#4a4a4a" />
              </Button>
            </View>
            <View style={styles.timerContainer}>
              <Timer />
            </View>
            
    
          </View>
        )
      } 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  buttonTextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a4a4a'
  },
  buttonContainerStyles: {
    backgroundColor: 'white',
    borderColor: '#4a4a4a'
  },
  timerContainer: {
    paddingHorizontal: 15
  }
})

import React from 'react'
import { 
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import { AppLoading } from 'expo'
import Header from '@/components/Header'
import ToggleableTimerForm from '@/containers/ToggleableTimerForm'
import EditableTimer from '@/containers/EditableTimer'
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
            <ToggleableTimerForm 
              onFormSubmit={() => null} //this.handleCreateFormSubmit
            />
            <ScrollView style={styles.container}>
              <EditableTimer
                id="1"
                title="Create timer app"
                project="Bootcamp"
                elapsed="8986300"
                isRunning 
                onFormSubmit={ () => null } //this.handleFormSubmit
                onRemovePress={() => null } //this.handleRemovePress
                onStartPress={() => null } //this.toggleTimer
                onStopPress={() => null } //this.toggleTimer
              />
              <EditableTimer
                id="2"
                title="Mow the lawn"
                project="House Chores"
                elapsed="8986300"
                isRunning={false}
                onFormSubmit={ () => null } //this.handleFormSubmit
                onRemovePress={() => null } //this.handleRemovePress
                onStartPress={() => null } //this.toggleTimer
                onStopPress={() => null } //this.toggleTimer
              />    
            </ScrollView>
          </View>
        )
      } 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

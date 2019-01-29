import React from 'react'
import { 
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import { v4 } from 'uuid'
import { AppLoading } from 'expo'
import Header from '@/components/Header'
import ToggleableTimerForm from '@/containers/ToggleableTimerForm'
import EditableTimer from '@/containers/EditableTimer'
import { cacheFonts, newTimer } from './src/utils'

class App extends React.Component {
  state = { 
    isReady: false,
    timers: [
      {
        id: v4(),
        title: 'Create weather app',
        project: 'Bootcamp',
        elapsed: 1277537,
        isRunning: false,
      },
      {
        id: v4(),
        title: 'Create timer app',
        project: 'Bootcamp',
        elapsed: 5460494,
        isRunning: true,
      },
      {
        id: v4(),
        title: 'Create instagram app',
        project: 'Bootcamp',
        elapsed: 120000,
        isRunning: false,
      }
    ]
  }

    _preloadAssets = async () => {
    const fontAssets = cacheFonts([
      { 'proxima-nova-semibold': require('./assets/fonts/proxima-nova-semibold.otf') }
    ])
    await Promise.all([...fontAssets])
  }

  _handleCreateTimer = (timer) => {
    const { timers } = this.state
    this.setState({ timers: [newTimer(timer), ...timers] })
  }

  render() {
    const { isReady, timers } = this.state
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
              onFormSubmit={ this._handleCreateTimer }
            />
            <ScrollView style={styles.container}>
              {timers.map(({ id, title, project, isRunning, elapsed }) => (
                <EditableTimer
                  key={ id }
                  id={ id }
                  title={ title }
                  project={ project }
                  elapsed={ elapsed }
                  isRunning={ isRunning }
                  onFormSubmit={ () => null } //this.handleFormSubmit
                  onRemovePress={() => null } //this.handleRemovePress
                  onStartPress={() => null } //this.toggleTimer
                  onStopPress={() => null } //this.toggleTimer
                />
              ))}    
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


export default App
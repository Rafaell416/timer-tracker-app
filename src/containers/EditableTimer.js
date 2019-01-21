import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Timer from '@/components/Timer'
import TimerForm from '@/components/TimerForm'

class EditableTimer extends Component {
  state = { editFormOpen: false }

  _handleEditPress = () => this._toggleForm()

  _toggleForm = () => this.setState({ editFormOpen: !this.state.editFormOpen })

  render () {
    const { editFormOpen } = this.state
    const { 
      id, 
      title, 
      project, 
      elapsed, 
      isRunning, 
      onRemovePress, 
      onStartPress, 
      onStopPress, 
    } = this.props
    return (
      <View style={styles.container}>
        {editFormOpen ? (
          <TimerForm 
            id={ id }
            title={ title }
            project={ project }
            onFormSubmit={() => null}
            onFormClose={ this._toggleForm }
          />
        ) : (
          <Timer 
            id={ id }
            title={ title }
            project={ project }
            isRunning={ isRunning }
            elapsed={ elapsed }
            onEditPress={ this._handleEditPress }
            onRemovePress={ onRemovePress }
            onStartPress={ onStartPress }
            onStopPress={ onStopPress }
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 15
  }
})

export default EditableTimer


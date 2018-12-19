import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/UpdatePhoneScreenStyle'

class UpdatePhoneScreen extends Component {

  static navigationOptions = {
    title: 'Update Phone Number',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    backTitle: null,
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };


  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>UpdatePhoneScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePhoneScreen)

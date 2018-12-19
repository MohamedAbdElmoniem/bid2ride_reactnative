import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import FullButton from "../Components/FullButton";
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RequestVerificationScreenStyle'

class RequestVerificationScreen extends Component {

  static navigationOptions = {
    title: 'Request Verification',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    backTitle: null,
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  constructor(props) {
    super(props)
    this.state = {
      verificationCode: ''
    }
  }

  handleEnterVerificationCode = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.textContainer}>
              <Text style={styles.centeredText}>Enter verification code here.</Text>
            </View>
            <TextInput
              placeholder='e. g. 123456'
              style={styles.verificationTextInput}
              onChangeText={(verificationCode) => this.setState({ verificationCode })}
              value={this.state.verificationCode}
              clearButtonMode='while-editing'
            />
          </KeyboardAvoidingView>
          <View>
            <Text style={[styles.buttonText, styles.textNavigate]}>RESEND CODE </Text>
            <Text style={styles.buttonText}>EDIT PHONE NUMBER </Text>

          </View>

        </ScrollView>
        <View style={{}}>
          <FullButton text="Next" disabled={!this.state.verificationCode} onPress={() => {
            this.handleEnterVerificationCode()
          }} />
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestVerificationScreen)

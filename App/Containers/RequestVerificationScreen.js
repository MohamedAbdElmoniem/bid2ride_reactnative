import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
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
    const {navigation} = this.props
    navigation.navigate('PaymentMethodScreen')

  }

  handleEditPhone = () => {
    const {navigation} = this.props
    navigation.navigate('UpdatePhoneScreen')
  }

  handleResendCode = () => {

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
            <TouchableOpacity onPress={() => {
              this.handleResendCode()
            }}>
              <View>
                <Text style={[styles.buttonText, styles.textNavigate]}>RESEND CODE </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.handleEditPhone()
            }}>
              <View>
                <Text style={styles.buttonText}>EDIT PHONE NUMBER </Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
        <View>
          <FullButton text="Next" disabled={false} onPress={() => {
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

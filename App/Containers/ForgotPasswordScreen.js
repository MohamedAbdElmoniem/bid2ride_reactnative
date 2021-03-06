import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import FullButton from "../Components/FullButton";
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ForgotPasswordScreenStyle'

class ForgotPasswordScreen extends Component {

  static navigationOptions = {
    title: 'Forgot Password',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    headerBackTitle: null,
    backTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  handlePasswordReset = () => {
    const email = {
      email: this.state.email
    }
    this.props.forgotPasswordRequest(email)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.textContainer}>
              <Text style={styles.centeredText}>Enter your email address and we'll send a link to reset your password.</Text>
            </View>
            <TextInput
              placeholder='Your Email'
              style={styles.emailTextInput}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              clearButtonMode='while-editing'
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={{}}>
          <FullButton text="RESET PASSWORD" disabled={!this.state.email} onPress={() => {
            this.handlePasswordReset()
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
    forgotPasswordRequest: (email) => dispatch(UserAuthenitcationActions.forgotPasswordRequest(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen)

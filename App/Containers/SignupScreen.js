import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import AppBackgroundLight from "../Components/AppBackgroundLight";
import Images from '../Themes/Images'
import FullButton from "../Components/FullButton";
import Spinner from 'react-native-loading-spinner-overlay';
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignupScreenStyle'

class SignupScreen extends Component {

  static navigationOptions = {
    title: 'Sign Up',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    backTitle: null,
    headerBackTitle:null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '+ ',
      password: '',
      ConfirmPassword: '',
      spinner: false,
      validated: false
    }
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.isRegisterationError && !nextProps.isRegisterationFetching && nextProps.registerationData) {
      alert('registered')
    }
    if (nextProps.isRegisterationError) {
      alert('error')
    }

  }

  handleRegisterationRequest = () => {
    const { first_name, last_name, phone_number, email, password } = this.state
    // this.props.accountRegisterationRequest({ first_name, last_name, phone_number, email, password })
    const { navigation } = this.props;
    navigation.navigate('RequestVerificationScreen')
  }

  validateRegisterationForm = () => {
    const { first_name, last_name, email, password, phone_number, ConfirmPassword } = this.state
    if (first_name && last_name && email && password && phone_number && password.length >= 8) {
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      (password === ConfirmPassword) && pattern.test(email) ? this.setState({ validated: true }) : this.setState({ validated: false })
    } else {
      this.setState({ validated: false })
    }
  }


  render() {

    return (
      <AppBackgroundLight>
        <Spinner
          visible={this.state.spinner}
          textContent={this.state.spinnerText}
          textStyle={styles.spinnerTextStyle}
          color="white"
          overlayColor="black"
          size={'small'}
        />
        <View style={styles.centered}>
          <Image source={Images.fullLogo} style={styles.logo} />
        </View>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <TextInput
              placeholder='First name'
              style={styles.mainInput}
              onChangeText={(first_name) => this.setState({ first_name }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.first_name}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Last name'
              style={styles.otherInputs}
              onChangeText={(last_name) => this.setState({ last_name }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.last_name}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Email'
              style={styles.otherInputs}
              onChangeText={(email) => this.setState({ email }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.email}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='+ 1 (202) XXX XXXX'
              style={styles.otherInputs}
              onChangeText={(phone_number) => {
                if (phone_number.indexOf('+') > -1) {
                  this.setState({ phone_number: phone_number }, () => {
                    this.validateRegisterationForm()
                  })
                } else {
                  this.setState({ phone_number: '+ ' + phone_number }, () => {
                    this.validateRegisterationForm()
                  })
                }
              }}
              value={this.state.phone_number}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Password (8 letters or more)'
              secureTextEntry={true}
              style={styles.otherInputs}
              onChangeText={(password) => this.setState({ password }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.password}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Confirm Password'
              secureTextEntry={true}
              style={styles.otherInputs}
              onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.ConfirmPassword}
              clearButtonMode='while-editing'
            />
            <View style={styles.centered}>
              <View style={styles.centered}>
                <Text style={styles.blackText}>BY CREATING A BID2RIDE ACCOUNT, YOU AGREE TO OUR</Text>
              </View>

              <View style={styles.centered}>
                <Text style={styles.buttonText}>TERMS & CONDITIONS AND PRIVACY POLICY</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={{ flex: 0.365, position: 'relative' }}>
          <FullButton text="ENTER" disabled={false} onPress={() => {
            this.handleRegisterationRequest()
          }} />
        </View>
      </AppBackgroundLight>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRegisterationFetching: UserAuthenticationSelectors.isFetching(state),
    isRegisterationError: UserAuthenticationSelectors.isError(state),
    registerationData: UserAuthenticationSelectors.selectRegisterationData(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    accountRegisterationRequest: (data) => dispatch(UserAuthenitcationActions.accountRegisterationRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

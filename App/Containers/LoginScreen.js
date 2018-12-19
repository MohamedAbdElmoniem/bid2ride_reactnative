import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import AppBackgroundLight from "../Components/AppBackgroundLight";
import Images from '../Themes/Images'
import FullButton from "../Components/FullButton";
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
import Spinner from 'react-native-loading-spinner-overlay';
// Styles
import styles from './Styles/LoginScreenStyle'
import colors from '../Themes/Colors';

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    headerBackTitle:null,
    backTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "cenkerdemir@icloud.com",
      password: "bid2ride",
      spinner: false,
      spinnerText: 'Signing in...'
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {


    if (!nextProps.isLoginRequestFetching && !nextProps.isLoginRequestError && nextProps.accountData) {
      //alert('signed in')

    }
    if(nextProps.isLoginRequestError){
     // alert('error')
    }

  }

  handleLoginRequest = () => {
    const { email, password } = this.state
    //this.setState({ spinner: true })
    this.props.accountLoginRequest({ email, password })
  }

  render() {

    const { email, password } = this.state
    const { navigation, isLoginRequestFetching } = this.props
    return (
      <AppBackgroundLight>
        <Spinner
          visible={isLoginRequestFetching}
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
              placeholder='Email'
              style={styles.emailTextInput}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              style={styles.passwordTextInput}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              clearButtonMode='while-editing'
            />
            <View style={styles.centered}>
              <TouchableOpacity style={styles.centered} onPress={() => {
                navigation.navigate('ForgotPasswordScreen')
              }}>
                <Text style={styles.buttonText}>FORGOT PASSWORD?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.centered} onPress={() => {
                navigation.navigate('SignupScreen')
              }}>
                <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
              </TouchableOpacity>

            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={{ flex: 0.365, position: 'relative' }}>
          <FullButton text="SIGN IN" disabled={!(email && password)} onPress={() => {
            this.handleLoginRequest()
          }} />
        </View>
      </AppBackgroundLight>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accountData: state.userAuthenticationState.accountData,
    isLoginRequestFetching: UserAuthenticationSelectors.isFetching(state),
    isLoginRequestError: UserAuthenticationSelectors.isError(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    accountLoginRequest: (loginData) => dispatch(UserAuthenitcationActions.accountLoginRequest(loginData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

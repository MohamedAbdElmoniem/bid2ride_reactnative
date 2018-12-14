import React, { Component } from 'react'
import { Text, View, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Images from '../Themes/Images'
import AppBackgroundLight from "../Components/AppBackgroundLight";
import RoundedButton from "../Components/RoundedButton";
import I18n from 'react-native-i18n'
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LaunchAppScreenStyle'

class LaunchAppScreen extends Component {

  componentDidMount() {
    const loginData = {
      email: "cenkerdemir@icloud.com",
      password: "bid2ride"
    }
    this.props.accountLoginRequest(loginData)
  }

  componentWillReceiveProps(nextProps){
    debugger
  }


  render() {
    return (
      <AppBackgroundLight>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.centered}>
              <Image source={Images.fullLogo} style={styles.logo} />
            </View>
            <View>
              <RoundedButton text="SIGN IN" color='greenButton' onPress={()=>{
                this.props.navigation.navigate('LoginScreen')
              }}></RoundedButton>
            </View>
            <View style={styles.marginBottom}>
            </View>
            <View>
              <Text style={styles.centeredText}>
                Don't have an account yet?
            </Text>
            </View>
            <View>
              <RoundedButton text="SIGN UP" color='orangeButton' onPress={()=>{
                this.props.navigation.navigate('SignupScreen')
              }}></RoundedButton>
            </View>
          </KeyboardAvoidingView>
        </View>
      </AppBackgroundLight>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accountData: state.userAuthenticationState.accountData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    accountLoginRequest: (loginData) => dispatch(UserAuthenitcationActions.accountLoginRequest(loginData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchAppScreen)

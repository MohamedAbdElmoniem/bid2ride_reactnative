import { createStackNavigator, createAppContainer } from 'react-navigation'
import RequestVerificationScreen from '../Containers/RequestVerificationScreen'
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchAppScreen from '../Containers/LaunchAppScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  RequestVerificationScreen: { screen: RequestVerificationScreen },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen },
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchAppScreen: {
    screen: LaunchAppScreen, navigationOptions: {
      header: null,
      backTitle: null,
      headerBackTitle: null
    }
  },
}, {
    // Default config for all screens
    initialRouteName: 'LaunchAppScreen',
    navigationOptions: {
      headerStyle: styles.header,
      backTitle: null,
      headerBackTitle: null
    }
  })

export default createAppContainer(PrimaryNav)
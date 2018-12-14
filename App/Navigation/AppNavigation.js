import { createStackNavigator, createAppContainer } from 'react-navigation'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchAppScreen from '../Containers/LaunchAppScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchAppScreen: { screen: LaunchAppScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchAppScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)

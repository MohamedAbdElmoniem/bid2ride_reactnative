import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HTML from 'react-native-render-html';
import Checkbox from 'react-native-modest-checkbox'
import { checkBoxTextDisclosure } from "../Config/DriverRegisterationText";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DisclosureScreenStyle'

class AuthorizationScreen extends Component {

  static navigationOptions = {
    title: 'Driver Registeration',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    headerBackTitle: null,
    backTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      signature: ""
    }
  }

  componentDidMount() {
    this.props.getAuthorizationRequest()
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 0.9, flexDirection: 'column', margin: 15 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 17, color: "black" }}>ACKKNOWLEDGEMENT AND AUTHORIZATION FOR BACKGROUND CHECK</Text>
          </View>
          <KeyboardAvoidingView behavior='position'>
            <HTML
              html={this.props.authorizationHtml ? this.props.authorizationHtml.html : "<h5>loading...</h5>"}
            />
          </KeyboardAvoidingView>
          <View style={{ alignContent: "center", flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>Type full name as electronic signature</Text>
          </View>
          <View>
            <TextInput placeholder='Name'
              style={{ height: 40, borderBottomWidth: 0.5, borderBottomColor: "black" }}
              onChangeText={(signature) => this.setState({ signature }, () => {
                // this.validateRegisterationForm()
              })}
              value={this.state.signature}
              clearButtonMode='while-editing' />
          </View>
        </ScrollView>
        {this.state.signature ? <View style={{ flex: 0.1 }}>
          <TouchableOpacity style={styles.nextButtonActiveStyle} onPress={() => {
            const { navigation } = this.props;
             navigation.navigate('DriverBankAccountScreen')
          }}>
            <Text style={{ color: 'white', fontSize: 15 }}>NEXT</Text>
          </TouchableOpacity>
        </View> : <View style={{ flex: 0.1 }}>
            <TouchableOpacity style={styles.nextButtonInActiveStyle}>
              <Text style={{ color: 'white', fontSize: 15 }}>NEXT</Text>
            </TouchableOpacity>
          </View>}

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authorizationHtml: UserAuthenticationSelectors.authorizationHtml(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthorizationRequest: () => dispatch(UserAuthenitcationActions.getAuthorizationRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationScreen)

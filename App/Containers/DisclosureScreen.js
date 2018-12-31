import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
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

class DisclosureScreen extends Component {

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
      checked: false
    }
  }

  componentDidMount() {
    this.props.getDisclosureRequest()
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 0.9, flexDirection: 'column', margin: 15 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 17, color: "black" }}>DISCLOSURE REGARDING BACKGROUND INVESTEGATION</Text>
          </View>
          <KeyboardAvoidingView behavior='position'>
            <HTML
              html={this.props.disclosureHtml ? this.props.disclosureHtml.html : "<h5>loading...</h5>"}
            />
          </KeyboardAvoidingView>
          <View>
            <Checkbox
              label={checkBoxTextDisclosure}
              checked={this.state.checked}
              labelStyle={{ flexWrap: 'wrap' }}
              numberOfLabelLines={5}
              onChange={(checked) => this.setState({ checked: !this.state.checked })}
            />
          </View>
        </ScrollView>
        {this.state.checked ? <View style={{ flex: 0.1 }}>
          <TouchableOpacity style={styles.nextButtonActiveStyle} onPress={() => {
            const { navigation } = this.props;
            navigation.navigate('AuthorizationScreen')
          }}>
            <Text style={{ color: 'white', fontSize: 15 }}>NEXT</Text>
          </TouchableOpacity>
        </View> : <View style={{ flex: 0.1 }}>
            <TouchableOpacity style={styles.nextButtonInActiveStyle}>
              <Text style={{ color: 'white', fontSize: 15,textAlign:'center' }}>NEXT</Text>
            </TouchableOpacity>
          </View>}

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    disclosureHtml:UserAuthenticationSelectors.disclosureHtml(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDisclosureRequest: () => dispatch(UserAuthenitcationActions.getDisclosureRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisclosureScreen)

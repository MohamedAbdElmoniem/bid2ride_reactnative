import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TermsScreenStyle'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes/'
import UserAuthenticationActions, { UserAuthenticationSelectors } from "../Redux/UserAuthenitcationRedux";
import HTML from 'react-native-render-html';

class TermsScreen extends Component {

  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    headerBackTitle:null,
    backTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  componentDidMount() {
    this.props.getTermsRequest()
  }

  componentWillReceiveProps(nextProps) {

  }


  handleNavigationToDriverForm = () => {
    const { navigation } = this.props;
    navigation.navigate('DriverFormScreen')
  }

  handleNavigateBack = () => {
    const { navigation } = this.props;
    navigation.pop()
  }


  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: Colors.roundedOrangeButton, fontSize: Fonts.size.medium }}>
            TERMS & CONDITIONS
          </Text>
        </View>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={{ margin: 15 }}>
              <HTML
                html={this.props.htmlContent ? this.props.htmlContent.html : "<h5>loading...</h5>"}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }}>
            <Text onPress={() => {
              this.handleNavigateBack()
            }} style={{ color: 'white', margin: 15 }}>DISAGREE</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text onPress={() => {
              this.handleNavigationToDriverForm()
            }} style={{ margin: 15, textAlign: 'right', color: 'white' }}>AGREE</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    htmlContent: UserAuthenticationSelectors.htmlTerms(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTermsRequest: () => dispatch(UserAuthenticationActions.getTermsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsScreen)

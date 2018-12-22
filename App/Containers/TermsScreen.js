import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TermsScreenStyle'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes/'

class TermsScreen extends Component {


  handleNavigationToDriverForm = () => {
    const { navigation } = this.props;
    navigation.navigate('DriverFormScreen')
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
            <Text>TermsScreen</Text>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'white', margin: 15 }}>DISAGREE</Text>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsScreen)

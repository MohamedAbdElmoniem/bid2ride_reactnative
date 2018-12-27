import React, { Component } from 'react'
import { ScrollView, Text,View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { CardIOView, CardIOUtilities } from 'react-native-awesome-card-io';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CardDetailsScreenStyle'

class CardDetailsScreen extends Component {

  static navigationOptions = {
    title: 'Card',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    backTitle: null,
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  componentWillMount() {
    CardIOUtilities.preload();
  }

  didScanCard = (card) => {
    // the scanned card
  }


  render () {
    return (
      <View>
      <CardIOView
        didScanCard={this.didScanCard}
        style={{ flex: 1 }}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailsScreen)

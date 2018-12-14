import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import styles from './Styles/AppBackgroundLightStyle'
import Images from '../Themes/Images'
export default class AppBackgroundLight extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={[styles.fixed, styles.containter]}
          source={Images.backgroundLight}
        />
        <View style={[styles.fixed, styles.scrollview]}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

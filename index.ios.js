/**
 * Ibiza Radio App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Player = require('./App/Components/Main');

var {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
} = React;

var Wrapper = StyleSheet.create({
  Navigator: {
    flex: 1,
  },
});

class IbizaRadio extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={Wrapper.Navigator}
        initialRoute={{
          title: "Ibiza Global Radio",
          component: Player
      }}/>
    );
  }
}

AppRegistry.registerComponent('IbizaRadio', () => IbizaRadio);

var React = require("react-native");

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    height: 610,
    paddingTop: 20, 
    alignItems: 'center',
    backgroundColor: '#444444',
  },
  info: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
    overflow: 'hidden',
  },
  play: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginBottom: 0,
  },
  playButton: {
    color: '#FFF',
    containerBackgroundColor: 'transparent',
    textAlign: 'center',
    lineHeight: 100,
  },
  artist: {
    borderColor: '#ff534f',
    borderWidth: 7,
    height: 170, 
    width: 170, 
    borderRadius: 85,
  },
  program: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 19,
    lineHeight: 19,
  },
  dj: {
    color: '#FF5451',
    fontWeight: '300',
    fontSize: 19,
    lineHeight: 19,
  },
  time: {
    color: '#b8b8b8',
    fontSize: 13,
    lineHeight: 13,
  },
  player: {
    height: 400,
    width: 400,
    backgroundColor: '#FFFFFF',
  }
});

module.exports = styles;
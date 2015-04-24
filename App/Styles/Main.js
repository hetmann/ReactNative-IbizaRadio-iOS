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
    marginTop: 10,
    height: 140,
    width: 140,
    overflow: 'hidden',
  },
  play: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 0,
  },
  playButton: {
    color: '#FFF',
    containerBackgroundColor: 'transparent',
    textAlign: 'center',
    lineHeight: 100,
  },
  like: {
    top: 220,
    height: 70,
    width: 70,
    left: 20,
    position: 'absolute',
  },
  share: {
    top: 220,
    height: 70,
    width: 70,
    right: 20,
    position: 'absolute',
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
    padding: 2,
    color: '#FF5451',
    fontWeight: '300',
    fontSize: 19,
    lineHeight: 19,
  },
  time: {
    padding: 2,
    color: '#b8b8b8',
    fontSize: 13,
    lineHeight: 13,
  },
  player: {
    height: 400,
    width: 400,
    backgroundColor: '#FFFFFF',
  },
  volume: {
    height: 30,
    width: 300,
    marginTop: 5,
    color: '#ff534f',
    borderRadius: 10,
  },
  volume_text: {
    fontSize: 9,
    color: '#6f6f6f',
    textAlign: 'center',
    marginTop: 10,
  },
});

module.exports = styles;
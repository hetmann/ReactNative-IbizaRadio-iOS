
var React = require('react-native');
var Styles = require('../Styles/Main');
var api = require('../Utils/api');

var {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	WebView,
	LinkingIOS,
	AlertIOS,
} = React;

class Main extends React.Component{
	player() {
		return ('<video src="http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer_480x270_h264aac.m4v" autoplay="autoplay" controls="true" />');
		// return ('<audio controls><source src="http://ibizaglobalradio.streaming-pro.com:8024/;stream/1" type="audio/mpeg">Your browser does not support the audio tag.</audio>'
		// );
	} 

	openLink(url) {
		if (url) { 
			LinkingIOS.canOpenURL(url, (supported) => {
			  if (!supported) {
			    AlertIOS.alert('Can\'t handle url: ' + url);
			  } else {
			    LinkingIOS.openURL(url);
			  }
			});
		}

		return false;
	}

	constructor(props){
		super(props);
		var self = this;
		this.state = {
			streams: "",
			info: {
				dj: "... __ ...",
				program: "... __ ...",
				time: "... __ ...",
				artist: "http://www.ibizaglobalradio.com/player/assets/img/back_logo.png",
			}
		}
		api.getStreams().then((res) => {
			self.setState({
				streams: res[0].streams["High Quality"].mp3 || ""
			});
		});

		api.getInfo().then((res) => {
			self.setState({
				info: {
					dj: res.dj.toUpperCase() || "... __ ...",
					program: res.name.toUpperCase() || "... __ ...",
					time: res.time.toUpperCase() || "... __ ...",
					artist: res.img || "http://www.ibizaglobalradio.com/player/assets/img/back_logo.png",
				}
			});
		});
	}

	render() {
		return (
			<ScrollView>
				<View style={Styles.container}>
					<Image 
						style={Styles.artist} 
						source={{uri: this.state.info.artist}} />

					<Image 
						style={Styles.play}
						source={require('image!play')}
					>
						<Text
							style={Styles.playButton}
							onPress={this.openLink.bind(this, this.state.streams)}
						>
							&nbsp;
						</Text>
					</Image>

					<View style={Styles.info}>
						<View>
							<Text style={Styles.program}>
								{this.state.info.program}
							</Text>
						</View>
						<View>
							<Text style={Styles.dj}>
								{this.state.info.dj}
							</Text>
						</View>
						<View>
							<Text style={Styles.time}>
								{this.state.info.time}
							</Text>
						</View>
					</View>

					<Image 
						style={Styles.logo}
						source={require('image!logo')} />
				</View>
			</ScrollView>
		);
	}
}

module.exports = Main;
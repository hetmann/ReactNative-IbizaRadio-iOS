
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
	SliderIOS,
} = React;

class Main extends React.Component{
	player() {
		return ('<audio controls><source src="http://ibizaglobalradio.streaming-pro.com:8024/;stream/1" type="audio/mpeg">Your browser does not support the audio tag.</audio>');
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
				dj: " ",
				program: " ",
				time: " ",
				artist: "http://www.ibizaglobalradio.com/player/assets/img/back_logo.png",
			},
			volume: 0.5,
		}
		api.getStreams().then((res) => {
			self.setState({
				streams: res[0].streams["High Quality"].mp3 || ""
			});
		});

		api.getInfo().then((res) => {
			self.setState({
				info: {
					dj: res.dj.toUpperCase() || " ",
					program: res.name.toUpperCase() || " ",
					time: res.time.toUpperCase() || " ",
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
						style={Styles.like}
						source={require('image!like')}
					>
						<Text
							style={Styles.playButton}
							onPress={this.openLink.bind(this, "https://www.facebook.com/ibiza.radio")}
						>
							&nbsp;
						</Text>
					</Image>

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
					
					<Image 
						style={Styles.share}
						source={require('image!share')}
					>
						<Text
							style={Styles.playButton}
							onPress={this.openLink.bind(this, "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.ibizaglobalradio.com%2Fplayer%2F")}
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

					<View>
						<SliderIOS
							style={Styles.volume}
							value={this.state.volume}
							onValueChange={(value) => this.setState({volume: value})} />
						<Text style={Styles.volume_text} >
							VOLUME: {parseInt(this.state.volume * 100)}%
						</Text>
					</View>

					<Image 
						style={Styles.logo}
						source={require('image!logo')}/>
				</View>
			</ScrollView>
		);
	}
}

module.exports = Main;
var api = {
  getStreams(){
    var url = `http://www.ibizaglobalradio.com/player/?c=all`;
    return fetch(url).then((res) => res.json())
  },
  getInfo(){
    var url = `http://www.ibizaglobalradio.com/player/data_info_igr.php`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
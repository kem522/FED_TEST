import React from 'react';
import axios from 'axios';

class ShowRoute extends React.Component {
  state = {
    video: {}
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        'id': this.props.match.params.id,
        'part': 'snippet',
        'key': 'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
      }
    })
      .then(res => this.setState({ video: res }));
  }

  render(){
    return (
      <section>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
          src={`https://www.youtube.com/embed/${this.props.match.params.id}`}
          frameBorder="0"></iframe>
      </section>
    );
  }
}

export default ShowRoute;

import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class ShowRoute extends React.Component {
  state = {
    video: {
      snippet: {
        publishedAt: ''
      }
    }
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        'id': this.props.match.params.id,
        'part': 'snippet',
        'key': 'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
      }
    })
      .then(res => this.setState({ video: res.data.items[0] }));
  }

  render(){
    return (
      <section className="columns">
        <div className="column is-two-thirds-desktop">
          <iframe id="ytplayer" type="text/html"
            src={`https://www.youtube.com/embed/${this.state.video.id}`}
            frameBorder="0"></iframe>
        </div>
        <div className="column">
          <h2>{this.state.video.snippet.title}</h2>
          <h3>Published on {this.state.video.snippet.publishedAt.split('T')[0]}</h3>
          <p>{this.state.video.snippet.description}</p>
          <Link to="/"><img src="/assets/IMAGES/back_arrow.svg" />Back to list</Link>
        </div>
      </section>
    );
  }
}

export default ShowRoute;

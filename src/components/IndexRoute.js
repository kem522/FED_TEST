import React from 'react';
import axios from 'axios';
import Link from 'react-router-dom';

import _ from 'lodash';

class IndexRoute extends React.Component {
  state = {
    videos: []
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
      .then(res => this.setState({'videos': _.filter(res.data.items, item => item.snippet.title !== 'Deleted video') }));
  }

  render(){
    return(
      <section>
        <ul className="columns is-multiline">
          {this.state.videos.map((video, i) =>
            <li key={i} className="column is-one-third-desktop is-full-mobile">
              {video.snippet.thumbnails && <img src={video.snippet.thumbnails.high.url} />}
              <h2>{video.snippet.publishedAt.split('T')[0]}</h2>
              <p>{video.snippet.description}</p>
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default IndexRoute;

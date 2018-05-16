import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import _ from 'lodash';

class IndexRoute extends React.Component {
  state = {
    videos: []
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet,contentDetails,status',
        maxResults: 10,
        playlistId: 'LSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ',
        key: 'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
      }
    })
      .then(res => this.setState({'videos': _.filter(res.data.items, item => item.snippet.title !== 'Deleted video') }));
  }

  render(){
    const divStyle = (src) => ({
      backgroundImage: 'url(' + src + ')',
      backgroundSize: 'cover'
    });

    return(
      <section>
        <ul className="columns is-multiline">
          {this.state.videos.map((video, i) =>
            <li key={i} className="column is-one-third-desktop is-full-mobile is-one-half-tablet">
              <Link to={`/${video.snippet.resourceId.videoId}`}>
                <div className="video" style={divStyle(video.snippet.thumbnails.high.url)}>
                  <div>
                    <h2>{video.snippet.title}</h2>
                    <img src="/assets/IMAGES/play_button.png" />
                  </div>
                </div>
                <p>Published on {video.snippet.publishedAt.split('T')[0]}</p>
                <p className="desc">{video.snippet.description}</p>
              </Link>
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default IndexRoute;

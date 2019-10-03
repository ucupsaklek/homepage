import React, { Component } from 'react'
import {
  Jumbotron
} from 'reactstrap'

class Video extends Component {
  render () {
    return (
      <>
        <Jumbotron className='heading heading-guarantee'>
          <h2>Talks and Demo Video</h2>
          <p className='lead'>Dive into our R&D output here</p>
        </Jumbotron>

        <iframe src='https://www.youtube.com/embed/87TJbdKtyis'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </>
    )
  }
}

export default Video

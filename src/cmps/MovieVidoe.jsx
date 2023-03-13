import axios from "axios";
import { Component } from "react";
import ReactPlayer from "react-player";


export class MovieVideo extends Component {
    state = {
        id: ''
    }

    


    async GetVideoId() {
        const movie = this.props.movie
        const movieName = movie.name || movie?.title || movie?.original_name
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyBLLufNk2x40Livfu2kv_5tcGn7KhsUSEc&q=${movieName}`
        const video = await axios.get(URL)

        return video.data.items[0].id.videoId


    }
    componentDidMount = async () => {
      
        const id = await this.GetVideoId()
        this.setState({ id })
    }


    render() {
        const { id } = this.state
        return (

            <section className='movie-video' >
                <div onClick={() => this.props.setMovie(null)} className="black-screen"></div>
                <div className="video-container">
                    <div className="video-container">
                        <ReactPlayer playing={true} width={'100%'} height={'100%'} controls={true}
                            url={`https://www.youtube.com/embed/${id}`} />
                    </div>

                </div>

            </section>
        )
    }
}


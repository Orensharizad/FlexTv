import axios from "axios"
import { Component } from "react"
import { connect } from "react-redux"
import { MovieVideo } from "./MovieVidoe"
import { saveWatcher } from "../store/actions/watcher.actions.js"
import { watcherService } from "../services/watcher.service"
import { AiOutlineHeart } from "react-icons/ai";
import { setMovie } from "../store/actions/movie.actions"
import { Link } from "react-router-dom"



export class _MovieList extends Component {

    state = {
        movies: [],
        isShow: false,
        movie: null
    }

    componentDidMount = async () => {
        try {
            const movies = await axios.get(this.props.url)
            this.setState({ movies: movies.data.results })

        } catch (err) {
            console.log(err)
        }
    }

    loadWatcher = async () => {
        const watcherId = this.props.match.params.id
        const currWatcher = await watcherService.getById(watcherId)
        this.setState({ watcher: currWatcher })
    }

    setMovie = (movie) => {
        this.setState({ movie: movie })

    }


    render() {
        const { movies, movie } = this.state
        const { title, isLarge } = this.props
        const base_url = 'https://image.tmdb.org/t/p/original/'

        return (
            <section className='movie-list'>
                <h2>{title}</h2>
                <div className="movies-container">
                    {movies?.map(movie =>
                        <img key={movie.id} onClick={() => this.setMovie(movie)} className={isLarge ? 'movie-img large' : 'movie-img'} src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt='movie-img' />

                    )}
                </div>
                {movie && <MovieVideo setMovie={this.setMovie} movie={movie} />}
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    movie: storeState.movieModule.movie,
})

const mapDispatchToProps = {
    setMovie,

}

export const MovieList = connect(mapStateToProps, mapDispatchToProps)(_MovieList)
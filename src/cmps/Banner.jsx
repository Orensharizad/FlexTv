import axios from "axios"
import { Component } from "react"
import { Link } from "react-router-dom"
import { utilService } from "../services/util.service"
import { watcherService } from "../services/watcher.service"
import { Loader } from "./loader"

export class Banner extends Component {

    state = {
        movie: []
    }

    truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }

    componentDidMount = async () => {
        const requests = watcherService.requests()
        const req = await axios.get(requests[0].url)
        this.setState(
            { movie: req.data.results[utilService.getRandomIntInclusive(0, req.data.results.length - 1)] }
        )
    }


    render() {
        const { movie } = this.state


        const style = {
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,

        }
        // if (!movie) return <Loader />
        return (
            <section style={style} className='banner' >
                <div className="banner-content">
                    <h1 className="banner-title">{
                        movie?.name || movie?.title || movie?.original_name}</h1>
                    <div className="banner-btns">
                        <Link to={``}>
                            <button className="banner-btn">Play</button>
                        </Link>
                        <button className="banner-btn">My List</button>
                    </div>

                    <div className="banner-desc">
                        {this.truncate(movie?.overview, 150)}
                    </div>
                </div>
                <div className="banner-fade-bottom"></div>
            </section>
        )
    }
} 
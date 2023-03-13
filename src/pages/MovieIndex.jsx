import { Component } from 'react'
import { connect } from 'react-redux'
import { loadWatchers, saveWatcher, removeWatcher } from "../store/actions/watcher.actions.js"

import { MovieIndexHeader } from '../cmps/MovieIndexHeader.jsx'
import { Banner } from '../cmps/Banner.jsx'
import { MovieList } from '../cmps/MovieList.jsx'
import { watcherService } from '../services/watcher.service.js'

export class _MovieIndex extends Component {

    componentDidMount = () => {
        const loggdinUser = JSON.parse(sessionStorage.getItem("loggdinUser"))
        console.log('loggdinUser: ', loggdinUser);
        if (!loggdinUser) {
            this.props.history.push('/')
        }
    }

    render() {
        const requests = watcherService.requests()

        return (
            <section className="movie-index">
                <MovieIndexHeader />
                <Banner />
                {requests.map((req, idx) =>
                    <MovieList
                        url={req.url}
                        title={req.title}
                        isLarge={req.isLarge}
                        key={idx}
                    />

                )}

            </section>
        )
    }
}
const mapStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers,
})

const mapDispatchToProps = {
    loadWatchers,
    saveWatcher,
    removeWatcher
}

export const MovieIndex = connect(mapStateToProps, mapDispatchToProps)(_MovieIndex)
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, } from 'react-router-dom'
import { WatcherList } from '../cmps/WatcherList.jsx'
import { watcherService } from '../services/watcher.service.js'
import { loadWatchers, saveWatcher, removeWatcher } from "../store/actions/watcher.actions.js"
import { BiArrowBack } from "react-icons/bi";


export class _WatcherIndex extends Component {


    componentDidMount() {
        this.props.loadWatchers()
    }

    onAddWatcher = async () => {
        const fullName = prompt('name?')
        if (!fullName) return
        const watcher = watcherService.getEmptyWatcher()
        watcher.fullName = fullName
        try {
            this.props.saveWatcher(watcher)

        } catch (err) {
            console.error(err, 'cannot save watcher')

        }


    }
    onRemoveWatcher = async (watcherId) => {
        try {
            this.props.removeWatcher(watcherId)
        } catch (err) {
            console.error(err, 'cannot remove watcher')
        }
    }



    render() {
        const { watchers } = this.props
        return (
            <section className="watcher-index">
                <Link className='btn-back' to={'/'}><BiArrowBack /></Link>
                <h3 className='watcher-index-title'>Who's is Watching ?</h3>
                <WatcherList onRemoveWatcher={this.onRemoveWatcher} watchers={watchers} />
                <button className='btn-add' onClick={this.onAddWatcher}>Add Watcher</button>
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

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)
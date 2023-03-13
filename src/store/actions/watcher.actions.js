import { watcherService } from "../../services/watcher.service"

export function loadWatchers() {

    return async (dispatch, getState) => {
        try {
            const watchers = await watcherService.query()
            dispatch({ type: 'SET_WATCHERS', watchers })
            return watchers
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveWatcher(watcher) {
    return async (dispatch) => {
        try {
            const type = (watcher._id) ? 'UPDATE_WATCHER' : 'ADD_WATCHER'
            const savedWatcher = await watcherService.save(watcher)
            dispatch({ type, watcher: savedWatcher })
            return savedWatcher

        } catch (err) {
            console.error('Cannot save watcher:', err)
            throw err
        }
    }
}

export function removeWatcher(watcherId) {

    return async (dispatch) => {
        try {
            await watcherService.remove(watcherId)
            dispatch({ type: 'REMOVE_WATCHER', watcherId })

        } catch (err) {
            console.log('err:', err)
        }
    }
}


const INITIAL_STATE = {
    watchers: [],

}
export function watcherReducer(state = INITIAL_STATE, action) {


    switch (action.type) {
        case 'SET_WATCHERS':
            return {
                ...state,
                watchers: action.watchers
            }
        case 'ADD_WATCHER':
            return {
                ...state,
                watchers: [...state.watchers, action.watcher]
            }
        case 'UPDATE_WATCHER':
            return {
                ...state,
                watchers: state.watchers.map(watcher => watcher._id === action.watcher._id
                    ? action.watcher
                    : watcher
                )
            }
        case 'REMOVE_WATCHER':
            return {
                ...state,
                watchers: state.watchers.filter(watcher => watcher._id !== action.watcherId)
            }
        case 'GET_WATCHER':
            return {
                ...state,
                watchers: state.watchers.filter(watcher => watcher._id !== action.watcherId)
            }


        default:
            return state
    }

}
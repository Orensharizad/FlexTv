const INITIAL_STATE = {
    movie: {},

}

export function movieReducer(state = INITIAL_STATE, action) {


    switch (action.type) {
        case 'SET_MOVIE':
            return {
                ...state, movie: action.movie
            }


        default:
            return state
    }

}

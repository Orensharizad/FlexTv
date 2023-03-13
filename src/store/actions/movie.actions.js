export function setMovie(movie) {

    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_MOVIE', movie })
            return movie
        } catch (err) {
            console.log('err:', err)
        }
    }
}
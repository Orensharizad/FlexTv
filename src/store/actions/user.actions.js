export function login(user) {
    console.log('user: ', user);
    return (dispatch) => {
        sessionStorage.setItem('loggdinUser', JSON.stringify(user))
        dispatch({ type: 'SET_USER', user })
    }
}


export function logout() {
    return (dispatch) => {
        sessionStorage.removeItem('loggdinUser')
        dispatch({ type: 'SET_USER', user: null })
    }
}
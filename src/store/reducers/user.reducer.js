const INITIAL_STATE = {
    user: null,

}
export function userReducer(state = INITIAL_STATE, action) {


    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, user: action.user
            }
        case 'LOGOUT':
            return {
                ...state, user: action.user
            }


        default:
            return state
    }

}
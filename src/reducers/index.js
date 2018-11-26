
function reducer(state, action) {
    switch (action.type) {
        case 'SET_PUBLIS': {
            return { ...state, ...action.payload }
        }
        case 'SET_CATEGORY_LIST': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default reducer
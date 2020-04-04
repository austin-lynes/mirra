export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_FOREGROUND = 'TOGGLE_FOREGROUND';
export const OPEN_FOREGROUND = 'OPEN_FOREGROUND';
export const CLOSE_FOREGROUND = 'CLOSE_FOREGROUND';
export const SET_ICON_BUTTON_ACTIVE = 'SET_ICON_BUTTON_ACTIVE';

// MODAL
export const toggleModal = () => dispatch => {
    dispatch({ type: TOGGLE_MODAL })
}

// FOREGROUND 
export const toggleForeground = () => dispatch => {
    dispatch({ type: TOGGLE_FOREGROUND })
}

export const openForeground = (cur_context) => dispatch => {
    dispatch({ type: OPEN_FOREGROUND, payload: cur_context })
}

export const closeForeground = () => dispatch => {
    dispatch({ type: CLOSE_FOREGROUND })
}

export const setIconActive = (row, index) => dispatch => {
    dispatch({ type: SET_ICON_BUTTON_ACTIVE, payload: { row, index } })
}

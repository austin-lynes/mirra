import { TOGGLE_MODAL, TOGGLE_FOREGROUND, OPEN_FOREGROUND, CLOSE_FOREGROUND, SET_ICON_BUTTON_ACTIVE } from '../../actions/app';
import { Alerts, Shopping, Income, Chores, Budget, Recipes, Friends, Profile, Settings } from '../../../icons';

const init = {
    topMenuData:
        [
            { id: 0, name: 'shopping', icon: Shopping, active: false },
            { id: 1, name: 'income', icon: Income, active: false },
            { id: 2, name: 'chores', icon: Chores, active: false },
            { id: 3, name: 'budget', icon: Budget, active: false },
            { id: 4, name: 'recipes', icon: Recipes, active: false },
        ],
    bottomMenuData:
        [
            { id: 0, name: 'alerts', icon: Alerts, active: false },
            { id: 1, name: 'friends', icon: Friends, active: false },
            { id: 2, name: 'profile', icon: Profile, active: false },
            { id: 3, name: 'settings', icon: Settings, active: false }
        ],
    context: '',
    modal_open: false,
    foreground_open: false
}

export function App(state = init, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                modal_open: !state.modal_open
            }

        //#region FOREGROUND
        case TOGGLE_FOREGROUND:
            return {
                ...state,
                foreground_open: !state.foreground_open
            }
        case OPEN_FOREGROUND:
            return {
                ...state,
                foreground_open: true,
                context: action.payload
            }
        case CLOSE_FOREGROUND:
            return {
                ...state,
                foreground_open: false,
                bottomMenuData:
                    state.bottomMenuData.map(
                        icon =>
                            icon = { ...icon, active: false }
                    ),
                topMenuData:
                    state.topMenuData.map(
                        icon =>
                            icon = { ...icon, active: false }
                    ),
                context: ''
            }
        //#endregion

        case SET_ICON_BUTTON_ACTIVE:
            return action.payload.row === 'top' ?
                {
                    ...state,
                    bottomMenuData:
                        state.bottomMenuData.map(
                            icon =>
                                icon = { ...icon, active: false }
                        ),

                    topMenuData:
                        state.topMenuData.map(
                            icon => {
                                return icon.id === action.payload.index ?
                                    { ...icon, active: true } :
                                    { ...icon, active: false }
                            }
                        )
                } :
                action.payload.row === 'bottom' ?
                    {
                        ...state,
                        topMenuData:
                            state.topMenuData.map(
                                icon =>
                                    icon = { ...icon, active: false }
                            ),
                        bottomMenuData:
                            state.bottomMenuData.map(
                                icon => {
                                    return icon.id === action.payload.index ?
                                        { ...icon, active: true } :
                                        { ...icon, active: false }
                                }
                            )
                    } :
                    state
        default:
            return state;
    }
}

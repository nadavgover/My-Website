import {ONE_VS_ONE_ACTION_TYPES} from "./oneVsOne.types";
import {FORM_KEYS} from "../../constants/redux";

const initialState = {
    form: {
        [FORM_KEYS.MY_RATING]: "",
        [FORM_KEYS.MY_RATING_VALID]: true,
        [FORM_KEYS.OPPONENT_RATING]: "",
        [FORM_KEYS.OPPONENT_RATING_VALID]: true,
        [FORM_KEYS.TIME_CONTROL]: "",
        [FORM_KEYS.TIME_CONTROL_VALID]: true
    },
    ratingChange: {}
}

const oneVsOneReducer = (state = initialState, {type: actionType, payload = {}}) => {
    const actionHandler = {
        [ONE_VS_ONE_ACTION_TYPES.SET_ONE_VS_ONE_FORM_DATA]: {
            ...state,
            form: {
                ...state.form,
                [payload.key]: payload.value
            }
        },
        [ONE_VS_ONE_ACTION_TYPES.SET_RATING_CHANGE]: {
            ...state,
            ratingChange: payload
        }
    }
    return actionHandler[actionType] || state
}

export default oneVsOneReducer
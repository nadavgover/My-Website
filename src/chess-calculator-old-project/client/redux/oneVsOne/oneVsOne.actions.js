import {ONE_VS_ONE_ACTION_TYPES} from "./oneVsOne.types";

export const setOneVsOneFormData = payload => {
    return {
        type: ONE_VS_ONE_ACTION_TYPES.SET_ONE_VS_ONE_FORM_DATA,
        payload: payload
    }
}

export const setRatingChange = payload => {
    return {
        type: ONE_VS_ONE_ACTION_TYPES.SET_RATING_CHANGE,
        payload: payload
    }
}
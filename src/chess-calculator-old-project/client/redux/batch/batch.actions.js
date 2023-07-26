import {BATCH_ACTION_TYPES} from "./batch.types";

export const setBatchFormData = payload => {
    return {
        type: BATCH_ACTION_TYPES.SET_BATCH_FORM_DATA,
        payload: payload
    }
}

export const setTotalRatingChange = payload => {
    return {
        type: BATCH_ACTION_TYPES.SET_TOTAL_RATING_CHANGE,
        payload: payload
    }
}

export const resetAllRatingChanges = () => {
    return {
        type: BATCH_ACTION_TYPES.RESET_ALL_RATING_CHANGES
    }
}

export const setGameData = payload => {
    return {
        type: BATCH_ACTION_TYPES.SET_GAME_DATA,
        payload: payload
    }
}

export const addGame = () => {
    return {
        type: BATCH_ACTION_TYPES.ADD_GAME
    }
}

export const removeGame = payload => {
    return {
        type: BATCH_ACTION_TYPES.REMOVE_GAME,
        payload: payload
    }
}
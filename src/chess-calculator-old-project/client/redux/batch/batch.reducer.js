import {BATCH_ACTION_TYPES} from "./batch.types";
import {FORM_KEYS} from "../../constants/redux";
import {scores} from "../../constants/rating";
import {generateUuid} from "../../services/utils.service";


const createNewGameCard = () => ({
    score: scores.WIN.STR,
    [FORM_KEYS.OPPONENT_RATING]: "",
    [FORM_KEYS.OPPONENT_RATING_VALID]: true,
    [FORM_KEYS.RATING_CHANGE]: NaN,
    reactKey: generateUuid()
})

const initialState = {
    form: {
        [FORM_KEYS.MY_RATING]: "",
        [FORM_KEYS.MY_RATING_VALID]: true,
        [FORM_KEYS.TIME_CONTROL]: "",
        [FORM_KEYS.TIME_CONTROL_VALID]: true
    },
    gameCards: [
        createNewGameCard(),
        createNewGameCard()
    ],
    totalRatingChange: NaN
}

const batchReducer = (state = initialState, {type: actionType, payload = {}}) => {
    const actionHandler = {
        [BATCH_ACTION_TYPES.SET_BATCH_FORM_DATA]: {
            ...state,
            form: {
                ...state.form,
                [payload.key]: payload.value
            }
        },
        [BATCH_ACTION_TYPES.SET_TOTAL_RATING_CHANGE]: {
            ...state,
            totalRatingChange: payload
        },
        [BATCH_ACTION_TYPES.RESET_ALL_RATING_CHANGES]: {
            ...state,
            gameCards: state.gameCards.map(card => {
                return {...card, ratingChange: NaN}
            }),
            totalRatingChange: NaN
        },
        [BATCH_ACTION_TYPES.SET_GAME_DATA]: {
            ...state,
            gameCards: state.gameCards.map((card, i) => {
                return i === payload.gameNumber ?
                    {
                        ...card,
                        [payload.key]: payload.value
                    }
                    :
                    card
            })
        },
        [BATCH_ACTION_TYPES.ADD_GAME]: {
            ...state,
            gameCards: [...state.gameCards, createNewGameCard()]
        },
        [BATCH_ACTION_TYPES.REMOVE_GAME]: {
            ...state,
            gameCards: state.gameCards.filter((_, i) => i !== payload.gameNumber)
        }
    }
    return actionHandler[actionType] || state
}

export default batchReducer
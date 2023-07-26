import {scores, ratingDifferenceLimits, timeControls, bonus, KLimits, changeCoefficients} from '../constants/rating'

const getScore = score => {
    return typeof score === "string" ?
        scores[score.toUpperCase()].NUM
        :
        score
}

/*
* difference (D) between player 2 rating and player 1 rating (player 2 - player 1)
* if the difference is greater than 375 and less than 750, then D = 375
* if the difference is greater than 750, then D = 400
* same thing for negative D
* */
const calculateDifference = (player1Rating, player2Rating) => {
    let d = player2Rating - player1Rating
    if (d > ratingDifferenceLimits.UPPER.LIMIT) {
        d = ratingDifferenceLimits.UPPER.D
    } else if (d > ratingDifferenceLimits.LOWER.LIMIT && d < ratingDifferenceLimits.UPPER.LIMIT){
        d = ratingDifferenceLimits.LOWER.D
    }

    if (d < -ratingDifferenceLimits.UPPER.LIMIT){
        d = -ratingDifferenceLimits.UPPER.D
    } else if (d > -ratingDifferenceLimits.UPPER.LIMIT && d < -ratingDifferenceLimits.LOWER.LIMIT){
        d = -ratingDifferenceLimits.LOWER.D
    }
    return d
}

/*
* bonus (B) for coming to the game (small number)
* if the player's rating is greater then or equal to 2300 then B = 0
* else, if the time control is classical then B = (2300 - player1Rating) / 2000
*       else B = (2300 - player1Rating) / 4000
*/
const calculateBonus = (player1Rating, timeControl) => {
    let b
    if (player1Rating >= bonus.LIMIT){
        b = bonus.NO_BONUS
    } else {
        if (timeControl.toLowerCase() === timeControls.CLASSICAL){
            b = (bonus.LIMIT - player1Rating) / bonus.DIVIDERS.CLASSICAL
        } else {
            b = (bonus.LIMIT - player1Rating) / bonus.DIVIDERS.REST
        }
    }

    return b
}

/*
* Get coefficient (K) of the player by the following table:
*   |           |classical|middle|rapid|
*   |2200 and up|    10   |   6  |  3  |
*   | 1750-2199 |    12   |   8  |  5  |
*   | 1550-1749 |    14   |  10  |  7  |
*   | 1200-1549 |    14   |  11  |  8  |
* */
const getCoefficientK = (player1Rating, timeControl) => {
    let k
    const timeControlUpper = timeControl.toUpperCase()
    if(player1Rating >= KLimits.MAX.LIMIT){
        k = KLimits.MAX[timeControlUpper]
    } else if (player1Rating >= KLimits.HIGH.LIMIT && player1Rating < KLimits.MAX.LIMIT){
        k = KLimits.HIGH[timeControlUpper]
    } else if (player1Rating >= KLimits.LOW.LIMIT && player1Rating < KLimits.HIGH.LIMIT){
        k = KLimits.LOW[timeControlUpper]
    } else {
        k = KLimits.MIN[timeControlUpper]
    }
    return k
}

/*
* Sanitize the time control
* input can be time separated by + where the left is minutes and right is increment in seconds, for example 15+5
* input can also be a string in ['classical', 'middle', 'rapid']
* time control us calculated as follows:
*   classical - at least 120 minutes per player for the first 60 moves (for example 90+30)
*   middle - at least 60 minutes per player for the first 60 moves, but less than 120 minutes (for example 50+10)
*   rapid - at least 20 minutes per player for the first 60 moves, but less than 60 minutes (for example 15+5)
*/
const sanitizeTimeControl = timeControl => {
    let [minutes, seconds] = timeControl.split(timeControls.SEPARATOR)
    minutes = Number(minutes)
    seconds = Number(seconds)
    if (Number.isNaN(minutes) || Number.isNaN(seconds)){
        // Assuming valid input
        return timeControl
    }
    const totalMinutesIn60Moves = minutes + seconds
    if (totalMinutesIn60Moves >= timeControls.MINUTES_IN_60_MOVES.CLASSICAL){
        return timeControls.CLASSICAL
    } else if (totalMinutesIn60Moves >= timeControls.MINUTES_IN_60_MOVES.MIDDLE){
        return timeControls.MIDDLE
    } else if (totalMinutesIn60Moves >= timeControls.MINUTES_IN_60_MOVES.RAPID){
        return timeControls.RAPID
    } else {
        console.log("Time control of less than 20 minutes per player for the first 60 moves is unsupported")
    }
}

/*
* Calculate the change of rating of player 1
* Formula for calculating the change:
* Change = (K * (P * 2) - 1)) + (K * D / 400) + B
* Where: P = 0 or 0.5 or 1 (the score of player 1 in the game)
*        D = difference between player 2 rating and player 1 rating (player2 - player1)
*            if the difference is greater than 375 and less than 750, then D = 375
*            if the difference is greater than 750, then D = 400
*            same thing for negative D
*        B = bonus for coming to the game (small number)
*            if the player's rating is greater then or equal to 2300 then B = 0
*            else, if the time control is classical then B = (2300 - player1Rating) / 2000
*            else B = (2300 - player1Rating) / 4000
*        K = coefficient determined by the table:
*            |           |classical|middle|rapid|
*            |2200 and up|    10   |   6  |  3  |
*            | 1750-2199 |    12   |   8  |  5  |
*            | 1550-1749 |    14   |  10  |  7  |
*            | 1200-1549 |    14   |  11  |  8  |
*/
export const calculateRatingChange = (player1Rating, player2Rating, timeControl, score) => {
    const timeControlSanitized = sanitizeTimeControl(timeControl)
    const p = getScore(score)
    const d = calculateDifference(player1Rating, player2Rating)
    const b = calculateBonus(player1Rating, timeControlSanitized)
    const k = getCoefficientK(player1Rating, timeControlSanitized)
    return (k * ((p * changeCoefficients.MULTIPLIER) - changeCoefficients.SUBTRACT)) + (k * d / changeCoefficients.DIVIDER) + b
}
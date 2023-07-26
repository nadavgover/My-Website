import { v4 as uuidv4 } from 'uuid';

export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export const round = (rating, precision = 1) => {
    const multiplier = Math.pow(10, precision)
    return Math.round(rating * multiplier) / multiplier
}

export const generateUuid = () => {
    return uuidv4()
}
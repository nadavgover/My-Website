const regexValues = {
    VALID_RATING: /^(1[2-9]|[2-9]\d)\d\d$/,
    VALID_TIME_CONTROL: /^[1-9]\d*\s*\+\s*\d+$/
}

export const isRatingValid = value => {
    return !!value.match(regexValues.VALID_RATING)
}

export const isTimeControlValid = value => {
    return !!value.match(regexValues.VALID_TIME_CONTROL)
}
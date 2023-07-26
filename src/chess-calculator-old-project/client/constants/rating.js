export const scores = {
    WIN: {
        STR: "win",
        NUM: 1},
    TIE: {
        STR: "tie",
        NUM: 0.5
    },
    LOSS: {
        STR: "loss",
        NUM: 0
    }
}

export const ratingDifferenceLimits = {
    UPPER: {
        LIMIT: 750,
        D: 400},
    LOWER: {
        LIMIT: 375,
        D: 375
    }
}

export const timeControls = {
    CLASSICAL: "classical",
    MIDDLE: "middle",
    RAPID: "rapid",
    SEPARATOR: "+",
    MINUTES_IN_60_MOVES: {
        CLASSICAL: 120,
        MIDDLE: 60,
        RAPID: 20
    }
}

export const bonus = {
    LIMIT: 2300,
    NO_BONUS: 0,
    DIVIDERS: {
        CLASSICAL: 2000,
        REST: 4000
    }
}

export const KLimits = {
    MAX: {
        LIMIT: 2200,
        CLASSICAL: 10,
        MIDDLE: 6,
        RAPID: 3
    },
    HIGH: {
        LIMIT: 1750,
        CLASSICAL: 12,
        MIDDLE: 8,
        RAPID: 5
    },
    LOW: {
        LIMIT: 1550,
        CLASSICAL: 14,
        MIDDLE: 10,
        RAPID: 7
    },
    MIN: {
        LIMIT: 1200,
        CLASSICAL: 14,
        MIDDLE: 11,
        RAPID: 8
    }
}

export const changeCoefficients = {
    DIVIDER: 400,
    MULTIPLIER: 2,
    SUBTRACT: 1
}
const Average = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

export default Average;
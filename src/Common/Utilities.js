

function convertToCommaSeperated(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const sys = {
    convertToCommaSeperated
}
const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    const wrap = gifts => {
        const a = '*'.repeat(gifts.length + 2)
        return [a, `*${gifts}*`, a].join('\n')
    }
    return gifts.map(wrap)
}

console.log(wrapped)

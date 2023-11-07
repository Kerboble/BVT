function setSize(size){
    return () => document.body.style.fontSize = `${size}px`
}

const set12 = setSize(12)
const set20 = setSize(20)
const set28 = setSize(28)


document.getElementById('size-12').onclick = set12
document.getElementById('size-20').onclick = set20
document.getElementById('size-28').onclick = set28



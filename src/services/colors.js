var collection = {
  blue: { start: '#3AE7F3', end: '#1E96E5', mid: '#2EC0EC' },
  orange: { start: '#FFA254', end: '#FF768C', mid: '#FFA254' },
  green: { start: '#12d4c0', end: '#12b9cb', mid: '#49d3d6' },
  purple: { start: '#bc5ddd', end: '#807cea', mid: '#8461ca' },
  yellow: { start: '#ffc75a', end: '#ff701e', mid: '#ffa650' }
}

function getRandom () {
  var keys = Object.keys(collection)
  var randomKey = keys[Math.floor(Math.random() * keys.length)]
  return collection[randomKey]
}

export default { collection, getRandom }

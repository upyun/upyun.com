var collection = [
  { start: '#3AE7F3', end: '#1E96E5', mid: '#2EC0EC' },
  { start: '#FFA254', end: '#FF768C', mid: '#FFA254' }
]

function getRandom () {
  return collection[Math.floor(Math.random() * collection.length)]
}

export default { collection, getRandom }

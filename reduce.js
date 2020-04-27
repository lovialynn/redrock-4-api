Array.prototype.iReduce = function iReduce(fn, initial) {
    let result = initial ? initial : this[0]
    let start = initial ? 0 : 1
    for (let i = start; i < this.length; i++) {
      result = fn(result, this[i], i, this)
    }
    return result
  }
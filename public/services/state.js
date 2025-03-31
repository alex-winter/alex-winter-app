let callCount = -1
let states = []

export function useState(initValue) {
  const id = ++callCount
  
  if (states[id]) return states[id]
  
  const setValue = (newValue) => {
    states[id][0] = newValue
    reRender()
  }
  
  let tuple = [initValue, setValue]
  
  states.push(tuple)

  return tuple
}


const taskTypes = (deadlines, currentDay) => {
  // Response Example: [Today (int), Upcoming (int), Later (int)]
  let today = 0
  let upcoming = 0
  let later = 0
  
  deadlines.map((deadline) => {
    if 
      (deadline <= currentDay) 
      today++
    else if 
      (deadline > currentDay  && 
       deadline <= currentDay + 7)
      upcoming++
    else 
      later++
  })
  
  return [today, upcoming, later]
  return collection

}

module.exports = taskTypes
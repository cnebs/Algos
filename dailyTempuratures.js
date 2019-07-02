const dailyTemperatures = ( T ) => {
  let temps = [T.length - 1];
  let results = new Array(T.length).fill(0);
  let day;
    
  for ( day = T.length - 2; day >= 0; day-- ) {
    while(temps.length > 0 && T[day] >= T[temps[temps.length - 1]])   {
      temps.pop();
    }
    if ( temps.length > 0 ) {
      results[day] = temps[temps.length - 1] - day;
    }
    temps.push(day);
  }
  return results;
}

let trial = dailyTemperatures([34,80,80,80,34,80,80,80,34,34,]);
console.log(trial);
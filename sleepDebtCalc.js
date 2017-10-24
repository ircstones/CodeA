const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    	return 8;
    case 'Tuesday':
      return 8;
    case 'Wednesday':
      return 8;
    case 'Thursday':
			return 8;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 8;
    case 'Sunday':
      return 8;
             }
}

const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours *= 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You got the sleep you wanted!');
  } else if(actualSleepHours > idealSleepHours) {
    let greaterDif = actualSleepHours - idealSleepHours;
    //Interpolation 2 strings
    console.log(`You got more sleep than you intended by ${greaterDif} hours`);
  } 	else {
    let lessDif = idealSleepHours - actualSleepHours;
    console.log(`You need more rest! You lost ${lessDif} hours!`);
  }

}
calculateSleepDebt();

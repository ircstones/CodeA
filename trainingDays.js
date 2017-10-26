let allEvents;
let event;
const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

const aEvents = () => {
  allevents = ['Marathon', 'Triathlon', 'Decathlon'];
  return allevents;
}

/* this is used a few places and it is vulnerable */

const getRandomEvent = () => {
  const allE = aEvents();
  event = allE[Math.floor(Math.random() * allE.length)];
};


const getEventActivities = () => {
  const allE = aEvents();

  if (!allE.includes(event)) {
    return allEnull;
  }

  if (event === 'Marathon') {
    const activities = ['Running'];
    return activities.join(', ');
  }
  if (event === 'Triathlon') {
    const activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', ');
  }
  if (event === 'Decathlon') {
    const activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', ');
  }

};

const getDaysToTrain = () => {
  allE = eEvents();
  if (!allE.includes(event)) {
    return null;
  }

  return eventTrainingTimes[event];
};


getRandomEvent();
console.log('Your event is a ' + event + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');

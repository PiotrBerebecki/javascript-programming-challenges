console.clear();

// http://www.codewars.com/kata/finding-an-appointment/javascript

// Find the earliest time for a meeting / appointment

const getStartTime = (schedules, duration) => {
  const dayStartMin = 9 * 60; // 9:00
  const dayEndMin = 19 * 60; // 19:00

  const strTimeToMin = strTime => {
    const [hourStr, minStr] = strTime.split(':');
    const hour = Number(hourStr);
    const min = Number(minStr);
    return hour * 60 + min;
  };

  const schedulesMin = schedules.map(person => {
    return person.map(appointment => {
      return appointment.map(time => {
        return strTimeToMin(time);
      });
    });
  });

  const freeSlots = [];
  schedulesMin.forEach((per, perIdx) => {
    freeSlots.push([]);
    per.forEach((app, appIdx) => {
      if (appIdx === 0 && app[0] - dayStartMin >= duration) {
        freeSlots[perIdx].push([dayStartMin, app[0]]);
      }
      if (per.length > 1 && appIdx < per.length - 1) {
        if (per[appIdx + 1][0] - per[appIdx][1] >= duration) {
          freeSlots[perIdx].push([per[appIdx][1], per[appIdx + 1][0]]);
        }
      }
      if (appIdx === per.length - 1 && dayEndMin - app[1] >= duration) {
        freeSlots[perIdx].push([app[1], dayEndMin]);
      }
    });
  });

  // loop through all minutes in a day
  // and return the first suitable minute
  for (let min = dayStartMin; min < dayEndMin; min++) {
    if (
      freeSlots.every(per => {
        return per.some(app => {
          return min >= app[0] && app[1] - min >= duration;
        });
      })
    ) {
      return new Date(min * 60 * 1000).toISOString().slice(-13, -8);
    }
  }

  return null;
};

// prettier-ignore
const schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

console.log(getStartTime(schedules, 60)); // '12:15');

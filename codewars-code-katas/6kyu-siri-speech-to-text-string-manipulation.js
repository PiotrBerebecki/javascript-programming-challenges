console.clear();

/*
-----------------------------------------
6kyu Siri - Speech to Text - String Manipulation
-----------------------------------------

Siri needs you to code some new features:
addition, subtraction and a weather checker. 

Examples: 
"Add 7 to 15." -> 22
"Subtract 7 from 15." -> 8 
"What is the weather at 5:30pm?" -> "sunny"

According to the weather API, 
it is "sunny" from (including) 6am to 6pm (including), 
and "raining" the rest of the day.
*/



// --------------------------------------
const bot = {
  message: function(msg) {
    // Remove the ending punctuation and convert to array
    const msgArray = msg.slice(0,-1).split(' ');
    
    switch(msgArray[0]) {
      case 'Add':
        return this.getSum(+msgArray[1], +msgArray[3]);
      case 'Subtract':
        return this.getDifference(+msgArray[1], +msgArray[3]);
      case 'What':
        return this.getWeather(msgArray[5]);
    }
  },
    
  getSum: function(a, b) {
    return a + b
  },
  
  getDifference: function(a, b) {
    return b - a
  },
  
  getWeather: function(timeFull) {
    const timeArray = timeFull.split(/(:|pm|am)/);
    const time = +timeArray[0]*100 + (+timeArray[2]);
    const dayTime = timeArray[3];
              
    if ((time >= 600 && dayTime === 'am') || (time <= 600 && dayTime === 'pm')) {
      return 'sunny';
    } else {
      return 'raining';
    }
  }
};

// console.log(  bot.message("Add 5 to 20.")  );
// console.log(  bot.message("Add 56 to 52.")  );
// console.log(  bot.message("Add 90 to 10.")  );
// console.log(  bot.message("Add 600 to 20.")  );
// console.log(  bot.message("Add 1064 to 3.")  );
// console.log(  bot.message("Subtract 15 from 20.")  );
// console.log(  bot.message("Subtract 2 from 10.")  );
// console.log(  bot.message("Subtract 32 from 64.")  );
// console.log(  bot.message("What is the weather at 4:30pm?")  );
// console.log(  bot.message("What is the weather at 2:30am?")  );
// console.log(  bot.message("What is the weather at 10:30pm?")  );
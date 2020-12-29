module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()} 
            ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  },

  format_time: (date) => {
    var futureTime = new Date(date.getTime() + 15 * 60000).getTime();
    var currentTime = new Date().getTime();
    return Math.round((futureTime - currentTime) / 60000 * 60)
  },
  
  set_time: (date) => {
    var futureTime = new Date(date.getTime() + 15 * 60000).getTime();
    var currentTime = new Date().getTime();
    var remainingTime = Math.round((futureTime - currentTime) / 60000 * 60)

    var timer = remainingTime, minutes, seconds;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (remainingTime > 0) {
          return minutes + ":" + seconds;
        } else {
          return "00:00";
        }
        
  }, 

  get_array: (data) => {
    const showingsData = data.dataValues.showings
    // [0].date 
    var array = []

    for (var i = 0; i < showingsData.length; i++) {
      x = showingsData[i].date;
      array.push(x);
    }

    return array
  },

  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};

module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()} 
            ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  },

  format_time: (date) => {
    var futureTime = new Date(date.getTime() + 15 * 60000).toLocaleString();
    var currentTime = date.toLocaleString();
    return // futureTime - CurrentTime;
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

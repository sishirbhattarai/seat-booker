const { Showing } = require('../models');

const showingData = [
  {
    date: "Sunday January 3 2021",
    startTime: "7:45 PM",
    endTime: "10:30 PM",
    month: "jan",
    day: "03",
    production_id: 1,
  },
  {
    date: "Friday January 8 2021",
    startTime: "6:30 PM",
    endTime: "9:15 PM",
    month: "jan",
    day: "08",
    production_id: 1,
  },
  {
    date: "Sunday January 10 2021",
    startTime: "2:45 PM",
    endTime: "5:30 PM",
    month: "jan",
    day: "10",
    production_id: 1,
  },
  {
    date: "Friday January 15 2021",
    startTime: "7:30 PM",
    endTime: "10:15 PM",
    month: "jan",
    day: "15",
    production_id: 1,
  },
  {
    date: "Monday January 18 2021",
    startTime: "7:45 PM",
    endTime: "10:30 PM",
    month: "jan",
    day: "18",
    production_id: 1,
  },
  {
    date: "Thursday January 21 2021",
    startTime: "6:45 PM",
    endTime: "9:30 PM",
    month: "jan",
    day: "21",
    production_id: 1,
  },
  {
    date: "Saturday January 23 2021",
    startTime: "12:30 PM",
    endTime: "3:15 PM",
    month: "jan",
    day: "23",
    production_id: 1,
  },
  {
    date: "Friday January 29 2021",
    startTime: "8:15 PM",
    endTime: "11:00 PM",
    month: "jan",
    day: "29",
    production_id: 1,
  },
  {
    date: "Sunday January 31 2021",
    startTime: "12:45 PM",
    endTime: "3:30 PM",
    month: "jan",
    day: "31",
    production_id: 1,
  },
  {
    date: "Friday February 5 2021",
    startTime: "7:00 PM",
    endTime: "9:45 PM",
    month: "feb",
    day: "05",
    production_id: 1,
  },
  {
    date: "Sunday February 7 2021",
    startTime: "12:00 PM",
    endTime: "3:00 PM",
    month: "feb",
    day: "07",
    production_id: 1,
  },
  {
    date: "Saturday February 13 2021",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    month: "feb",
    day: "13",
    production_id: 1,
  },
  {
    date: "Sunday February 14 2021",
    startTime: "6:00 PM",
    endTime: "9:00 PM",
    month: "feb",
    day: "14",
    production_id: 1,
  },
  {
    date: "Friday February 19 2021",
    startTime: "7:30 PM",
    endTime: "10:30 PM",
    month: "feb",
    day: "19",
    production_id: 1,
  },
  {
    date: "Sunday February 21 2021",
    startTime: "12:45 PM",
    endTime: "3:45 PM",
    month: "feb",
    day: "21",
    production_id: 1,
  },
  {
    date: "Friday February 26 2021",
    startTime: "7:00 PM",
    endTime: "10:00 PM",
    month: "feb",
    day: "26",
    production_id: 1,
  },
  {
    date: "Saturday February 27 2021",
    startTime: "2:00 PM",
    endTime: "5:00 PM",
    month: "feb",
    day: "27",
    production_id: 1,
  },
  {
    date: "Sunday February 28 2021",
    startTime: "3:30 PM",
    endTime: "6:30 PM",
    month: "feb",
    day: "28",
    production_id: 1,
  },
  {
    date: "Friday April 2 2021",
    startTime: "5:30 PM",
    endTime: "8:00 PM",
    month: "apr",
    day: "02",
    production_id: 2,
  },
  {
    date: "Monday April 5 2021",
    startTime: "11:00 AM",
    endTime: "1:30 PM",
    month: "apr",
    day: "05",
    production_id: 2,
  },
  {
    date: "Wednesday April 7 2021",
    startTime: "5:30 PM",
    endTime: "7:00 PM",
    month: "apr",
    day: "07",
    production_id: 2,
  },
  {
    date: "Friday April 9 2021",
    startTime: "7:15 PM",
    endTime: "9:45 PM",
    month: "apr",
    day: "09",
    production_id: 2,
  },
  {
    date: "Sunday April 11 2021",
    startTime: "1:00 PM",
    endTime: "3:30 PM",
    month: "apr",
    day: "11",
    production_id: 2,
  },
  {
    date: "Friday April 16 2021",
    startTime: "6:30 PM",
    endTime: "9:00 PM",
    month: "apr",
    day: "16",
    production_id: 2,
  },
  {
    date: "Sunday April 18 2021",
    startTime: "11:30 AM",
    endTime: "2:00 PM",
    month: "apr",
    day: "18",
    production_id: 2,
  },
  {
    date: "Saturday April 24 2021",
    startTime: "2:30 PM",
    endTime: "5:00 PM",
    month: "apr",
    day: "24",
    production_id: 2,
  },
  {
    date: "Monday April 26 2021",
    startTime: "7:30 PM",
    endTime: "10:00 PM",
    month: "apr",
    day: "26",
    production_id: 2,
  },
  {
    date: "Friday April 30 2021",
    startTime: "8:30 PM",
    endTime: "11:00 PM",
    month: "apr",
    day: "30",
    production_id: 2,
  },
  {
    date: "Sunday May 2 2021",
    startTime: "5:30 PM",
    endTime: "8:00 PM",
    month: "may",
    day: "02",
    production_id: 2,
  },
  {
    date: "Friday May 7 2021",
    startTime: "7:0 PM",
    endTime: "9:30 PM",
    month: "may",
    day: "07",
    production_id: 2,
  },
  {
    date: "Sunday May 9 2021",
    startTime: "12:30 PM",
    endTime: "3:00 PM",
    month: "may",
    day: "09",
    production_id: 2,
  },
  {
    date: "Saturday May 15 2021",
    startTime: "3:30 PM",
    endTime: "6:00 PM",
    month: "may",
    day: "15",
    production_id: 2,
  },
  {
    date: "Monday May 17 2021",
    startTime: "6:30 PM",
    endTime: "9:00 PM",
    month: "may",
    day: "17",
    production_id: 2,
  },
  {
    date: "Friday May 21 2021",
    startTime: "8:00 PM",
    endTime: "10:30 PM",
    month: "may",
    day: "21",
    production_id: 2,
  },
  {
    date: "Sunday May 23 2021",
    startTime: "12:30 PM",
    endTime: "3:00 PM",
    month: "may",
    day: "23",
    production_id: 2,
  },
  {
    date: "Friday May 28 2021",
    startTime: "7:30 PM",
    endTime: "10:00 PM",
    month: "may",
    day: "28",
    production_id: 2,
  },
  {
    date: "Satruday May 29 2021",
    startTime: "2:30 PM",
    endTime: "5:00 PM",
    month: "may",
    day: "29",
    production_id: 2,
  },
  {
    date: "Sunday May 30 2021",
    startTime: "4:30 PM",
    endTime: "7:00 PM",
    month: "may",
    day: "30",
    production_id: 2,
  },
  {
    date: "Monday May 31 2021",
    startTime: "6:30 PM",
    endTime: "9:00 PM",
    month: "may",
    day: "31",
    production_id: 2,
  },
  {
    date: "Friday June 4 2021",
    startTime: "6:30 PM",
    endTime: "9:00 PM",
    month: "june",
    day: "4",
    production_id: 3,
  },
  {
    date: "Sunday June 6 2021",
    startTime: "2:30 PM",
    endTime: "5:00 PM",
    month: "june",
    day: "6",
    production_id: 3,
  },
  {
    date: "Friday June 11 2021",
    startTime: "6:30 PM",
    endTime: "9:00 PM",
    month: "june",
    day: "11",
    production_id: 3,
  },
  {
    date: "Sunday June 13 2021",
    startTime: "12:30 PM",
    endTime: "4:00 PM",
    month: "june",
    day: "13",
    production_id: 3,
  },
  {
    date: "Friday June 18 2021",
    startTime: "7:30 PM",
    endTime: "10:00 PM",
    month: "june",
    day: "18",
    production_id: 3,
  },
  {
    date: "Sunday June 20 2021",
    startTime: "1:30 PM",
    endTime: "4:00 PM",
    month: "june",
    day: "20",
    production_id: 3,
  },
  {
    date: "Friday June 25 2021",
    startTime: "5:30 PM",
    endTime: "8:00 PM",
    month: "june",
    day: "25",
    production_id: 3,
  },
  {
    date: "Saturday June 26 2021",
    startTime: "4:30 PM",
    endTime: "7:00 PM",
    month: "june",
    day: "27",
    production_id: 3,
  },
  {
    date: "Sunday June 27 2021",
    startTime: "12:30 PM",
    endTime: "3:00 PM",
    month: "june",
    day: "27",
    production_id: 3,
  },
  {
    date: "Friday July 2 2021",
    startTime: "6:45 PM",
    endTime: "9:45 PM",
    month: "july",
    day: "02",
    production_id: 4,
  },
  {
    date: "Saturday July 3 2021",
    startTime: "7:45 PM",
    endTime: "10:45 PM",
    month: "july",
    day: "03",
    production_id: 4,
  },
  {
    date: "Sunday July 4 2021",
    startTime: "12:15 PM",
    endTime: "3:15 PM",
    month: "july",
    day: "04",
    production_id: 4,
  },
  {
    date: "Friday July 9 2021",
    startTime: "6:15 PM",
    endTime: "9:15 PM",
    month: "july",
    day: "09",
    production_id: 4,
  },
  {
    date: "Sunday July 11 2021",
    startTime: "1:45 PM",
    endTime: "4:45 PM",
    month: "july",
    day: "11",
    production_id: 4,
  },
  {
    date: "Friday July 16 2021",
    startTime: "5:15 PM",
    endTime: "8:15 PM",
    month: "july",
    day: "18",
    production_id: 4,
  },
  {
    date: "Sunday July 18 2021",
    startTime: "10:45 AM",
    endTime: "1:45 PM",
    month: "july",
    day: "18",
    production_id: 4,
  },
  {
    date: "Saturday July 24 2021",
    startTime: "10:30 AM",
    endTime: "1:30 PM",
    month: "july",
    day: "24",
    production_id: 4,
  },
  {
    date: "Saturday July 24 2021",
    startTime: "5:45 PM",
    endTime: "8:45 PM",
    month: "july",
    day: "24",
    production_id: 4,
  },
  {
    date: "Monday July 26 2021",
    startTime: "5:45 PM",
    endTime: "8:45 PM",
    month: "july",
    day: "26",
    production_id: 4,
  },
  {
    date: "Friday July 30 2021",
    startTime: "6:00 PM",
    endTime: "9:00 PM",
    month: "july",
    day: "30",
    production_id: 4,
  },
  {
    date: "Saturday July 31 2021",
    startTime: "10:15 AM",
    endTime: "1:15 PM",
    month: "july",
    day: "31",
    production_id: 4,
  },
  {
    date: "Saturday July 31 2021",
    startTime: "6:15 PM",
    endTime: "9:15 PM",
    month: "july",
    day: "31",
    production_id: 4,
  },
  {
    date: "Sunday August 1 2021",
    startTime: "3:15 PM",
    endTime: "6:00 PM",
    month: "august",
    day: "01",
    production_id: 5,
  },
  {
    date: "Friday August 6 2021",
    startTime: "6:15 PM",
    endTime: "9:00 PM",
    month: "august",
    day: "06",
    production_id: 5,
  },
  {
    date: "Sunday August 8 2021",
    startTime: "3:15 PM",
    endTime: "6:00 PM",
    month: "august",
    day: "08",
    production_id: 5,
  },
  {
    date: "Friday August 13 2021",
    startTime: "7:15 PM",
    endTime: "10:00 PM",
    month: "august",
    day: "13",
    production_id: 5,
  },
  {
    date: "Sunday August 15 2021",
    startTime: "1:15 PM",
    endTime: "4:00 PM",
    month: "august",
    day: "15",
    production_id: 5,
  },
  {
    date: "Friday August 20 2021",
    startTime: "7:00 PM",
    endTime: "9:45 PM",
    month: "august",
    day: "20",
    production_id: 5,
  },
  {
    date: "Sunday August 22 2021",
    startTime: "3:15 PM",
    endTime: "6:00 PM",
    month: "august",
    day: "22",
    production_id: 5,
  },
  {
    date: "Friday August 27 2021",
    startTime: "3:15 PM",
    endTime: "6:00 PM",
    month: "august",
    day: "27",
    production_id: 5,
  },
  {
    date: "Saturday August 28 2021",
    startTime: "12:15 PM",
    endTime: "3:00 PM",
    month: "august",
    day: "28",
    production_id: 5,
  },
  {
    date: "Sunday August 29 2021",
    startTime: "6:15 PM",
    endTime: "9:00 PM",
    month: "august",
    day: "29",
    production_id: 5,
  },
  {
    date: "Friday September 3 2021",
    startTime: "6:00 PM",
    endTime: "9:00 PM",
    month: "september",
    day: "03",
    production_id: 6,
  },
  {
    date: "Saturday September 4 2021",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    month: "september",
    day: "04",
    production_id: 6,
  },
  {
    date: "Saturday September 4 2021",
    startTime: "5:30 PM",
    endTime: "8:30 PM",
    month: "september",
    day: "03",
    production_id: 6,
  },
  {
    date: "Sunday September 5 2021",
    startTime: "2:00 PM",
    endTime: "5:00 PM",
    month: "september",
    day: "05",
    production_id: 6,
  },
  {
    date: "Friday September 10 2021",
    startTime: "6:30 PM",
    endTime: "9:30 PM",
    month: "september",
    day: "10",
    production_id: 6,
  },
  {
    date: "Saturday September 11 2021",
    startTime: "4:00 PM",
    endTime: "7:00 PM",
    month: "september",
    day: "11",
    production_id: 6,
  },
  {
    date: "Sunday September 12 2021",
    startTime: "5:30 PM",
    endTime: "8:30 PM",
    month: "september",
    day: "12",
    production_id: 6,
  },
  {
    date: "Friday September 17 2021",
    startTime: "7:00 PM",
    endTime: "10:00 PM",
    month: "september",
    day: "17",
    production_id: 6,
  },
  {
    date: "Saturday September 18 2021",
    startTime: "6:15 PM",
    endTime: "9:15 PM",
    month: "september",
    day: "18",
    production_id: 6,
  },
  {
    date: "Sunday September 19 2021",
    startTime: "2:00 PM",
    endTime: "5:00 PM",
    month: "september",
    day: "19",
    production_id: 6,
  },
  {
    date: "Friday September 24 2021",
    startTime: "6:45 PM",
    endTime: "9:45 PM",
    month: "september",
    day: "24",
    production_id: 6,
  },
  {
    date: "Saturday September 25 2021",
    startTime: "10:30 AM",
    endTime: "1:30 PM",
    month: "september",
    day: "25",
    production_id: 6,
  },
  {
    date: "Saturday September 25 2021",
    startTime: "6:00 PM",
    endTime: "9:00 PM",
    month: "september",
    day: "25",
    production_id: 6,
  },
  {
    date: "Sunday September 26 2021",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    month: "september",
    day: "26",
    production_id: 6,
  },
  {
    date: "Sunday September 26 2021",
    startTime: "5:45 PM",
    endTime: "8:45 PM",
    month: "september",
    day: "26",
    production_id: 6,
  },
  {
    date: "Thursday September 30 2021",
    startTime: "6:15 PM",
    endTime: "9:15 PM",
    month: "september",
    day: "30",
    production_id: 6,
  },
  {
    date: "Friday November 5 2021",
    startTime: "6:15 PM",
    endTime: "9:15 PM",
    month: "November",
    day: "05",
    production_id: 7,
  },
  {
    date: "Sunday November 7 2021",
    startTime: "3:15 PM",
    endTime: "5:45 PM",
    month: "November",
    day: "7",
    production_id: 7,
  },
  {
    date: "Friday November 12 2021",
    startTime: "7:15 PM",
    endTime: "9:45 PM",
    month: "November",
    day: "12",
    production_id: 7,
  },
  {
    date: "Sunday November 14 2021",
    startTime: "2:15 PM",
    endTime: "4:45 PM",
    month: "November",
    day: "14",
    production_id: 7,
  },
  {
    date: "Friday November 19 2021",
    startTime: "8:15 PM",
    endTime: "10:45 PM",
    month: "November",
    day: "19",
    production_id: 7,
  },
  {
    date: "Sunday November 21 2021",
    startTime: "3:15 PM",
    endTime: "5:45 PM",
    month: "November",
    day: "21",
    production_id: 7,
  },
  {
    date: "Friday November 26 2021",
    startTime: "7:15 PM",
    endTime: "9:45 PM",
    month: "November",
    day: "26",
    production_id: 7,
  },
  {
    date: "Sunday November 28 2021",
    startTime: "1:15 PM",
    endTime: "3:45 PM",
    month: "November",
    day: "28",
    production_id: 7,
  },
  {
    date: "Friday December 3 2021",
    startTime: "7:15 PM",
    endTime: "9:45 PM",
    month: "december",
    day: "3",
    production_id: 8,
  },
  {
    date: "Saturday December 4 2021",
    startTime: "5:15 PM",
    endTime: "6:45 PM",
    month: "december",
    day: "4",
    production_id: 8,
  },
  {
    date: "Sunday December 5 2021",
    startTime: "12:00 PM",
    endTime: "1:30 PM",
    month: "december",
    day: "5",
    production_id: 8,
  },
  {
    date: "Friday December 10 2021",
    startTime: "7:00 PM",
    endTime: "9:30 PM",
    month: "december",
    day: "10",
    production_id: 8,
  },
  {
    date: "Saturday December 11 2021",
    startTime: "5:00 PM",
    endTime: "6:30 PM",
    month: "december",
    day: "11",
    production_id: 8,
  },
  {
    date: "Sunday December 12 2021",
    startTime: "2:00 PM",
    endTime: "3:30 PM",
    month: "december",
    day: "12",
    production_id: 8,
  },
  {
    date: "Friday December 17 2021",
    startTime: "6:15 PM",
    endTime: "7:45 PM",
    month: "december",
    day: "17",
    production_id: 8,
  },
  {
    date: "Saturday December 18 2021",
    startTime: "5:15 PM",
    endTime: "6:45 PM",
    month: "december",
    day: "18",
    production_id: 8,
  },
  {
    date: "Sunday December 19 2021",
    startTime: "12:00 PM",
    endTime: "1:30 PM",
    month: "december",
    day: "19",
    production_id: 8,
  },
  {
    date: "Friday December 24 2021",
    startTime: "6:15 PM",
    endTime: "7:45 PM",
    month: "december",
    day: "24",
    production_id: 8,
  },
  {
    date: "Saturday December 25 2021",
    startTime: "12:15 PM",
    endTime: "1:45 PM",
    month: "december",
    day: "25",
    production_id: 8,
  },
  {
    date: "Saturday December 25 2021",
    startTime: "5:15 PM",
    endTime: "6:45 PM",
    month: "december",
    day: "25",
    production_id: 8,
  },
  {
    date: "Sunday December 26 2021",
    startTime: "12:00 PM",
    endTime: "1:30 PM",
    month: "december",
    day: "26",
    production_id: 8,
  },
  {
    date: "Friday December 31 2021",
    startTime: "7:15 PM",
    endTime: "8:45 PM",
    month: "december",
    day: "31",
    production_id: 8,
  },

  
  
]

const seedShowings = () => Showing.bulkCreate(showingData);

module.exports = seedShowings;

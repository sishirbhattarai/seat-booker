const { Production } = require('../models');

const productionData = [
  {
    title: "Les Miserables",
    description: "",
    img: "https://resizing.flixster.com/gprzGHTZlso8Y5gFWeybH6smEPk=/206x305/v2/https://flxt.tmsimg.com/assets/p9088263_p_v10_ag.jpg",
    genre: "musical",
    startDate: "January 1",
    endDate: "March 1",
  },
  {
    title: "The Lion King",
    description: "",
    img: "https://resizing.flixster.com/37nvjsHybtXd0q_Ae144Eu4itMQ=/206x305/v2/https://resizing.flixster.com/tjFCnGQsGs0O1F5HPx9vaVyWzho=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzYyYWU2MmIwLTE3NDMtNDJlZi04MzQ1LTViNjVjMzA3YTlkMi53ZWJw",
    genre: "musical",
    startDate: "April 1",
    endDate: "May 31",
  },
  {
    title: "West Side Story",
    description: "",
    img: "https://resizing.flixster.com/2lWMMrgXkavdhvsLWy98uWVyJJI=/206x305/v2/https://resizing.flixster.com/zuKJtKw1kY-QX5qlEdgqgUQXNR4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzg5YzhkMDE4LWQyMTUtNDM2OS05N2IyLWY1NDFmYmU4ODMzNi53ZWJw",
    genre: "musical",
    startDate: "June 1",
    endDate: "June 30",
  },
  {
    title: "Grease",
    description: "",
    img: "https://resizing.flixster.com/alAwvUYYj_pK6Sz50pI1buMMrWo=/206x305/v2/https://resizing.flixster.com/CB-94hxkDRFemOxE0rD-m-tQUpU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzBlNmRhNzFkLWU5M2QtNDM1Yy04M2I2LTM1YzUzNjQzZjhhZC53ZWJw",
    genre: "musical",
    startDate: "July 1",
    endDate: "July 31",
  },
  {
    title: "South Pacific",
    description: "",
    img: "https://resizing.flixster.com/f3_iBHhxwjmxlO8w5HBTxUYmr-o=/206x305/v2/https://flxt.tmsimg.com/assets/p327_p_v8_aa.jpg",
    genre: "musical",
    startDate: "August 1",
    endDate: "August 31",
  },
  {
    title: "Hamilton",
    description: "",
    img: "https://resizing.flixster.com/rcqtoRKgfSgXmTDHlO-dHoww1tw=/206x305/v2/https://resizing.flixster.com/xIuinui_7b_kLbzAaRkY8WgKPrk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzBkZGQyODI0LTY4MDYtNDM4MC1iYWFlLTdkMzQwYzc5MzVlMi53ZWJw",
    genre: "musical",
    startDate: "September 1",
    endDate: "September 30",
  },
  {
    title: "The Phantom of the Opera",
    description: "",
    img: "https://resizing.flixster.com/S3ClDYwziPzxzi48pkzrruFQRQA=/206x305/v2/https://flxt.tmsimg.com/NowShowing/37712/37712_aa.jpg",
    genre: "musical",
    startDate: "November 1",
    endDate: "November 30",
  },
  {
    title: "A Christmas Carol",
    description: "",
    img: "https://resizing.flixster.com/gMlp_3ari17M_OIGmOul6W02KOI=/206x305/v2/https://resizing.flixster.com/I8Q1HkOqM1UXO_ayyUHpvzP1B18=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzBiYWYyNTk2LTAxMmMtNDg5MC1hZTJlLTk3MjM3ZmViYTdjYS53ZWJw",
    genre: "play",
    startDate: "December 1",
    endDate: "December 31",
  },
  
]

const seedProductions = () => Production.bulkCreate(productionData);

module.exports = seedProductions;
const { Production } = require('../models');

const productionData = [
  {
    title: "Les Miserables",
    description: "A bunch of french people die.",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_.jpg",
    genre: "musical",
    startDate: "2021-01-01",
    endDate: "2021-03-01",
  },
  {
    title: "The Lion King",
    description: "Lions fight each other and stuff.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/The_Lion_King_Musical.svg/1200px-The_Lion_King_Musical.svg.png",
    genre: "musical",
    startDate: "2021-04-01",
    endDate: "2021-06-01",
  },
  
]

const seedProductions = () => Production.bulkCreate(productionData);

module.exports = seedProductions;
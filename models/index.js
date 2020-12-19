const User = require('./User');
const Production = require('./Production');
const Showing = require('./Showing');
const Seat = require('./Seat');
const Ticket = require('./Ticket');

Production.hasMany(Showing, {
  foreignKey: 'production_id',
});

  Showing.belongsTo(Production, {
    foreignKey: 'production_id',
  });

Showing.hasMany(Seat, {
  foreignKey: 'showing_id',
});

  Seat.belongsToMany(Showing, {
    foreignKey: 'showing_id',
  });

// Ticket
Ticket.belongsTo(User, {
  foreignKey: 'user_id'
});

Ticket.belongsTo(Production, {
  foreignKey: 'production_id'
});

Ticket.belongsTo(Showing, {
  foreignKey: 'showing_id'
});

Ticket.belongsTo(Seat, {
  foreignKey: 'seat_id'
});

User.hasMany(Ticket, {
  foreignKey: 'ticket_id'
});

module.exports = { User, Production, Showing, Seat, Ticket };

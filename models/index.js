const User = require('./User');
const Production = require('./Production');
const Showing = require('./Showing');
const Ticket = require('./Ticket');
const Cart = require('./Cart');

Production.hasMany(Showing, {
  foreignKey: 'production_id',
});

  Showing.belongsTo(Production, {
    foreignKey: 'production_id',
  });

Showing.hasMany(Ticket, {
  foreignKey: 'showing_id',
});

// Ticket
Ticket.belongsTo(User, {
  foreignKey: 'user_id'
});

Ticket.belongsTo(Showing, {
  foreignKey: 'showing_id'
});

User.hasMany(Ticket, {
  foreignKey: 'user_id'
});


module.exports = { User, Production, Showing, Ticket, Cart };

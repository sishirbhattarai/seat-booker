const User = require('./User');
const Production = require('./Production');
const Showing = require('./Showing');
const Seat = require('./Seat');
const Ticket = require('./Ticket');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'post_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// creating the associations

// User can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//  One Post belongs to a single User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});


// One Comment belongs to a Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// One Comment belongs to a User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// One User can have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// One Post can have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Comment };
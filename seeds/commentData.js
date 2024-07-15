const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'I disagree, I really like the size and functionality of my Apple Airpods Pro',
    commenter_id: 1,
    post_id: 3,
  },
  {
    comment: 'I never thought of that! But maybe there is better uses for other langauages depending on what needs you want to do',
    commenter_id: 2,
    post_id: 1,
  },
  {
    comment: 'All though Ai is moving super quick and can replace some jobs... I think that there will also be new jobs created',
    commenter_id: 3,
    post_id: 2,
  },
  
  
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
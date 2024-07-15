const { Article } = require('../models');

const articledata = [
  {
    title: 'What are the best headphones for everyday use?',
    content: 'The best headphones are between the Sony M3 and the Apple airpods max',
    author_id: 1,
  },
  {
    title: 'Is Javascript the coding language for me?',
    content: 'Some think that Javascript is the most popular language for a reason',
    author_id: 2,
  },
  {
    title: 'Why does everyone fear AI?',
    content: 'AI makes people question if they are still going to have a job in the future',
    author_id: 3,
  },
  
];

const seedArticle = () => Article.bulkCreate(articledata);

module.exports = seedArticle;
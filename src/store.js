const { v4: uuid } = require('uuid')

const bookmarks = [
    {
        id:uuid(),
        title:'Buzzfeed',
        url: 'https://www.buzzfeed.com',
        description: 'news and quizzes',
        rating: 4
    },
    {
        id:uuid(),
        title:'Facebook',
        url: 'https://www.facebook.com',
        description: 'social media',
        rating: 3
    },
    {
        id:uuid(),
        title:'Tumblr',
        url: 'https://www.tumblr.com',
        description: 'blogstyle website',
        rating: 4
    },
]

module.exports = { bookmarks }
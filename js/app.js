// const url = `https://elsemanario.com/wp-json/wp/v2/posts`
//lo que va dentro del then debe de ser una función

const api = getApiPromise(`https://elsemanario.com/wp-json/wp/v2/posts`)

const titles = api.then(getPostTitle)

//  const titles = api.then(posts => {
//   return posts.map(post => {
//     return post.title.rendered
//   })
// })
titles.then(console.log)

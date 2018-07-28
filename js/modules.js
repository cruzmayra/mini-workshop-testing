const getApiPromise = url => {
  return $.get(url)
}

const getPostTitle = posts => posts.map(getTitle)

const getTitle = post => post.title.rendered

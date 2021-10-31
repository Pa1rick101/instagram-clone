import Post from "./Post"

const posts = [
  {
    id: '123',
    username: 'dirtyp',
    userImg: 'https://www.finews.ch/images/cache/c2c6ed067a9a453a9086f2d8e1991938_w500.jpg',
    img: 'https://www.finews.ch/images/cache/c2c6ed067a9a453a9086f2d8e1991938_w500.jpg',
    caption: 'My Cryptpunk!!'
  },
  {
    id: '123',
    username: 'dirtyp',
    userImg: 'https://www.finews.ch/images/cache/c2c6ed067a9a453a9086f2d8e1991938_w500.jpg',
    img: 'https://www.finews.ch/images/cache/c2c6ed067a9a453a9086f2d8e1991938_w500.jpg',
    caption: 'My Cryptpunk!!'
  },
]

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}/>
      ))}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list-container">
      {blogsList.map(eachBlog => (
        <BlogItem blogItemDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList

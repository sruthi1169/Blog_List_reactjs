import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <li className="blog-list-item">
      <div className="title-and-time">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem

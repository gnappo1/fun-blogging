const Blog = ({blogObj: {id, title, body}}) => {
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Blog;
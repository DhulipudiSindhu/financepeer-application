import './index.css'

const PostList = props =>{
    const {postData} = props
    const {id,userId, title, body} = postData
    console.log(id,title,body)

    return(
        <div className="post-item-container">
            <div className="card-item">
                <h1 className = "user-id">UserId: {userId}</h1>
                <h1 className="post-id">PostId: {id}</h1>
                <div className="posts">
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default PostList
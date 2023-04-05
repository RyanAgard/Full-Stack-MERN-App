import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deletePost, getPost } from "../../services/postService"
import { getmoreArticle } from "../../services/moreArticle"

function Show({ user }) {

    const [article, setArticle] = useState({})
    

    const navigate = useNavigate()
    const params = useParams()
    const bodyRef = useRef()
    const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getmoreArticle(params.id)
            if (!data) data = {}
            setArticle(data)
        }
        loadData()
    }, [params.id])
    console.log(article)
    async function handleDeleteComment(comment) {
        await deleteCommentFromPost(comment._id, article._id)
        let updatedPost = { ...article }
        updatedPost.comment = updatedPost.comment.filter(c => c._id !== comment._id)
        setArticle(updatedPost)
        
    }

    async function handleDeletePost() {
        await deletePost(article._id)
        navigate('/posts')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let comment = {
            body: bodyRef.current.value,
            user
        }

        const NewComment = await createCommentForPost(comment, article._id)
        console.log(NewComment)
        if (NewComment) {
            let updatedPost = { ...article }
            updatedPost.comment.push(NewComment)
            setArticle(updatedPost)
            bodyRef.current.value = ''
            detailsRef.current.open = false
        }

    }

    return (
        <div>
            <div className="a-post">
                <h2>{article.title}</h2>
                <img src={article.img} alt="..."></img>
                <h5 style={{ opacity: '.3' }}>Posted by {article.user} on {new Date(article.createdAt).toLocaleDateString()} at {new Date(article.createdAt).toLocaleTimeString()}</h5>

                <div className='p-body'>{article.paragraph}</div><br /><br />


                {
                    article.comment?.length ?
                        <>
                            <div>Comments:</div>
                            <div>{article.comment.map((comment, i) =>
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.body}</div>
                                    {comment.user === user &&
                                        <>
                                            <button onClick={() => handleDeleteComment(comment)}>X</button>
                                            <Link to={`/posts/${article._id}/comments/${comment._id}`}><span>+</span></Link>
                                        </>
                                    }
                                </div>
                            )}</div>
                            <br /><br />
                        </>
                        : ''
                }
                {user &&
                    <details ref={detailsRef}>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form onSubmit={handleSubmit}>
                            <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                            <button>Comment</button>
                        </form>
                    </details>
                }

                <div className="buttons">
                    {article.user === user &&
                        <>
                            {console.log(article.user, user)}
                            <button onClick={handleDeletePost}>Delete</button>
                            <Link to={`/posts/${article._id}/edit`}>
                                <button>Edit</button>
                            </Link>
                        </>
                    }
                    <Link to='/posts'>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Show
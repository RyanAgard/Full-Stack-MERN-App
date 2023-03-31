import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"
// import axios from "axios"

function Index(user) {

    const [posts, setPosts] = useState([])
    const [article, setArticle] = useState()
    const [morearticle, setmoreArticle] = useState()

    const moreArticle = async () => {
        const morearticle = await fetch('/moreArticle')
        const result = await morearticle.json()
        setmoreArticle(result)
        console.log(result)
    }
    const getArticle = async () => {
        const article = await fetch('/article')
        const result = await article.json()
        setArticle(result)
        console.log(result)
    }

    useEffect(() => {
        getArticle()
        moreArticle()
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
        }
        loadData()
    }, [])

    return (
        <div>
            <div className="card-group ">
                {article?.map((articles, index) =>

                    <div className="card " key={index}>
                        <img src={articles.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="title">{articles.title}</h5>
                        </div>
                        <div>
                            <p className="text">{articles.paragraph}</p>
                        </div>
                    </div>

                )}
            </div>
            <div className="container">
                {morearticle?.map((morearticles, index) =>
                    <div className="flex-container" key={index}>
                        <div>
                            <img src={morearticles.img} className="card1" alt="..." />
                        </div>
                        <div>
                            <h5 className="title">{morearticles.title}</h5>
                        </div>
                        {/* <div>
                            <p className="text">{morearticles.paragraph}</p>
                        </div> */}
                    </div>
                )}
                {/* <h1>Index View</h1> */}
                <div id="posts">

                    {posts?.map((post, index) =>
                        <Link to={`/posts/${post._id}`} key={index}>
                            <div className="a-post">
                                {post.subject}
                            </div>
                        </Link>
                    )}

                    {user &&
                        <Link to="/posts/new">
                            <button>NEW POST</button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Index
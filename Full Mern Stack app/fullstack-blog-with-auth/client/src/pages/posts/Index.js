import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"
// import axios from "axios"

function Index({ user }) {

    const [posts, setPosts] = useState([])
    const[article,setArticle]=useState()

   const getArticle = async ()=>{
    const article = await fetch('/article')
    const result =await article.json()
    setArticle(result)
    console.log(result)
   }

    useEffect(() => {
        getArticle()
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
        }
        loadData()
    }, [])
  
    return (
        <div>
        <div className="card-group">
        <div>{article?.map((articles,index)=>
       
             
                <div className="card">
                    <img src= {articles.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="title">{articles.title}</h5>
                        <p className="text">{articles.paragraph}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
              )}  
      </div> 
  </div>
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
                )
}

                export default Index
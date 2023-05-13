import { useEffect, useState,} from "react"
import { Link } from "react-router-dom"
// import { getAllPosts } from "../../services/postService"
import { getAllmoreArticle } from "../../services/moreArticle";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { customAxios } from '../../services/api'
// import axios from "axios"

function Index({user}) {
    const [posts, setPosts] = useState([])
    const [article, setArticle] = useState()
    const [morearticles, setmoreArticle] = useState()
  
    

    const moreArticle = async () => {
        const axios = customAxios()
        const response = await axios.get('/moreArticle')
        console.log(response)
        // const morearticle = await fetch('/moreArticle')
        setmoreArticle(response.data)
        console.log(response.data)
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
            const data = await getAllmoreArticle()
            setPosts(data)
        }
        loadData()
    }, [])

  console.log(user)
    return (


        <div className="frontpage">
            <Carousel>
            {article?.map((articles, index) =>
                <Carousel.Item interval={5000} key={index}>
                    <img
                        className="d-block w-100"
                        src={articles.img}
                        alt="..."
                    />
                    <Carousel.Caption>
                        <h3>{articles.title}</h3>
                        {/* <p >{articles.paragraph}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                )}
            </Carousel>
            {/* <div className="card-group ">
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
            </div> */}
            <div className="moreArticles">
                {/* {morearticle?.map((morearticles, index) => */}
                <Row xs={1} md={3} className="g-4" >
                    {morearticles?.map((morearticle, idx) => (
                        < Link className="A-link" to={`/posts/${morearticle._id}`}>
                            <Card key={idx} >
                 
                                <Card.Img variant="top" src={morearticle.img}  />
                                <Card.Body>
                                    <Card.Title>{morearticle.title}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </Row>
                {/* )} */}

                {/* { <div className="container">
               
                    <div className="flex-container" key={index}>
                        <div>
                            <img src={morearticles.img} className="card1" alt="..." />
                        </div>
                        <div>
                            <h5 className="title">{morearticles.title}</h5>
                        </div>
                        { <div>
                            <p className="text">{morearticles.paragraph}</p>
                        </div> }
                    </div> 
                 */}
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
                            <button>New Article</button>
                        </Link>
                    }

                </div>
            </div>
        </div >

    )
}

export default Index
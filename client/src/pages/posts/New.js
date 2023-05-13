import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/moreArticle";

function New({user}) {

    let subjectRef = useRef()
    let bodyRef = useRef()
    let imgRef =useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            title: subjectRef.current.value,
            paragraph: bodyRef.current.value,
            img: imgRef.current.value,

            user

        }
        console.log(post)
        await createPost(post)
        navigate('/posts')
    }

    return ( 
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Subject:</label><br />
                <input type="text" id="nme" ref={subjectRef} /><br /><br />

                <label htmlFor="clr">Body:</label><br />
                <textarea id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br />

                <label htmlFor="clr">img:</label><br />
               <input ref={imgRef}></input>
                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;
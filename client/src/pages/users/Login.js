import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userLogin } from '../../services/userService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let emptyForm = {
    username: '',
    password: '',
    email: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        // console.log(e.target.name, e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
 console.log(form)
        const token = await userLogin(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()
        setUser(user)

        navigate('/posts')
     }

    return (
        <div className='user-auth'>
            <h1>Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control  value={form.username} onChange={handleChange} name="username"type="text" placeholder="GamerTag" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                   
                    <Form.Control value={form.password} onChange={handleChange} name="password"  type="password" placeholder="Password" />
                    
                </Form.Group>
                < Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>

    );

}

export default Login;
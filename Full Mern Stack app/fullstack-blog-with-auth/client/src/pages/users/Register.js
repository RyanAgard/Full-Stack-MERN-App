import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userRegister(form)

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
        <div className="user-auth">
            <h1>Register</h1>
       
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control  value={form.username} onChange={handleChange} name="username"type="text" placeholder="GamerTag" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                   
                    <Form.Control value={form.email} onChange={handleChange} name="Email" id="Email" type="email"  placeholder="Email" />
                </Form.Group>

                <Form.Control value={form.password} onChange={handleChange} name="password" id="password" type="password" placeholder="Password" />
                    <Button variant="primary" type="submit">Submit</Button>
                
            </Form>
            
        </div>

     );
}

export default Register;
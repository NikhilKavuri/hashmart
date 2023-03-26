import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import { LoginIcon } from '@heroicons/react/outline'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 450px;
  height: 400px;
  margin: auto;
  border: 2px solid #fccf03;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #fccf03;
  color: black;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const H1 = styled.h1`
font-size: 50px;
margin-top: 30px;
padding: 0px 60px;
justify-content: center;
`

const StyledForm = styled.form`
`

const User = styled.input`
   margin-top: 20px;
   width: 100%;
   height: 35px;
   border-radius: 10px;
   padding:10px;
   color:black;
`
const Div = styled.div`
  margin-top: 15px;
  span{
    display: flex;
    flex-direction: row;
  }
  p{
    color: #fccf03;
    padding-left: 5px;
  }
`

const Signin = () => {

  const { currentUser, login, setCurrentUser, setIsSubmitting, loggedIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error!")
    }
    setIsSubmitting(false)
  }

  const navigate = useNavigate()

  useEffect(() => {
    loggedIn && navigate('/hashmart')
  }, [loggedIn])



  return (
    <Container>
      <div>
        <div>
          <H1>Login</H1>
        </div>
        <StyledForm
          autoComplete="off"
          onSubmit={handleSignIn}
        >
          <div>
            <div>
              <User
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ref={emailRef}
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <User
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div>
              <Div>
                <span>
                  Don't have an account? Sign up{" "}
                  <Link to="/signup">
                    
                    <p>{" "} here</p>
                  </Link>
                </span>
              </Div>
            </div>
            <div>
              <Button type="submit">
                <LoginIcon aria1-hidden="true"  className="h-6 w-6" />
                Login
              </Button>
            </div>
          </div>
        </StyledForm>
      </div>
    </Container>
  )
}

export default Signin
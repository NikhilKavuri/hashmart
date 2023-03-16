import { IdentificationIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import validations from './validations'

const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setErrors(validations(currentUser, users)) 
    setIsSubmitting(true)
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <div >
      <div >
        <div>
          <h2 >Sign Up</h2>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
        >
          <div >
            <div>
            {errors.firstName && <span>{errors.firstName}</span>}
              <label >First Name</label>
              <input
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
              />
              
            </div>

            <div>
            {errors.lastName && <span>{errors.lastName}</span>}
              <label>Last Name</label>
              <input
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
              />
              
            </div>
            <div>
            {errors.email && <span >{errors.email}</span>}
              <label>Email</label>
              <input
                type="email"
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"
              />
              
            </div>
            <div>
            {errors.password && <span >{errors.password}</span>}
              <label >Password</label>
              <input
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div>
            {errors.passwordConfirm && <span>{errors.passwordConfirm}</span>}
              <label >Password Confirm</label>
              <input
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
              />
              
            </div>
            <div >
              <div >
                <span>
                  Already have an account? Login{" "}
                  <Link to="/signin" >
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div >
              <button type="submit" >
                <IdentificationIcon
                  aria1-hidden="true"
                />
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

import { Button, Card, Input, InputGroup, InputGroupText } from 'reactstrap'

import { FaUserAlt } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import styles from './auth.module.css'
import { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  function loginInputsChangeHandler(event) {
    const value = event.target.value
    setLoginData({
      ...loginData,
      [event.target.name]: value,
    })
  }
  console.log(loginData)
  return (
    <div className={styles.login_page__container}>
      <div className={styles.form_section__container}>
        <div className={styles.compony_log__container}>
          <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt='logo' />
        </div>
        <p>فرم ورود به ایرانیان پوشش</p>
        <InputGroup className='w-25 mt-4'>
          <Input
            value={loginData.username}
            name='username'
            onChange={loginInputsChangeHandler}
            placeholder='نام کاربری خود را وارد کنید'
          />
          <InputGroupText>
            <FaUserAlt size={15} color='#307aad' />
          </InputGroupText>
        </InputGroup>
        <InputGroup className='w-25 mt-3'>
          <Input
            value={loginData.password}
            name='password'
            onChange={loginInputsChangeHandler}
            placeholder='گذرواژه خود را وارد کنید'
          />
          <InputGroupText>
            <HiLockClosed color='#307aad' />
          </InputGroupText>
        </InputGroup>
        <Button className={`${styles.login_button} mt-3`} color='primary'>
          ورود به سامانه
        </Button>
      </div>
    </div>
  )
}
export default Login

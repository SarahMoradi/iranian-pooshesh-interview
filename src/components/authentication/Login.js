import { Button, Card, Input, InputGroup, InputGroupText } from 'reactstrap'
import { useEffect, useState } from 'react'

import { FaUserAlt } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import { LoginApi } from '../../api/authentication/loginApi'
import styles from './auth.module.css'
import { toast } from 'react-toastify'

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

  const ResponseHandler = (res) => {
    if (res.status === 200) {
      toast.success('با موفقیت وارد شدید', {
        position: toast.POSITION.TOP_LEFT,
      })
      localStorage.setItem('access', res.data?.access)
      localStorage.setItem('refresh', res.data?.refresh)
    }
  }
  const submitButtonHandler = () => {
    LoginApi(loginData)
      .then((res) => ResponseHandler(res))
      .catch((err) =>
        toast.error('اطلاعات وارد شده معتبر نمی‌باشد', {
          position: toast.POSITION.TOP_LEFT,
        })
      )
  }
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
            type='password'
            value={loginData.password}
            name='password'
            onChange={loginInputsChangeHandler}
            placeholder='گذرواژه خود را وارد کنید'
          />
          <InputGroupText>
            <HiLockClosed color='#307aad' />
          </InputGroupText>
        </InputGroup>
        <Button
          onClick={submitButtonHandler}
          className={`${styles.login_button} mt-3`}
          color='primary'
        >
          ورود به سامانه
        </Button>
      </div>
    </div>
  )
}
export default Login

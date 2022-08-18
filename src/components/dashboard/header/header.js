import { BiExit } from 'react-icons/bi'
import { RiFileUserFill } from 'react-icons/ri'
import { headerNavItems } from './headerItems'
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  let navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState()
  const clickedMenuItemHandler = (id) => {
    setSelectedItem(id)
  }
  return (
    <div className={styles.header__container}>
      <div className='d-flex justify-content-between w-100'>
        <div className={`${styles.right_side__container}`}>
          <div className={styles.header_image__container}>
            <img
              src={process.env.PUBLIC_URL + 'images/logo.png'}
              alt='logo'
              width={80}
            />
          </div>
          <ul className='d-flex'>
            {headerNavItems.map((item) => {
              return (
                <li
                  onClick={() => clickedMenuItemHandler(item.id)}
                  key={item.id}
                  className={`${
                    selectedItem === item.id
                      ? styles.selected_menu_icon
                      : styles.header_menu_items
                  }  d-flex align-items-center`}
                >
                  <span
                    className={`${
                      selectedItem === item.id && styles.selected_icon
                    }`}
                  >
                    {item.icons}
                  </span>
                  <span
                    className={`${
                      selectedItem === item.id && styles.selected_menu_item
                    } px-2`}
                  >
                    {item.name}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={`${styles.left_side__container} d-flex`}>
          <div
            className='d-flex align-items-center mx-3'
            onClick={() => navigate('/visit-form')}
          >
            <RiFileUserFill size={17} color='#A7ACBB' />
            <p className='p-0 m-0 px-2' style={{ color: ' #7C7E81' }}>
              فرم بازدید
            </p>
          </div>
          <div
            className='d-flex align-items-center'
            onClick={() => navigate('/login')}
          >
            <BiExit size={17} color='#A7ACBB' />
            <p className='p-0 m-0 px-2' style={{ color: ' #7C7E81' }}>
              ورود
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

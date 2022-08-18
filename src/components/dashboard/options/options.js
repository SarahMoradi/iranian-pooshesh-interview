import { Card, Col, Row } from 'reactstrap'

import { optionItems } from './optionItems'
import styles from './options.module.css'

const Options = () => {
  return (
    <Row className={styles.option_list__container}>
      <Col sm='11'>
        <Card className={`${styles.options_card__container} mt-5`}>
          <Row>
            {optionItems.map((option) => {
              return (
                <Col sm='6' md='4' lg='3'>
                  <div className='d-flex flex-column align-items-center justify-content-center p-4'>
                    <div
                      className={`${
                        option.defaultTheme === 'lightPink'
                          ? styles.light_pink__container
                          : option.defaultTheme === 'lightPurple'
                          ? styles.light_purple__container
                          : option.defaultTheme === 'lightGreen'
                          ? styles.light_green__container
                          : styles.light_orange__container
                      } d-flex justify-content-center`}
                    >
                      <img src={option.icon} alt='logo' width={25} />
                    </div>
                    <div className='mt-3'>
                      <p>{option.title}</p>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
export default Options

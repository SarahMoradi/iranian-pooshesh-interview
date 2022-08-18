import { Card, Col, Row } from 'reactstrap'

import { GrDown } from 'react-icons/gr'
import { optionItems } from '../../options/optionItems'
import styles from '../statistics.module.css'

const FolderStatistics = () => {
  return (
    <Col sm='11' md='11' lg='4'>
      <Card className={styles.folder_statistics__container}>
        <Row>
          <Col sm='12'>
            <div className='d-flex justify-content-between px-3 pt-3'>
              <p className={styles.title_configs}>تعداد پرونده ها</p>
              <div className='d-flex'>
                <p>مشاهده بصورت:</p>
                <p className='px-2'>
                  ماهیانه
                  <GrDown className='mx-1' />
                </p>
              </div>
            </div>
            <div
              className={`${styles.date_container} d-flex justify-content-end`}
            >
              <p> از ۱۴۰۰/۱۱/۱۹ تا ۱۴۰۰/۱۲/۱۸</p>
            </div>

            <div className={`${styles.folder_option__container} my-4 px-3`}>
              {optionItems.map((option, index) => {
                return (
                  <div className='d-flex align-items-center mt-3' key={index}>
                    <img src={option.icon} alt='logo' width={23} />
                    <p className={`${styles.title_configs} px-4 m-0 p-0`}>
                      336
                    </p>
                    <p className={`${styles.title_text_configs} m-0 p-0`}>
                      {`پرونده  ${option.title}`}
                    </p>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}
export default FolderStatistics

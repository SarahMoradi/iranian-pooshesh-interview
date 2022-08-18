import { Card, Col, Row } from 'reactstrap'

import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import { GrDown } from 'react-icons/gr'
import { Line } from 'react-chartjs-2'
import styles from '../statistics.module.css'

const ChartStatistics = () => {
  Chart.register(CategoryScale)
  let days = Array.from({ length: 30 }, (key, i) => i + 1)
  let values = Array.from({ length: 30 }, (key, i) =>
    Math.floor(Math.random() * 300)
  )
  const data = {
    labels: days,
    datasets: [
      {
        data: values,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }
  const options = {
    cornerRadius: 30,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <Col sm='11' md='11' lg='7'>
      <Card className={styles.chart_statistics__container}>
        <Row>
          <Col sm='12'>
            <div className='d-flex justify-content-between px-3 pt-3'>
              <p className={styles.title_configs}>نمودار کل پرونده ها</p>
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

            <div className={`${styles.chart_container} px-5 mt-3 mb-4`}>
              <Line data={data} options={options} />
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}
export default ChartStatistics

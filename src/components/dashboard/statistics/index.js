import { Card, Col, Row } from 'reactstrap'

import ChartStatistics from './chart-statistics/ChartStatistics'
import FolderStatistics from './folders-statistics/FolderStatistics'

const Statistics = () => {
  return (
    <Row className='w-100 d-flex justify-content-center my-4'>
      <ChartStatistics />
      <FolderStatistics />
    </Row>
  )
}
export default Statistics

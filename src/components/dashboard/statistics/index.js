import ChartStatistics from './chart-statistics/ChartStatistics'
import FolderStatistics from './folders-statistics/FolderStatistics'
import { Row } from 'reactstrap'

const Statistics = () => {
  return (
    <Row className='w-100 d-flex justify-content-center my-4'>
      {/* fixed path name */}
      <ChartStatistics />
      <FolderStatistics />
    </Row>
  )
}
export default Statistics

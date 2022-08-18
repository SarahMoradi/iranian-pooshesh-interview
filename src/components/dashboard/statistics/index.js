import ChartStatistics from './chart-statistics/chartStatistics'
import FolderStatistics from './folders-statistics/folderStatistics'
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

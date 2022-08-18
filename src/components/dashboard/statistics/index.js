import { Card, Col, Row } from 'reactstrap'

import FolderStatistics from './folders-statistics/FolderStatistics'

const Statistics = () => {
  return (
    <Row className='w-100 d-flex justify-content-center mt-4'>
      <Col sm='11' md='11' lg='7'>
        <Card>
          <Row>
            <Col sm='12'>test</Col>
          </Row>
        </Card>
      </Col>
      <FolderStatistics />
    </Row>
  )
}
export default Statistics

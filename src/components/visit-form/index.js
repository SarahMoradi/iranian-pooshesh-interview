import {
  Button,
  Card,
  Col,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap'
import { formApi, getCompanyDetails } from '../../api/visit-form/formApi'
import { useEffect, useState } from 'react'

import { IoArrowBackOutline } from 'react-icons/io5'
import styles from './index.module.css'
import { toast } from 'react-toastify'
import { tr } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

const VisitForm = () => {
  let navigate = useNavigate()
  const [data, setData] = useState()
  const branch = data?.data?.branch?.id
  const adjuster = data?.data?.adjuster?.id

  const [inputValues, setInputValues] = useState({ is_active: true, file: 59 })
  const infoChangeInputsHandler = (event) => {
    const value = event.target.value
    setInputValues({
      ...inputValues,
      [event.target.name]: value,
    })
  }
  useEffect(() => {
    getCompanyDetails()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const submitFormHandler = () => {
    formApi(inputValues)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success('اطلاعات با موفقیت ذخیره گردید', {
            position: toast.POSITION.TOP_LEFT,
          })
        }
      })
      .catch((err) =>
        toast.error('ذخیره اطلاعات با خطا مواجه شد', {
          position: toast.POSITION.TOP_LEFT,
        })
      )
  }

  return (
    <div>
      <div
        className={`${styles.back_button} px-5 pt-5 d-flex align-items-center`}
      >
        <IoArrowBackOutline className='mx-2' />
        <p className='p-0 m-0' onClick={() => navigate('/')}>
          برگشت
        </p>
      </div>
      <div className={styles.visit_form__container}>
        <h5 className='px-5 pt-5 mx-4 mb-3'>فرم بازدید</h5>
        <Row className='d-flex justify-content-center'>
          <Col sm='11'>
            <Card className='p-5'>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for='branch'>شعبه ایرانیان پوشش*</Label>
                    <Input
                      className={`${
                        inputValues.branch === '' && styles.invalid_input
                      }`}
                      required
                      id='branch'
                      name='branch'
                      type='select'
                      bsSize='sm'
                      value={inputValues.branch}
                      onChange={(event) => infoChangeInputsHandler(event)}
                    >
                      <option className='p-2' value=''>
                        انتخاب کنید
                      </option>
                      <option className='p-2' value={branch}>
                        {branch}
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm='12' md='6' lg='4'>
                  <FormGroup>
                    <Label for='adjuster'>کارشناس*</Label>
                    <Input
                      className={`${
                        inputValues.adjuster === '' && styles.invalid_input
                      }`}
                      required
                      id='adjuster'
                      name='adjuster'
                      type='select'
                      bsSize='sm'
                      onChange={(event) => infoChangeInputsHandler(event)}
                    >
                      <option className='p-2' value=''>
                        انتخاب کنید
                      </option>
                      <option className='p-2'>{adjuster}</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm='12' md='6' lg='4'>
                  <Label
                    style={{ direction: 'rtl', textAlign: 'center' }}
                    for='amount_damages_assessed'
                  >
                    مبلغ خسارت ارزیابی شده*
                  </Label>
                  <InputGroup size='sm' style={{ direction: 'ltr' }}>
                    <InputGroupText>ریال </InputGroupText>
                    <Input
                      className={`${
                        inputValues.amount_damages_assessed < 10000000 &&
                        styles.invalid_input
                      }`}
                      required
                      type='number'
                      min={10000000}
                      pattern='[0-9]'
                      id='amount_damages_assessed'
                      name='amount_damages_assessed'
                      onChange={(event) => infoChangeInputsHandler(event)}
                    />
                  </InputGroup>
                </Col>
                <Col sm='12' md='6' lg='4'>
                  <FormGroup>
                    <Label for='visit_date'>تاریخ*</Label>
                    <Input
                      className={`${
                        inputValues.visit_date === '' && styles.invalid_input
                      }`}
                      required
                      style={{ direction: 'rtl' }}
                      id='visit_date'
                      name='visit_date'
                      type='date'
                      onChange={(event) => infoChangeInputsHandler(event)}
                    />
                  </FormGroup>
                </Col>
                <Col sm='12' md='6' lg='4'>
                  <FormGroup>
                    <Label for='visit_time'>ساعت*</Label>
                    <Input
                      className={`${
                        inputValues.visit_date === '' && styles.invalid_input
                      }`}
                      required
                      id='visit_time'
                      name='visit_time'
                      type='time'
                      onChange={(event) => infoChangeInputsHandler(event)}
                    />
                  </FormGroup>
                </Col>
                <Col sm='12' md='6' lg='4'>
                  <Label
                    style={{ direction: 'rtl', textAlign: 'center' }}
                    for='covered_distance'
                  >
                    مسافت رفت و برگشت طی شده*
                  </Label>
                  <InputGroup size='sm' style={{ direction: 'ltr' }}>
                    <InputGroupText>km</InputGroupText>
                    <Input
                      className={`${
                        inputValues.covered_distance > 30 &&
                        styles.invalid_input
                      }`}
                      required
                      max={30}
                      type='number'
                      pattern='[0-9]'
                      id='covered_distance'
                      name='covered_distance'
                      onChange={(event) => infoChangeInputsHandler(event)}
                    />
                  </InputGroup>
                </Col>
                <Col sm='12' md='6' lg='8'>
                  <FormGroup>
                    <Label for='description'>توضیحات*</Label>
                    <Input
                      className={`${
                        inputValues.description === '' && styles.invalid_input
                      }`}
                      required
                      id='description'
                      name='description'
                      type='textarea'
                      onChange={(event) => infoChangeInputsHandler(event)}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Card>
            <Row className='d-flex justify-content-end mt-3'>
              <Col sm='2'>
                <Button
                  className={`${styles.submit_button} w-100`}
                  onClick={submitFormHandler}
                >
                  {' '}
                  ذخیره
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default VisitForm

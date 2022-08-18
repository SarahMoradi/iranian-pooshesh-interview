import AuthAxios from '../custom/AuthAxios'

const formApi = (data) => AuthAxios.post('portal/adjuster/59/visit/', data)
const getCompanyDetails = () => AuthAxios('portal/adjuster/59/file_detail/?state=in_progress')

export { formApi, getCompanyDetails }

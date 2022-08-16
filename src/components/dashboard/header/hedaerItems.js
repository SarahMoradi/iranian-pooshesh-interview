import { FaClipboardList } from 'react-icons/fa'
import { MdCreateNewFolder } from 'react-icons/md'
import { RiFileList3Fill } from 'react-icons/ri'
import { TiHome } from 'react-icons/ti'

export const headerNavItems = [
  {
    id: 1,
    name: 'صفحه اصلی',
    icons: <TiHome size={18} color='#A7ACBB' />,
  },
  {
    id: 2,
    name: 'ایجاد پرونده',
    icons: <MdCreateNewFolder size={17} color='#A7ACBB' />,
  },
  {
    id: 3,
    name: 'لیست پرونده ها',
    icons: <FaClipboardList size={17} color='#A7ACBB' />,
  },
  {
    id: 4,
    name: 'گزارشگیری',
    icons: <RiFileList3Fill size={17} color='#A7ACBB' />,
  },
]

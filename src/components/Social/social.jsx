import {ImFacebook, ImInstagram, ImTwitter} from 'react-icons/im'

const social = () => {
  return (
    <div className="hidden xl:flex ml-24 xl:items-center">
       <ul className='flex gap-x-4 text-white'>
       <li><a href="www.x.com" target='_blank'><ImTwitter/></a></li>
       <li><a href="https://www.instagram.com/christinademerzi/"><ImInstagram/></a></li>
        <li><a href="www.facebook.com" target='_blank'><ImFacebook/></a></li>
       </ul>
      </div>
  )
}

export default social
import React from 'react'
import './home.css';
import Header from '../header/Header';
import HomePic from '../../assets/home.png'
import WhyUS from '../whyus/WhyUS';
function Home() {
  return (
    <>
      <Header />
      <div className='container cont-margin'>
        <div className='row row-top'>
          <div className='col-sm-6 custom_colmn'>
            <h3 className='font-fa h3_custom'>Welcome to Secure-U</h3>
            <p className='font-fa custom_p'>Say goodbye to the hassle of remembering numerous passwords. Securely store all your passwords in one place. Your data is encrypted and accessible only to you, ensuring the utmost security for your sensitive information</p>
            <h4 className='font-fa text-primary'>Signup Today</h4>
            {/* <ul class="list-group list-group-flush">
              <li className="list-group-item text-success font-fa">Easy remember password</li>
              <li className="list-group-item text-success font-fa">Multi factor authenticate</li>
              <li className="list-group-item text-success font-fa">auto-fill</li>
              <li className="list-group-item text-success font-fa">security</li>
            </ul> */}
          </div>
          <div className='col-sm-6 text-end'>
            <img className='img-fluid' alt='home' src={HomePic} />
          </div>
        </div>
      </div>
      <WhyUS />
    </>
  )
}

export default Home
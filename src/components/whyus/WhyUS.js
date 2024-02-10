import React from 'react'
import'../whyus/whyus.css'
import genration from '../../assets/genration.png'
import secure from '../../assets/secure.png'
import notes from '../../assets/notes.svg'
import database from '../../assets/database.png'
function WhyUS() {
  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-12 text-center'>
          <h1 className='font-fa  text-primary'>Why we are</h1>
          <p className='font-fa custom_p'> we prioritize the security and convenience of our users by offering a comprehensive set of features. Users can generate robust and secure passwords effortlessly, ensuring that their online accounts remain protected against potential threats. The ability to save multiple passwords within the application provides a centralized and secure repository, streamlining the management of various login credentials for different platforms</p>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-sm-5 text-end'>
          <img className='img-fluid img_margin' alt='secure' src={secure} />
        </div>
        <div className='col-sm-7 Pstorage_margin'>
          <h2 className='font-fa text-primary mt-5'>Password Storage</h2>
          <p className='font-fa pass_detail'>The application allows users to store multiple passwords securely. This feature eliminates the need for users to remember numerous complex passwords, reducing the likelihood of weak or repeated passwords that could compromise their accounts To further enhance security, we incorporate the use of unique salt values for each password before hashing. Salting involves adding a random string of characters to the user's password before encryption, resulting in distinct and complex hashes even if users have the same password. This measure fortifies the defense against common attacks, such as rainbow table attacks, which aim to exploit patterns in hashed data</p>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-sm-7 Pstorage_margin'>
          <h2 className='font-fa  text-primary mt-4'>Password Generation</h2>
          <p className='font-fa pass_detail'>The Password Generation functionality employs advanced algorithms to create complex and randomized passwords, ensuring that they meet the highest standards of security. Users can customize the generated passwords based on their specific requirements, such as length, inclusion of special characters, numbers, and uppercase or lowercase letters. This customization allows users to align the generated passwords with the unique password policies of different online platforms</p>
        </div>
        <div className='col-sm-5'>
          <img className='img-fluid mt-3' alt='genration' src={genration} />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-sm-5'>
          <img className='img-fluid ' alt='notes' src={notes} />
        </div>
        <div className='col-sm-7 Pstorage_margin'>
          <h2 className='font-fa text-primary mt-5'>Notes Creation and Storage</h2>
          <p className='font-fa pass_detail'>The Note Creation and Storage feature is a testament to our commitment to providing users with a comprehensive and secure solution for managing their digital information. Whether it's important reminders, creative ideas, or essential details, our web application ensures that users can capture, organize, and access their notes conveniently while prioritizing the utmost security and privacy, Furthermore, our application offers seamless synchronization across multiple devices, allowing users to access their notes from anywhere with an internet connection. This synchronization is carried out securely to maintain the integrity of the data during transit.</p>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-sm-7 Pstorage_margin'>
          <h2 className='font-fa  text-primary'>Database Security</h2>
          <p className='font-fa pass_detail'>All passwords stored in the database undergo a process of encryption using industry-standard cryptographic algorithms. This ensures that even in the unlikely event of unauthorized access to the database, the actual password values remain unintelligible and secure. The encryption methodology employed is designed to withstand common forms of attacks, providing an additional layer of defense against potential threats.In summary, our Database Security protocols are designed to provide users with the utmost confidence in the protection of their sensitive information. By employing advanced encryption, access controls, regular audits, and proactive threat detection, we are committed to maintaining a secure environment for storing and managing user passwords within our web application</p>
        </div>
        <div className='col-sm-5'>
          <img className='img-fluid' alt='genration' src={database} />
        </div>
      </div>
    </div>
    </>
  )
}

export default WhyUS
import React from 'react'
import TCV from '../../assets/tcv.pdf'
import FCV from '../../assets/fcv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={FCV} download className='btn'>Full CV</a>
        <a href={TCV} download className='btn'>Tech CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
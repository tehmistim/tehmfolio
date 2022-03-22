import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Passions</h5>
      <h2>Current Occupations</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>POLISHED by:Full Attention to Detail</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Established in 2012</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2013/14 - LocalsLoveUs - Top Automotive Detailing Company Award Recipient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2014/15 - LocalsLoveUs - Top Automotive Detailing Company Award Recipient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2015/16 - LocalsLoveUs - Top Automotive Detailing Company Award Recipient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2017 - LocalsLoveUs - Top Automotive Detailing Company Award Recipient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2018 - LocalsLoveUs - Top Automotive Detailing Company Award Recipient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2019 - Times of Acadiana - Best Automotive Detailing Company</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2020 - Times of Acadiana - Best Automotive Detailing Company</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2021 - Times of Acadiana - Best Automotive Detailing Company</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2021 - New World Report - Best Elite Automotive Detailing Company - South Central USA</p>
              <p></p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Louisiana Husky Rescue</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Founded in 2019</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>35 Huskies Rescued - 35 Huskies Adopted Out - 2019</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>57 Huskies Rescued - 51 Huskies Adopted Out -2020</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>29 Huskies Rescued - 8 Huskies Adopted Out - 2021</p>
              <p></p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2012 - Created/Published Full Attention to Detail - HTML Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2017 - Created/Published Shine Pro London - HTML Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2018 - Created/Published IGL Eclipse Branding - Corporate Logo Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2019 - Created/Published Louisiana Husky Rescue - HTML5/JavaScript Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2021 (in development) - Created petOffenders - FullStack JavaScript/React Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2022 (in development) - Created/Unpublished EAS Motorsports - HTML5 Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2022 Scrum Master (in development) - Legend Tell - FullStack PHP/Laravel Web Development</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
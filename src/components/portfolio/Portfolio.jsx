import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'BrightPaths Bootcamp Mid-term Capstone',
    github: 'https://github.com/tehmistim/notesapp',
    demo: 'https://youtu.be/1ALhbqAlPNc'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BrightPaths Bootcamp Final Capstone',
    github: 'https://github.com/tehmistim/thePlayground',
    demo: 'https://youtu.be/ytkkagjDN78'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Enzo Restaurant Website Figma Designs',
    figma: 'https://www.figma.com/file/qhgKkxnAkTOm5zDbP557xi/Enzo',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Louisiana Husky Rescue 2022 Website',
    github: 'https://github.com/lahr337/2022website',
    demo: 'https://www.louisianahuskyrescue.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'COVID-19 TRACKER - tracking covid worldwide',
    github: 'https://github.com/tehmistim/COVID-TRACKER',
    demo: 'https://covid-19-tracker-47fc9.web.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'petOffenders Reporting Animal abuse nationwide',
    github: 'https://www.figma.com/file/mRtMUZVILx8KxStAZLXemC/petoffenders-main',
    // demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github/Figma</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Site/Video</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
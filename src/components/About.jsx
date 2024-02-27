import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
                     flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a skilled software developer, I have extensive experience in web development 
        with a focus on technologies such as HTML5, CSS, JavaScript, React, and Web API.
        <br/><br/>

        I am also experienced with cloud computing using AWS, and have familiarity with 
        version control systems such as Git. <br/><br/>

        My technical expertise extends to programming languages like Java, Python, 
        and SQL, allowing me to work on a variety of projects across multiple platforms.
        I am particularly skilled in React and have a passion for delivering business 
        solutions by designing and developing robust, secure applications. In addition 
        to my technical expertise, I am a highly motivated and detail-oriented individual 
        with a commitment to staying up-to-date with the latest technologies. <br/><br/>

        My experience in Agile methodologies has allowed me to be a great collaborator, 
        and I am able to work well in a team environment, delivering high-quality work 
        on time. Overall, my expertise in web development, cloud, programming languages, 
        and Agile methodologies, along with my proficiency in React, make me a valuable 
        asset to any team I work with.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
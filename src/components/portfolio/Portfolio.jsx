import './portfolio.css';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const items = [
      {
            id: 1,
            title: 'Booking Care',
            image: '/p1.jpg',
            description: 'Make an appointment based on your specialty, medical facility and receive follow-up and treatment forms conveniently and quickly.',
            link: 'https://github.com/phenguin1511/BookingCare.git',
            engineer: {
                  react: '/react.webp',
                  node: '/node.png',
                  express: '/expressjs.png',
                  mysql: '/mysql.png',
                  html: '/html.png',
                  css: '/css.png',
                  javascript: '/javascript.png',
                  bootstrap: '/bootstrap.png',

            }
      },
      {
            id: 2,
            title: 'Shopee Clone Client',
            image: '/p2.jpg',
            description: 'A clone of the Shopee app, a platform for buying and selling products online.',
            link: 'https://github.com/phenguin1511/Shopee-Clone.git',
            engineer: {

                  react: '/react.webp',
                  html: '/html.png',
                  css: '/css.png',
                  typescript: '/typescript.png',
                  tailwind: '/tailwind.png',

            }
      },
      {
            id: 3,
            title: 'Twitter Clone Server API',
            image: '/p3.jpg',
            description: 'A clone of the Twitter app, a platform for social media.',
            link: 'https://github.com/phenguin1511/Twitter-Clone.git',
            engineer: {

                  typescript: '/typescript.png',
                  node: '/node.png',
                  express: '/expressjs.png',
                  mongodb: '/mongodb.png',
                  postman: '/postman.png',

            }
      },
      {
            id: 4,
            title: 'Portfolio Website',
            image: '/p4.jpg',
            description: 'A portfolio website for a software engineer.',
            link: 'https://github.com/phenguin1511/Portfolio.git',
            engineer: {

                  react: '/react.webp',
                  html: '/html.png',
                  css: '/css.png',
                  typescript: '/typescript.png',
                  three: '/three.png',
                  motion: '/motion.png',

            }
      },
      {
            id: 5,
            title: 'E-commerce Website',
            image: '/p5.jpg',
            description: 'A e-commerce website for a shop.',
            link: 'https://github.com/phenguin1511/E-commerce-Website.git',
            engineer: {
                  dotnet: '/dotnet.png',
                  sqlserver: '/sqlserver.png',
                  html: '/html.png',
                  css: '/css.png',
                  javascript: '/javascript.png',
                  bootstrap: '/bootstrap.png',
            }
      }
]

const imgVariants = {
      initial: {
            x: -100,
            y: 50,
            scale: 0.8,
            opacity: 0,
            rotate: -10,
      },
      animate: {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
            },
      },
};

const textVariants = {
      initial: {
            x: 100,
            y: 50,
            opacity: 0,

      },
      animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                  staggerChildren: 0.2,

            },
      },
};

const ListItem = ({ item }) => {
      const ref = useRef();
      const isInView = useInView(ref, { margin: '-100px' });
      return (
            <div className="pItem" ref={ref}>
                  <motion.div className="pImg" variants={imgVariants} initial="initial" animate={isInView ? 'animate' : 'initial'}>
                        <img src={item.image} alt={item.title} />
                  </motion.div>
                  <motion.div className="pText" variants={textVariants} initial="initial" animate={isInView ? 'animate' : 'initial'}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>

                        <div className="pEngineer">
                              {Object.keys(item.engineer).map(key => (

                                    <div className="pEngineerItem" key={key}>
                                          <img src={item.engineer[key]} alt={key} />
                                    </div>
                              ))}
                        </div>

                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <button>View Project</button>
                        </a>



                  </motion.div>
            </div>
      )
}

const Portfolio = () => {
      const [containerDistance, setContainerDistance] = useState(0);

      const ref = useRef(null);
      useEffect(() => {
            if (ref.current) {
                  const react = ref.current.getBoundingClientRect();
                  setContainerDistance(react.left);
            }
      }, []);

      const { scrollYProgress } = useScroll({ target: ref });
      const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length]);
      return (
            <div className="portfolio" ref={ref}>
                  <motion.div className="pList" style={{ x: xTranslate }}>
                        <div className="emty"
                              style={{
                                    width: window.innerWidth - containerDistance
                              }}>

                        </div>
                        {items.map(item => (
                              <ListItem key={item.id} item={item} />
                        ))}
                  </motion.div>
                  <section />
                  <section />
                  <section />
                  <section />
                  <section />
                  <div className="pProcess">
                        <svg width='100%' height='100%' viewBox='0 0 160 160' >
                              <circle
                                    cx='80'
                                    cy='80'
                                    r='70'
                                    stroke='#ddd'
                                    strokeWidth={20}
                                    fill='none'
                              />
                              <motion.circle
                                    cx='80'
                                    cy='80'
                                    r='70'
                                    stroke='red'
                                    strokeWidth={20}
                                    fill='none'
                                    style={{
                                          pathLength: scrollYProgress,
                                          transform: 'rotate(90deg)',
                                          transformOrigin: '80px 80px',
                                    }}
                              />
                        </svg>
                  </div>
            </div>
      )
}

export default Portfolio;

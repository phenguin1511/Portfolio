import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const speechVariants = {
      initial: { opacity: 0, y: 75 },
      animate: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 1,
                  staggerChildren: 0.5
            }
      },
};
const Speech = () => {
      return (
            <motion.div className="bubbleContainer"
                  initial="initial"
                  animate="animate"
                  variants={speechVariants}>
                  <motion.div className="bubble" variants={speechVariants}>
                        <TypeAnimation
                              sequence={[
                                    1000,
                                    "Hello, I'm a software engineer",
                                    1000,
                                    "I'm a full stack developer",
                                    1000,
                                    "I'm a web developer"
                              ]}
                              wrapper="span"
                              speed={50}
                              deletionSpeed={50}
                              repeat={Infinity}
                        />
                  </motion.div>
                  <motion.img variants={speechVariants} src="/avatar.png" alt="speech" />
            </motion.div>
      )
}

export default Speech;

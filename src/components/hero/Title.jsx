import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';



const titleVariants = {
      initial: { opacity: 0, x: -100 },
      animate: {
            opacity: 1,
            x: 0,
            transition: {
                  duration: 1,
                  staggerChildren: 0.5
            }
      }
}
const Title = () => {
      return (
            <motion.h1 className="hTitle"
                  initial="initial"
                  animate="animate"
                  variants={titleVariants}>
                  Hey There!,
                  <br />
                  <span>
                        <TypeAnimation
                              sequence={['I am Nguyen Phuc']}
                              speed={1}
                              deletionSpeed={1}
                        />
                  </span>
            </motion.h1>
      );
};

export default Title;

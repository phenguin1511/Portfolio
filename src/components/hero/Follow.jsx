import { motion } from 'framer-motion';


const followVariants = {
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

const Follow = () => {
      return (
            <motion.div className="follow"
                  initial="initial"
                  animate="animate"
                  variants={followVariants}>
                  <motion.a variants={followVariants}>
                        <img src="instagram.png" alt="instagram" />
                  </motion.a>
                  <motion.a variants={followVariants}>
                        <img src="facebook.png" alt="facebook" />
                  </motion.a>
                  {/* <a>
                  <img src="github.png" alt="github" />
            </a>
            <a>
                  <img src="linkedin.png" alt="linkedin" />
            </a> */}
                  <motion.div variants={followVariants} className="followTextContainer">
                        <div className="followText"> FOLLOW ME</div>
                  </motion.div>
            </motion.div>
      );
};

export default Follow;

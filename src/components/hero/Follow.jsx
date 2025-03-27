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
                  <motion.a variants={followVariants} href="https://www.instagram.com/lhnphuc" target="_blank" >
                        <img src="instagram.png" alt="instagram" />
                  </motion.a>
                  <motion.a variants={followVariants} href="https://www.facebook.com/lehoainguyenphuc.it" target="_blank">
                        <img src="facebook.png" alt="facebook" />
                  </motion.a>
                  <motion.a variants={followVariants} href="www.linkedin.com/in/lehoainguyenphucit" target="_blank">
                        <img src="linkedin.png" alt="linkedin" />
                  </motion.a>
                  <motion.a variants={followVariants} href="https://github.com/phenguin1511" target="_blank">
                        <img src="github.png" alt="github" />
                  </motion.a>
                  <motion.div variants={followVariants} className="followTextContainer">
                        <div className="followText">CONTACT ME</div>
                  </motion.div>
            </motion.div>
      );
};

export default Follow;

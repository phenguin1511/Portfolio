import { motion } from 'framer-motion';


const awardVariants = {
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

const Award = () => {
      return (
            <motion.div className="awards"
                  initial="initial"
                  animate="animate"
                  variants={awardVariants}>
                  <motion.h2 variants={awardVariants}>Full Stack Developer</motion.h2>
                  <motion.p variants={awardVariants}>
                        I am a full stack developer with a passion for building web applications.
                  </motion.p>
                  <motion.div variants={awardVariants} className="awardList">
                        <motion.img variants={awardVariants} src="/react.webp" alt="award" />
                        <motion.img variants={awardVariants} src="/node.png" alt="award" />
                        <motion.img variants={awardVariants} src="/mongodb.png" alt="award" />
                        <motion.img variants={awardVariants} src="/expressjs.png" alt="award" />
                        <motion.img variants={awardVariants} src="/mysql.png" alt="award" />
                  </motion.div>
            </motion.div>
      );
};

export default Award;

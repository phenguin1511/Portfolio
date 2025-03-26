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
                  <motion.h2 variants={awardVariants}>Good Graduated</motion.h2>
                  <motion.p variants={awardVariants}>
                        I graduated with honors from Hutech University
                  </motion.p>
                  <motion.div variants={awardVariants} className="awardList">
                        <motion.img variants={awardVariants} src="/award1.png" alt="award" />
                        <motion.img variants={awardVariants} src="/award2.png" alt="award" />
                        <motion.img variants={awardVariants} src="/award3.png" alt="award" />
                  </motion.div>
            </motion.div>
      );
};

export default Award;

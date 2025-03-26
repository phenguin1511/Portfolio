import './contact.css';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import ContactComponent from './contact/ContactComponent';
const formVariants = {
      initial: {
            x: 200,
            opacity: 0,
      },
      animate: {
            x: 0,
            opacity: 1,
            transition: {
                  duration: 0.5,
                  staggerChildren: 0.2,
            },
      },

}

const Contact = () => {
      const [success, setSuccess] = useState(false);
      const [error, setError] = useState(false);
      const form = useRef();

      const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm(
                  import.meta.env.VITE_YOUR_SERVICE_ID,
                  import.meta.env.VITE_YOUR_TEMPLATE_ID,
                  form.current,
                  import.meta.env.VITE_YOUR_PUBLIC_KEY
            )
                  .then((result) => {
                        console.log('Success:', result.text);
                        setSuccess(true);
                        setError(false);
                        form.current.reset(); // Reset form sau khi gửi thành công
                  })
                  .catch((error) => {
                        console.log('Error:', error.text);
                        setError(true);
                        setSuccess(false);
                  });
      };
      const formRef = useRef();
      const isInView = useInView(formRef, { margin: '-200px' });
      return (
            <div className="contact" ref={formRef}>
                  <div className="cSection">
                        <motion.form
                              ref={form}
                              onSubmit={sendEmail}
                              variants={formVariants}
                              animate={isInView ? 'animate' : 'initial'}
                        >
                              <h1 className="cTitle">Contact Me</h1>
                              <motion.div className="formItem" variants={formVariants}>
                                    <label>Name</label>
                                    <input name="user_name" type="text" placeholder="Name" required />
                              </motion.div>
                              <motion.div className="formItem" variants={formVariants}>
                                    <label>Email</label>
                                    <input name="user_email" type="email" placeholder="Your email" required />
                              </motion.div>
                              <motion.div className="formItem" variants={formVariants}>
                                    <label>Message</label>
                                    <textarea name="user_message" rows="10" placeholder="Message" required />
                              </motion.div>
                              <motion.button className="formButton" variants={formVariants}>Send</motion.button>
                              {success && <p style={{ color: 'green' }} className="success">Email sent successfully</p>}
                              {error && <p style={{ color: 'red' }} className="error">Email not sent</p>}
                        </motion.form>
                  </div>
                  <motion.div className="cSection"
                        variants={formVariants}
                        animate={isInView ? 'animate' : 'initial'}
                  >
                        <ContactComponent />
                  </motion.div>
            </div>
      );
};

export default Contact;

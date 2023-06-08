import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { styles } from "../styles";
const World = () => (
  <section className={'sm:p-16 xs:p-8 px-6 py-12 relative z-10'}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={'2xl:max-w-[1280px] w-full mx-auto flex flex-col'}
    >

      <TypingText title="| My Location" textStyles={`${styles.sectionSubText} text-center`}/>
      <TitleText
        title={(
          <>There I am, in India
          </>
        )}
        textStyles={`${styles.sectionHeadText} text-center`} 
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[50px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

      </motion.div>
    </motion.div>
    <hr></hr>
    <div className={"sm:text-[18px] text-[18px] text-secondary tracking-wider text-center"}>Made with ❤️</div>
  </section>
);

export default World;
import { useState, useEffect, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Model from "./A_windy_day";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./Loader";
import { motion } from "framer-motion";
import resume from "../assets/Dariksha11.pdf"

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 991.20px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Web Developer", "Coder", "Music Lover" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className={"animate__animated animate__fadeIn"}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Dariksha`} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Coder", "Music Lover" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="Bannerp">I'm a web developer with experience in JavaScript, and 
        expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and I can work on a problem and 
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!</p>
                  <button><a href={resume}>Resume<ArrowRightCircle size={25} /></a></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <Canvas className="Bannerpi" frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [-20, 20, 0], fov:100}}
      gl={{ preserveDrawingBuffer: true }}>
                    <OrbitControls autoRotate  maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} enableZoom={false}/>
                      <ambientLight intensity={0.5}/>
                      <directionalLight position={[-2,5,2]} intensity={1}/>
                      <Suspense fallback={<CanvasLoader/>}>
                        <Model isMobile={isMobile}></Model>
                      </Suspense>
  
                  </Canvas>
          </Col>
        </Row>
              </Container>
              <div className='xs:bottom-10 bottom-32 w-full flex justify-center items-center Bannerp'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0,24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}
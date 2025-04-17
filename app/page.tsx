"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import { Link } from "react-scroll"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="terminal-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-primary-foreground">
              Darsan Sabu George
            </h1>
            <div className="h-16 sm:h-20">
              <TypeAnimation
                sequence={[
                  "Cybersecurity Specialist",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Builder of Smart Systems",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl sm:text-3xl text-muted-foreground"
                repeat={Infinity}
              />
            </div>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Passionate about ethical hacking, secure systems design, and building innovative IoT/web solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-8 py-3 border border-primary text-primary-foreground rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex justify-center space-x-6 pt-8">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTelegram className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-left"
              >
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate <span className="text-primary font-semibold">Cybersecurity Specialist</span> and 
                    <span className="text-primary font-semibold"> Full Stack Developer</span> with expertise in building 
                    secure and innovative solutions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My work spans from ethical hacking and network defense to developing smart IoT systems and web applications. 
                    I focus on creating systems that are both functional and secure by design.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                    <span className="text-primary">🔒</span>
                    <span className="text-sm">Security First</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                    <span className="text-primary">💻</span>
                    <span className="text-sm">Full Stack</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                    <span className="text-primary">🌐</span>
                    <span className="text-sm">IoT Expert</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-primary/5 animate-float backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">DSG</span>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
                </div>
              </motion.div>
            </div>
            
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-12">Experience</h3>
              <div className="timeline">
                <div className="timeline-item left">
                  <div className="timeline-content bg-secondary/50 backdrop-blur-sm">
                    <h4 className="font-bold text-lg text-primary">Senior Cybersecurity Consultant</h4>
                    <p className="text-sm text-muted-foreground">2022 - Present</p>
                    <p className="mt-2">Leading security assessments and penetration testing for enterprise clients, developing secure IoT solutions.</p>
                  </div>
                </div>
                <div className="timeline-item right">
                  <div className="timeline-content bg-secondary/50 backdrop-blur-sm">
                    <h4 className="font-bold text-lg text-primary">Full Stack Developer</h4>
                    <p className="text-sm text-muted-foreground">2020 - 2022</p>
                    <p className="mt-2">Built scalable web applications with React, Node.js, and MongoDB, focusing on security best practices.</p>
                  </div>
                </div>
                <div className="timeline-item left">
                  <div className="timeline-content bg-secondary/50 backdrop-blur-sm">
                    <h4 className="font-bold text-lg text-primary">Security Researcher</h4>
                    <p className="text-sm text-muted-foreground">2018 - 2020</p>
                    <p className="mt-2">Conducted vulnerability research and developed tools for network defense and monitoring.</p>
                  </div>
                </div>
                <div className="timeline-item right">
                  <div className="timeline-content bg-secondary/50 backdrop-blur-sm">
                    <h4 className="font-bold text-lg text-primary">IoT Developer</h4>
                    <p className="text-sm text-muted-foreground">2016 - 2018</p>
                    <p className="mt-2">Designed and implemented secure IoT systems using ESP32 and Arduino platforms.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Finance Tracker",
                  description: "A secure and user-friendly personal finance management app built with Flutter and Firebase",
                  tech: ["Flutter", "Firebase", "Dart", "Provider"],
                  image: "/images/finance-tracker.jpg",
                  github: "https://github.com/Mr-BiG1/finance_tracker",
                  demo: "https://finance-tracker-demo.com"
                },
                {
                  title: "ESP32 Weather App",
                  description: "ESP32-based weather application with TFT display and web server interface",
                  tech: ["ESP32", "C++", "Arduino", "IoT"],
                  image: "/images/esp32-weather.jpg",
                  github: "https://github.com/Mr-BiG1/ESP32-Weather-App",
                  demo: "https://esp32-weather-demo.com"
                },
                {
                  title: "Click Safe",
                  description: "Browser extension for secure browsing and phishing protection",
                  tech: ["JavaScript", "Chrome Extension", "Security", "Web"],
                  image: "/images/click-safe.jpg",
                  github: "https://github.com/Mr-BiG1/click-safe",
                  demo: "https://click-safe-demo.com"
                },
                {
                  title: "Fluidics Controller",
                  description: "Serial/web-controlled lab system for fluid dynamics experiments",
                  tech: ["Python", "Arduino", "Web Serial API", "IoT"],
                  image: "/images/fluidics-controller.jpg",
                  github: "https://github.com/yourusername/fluidics-controller",
                  demo: "https://fluidics-controller-demo.com"
                },
              ].map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02 }}
                  className="project-card p-6 bg-secondary rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground/30">{project.title.charAt(0)}</span>
                    </div>
                    {/* Replace with actual image when available */}
                    {/* <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
          </a>
          <a
                      href={project.demo} 
            target="_blank"
            rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
          >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Live Demo</span>
          </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg shadow-lg"
              >
                <form className="space-y-6 text-left">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 rounded-md bg-secondary border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 rounded-md bg-secondary border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-3 rounded-md bg-secondary border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8 text-left"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    I'm always interested in hearing about new projects and opportunities.
                    Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaTelegram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telegram</h4>
                      <a 
                        href="https://t.me/darsansabu" 
          target="_blank"
          rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        @darsansabu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaLinkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/darsan-sabu-george-62732b271/" 
          target="_blank"
          rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        Darsan Sabu George
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaGithub className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a 
                        href="https://github.com/Mr-BiG1" 
          target="_blank"
          rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        @Mr-BiG1
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-background rounded-lg shadow-lg">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a 
                    href="mailto:darsansabu09@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    darsansabu09@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

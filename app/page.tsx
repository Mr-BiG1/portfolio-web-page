'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

// ✅ Top Navigation Component
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <span className="text-xl font-bold text-primary">DSG</span>
      <div className="space-x-6">
        <ScrollLink to="home" smooth={true} offset={-64} duration={500} className="cursor-pointer text-muted-foreground hover:text-primary transition">
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} offset={-64} duration={500} className="cursor-pointer text-muted-foreground hover:text-primary transition">
          About
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} offset={-64} duration={500} className="cursor-pointer text-muted-foreground hover:text-primary transition">
          <Link href="/blog" className="text-muted-foreground hover:text-primary transition">
            Projects
          </Link>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} offset={-64} duration={500} className="cursor-pointer text-muted-foreground hover:text-primary transition">
          Contact
        </ScrollLink>
        <Link href="/create-post" className="text-muted-foreground hover:text-primary transition">
          Create Post
        </Link>
      </div>
    </div>
  </nav>
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="terminal-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
                  'Cybersecurity Specialist',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Builder of Smart Systems',
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
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              >
                View Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-8 py-3 border border-primary text-primary-foreground rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
              >
                Contact Me
              </ScrollLink>
              <Link
                href="/create-post"
                className="px-8 py-3 border border-primary text-primary-foreground rounded-lg hover:bg-primary/10 transition-colors"
              >
                Create Post
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

      {/* ✨ Keep all other sections like About, Projects, and Contact as you already have them — no changes needed */}
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero"
import CondoCards from '../components/CondoCards'
import TestimonialSection from '../components/TestimonialSection'
import AgentSection from '../components/AgentSection'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <>
    <Hero/>
    <CondoCards/>
    <TestimonialSection/>
    <Contact/>
    <AgentSection/>
    <Footer/>
    </>
  )
}

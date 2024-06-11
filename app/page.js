import Banner from "@/components/Banner"
import Header from "@/components/Header"
import Images from "@/components/Images"
import MainSlider from "@/components/MainSlider"
import Newslatter from "@/components/Newslatter"
import About from "@/components/About"
import Partners from "@/components/Partners"
import Leaders from "@/components/Leaders"
import Contact from "@/components/Conatct"
import Footer from "@/components/Footer"
import Scroll from "@/components/Scroll"

const page = () => {
  return (
    <main className="relative z-10">
      <header className="absolute inset-x-0 z-30">
        <div className="w-[80%] mx-auto relative">
          <Header/>
        </div>
      </header>
      <section className="relative">
        <MainSlider />
        <Scroll />
      </section>
      <section id="banner-section">
        <Banner /> 
      </section>
      <section id="projects-section">
        <Images />
      </section>
      <section>
        <Newslatter />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="organization-section">
        <Partners />
      </section>
      <section id="team-section">
        <Leaders />
      </section>
      <section id="contact-section">
        <Contact/>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default page

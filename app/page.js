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

const page = () => {
  return (
    <main className="relative z-10">
      <header className="absolute inset-x-0 z-30">
        <div className="w-[80%] mx-auto relative">
          <Header/>
        </div>
      </header>
      <section>
        <MainSlider />
      </section>
      <section>
        <Banner /> 
      </section>
      <section>
        <Images />
      </section>
      <section>
        <Newslatter />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Partners/>
      </section>
      <section>
        <Leaders />
      </section>
      <section>
        <Contact/>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default page

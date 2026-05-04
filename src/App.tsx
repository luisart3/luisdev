import { Hero } from "./view/hero"
import { BentoContent } from "./view/bentoContent"
import { Propyects } from "./view/proyects"
import { Footer } from "./components/ui/footer/Footer"
function App() {
  
  return (
    <>
      <div className=" min-h-screen overflow-hidden h-full">
        <div className=" fixed inset-0 -z-10 pointer-events-none">
          <div className=" absolute top-5 right-15 bg-purple-500 blur-3xl w-20 h-20 rounded-full transform-cpu"></div>
          <div className=" absolute bottom-0 left-0 bg-purple-500 blur-3xl w-20 h-20 rounded-full transform-cpu"></div>
        </div>
        <div className=" max-w-3xl mx-auto p-6 md:p-12">
          <div className="flex flex-col gap-16">

          <Hero/>
          <Propyects/>
          <BentoContent/>
          <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

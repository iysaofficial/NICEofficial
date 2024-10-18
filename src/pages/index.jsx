import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Konten
import Mainhero from "../components/mainhero";
import About from "../components/about";
import Categories from "../components/category";
import Organized from "../components/organized";
import Timevenue from "../components/timevenue";

function Home() {
    return (
        <>
        <Navigation />
        <Mainhero />
        <About />
        <Categories />
        {/* <Timevenue /> */}
        <Organized />
        <Footer />
    </>
    )
}

export default Home;
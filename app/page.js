import Header from "./components/Header";
import { Titanium, Newphoria, Love, GuidTour } from "./components/Hero";
import WhichIphone from "./components/WhichIphone";
import Ways from "./components/Ways";
import What from "./components/What";
import GetMore from "./components/GetMore";
import ManyWord from "./components/ManyWord";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Titanium />
        <Newphoria />
        <Love />
        <GuidTour />
        <WhichIphone />
        <Ways />
        <What />
        <GetMore />
        <ManyWord />
      </main>
      <Footer />
    </>
  );
}

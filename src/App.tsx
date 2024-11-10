import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        <Header />
        <Features />
        <Testimonials />
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
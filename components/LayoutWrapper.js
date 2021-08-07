
import Header from './Header'
import Footer from './Footer'


const LayoutWrapper = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-screen max-w-7xl mx-auto">
            <Header />
          <main className="mb-auto">{children}
          </main>
          <Footer />
        </div>
    )
  }
  
  export default LayoutWrapper
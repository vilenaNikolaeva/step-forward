import "./App.css";
import Header from "./components/Header";
import AppRouter from "./api/AppRouter";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthCtx";
import { UserProvider } from "./contexts/UserCtx";
import { ToastContainer } from "react-toastify";
import PageWrapper from "./wrappers/PageWrapper";

import "react-toastify/dist/ReactToastify.css";
import ParticlesWrapper from "./wrappers/ParticlesWrapper";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <Header />
          <PageWrapper>
            {/* <ParticlesWrapper> */}
              <AppRouter />
            {/* </ParticlesWrapper> */}
          </PageWrapper>
          <Footer />
        </UserProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </div>
  );
}

export default App;

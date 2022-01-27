import "./App.css";
import Header from "./components/Header";
import AppRouter from "./api/AppRouter";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthCtx";
import { UserProvider } from "./contexts/UserCtx";
import { ToastContainer } from "react-toastify";
import PageWrapper from "./wrappers/PageWrapper";

import "react-toastify/dist/ReactToastify.css";
import AppWrapper from "./wrappers/AppWrapper";

function App() {
  return (
    <div className="App">
      <AppWrapper>
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
      </AppWrapper>
    </div>
  );
}

export default App;

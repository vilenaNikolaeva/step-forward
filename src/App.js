import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import AppRouter from "./api/AppRouter";
import Footer from "./components/user/edit/Footer";
import { AuthProvider } from "./contexts/AuthCtx";
import { UserProvider } from "./contexts/UserCtx";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <div className="Header">
            <Navigation />
          </div>
          <div className="MainContainer">
            <AppRouter />
          </div>
          <div className="Footer">
            <Footer />
          </div>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

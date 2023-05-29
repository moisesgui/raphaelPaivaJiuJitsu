import { Header } from "shared/components/Header/Header";
import "./App.scss";
import { TeamPage } from "pages/Team/Team";
// import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <>
      <Header />
      <TeamPage />
      {/* <Home /> */}
    </>
  );
}

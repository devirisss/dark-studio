import './app.css';

import Cover from "../cover";
import Services from "../services";
import Projects from "../projects";
import Jobs from "../jobs";
import Footer from "../footer";

const App = () => {
    return (
        <div className="app">
            <Cover />
            <Services />
            <Projects />
            <Jobs />
            <Footer />
        </div>
    )
}

export default App;
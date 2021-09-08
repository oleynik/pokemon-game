import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';

function App() {
    return (
        <>
            <Header title={'This is title'} descr={'This is Description!'} />
            <Layout title={'Layout 1'} descr={'Description of Layout 1'} urlBg={bg1} />
            <Layout title={'Layout 2'} descr={'Description of Layout 2'} colorBg={'red'} />
            <Layout title={'Layout 3'} descr={'Description of Layout 3'} urlBg={bg2} />
            <Footer />
        </>
    );
}

export default App;

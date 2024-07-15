import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
// import {Fragment} from "react";
import ButtonSection from "./components/ButtonSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabSection from "./components/TabSection.jsx";
import {useState} from 'react'
import FeedbackSection from "./components/FeedbackSection/FeedbackSection.jsx";
import EffectSection from "./components/EffectSection.jsx";


function App() {
    const [tab, setTab] = useState('effect');
    return (
        <>
            <Header/>
            <IntroSection/>
            <main>
                <TabSection active={tab} onChange={(current) => setTab(current)}/>

                {tab === 'main' && (
                    <>
                        <TeachingSection/>
                        <ButtonSection/>
                    </>
                )}
                {tab === 'feedback' && (
                    <FeedbackSection/>
                )}
                {tab === 'effect' && (
                    <EffectSection/>
                )}
            </main>
        </>
    )
}

export default App

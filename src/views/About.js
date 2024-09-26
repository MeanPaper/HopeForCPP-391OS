import CheckpointLayout from "./CheckpointLayout";

const helpfulSourceList = [
    {sourceName: 'OSDev', srcLink: 'https://wiki.osdev.org/Expanded_Main_Page'},
    {sourceName: 'ECE 391 MP3 Documents', srcLink: '',},
    {sourceName: `IA-32 Intel Architecture Software Developer's Manual Volume 3: System Programming Guide`, srcLink:''}
];
                    
const osFeatures = [
    'Device Drivers: Keyboard, RTC, i8259 PIC, PIT', 
    'Multiterminals',
    'Scheduler',
]

const AboutNavigation = () => {
    return (<div className='about-nav'>
    </div>)
}

const About = () => {
    
    return (<div className="content-container">
        <AboutNavigation />
        <div id='about-box'>
            <div id='about-page-title'>About</div>
            <div>
                This is the last MP (machine problem) of the course ECE 391 
                in Fall 2022 at the University of Illinois Urbana-Champaign. <br/>
                Great thanks to the ECE 391 course staff for their assistance in the development of 391OS.
            </div>
            <div id='about-tech-section'>
                <OsFeatureSection />
                {/* <h3>Checkpoints</h3>
                <p>Still working on it... Stay Tuned!</p> */}
                {/* <p>Here are some brief descriptions and explanations for each checkpoint.</p>
                <CheckpointLayout /> */}
                {/* <CheckpointHolder markDownPath="../checkpointMD/checkpoint1.md" /> */}
            </div>
            <div id='about-tech-helpful'>
                <MpHelpfulSources />
            </div>
            <div id='about-other-section'>
                <WebDevInfo />

            </div>
        </div>
    </div>);
}

const OsFeatureSection = () => {
    return (
    <>
        <h3> Some 391OS Features</h3>
        <ul>
            {osFeatures.map((item, index) => {
                return (<li key={item+index}>{item}</li>)
            })}
        </ul>
    </>);
}
const MpHelpfulSources = () => {
    return (<>
        <h3>Helpful Resouces:</h3>
        <ul>
            {helpfulSourceList.map((item, index) => {
                if (item.srcLink.length === 0)
                    return (<li key={index + item.sourceName}>{item.sourceName}</li>);
                return (<li key={index + item.sourceName}> 
                    <a href={item.srcLink} target='_blank' rel="noreferrer">{item.sourceName}</a>
                </li>)
            })}
        </ul>
    </>);
}


const WebDevInfo = () => {
    return (
        <>
            <div className='wed-dev-info'>
                <h3> Web Developments:</h3>
                <div> The online emulator is powered by 
                    <a href="https://github.com/copy/v86" target="_blank" rel='noreferrer'> v86</a>.
                </div>
                <div> The old-school font used by the emulator is found on
                    <a href='https://int10h.org/oldschool-pc-fonts/' target='_blank' rel='noreferrer'> int10h.org</a>.
                </div>
                <div> The website is developed with 
                    <a href='https://react.dev/' target="_blank" rel='noreferrer'> ReactJS</a>.
                </div>
                <div> 
                    <a href="https://www.figma.com/" target="_black" rel="noreferrer" >Figma</a> is our best friend for designing the website.
                </div>
            </div>
            <div>
                <h3>Something else...</h3>
                <div>Hey there! The designer and developer, <a href="https://github.com/MeanPaper"> Dongming (or MeanPaper)</a> is here!</div>
                <div>The styling of the website is inspired by the styling used on 
                    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> vite </a> (a great tool for React App but it gives some trouble when developing the website).
                </div>
                <div>The team/website logo is inspired by the logo of C++. </div>
                <div>The kernel is based on x86. x86 was part of ECE 391 curriculum for quite a long time...</div>
                <div>Recently(ummmm, sometime in 2024), ECE 391 switched to RISC-V! More excitement and fun!</div>
                {/* <div>Our team have a thought of updating our OS. Stay Tuned! Apparently I am to busy </div> */}
                {/* <div>If you are a student in ECE 391 and have questions, you can come to my office hour and talk to me!</div>
                <div>My office hour is at 10:00 AM to 12:00 PM every Friday... Sometimes, I will come a bit early and/or stay a bit longer in my OH :)</div> */}
            </div>
        </>
    );
}

export default About;
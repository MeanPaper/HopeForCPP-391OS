import logo from '../hopeforcpp.svg'
import BreathingCarousel from '../components/Carousels';
import CheckpointSlide from '../components/CheckpointSlide';

const carouselItems = [ 'We are team Hope for a C++', 
                        'A team from Fall 2022 of ECE 391', 
                        'A team of people who know how to use C++ but forgot how to use C ',
                        'That is why we Hope for a C++',
                        'Yet, we made it to the end and created this simple Linux OS',
                        '391OS'
];

const Home = () => {
    const tempDate = new Date(2022, 9, 11)
    return (<div className="content-container"> 
        <div className="home-box">
            <div id='homepage-welcome'> Welcome </div>
            <img id='homepage-large-logo' src={logo} alt='hope for a c++ logo' />
            <BreathingCarousel carouselItems={carouselItems} breathDuration={5000}/>
            <div className='road-map'>
            </div>
            {/* <div> {""} </div> */}
        </div>
    </div>);
};

export default Home;
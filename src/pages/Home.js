import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Allcards from '../components/Allcards';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import './Home.css';

// import SampleRef from '../components/SampleRef';
// import CountRender from '../components/CountRender';
// import StopWatch  from '../components/StopWatch';
// import Counter from '../components/Counter';
// import Counter2 from '../components/Counter2';
function Home() {
    const {  isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
      
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    return (
        <>

            {/* <SampleRef/>
            <hr/>
            <h1>Count render</h1>
            <CountRender/>
            <hr/>
            <h1>Stop Watch</h1>
            <StopWatch/>
            <hr/>
            <h1>Counter</h1>
            <Counter/>
            <hr/>
            <h1>Counter 2 via useReducer</h1>
            <Counter2/> */}
            <Nav />
            <Carousel />
            <div className="featured-collections-container">
        <h1 className="display-6 text-center">Featured Collections</h1>
        <Allcards />
      </div>

      <div className="quotes-container">
        <h1 className="display-6 text-center"></h1>
        <div className="quotes-content">
          <Quote />
        </div>
      </div>

            <Footer></Footer>
        </>
    );
}

export default Home;
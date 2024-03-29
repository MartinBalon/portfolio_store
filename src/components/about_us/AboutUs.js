import React, { useEffect } from 'react';

const AboutUs = () => {
  // scroll to top of the page 
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="xs-w-80 m-cw">
        <h1 className="xs-m-t-5 xs-m-b-5 xs-fs-2em">Aluminium Pixels</h1>
        <h2 style={{ color: 'rgb(255, 55, 55)' }} className="center xs-m-b-2">
          This is only demo page!
        </h2>
        <div className="clearfix about-us">
          <p className="xs-m-b-2 l-w-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <p className="xs-m-b-2 l-w-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          <p className="xs-m-b-10 l-w-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum. 
          </p>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;
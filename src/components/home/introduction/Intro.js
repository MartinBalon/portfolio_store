import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section id="introduction">
            <h1>High resolution aluminium prints have never been more affordable!</h1>
            <p className="disclaimer"> 
                This is only mock website. You cannot buy or sell anything here. No
                aluminium sheets were harmed during the process. 
            </p>
            <p>
                During the process of creating an aluminium print we use technique called
                &quot;dye sublimation&quot;. 
                This means that we don't print directly on aluminium sheet surface as this leads
                to fragile print that is not scratch resistant and colours are not as vibrant as
                using the technique mentioned above. So how does it work exactly? 
                <Link to="/about_us" style={{ textDecoration: 'underline'}}> Find out more.</Link>
                {/* using the technique mentioned above. So how does it work exactly? We use dedicated
                dye sublimation printers - as the name suggests these printers can work with special
                ink that get transfered on to paper which serves as medium for transfering image
                to aluminium sheets. Each of these sheets is coated with 1060 PE polyester.
                Printed image is then placed on the surface of treated al. sheet and secured bu
                heat-resisting tape. Last step is to put both image and al. sheet to heat press - 
                which applies both heat and sufficient pressure for certain amount of time to ensure
                that image would get transfered from paper to al. sheet. 
                The result of this is stunning vibrant aluminium print which is by default srcatch-resistant,
                washable and has UV protection to stop colour from fading over the time. */}
            </p>
        </section>
    )
};

export default Intro;
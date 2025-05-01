import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div>
            <h3 className='font-bold'>Login With</h3>
            <SocialLogin/>
            <FindUs/>
            <QZone/>
        </div>
    );
};

export default RightAside;
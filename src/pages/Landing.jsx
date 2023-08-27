import React from 'react';

import Location from '../components/Location';
import BannerOverview from '../components/BannerOverview';
import SectionOverview from '../components/SectionOverview';

const Landing = () => {
  return (
    <div style={{ backgroundColor: '#16213e' }}>
      <Location />
      <BannerOverview />
      <SectionOverview />

      <div style={{ textAlign: 'center', color: 'white' }}>
        <p style={{ marginBottom: '20px' }}>Spaces are limited and filling up quickly.</p>
        <p> Don’t miss out on this incredible opportunity to awaken your artistic potential.</p>

        <div
          style={{
            backgroundColor: 'blue',
            width: '12%',
            margin: 'auto',
            padding: '10px',
            marginTop: '20px',
            cursor: 'pointer',
            marginBottom: '40px',
          }}
        >
          Click here to access
        </div>
      </div>
    </div>
  );
};

export default Landing;

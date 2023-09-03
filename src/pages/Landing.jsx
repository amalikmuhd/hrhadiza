import React from 'react';

import Location from '../components/Location';
import HorizontalLine from '../components/HorizontalLine';
import SectionOverview from '../components/SectionOverview';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const Landing = () => {
  return (
    <div style={{ backgroundColor: '#16213e' }}>
      <div className="bannerContainer">
        <div className="banner">Join This Resin Art Webinar!</div>
      </div>
      <Location />
      <div style={{ marginTop: 30 }} />

      <CustomButton />
      <HorizontalLine styles={{ marginTop: '40px' }} />

      <section className="secondRow">
        <h3 className="secondRowdescriptionContainer">
          Uncover the secrets of the second beauty of a treasure called resin art. Learn the step by step process, tips and
          techniques to start your resin art journey today
        </h3>
      </section>

      <div style={{ marginTop: 30 }} />
      <section className="secondRow">
        <p className="secondRowdescriptionContainer">Register now and secure your spot today</p>
      </section>
      <div style={{ marginTop: 30 }} />
      <CustomButton />
      <section className="secondRow">
        <h3 className="secondRowdescriptionContainer">Here are the results alot of people have gotten from this Training</h3>
      </section>
      {/* <SectionOverview /> */}

      <section className="secondRow">
        <h3 className="secondRowdescriptionContainer" style={{ fontSize: 16 }}>
          Spaces are limited and filling up quickly.
          <br />
          <br />
          Don’t miss out on this incredible opportunity to awaken your artistic potential.
        </h3>
      </section>

      <div style={{ marginTop: 30 }} />
      <CustomButton />
      <HorizontalLine styles={{ marginTop: '40px' }} />
      <section className="secondRow">
        <p className="secondRowdescriptionContainer" style={{ fontSize: 12 }}>
          This site is NOT a part of Facebook or Google website. Additionally, this website is NOT endorsed by GOOGLE , YOUTUBE or
          FACEBOOK inc in any way. GOOGLE is a trademark for all their respective companies and FACEBOOK is a trademark of
          FACEBOOK inc.
        </p>
      </section>
      <section className="secondRow">
        <p className="secondRowdescriptionContainer" style={{ fontSize: 10 }}>
          Copyright 2023 – Hadiza Muhammad Hussaini
          <br />
          <br />
          All Right Reserved
        </p>
      </section>
      <HorizontalLine styles={{ marginTop: '20px' }} />
    </div>
  );
};

export default Landing;

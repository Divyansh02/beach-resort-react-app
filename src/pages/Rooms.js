import React from "react";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
const Rooms = props => {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
        <Link to="/" className="btn-primary">
          Our rooms
        </Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>
  );
};

export default Rooms;

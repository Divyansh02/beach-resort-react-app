import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          No rooms could be found at the moment...
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link className="btn-primary">Back to rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h5>Price:${price}</h5>
              <h6>Size:{size}SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
                <h6>{pets?"Pets are allowed":"no pets allowed"}</h6>
                <h6>{breakfast?"Breakfast included":null}</h6>
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
             <ul className="extras">
                 {extras.map((item,index)=>{
                     return <li key={index} >-{item}</li>
                 })}
             </ul>
        </section>
      </>
    );
  }
}

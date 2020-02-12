import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus?"
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus?"
      },
      {
        icon: <FaBeer />,
        title: "Free beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info   }</p>
            </article>;
          })}
        </div>
      </section>
    );
  }
}

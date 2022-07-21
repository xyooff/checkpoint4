import React from "react";
import { Accordion } from "react-bootstrap";
import WelcomeBan from "../../../components/WelcomeBan/WelcomeBan";
import "./Skills.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Skills() {
  return (
    <div>
      <WelcomeBan />
      <div className="Skills-start">
        <div className="Skills-start-all">
          <h2 className="Skills-start-h1">Compétences</h2>
          <p className="Skills-start-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img
          className="Skills-start-img"
          src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959"
          alt="logo wildcodeschool"
        />
      </div>
      <div className="Skills-pictos">picto language</div>
      <div className="Skills-accordion">
        <h2 className="Skills-h2">Expérience</h2>
        <Accordion className="acoordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Moi de Juin</Accordion.Header>
            <Accordion.Body>
              <h4>Développement web full stack react node.js css</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Moi de mai</Accordion.Header>
            <Accordion.Body>
              <h4>Développement web react css</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Moi d 'Avril</Accordion.Header>
            <Accordion.Body>
              <h4>Développement web html css</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

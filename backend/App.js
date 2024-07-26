import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../frontend/src/components/ProjectCard";

const ENDPOINT = "http://127.0.0.1:5000";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${ENDPOINT}/api/rooms`);
      setProjects(response.data);
    };
    fetchProjects();

    const socket = socketIOClient(ENDPOINT);
    socket.on("roomUpdate", data => {
      setProjects(prevProjects => [...prevProjects, data]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <Container>
      <Row>
        <Col size={12}>
          <h3>A few things that I made :)</h3>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Try em out!</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Why me?</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink,
  ButtonGroup,
  Button,
} from 'reactstrap';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-0">
      <Card className="shadow m-3 border">
        <div className="image-container position-relative">
          <CardImg top width="100%" src={props.image} alt="" className="image" />
          <div className="info h5">
            <strong>{props.info}</strong>
          </div>
        </div>
        <CardBody className="text-center px-0">
          <CardTitle className="mb-3">{props.name}</CardTitle>
          <div className="mx-3">
            <ButtonGroup className="w-100 rounded shadow">
              <Button outline color="dark" className="w-50">
                <NavLink target="_blank" href={props.link}>App</NavLink>
              </Button>
              <Button outline color="dark" className="w-50 border-left-0" style={{ marginLeft: '0px' }}>
                <NavLink target="_blank" href={props.link}>Github</NavLink>
              </Button>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </div >
  )
}

export default ProjectCard;
import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  NavLink
} from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-0">
      <Card className="shadow m-3 border">
        <CardBody className="p-0">
          <img className="img-fluid rounded-top w-100" src={props.image} alt="" />
        </CardBody>
        <CardFooter>
          <NavLink target="_blank" href={props.link} className="p-0"><button className="btn btn-block btn-outline-dark">{props.name}</button></NavLink>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard;
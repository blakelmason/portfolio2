import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
} from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <div className="col-12 col-md-6 col-xl-4 p-0">
      <Card className="shadow m-3 border">
        <CardBody className="p-0">
          <img className="img-fluid rounded-top w-100" src={props.image} alt="" />
        </CardBody>
        <CardFooter>
          <button className="btn btn-block btn-outline-dark">{props.name}</button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard;
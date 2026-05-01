import PropTypes from "prop-types";
import { Card, EventTitle, Row } from "./Eventstyled";

import { FaMapMarkerAlt, FaUser, FaClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

function Event({ name, start, end, location, speaker }) {
  return (
    <Card>
      <EventTitle>{name}</EventTitle>
      <Row>
        <FaMapMarkerAlt /> {location}
      </Row>
      <Row>
        <FaUser /> {speaker}
      </Row>
      <Row>
        <MdDateRange  /> {start} 
      </Row>
      <Row>
        <FaClock  />  {end}
      </Row>
    </Card>
  );
}


export default Event;
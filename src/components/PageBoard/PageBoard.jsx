
import Event from "../Eventss/Event";
import { Wrapper, Title, Board } from "./PageBoardstyled";

function PageBoard({ events }) {
  return (
    <Wrapper>
      <Title>24th Core Worlds Coalition Conference</Title>

      <Board>
        {events.map((event) => (
          <Event
            key={event.name}
            name={event.name}
            start={event.time.start}
            end={event.time.end}
            location={event.location}
            speaker={event.speaker}
          />
        ))}
      </Board>
    </Wrapper>
  );
}


export default PageBoard;
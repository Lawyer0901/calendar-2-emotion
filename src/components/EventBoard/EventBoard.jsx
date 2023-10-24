import PropTypes from 'prop-types';
// import css from './EventBoard.module.css'
import { Event } from 'components/Event/Event'
import { Container } from './EventBoard.styled';



export const EventBoard = ({ events }) => {
    return <Container  >{events.map(event =><Event key={event.name} name={event.name} location={event.location} speaker={event.speaker} start={event.time.start} end={event.time.end} type={event.type} />)}</Container>
}

EventBoard.prototype = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.shape({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            })


            
        })
    )
}
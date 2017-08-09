import React from 'react'
import turnering from './turnering.jpg';
import fetch from 'isomorphic-fetch';
import './news.css';

const EventListItem = ({event}) => (
  <li>
    <p className="mbn">{event.relativeTime}</p>
    <h3><a href={event.url}>{event.name}</a></h3>

    <p className="mbl">{event.description}</p>
    <a href={event.url} target="facebook">[Les mer på Facebook]</a>
  </li>
);

const EventList = props => {
  if (!props.events) {
    return null;
  }

  let events = props.events.map(e => (
    <EventListItem key={e.id} event={e}/>
  ));

  if (!events.length) {
    events.push(<li key="fallback">{props.fallback}</li>)
  }

  return (<ul className="alt">{events}</ul>);
};

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      message: <p>Laster arrangementer...</p>,
      events: {upcoming: null, past: null}
    };
  }

  componentDidMount() {
    fetch(`/events`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Feil ved henting av events');
      })
      .then(events => {
        this.setState({
          events: events,
          message: '',
          isLoading: false
        })
      }, () => {
        this.setState({
          isLoading: false,
          message: <p>Se alle planlagte arrangementer på <a
            href="https://www.facebook.com/oslopinball/events">Facebook</a></p>
        });
      });
  }

  render() {
    const upcomingEvents = (
      <div>
        <h2 className="major">Kommende arrangementer</h2>
        {this.state.message}
        <EventList events={this.state.events.upcoming} fallback="Ingen planlagte arrangementer."/>
      </div>
    );
    const previousEvents = this.state.events.previous && (
      <div>
        <h2 className="major">Tidligere arrangementer</h2>
        <EventList events={this.state.events.past} fallback="Ingen arrangementer."/>
      </div>
    );

    return (
      <article id="aktuelt">
        {upcomingEvents}
        <span className="image main"><img src={turnering} alt=""/></span>
        {previousEvents}
      </article>
    );
  }
}
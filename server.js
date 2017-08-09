const express = require('express');
const http = require('https');
const moment = require('moment');
const app = express();
const port = 4000;
const accessToken = `${process.env.FACEBOOK_APPID}|${process.env.FACEBOOK_SECRET}`;
moment.locale('nb');

function loadEvents() {
  const eventPath = `/v2.9/oslopinball/events?access_token=${accessToken}`;
  return new Promise((resolve, reject) => {
    const req = http.get({
      host: 'graph.facebook.com',
      path: eventPath
    }, response => {
      let body = '';
      response.on('data', d => body += d);
      response.on('end', () => {
        const parsed = JSON.parse(body);
        if (parsed.error) {
          return reject(parsed.error);
        }
        return resolve(parsed.data);
      });
    });
    req.on('error', err => {
      return reject(err);
    });
  });
}

function prepareEvents(events) {
  const now = new Date();
  return events.reduce((acc, e) => {
    const eventDate = new Date(e.start_time);
    let description = e.description.slice(0, 300);
    if (description.length < e.description.length) {
      description += '...';
    }
    const event = {
      name: e.name,
      description,
      time: eventDate,
      id: e.id,
      url: `https://www.facebook.com/events/${e.id}`,
      relativeTime: moment(eventDate).fromNow()
    };

    if (eventDate > now) {
      acc.upcoming.push(event);
    } else {
      acc.past.push(event);
    }
    return acc;
  }, {now, upcoming: [], past: []});
}


app.get('/events', (req, res) => {
  loadEvents()
    .then(prepareEvents)
    .then(events => res.send(events))
    .catch(err => {
      console.error(err);
      res.status(500).send({error: err.message});
    });
});

app.use(express.static('build'));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
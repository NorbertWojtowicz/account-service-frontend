import ErrorMessage from "./ErrorMessage";
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";

const SecurityEvents = () => {
  const [error, setError] = useState("");
  const [events, setEvents] = useState([]);
  let eventsCounter = 0;

  useEffect(() => {
    axios
      .get(API_URL + "/api/security/events", {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
      })
      .then((res) => setEvents(res.data))
      .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
  }, []);

  return (
    <div>
      <h6>Required any of these roles: AUDITOR</h6>
      <h1>Security events</h1>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subject</th>
            <th scope="col">Object</th>
            <th scope="col">Action</th>
            <th scope="col">Path</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr>
              <th>{++eventsCounter}</th>
              <th scope="row">
                {event.subject === "" || event.subject === null
                  ? "Anonymous"
                  : event.subject}
              </th>
              <td>{event.object === null ? "Anonymous" : event.object}</td>
              <td>{event.action}</td>
              <td>{event.path}</td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecurityEvents;

import { useHistory } from "react-router-dom";
import { MeetupModel, NewMeetupForm } from "../components/meetups";

export function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData: MeetupModel) {
    fetch(
      "https://react-getting-started-defdd-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace('/')
    });
  }
  return (
    <>
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </>
  );
}

export default NewMeetupPage;

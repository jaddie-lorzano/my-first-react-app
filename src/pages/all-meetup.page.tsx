import { useEffect, useState } from "react";
import { MeetupList, MeetupModel } from "../components/meetups";

export function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([] as MeetupModel[]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-defdd-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: MeetupModel[] = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <>
      <section>
        <h1>All Meetups</h1>
        <MeetupList list={loadedMeetups} />
      </section>
    </>
  );
}

export default AllMeetupsPage;

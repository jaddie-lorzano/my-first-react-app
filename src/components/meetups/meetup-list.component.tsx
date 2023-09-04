import style from "./meetup-list.module.scss";
import { MeetupItem, MeetupModel } from "../meetups";

interface MeetupListProps {
  list: MeetupModel[];
}

export function MeetupList(props: MeetupListProps) {
  return (
    <>
      <ul className={style.list}>
        {props.list.map((item) => (
          <MeetupItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}

export default MeetupList;

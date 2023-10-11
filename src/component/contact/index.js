import "./index.css";

import Photo from "../photo";
import Heading from "../heading";
import Title from "../title";
import Description from "../description";

export default function Contact({
  contctname,
  image,
  rate,
  time,
  info,
  phone,
}) {
  return (
    <div className="block">
      <div className="block__photo-name">
        <div className="block__photo">
          <Photo src={image} name="contact_avatar" />
        </div>

        <div className="block__name-phone">
          <Heading>Господар - {contctname}</Heading>
          <Title id2={true} phone={phone} time={time} rate={rate} />
        </div>
      </div>

      <Description children={info} />
    </div>
  );
}

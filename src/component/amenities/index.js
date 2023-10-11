import "./index.css";

//підключаємо компонент Heading
import Heading from "../heading";

//підключаємо компонент ListItem
import ListItem from "../list-item";

import Pic1 from "./pic1.svg";
import Pic2 from "./pic2.svg";
import Pic3 from "./pic3.svg";
import Pic4 from "./pic4.svg";
import Pic5 from "./pic5.svg";
import Pic6 from "./pic6.svg";
import Pic7 from "./pic7.svg";
import Pic8 from "./pic8.svg";
import Pic9 from "./pic9.svg";
import Pic10 from "./pic10.svg";

//підключаємо компонент Box (відображення рамки карточки з даними)
import Box from "../box";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow className="block">
      <Heading border>Зручності</Heading>

      <div className={`${hasPool ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic1}>Басейн</ListItem>
      </div>

      <div className={`${hasGym ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic2}>Спортивний зал</ListItem>
      </div>

      <div className={`${hasFreeBreakfast ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic3}>Безкоштовний сніданок</ListItem>
      </div>

      <div className={`${hasFreeWiFi ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic4}>Безкоштовний Wi-Fi</ListItem>
      </div>

      <div className={`${hasParking ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic5}>Безкоштовний вуличний паркінг</ListItem>
      </div>

      <div className={`${hasPetsAllowed ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic6}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      </div>

      <div className={`${hasAirportShuttle ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic7}>Трансфер до/з аеропорту</ListItem>
      </div>

      <div className={`${hasConciergeService ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic8}>Консьєрж-сервіс</ListItem>
      </div>

      <div className={`${hasRoomService ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic9}>Обслуговування номерів</ListItem>
      </div>

      <div className={`${hasChildFriendly ? "" : "unvisbl"}`}>
        <ListItem imageSrc={Pic10}>Підходить для дітей</ListItem>
      </div>
    </Box>
  );
}

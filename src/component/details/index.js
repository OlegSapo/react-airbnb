import "./index.css";

//підключаємо компонент Heading
import Heading from "../heading";

//підключаємо компонент ListItem
import ListItem from "../list-item";

import Pic1 from "./pic1.svg";
import Pic2 from "./pic2.svg";
import Pic3 from "./pic3.svg";
import Pic4 from "./pic4.svg";

//підключаємо компонент Box (відображення рамки карточки з даними)
import Box from "../box";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="block">
      <Heading border>Деталі властивості:</Heading>

      <ListItem imageSrc={Pic1}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={Pic2}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={Pic3}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={Pic4}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </Box>
  );
}

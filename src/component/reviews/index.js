import "./index.css";

import Heading from "../heading";
import Box from "../box";
import { Fragment } from "react";

export default function Reviews({ reviews }) {
  return (
    <div className="block__reviews">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {reviews.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <div>
              <Item {...rest} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ id, guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__name-rating">
        <span className="reviews__name">{guestName}</span>
        <span className="reviews__rating">Рейтинг: {rating}</span>
      </div>
      <p className="reviews__review">{review}</p>
    </Box>
  );
}

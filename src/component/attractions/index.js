import { Fragment } from "react";
import Box from "../box";
import Heading from "../heading";
import "./index.css";

export default function Attractions({ attractions }) {
  return (
    <Box shadow>
      <Heading>Пам'ятки поблизу</Heading>
      <div className="list--links">
        {attractions.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <div>
              <Item {...rest} />
            </div>
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <div className="link--item">
      <a href={`https://${link}`} className="link--text">
        {name}
      </a>
    </div>
  );
}

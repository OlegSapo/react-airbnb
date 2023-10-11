import Heading from "../heading";
import "./index.css";

export default function Description({ title, children, mini, divider }) {
  return (
    <div className="description">
      <Heading mini={mini}>{title}</Heading>

      <p
        className={`decription__text ${divider ? "description__divider" : ""}`}
      >
        {children}
      </p>
    </div>
  );
}

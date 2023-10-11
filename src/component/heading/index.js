import "./index.css";

export default function Heading({ children, border, mini }) {
  return (
    <span
      className={`heading ${border ? "heading--border" : ""} ${
        mini ? "heading--mini" : ""
      }`}
    >
      {children}
    </span>
  );
}

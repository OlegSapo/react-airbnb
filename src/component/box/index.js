//універсальний компонент для відображення рамки карточки з даними
import "./index.css";

export default function Box({ children, className, shadow }) {
  return (
    <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
      {/* children - вивести увесь контент, що буде всередині даного компонента */}
      {children}
    </div>
  );
}

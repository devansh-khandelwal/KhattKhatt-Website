import Button from "react-bootstrap/Button";
import "./ThirdCard.css";

function Card() {
  return (
    <div className="card">
      <div className="title">
        <a href="/">Twin Sharing Tent</a>
      </div>
      <div className="points">
        <li>Attached Restroom</li>
        <li>Capacity - 2 Adult 1 Kid (Below 10 years)</li>
        <li>Rate of 1 Hut =</li>
        <li>Twin Size Mattress</li>
        <li>
          Meals Included: (Tea &Snacks, Barbeque, Dinner, Morning Tea &
          Breakfast)
        </li>
        <li>Hot Water Availability</li>
        <li>Parking</li>
        <li>Bring your own toiletries</li>
      </div>
      <div className="button">
        <Button variant="primary">Book</Button>
      </div>
    </div>
  );
}

export default Card;

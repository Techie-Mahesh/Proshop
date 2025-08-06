import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Iprops {
  value: number;
  text: string;
}

const Ratings: React.FC<Iprops> = ({ value, text }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  console.log(stars);
  return (
    <>
      <span className="rating">{stars}</span>
      <span className="rating-text">{text && text}</span>
    </>
  );
};

export default Ratings;

import './Bottle.css';
import PropTypes from 'prop-types'

const Bottle = ({bottle, handleAddCart}) => {
  const {name, img, price} = bottle;
  // console.log(bottle)
  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <p>${price}</p>
      <button onClick={() =>handleAddCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes ={
  bottle: PropTypes.object.isRequired,
  handleAddCart:PropTypes.func.isRequired

}

export default Bottle;
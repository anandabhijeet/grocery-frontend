import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../Redux/Action/Action";
import "./CheckoutItemTable.css";
const CheckoutItemTable = () => {
  const dispatch = useDispatch();
  const basketItem = useSelector((state) => state?.basket);
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ITEM DESCRIPTION</th>
          <th scope="col">UNIT PRICE</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {basketItem?.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>Rs {item.price}</td>
              <td>{item.quantity}</td>
              <td className="subtotal">
                <p>RS {item.price * item.quantity}</p>
                <span
                  onClick={() => dispatch(removeFromBasket(item._id))}
                  style={{ marginLeft: "30px" }}
                >
                  &#10006;
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CheckoutItemTable;

import React from "react";
import { OrderIcon } from "./OrderIcon";
export interface OrderDetailsProps {
  label: string;
}
export const OrderDetails: React.FC<OrderDetailsProps> = ({}) => {
  return (
    <div>
      <OrderIcon />
    </div>
  );
};

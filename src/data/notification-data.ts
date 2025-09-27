import { INotification } from "@/interface";
import avatar1 from "../../public/assets/images/avatar/avatar1.png";
import avatar2 from "../../public/assets/images/avatar/avatar2.png";
import avatar3 from "../../public/assets/images/avatar/avatar3.png";
import avatar4 from "../../public/assets/images/avatar/avatar4.png";
import avatar5 from "../../public/assets/images/avatar/avatar5.png";

export const notificationsData: INotification[] = [
  {
    id: 1,
    category: "Orders",
    message: "You received a new order #1024 from John Doe.",
    time: "5m ago",
    image: avatar3,
  },
  {
    id: 2,
    category: "Inventory",
    message: "Product 'Wireless Headphones' stock is running low.",
    time: "30m ago",
    image: avatar4,
  },
  {
    id: 3,
    category: "Payments",
    message: "Payment of $249.99 has been successfully processed.",
    time: "1h ago",
    image: avatar5,
  },
  {
    id: 4,
    category: "Shipping",
    message: "Order #1019 has been shipped to the customer.",
    time: "2h ago",
    image: avatar1,
  },
  {
    id: 5,
    category: "Customers",
    message: "New customer Maria Smith just signed up.",
    time: "3h ago",
    image: avatar2,
  },
];

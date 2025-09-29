import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  name: string;
  variants: string;
  category: string;
  price: string;
  status: "Delivered" | "Pending" | "Canceled";
  image: StaticImageData;
}

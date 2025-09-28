import Image from "next/image";
import productImgOne from '../../../../../public/assets/images/product/item1.jpg';
import productImgTwo from '../../../../../public/assets/images/product/item2.jpg';
import productImgThree from '../../../../../public/assets/images/product/item3.jpg';
import productImgFour from '../../../../../public/assets/images/product/item4.jpg';
import productImgFive from '../../../../../public/assets/images/product/item5.jpg';

export default function RecentOrders() {
  const orders = [
    {
      id: 1,
      product: "Macbook pro 13″",
      variants: "2 Variants",
      category: "Laptop",
      price: "$2399.00",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600",
      image:productImgOne
    },
    {
      id: 2,
      product: "Apple Watch Ultra",
      variants: "1 Variants",
      category: "Watch",
      price: "$879.00",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      image:productImgTwo
      },
    {
      id: 3,
      product: "iPhone 15 Pro Max",
      variants: "2 Variants",
      category: "Smart Phone",
      price: "$1869.00",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600",
      image: productImgThree
    },
    {
      id: 4,
      product: "iPad Pro 3rd Gen",
      variants: "2 Variants",
      category: "Electronics",
      price: "$1699.00",
      status: "Canceled",
      statusColor: "bg-red-100 text-red-600",
      image: productImgFour
    },
    {
      id: 5,
      product: "Airpods Pro 2nd Gen",
      variants: "1 Variants",
      category: "Accessories",
      price: "$240.00",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600",
      image: productImgFive
    },
  ];

  return (
    <div className="col-span-12 sm:col-span-7 xxl:col-span-7"> 
        <div className="card__wrapper">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
        <div className="flex gap-2">
          <button className="flex items-center font-semibold gap-1 border border-border dark:border-border-dark rounded-lg px-4 py-2.5 text-sm text-headingPrimary hover:bg-gray-50">
            <i className="fa-solid fa-sliders-simple"></i> Filter
          </button>
          <button className="border rounded-lg px-3 py-1.5 text-sm font-semibold text-headingPrimary hover:bg-gray-50">
            See all
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="order-table w-full text-left text-sm">
          <thead className="text-gray-500 border-b border-borderLight dark:border-borderLight-dark">
            <tr>
              <th className="py-2">Products</th>
              <th className="py-2">Category</th>
              <th className="py-2">Price</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-borderLight dark:border-borderLight-dark">
                <td className="py-3 flex items-center gap-3">
                  <Image
                    src={order.image}
                    alt={order.product}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{order.product}</p>
                    <p className="text-xs text-gray-500">{order.variants}</p>
                  </div>
                </td>
                <td className="py-3">{order.category}</td>
                <td className="py-3">{order.price}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

import { SidebarCategory } from "@/interface";

const sidebarData: SidebarCategory[] = [
  {
    id: 1,
    category: "Menu",
    items: [
      {
        id: 1,
        label: "Dashboard",
        icon: "fa-light fa-grid-2",
        link: "/dashboard",
      },
      {
        id: 2,
        label: "Products",
        icon: "fa-light fa-box",
        link: "/company/companies",
      },
    ],
  },
];

export default sidebarData;

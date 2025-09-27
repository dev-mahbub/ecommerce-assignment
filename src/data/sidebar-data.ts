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
  {
    id: 2,
    category: "Tables & Charts",
    items: [
      {
        id: 29,
        label: "Tables",
        icon: "fa-regular fa-pause",
        subItems: [{ label: "Table Basic", link: "/table/tables-basic" }],
      },
      {
        id: 30,
        label: "Charts",
        icon: "icon-apexcharts",
        subItems: [
          {
            label: "Apex Charts",
            link: "#",
            subItems: [
              { label: "Line Charts", link: "/elements/apex-charts-line" },
              { label: "Area Charts", link: "/elements/apex-charts-area" },
              { label: "Column Charts", link: "/elements/apex-charts-column" },
              { label: "Bar Charts", link: "/elements/apex-charts-bar" },
              { label: "Mixed Charts", link: "/elements/apex-charts-mixed" },
              { label: "Range Charts", link: "/elements/apex-charts-range" },
            ],
          },
        ],
      },
    ],
  },
];

export default sidebarData;

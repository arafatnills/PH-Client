import { Settings, SquareTerminal } from "lucide-react";

const prefix = "/admin";

export const adminRoute = [
  {
    title: "Management",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Doctor Approval",
        url: `${prefix}/approve-doctor`,
      },
    ],
  },
  {
    title: "App Settings",
    icon: Settings,
    items: [
      {
        title: "Settings",
        url: `${prefix}/settings`,
      },
    ],
  },
];

import { Settings, SquareTerminal } from "lucide-react";

const prefix = "/patient";

export const patientRoute = [
  {
    title: "Bookings",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Schedule History",
        url: `${prefix}/schedule-history`,
      },
      {
        title: "Payment History",
        url: `${prefix}/payment-history`,
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

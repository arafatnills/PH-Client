import { Settings, SquareTerminal } from "lucide-react";

const prefix = "/doctor";

export const doctorRoute = [
  {
    title: "Schedule",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Create Schedule",
        url: `${prefix}/schedule-create`,
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

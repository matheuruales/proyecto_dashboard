import type { IntegrationItem, MenuItem, SessionPoint, StatItem } from "../types";

export const menuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "home", active: true },
  { id: "orders", label: "Orders", icon: "orders", hasChevron: true },
  { id: "products", label: "Products", icon: "products", hasChevron: true },
  { id: "analytics", label: "Analytics", icon: "analytics" },
  { id: "marketing", label: "Marketing", icon: "marketing", hasChevron: true },
  { id: "messages", label: "Messages", icon: "messages", badge: "25" },
];

export const integrations: IntegrationItem[] = [
  { id: "jira", label: "Jira", icon: "jira" },
  { id: "slack", label: "Slack", icon: "slack" },
  { id: "intercom", label: "Intercom", icon: "intercom" },
];

export const statItems: StatItem[] = [
  {
    id: "sales",
    label: "Total Sales",
    value: "263k",
    delta: "15.6%",
    trend: "up",
    icon: "cart",
  },
  {
    id: "visitors",
    label: "Total Visitors",
    value: "35k",
    delta: "6.2%",
    trend: "down",
    icon: "users",
  },
  {
    id: "orders",
    label: "Total Orders",
    value: "165k",
    delta: "3.5%",
    trend: "up",
    icon: "bag",
  },
];

export const sessionsByDay: SessionPoint[] = [
  { day: 21, value: 1 },
  { day: 22, value: 7 },
  { day: 23, value: 2 },
  { day: 24, value: 8 },
  { day: 25, value: 3 },
  { day: 26, value: 15 },
];

export const sessionLabels = [21, 22, 23, 24, 25];

export type IconName =
  | "home"
  | "orders"
  | "products"
  | "analytics"
  | "marketing"
  | "messages"
  | "jira"
  | "slack"
  | "intercom"
  | "logout"
  | "search"
  | "bell"
  | "calendar"
  | "download"
  | "cart"
  | "users"
  | "bag"
  | "arrow-up"
  | "arrow-down"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "spark"
  | "money"
  | "expense";

export interface MenuItem {
  id: string;
  label: string;
  icon: IconName;
  active?: boolean;
  hasChevron?: boolean;
  badge?: string;
}

export interface IntegrationItem {
  id: string;
  label: string;
  icon: IconName;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  icon: IconName;
}

export interface SessionPoint {
  day: number;
  value: number;
}

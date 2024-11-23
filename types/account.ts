export interface Account {
  id: string;
  name: string;
  type: "Cash" | "Bank" | "Credit Card" | "Investment";
  balance: number;
  lastTransaction: number;
  trend: "up" | "down" | "stable";
  distribution?: number; // Optional distribution within the group
}

export interface AccountGroup {
  id: string;
  name: string;
  accounts: Account[];
  totalBalance: number;
}

"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AccountGroup } from "@/types/account";

// Updated sample data
const sampleAccountGroups: AccountGroup[] = [
  {
    id: "1",
    name: "Personal",
    totalBalance: 5500000,
    accounts: [
      {
        id: "1",
        name: "Cash Wallet",
        type: "Cash",
        balance: 500000,
        lastTransaction: -50000,
        trend: "down",
      },
      {
        id: "2",
        name: "Bank BCA",
        type: "Bank",
        balance: 5000000,
        lastTransaction: 1000000,
        trend: "up",
      },
    ],
  },
  {
    id: "2",
    name: "Business",
    totalBalance: 11000000,
    accounts: [
      {
        id: "3",
        name: "Business Cash",
        type: "Cash",
        balance: 1000000,
        lastTransaction: 0,
        trend: "stable",
      },
      {
        id: "4",
        name: "Business BNI",
        type: "Bank",
        balance: 10000000,
        lastTransaction: 500000,
        trend: "up",
      },
    ],
  },
  {
    id: "3",
    name: "Investments",
    totalBalance: 30000000,
    accounts: [
      {
        id: "5",
        name: "Reksadana",
        type: "Investment",
        balance: 10000000,
        lastTransaction: -200000,
        trend: "down",
      },
      {
        id: "6",
        name: "Saham",
        type: "Investment",
        balance: 20000000,
        lastTransaction: 1500000,
        trend: "up",
      },
    ],
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    case "stable":
      return <Minus className="h-4 w-4 text-gray-500" />;
  }
};

export function AccountList() {
  const [accountGroups, setAccountGroups] =
    useState<AccountGroup[]>(sampleAccountGroups);
  const [openGroups, setOpenGroups] = useState<string[]>(["1", "2", "3"]);

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prevOpenGroups) =>
      prevOpenGroups.includes(groupId)
        ? prevOpenGroups.filter((id) => id !== groupId)
        : [...prevOpenGroups, groupId],
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-normal text-lg sm:text-xl">Assets</CardTitle>
      </CardHeader>
      <CardContent className="p-2 sm:p-6">
        {accountGroups.map((group) => (
          <Collapsible
            key={group.id}
            open={openGroups.includes(group.id)}
            onOpenChange={() => toggleGroup(group.id)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between mb-2 hover:bg-gray-100 text-sm sm:text-base"
              >
                <span className="font-semibold">{group.name}</span>
                <span className="flex items-center">
                  {formatCurrency(group.totalBalance)}
                  {openGroups.includes(group.id) ? (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 ml-2" />
                  )}
                </span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {/* Mobile view */}
              <div className="space-y-2 md:hidden">
                {group.accounts.map((account) => (
                  <Card key={account.id} className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{account.name}</h3>
                      <span className="text-sm text-gray-500">
                        {account.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Balance</p>
                        <p>{formatCurrency(account.balance)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Last Transaction</p>
                        <p
                          className={
                            account.lastTransaction >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {account.lastTransaction >= 0 ? "+" : "-"}
                          {formatCurrency(Math.abs(account.lastTransaction))}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Trend</p>
                        <TrendIcon trend={account.trend} />
                      </div>
                      <div>
                        <p className="text-gray-500">Distribution</p>
                        <p>
                          {account.distribution
                            ? `${account.distribution.toFixed(2)}%`
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Desktop view */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Balance</TableHead>
                      <TableHead className="text-right">
                        Last Transaction
                      </TableHead>
                      <TableHead className="text-center">Trend</TableHead>
                      <TableHead className="text-right">Distribution</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {group.accounts.map((account) => (
                      <TableRow key={account.id}>
                        <TableCell>{account.name}</TableCell>
                        <TableCell>{account.type}</TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(account.balance)}
                        </TableCell>
                        <TableCell className="text-right">
                          <span
                            className={
                              account.lastTransaction >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {account.lastTransaction >= 0 ? "+" : "-"}
                            {formatCurrency(Math.abs(account.lastTransaction))}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <TrendIcon trend={account.trend} />
                        </TableCell>
                        <TableCell className="text-right">
                          {account.distribution
                            ? `${account.distribution.toFixed(2)}%`
                            : "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}

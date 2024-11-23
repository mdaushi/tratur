import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PlusCircle,
  TrendingUp,
  Bitcoin,
  CreditCard,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { useModalGroupAccount } from "@/hooks/use-group-account";

export function GroupAccountList() {
  const [searchTerm, setSearchTerm] = useState("");

  const { onOpenCreate } = useModalGroupAccount();

  const allGroups = [
    {
      name: "Investasi",
      icon: TrendingUp,
      color: "text-green-500",
      description:
        "Saham, obligasi, dan reksa dana untuk pertumbuhan jangka panjang.",
    },
    {
      name: "Crypto",
      icon: Bitcoin,
      color: "text-yellow-500",
      description:
        "Aset digital seperti Bitcoin dan Ethereum untuk diversifikasi portofolio.",
    },
    {
      name: "Debit",
      icon: CreditCard,
      color: "text-blue-500",
      description:
        "Akun bank dan kartu debit untuk manajemen keuangan sehari-hari.",
    },
    {
      name: "Other",
      icon: MoreHorizontal,
      color: "text-purple-500",
      description:
        "Investasi alternatif seperti properti, emas, atau kolektibel.",
    },
    {
      name: "Forex",
      icon: TrendingUp,
      color: "text-indigo-500",
      description:
        "Perdagangan mata uang asing untuk keuntungan jangka pendek.",
    },
    {
      name: "P2P Lending",
      icon: CreditCard,
      color: "text-red-500",
      description: "Platform pinjaman peer-to-peer untuk pendapatan pasif.",
    },
    {
      name: "ETFs",
      icon: TrendingUp,
      color: "text-orange-500",
      description:
        "Exchange-Traded Funds untuk diversifikasi portofolio yang mudah.",
    },
    {
      name: "Commodities",
      icon: MoreHorizontal,
      color: "text-brown-500",
      description:
        "Investasi dalam komoditas seperti emas, minyak, atau pertanian.",
    },
  ];

  const filteredGroups = allGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Cari grup investasi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      <ScrollArea className="h-[400px] pr-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredGroups.map((group) => (
            <Card key={group.name} className="overflow-hidden">
              <CardContent className="p-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-full p-4 text-left transition-colors hover:bg-accent hover:text-accent-foreground"
                  //   onClick={() => onGroupSelect(group.name)}
                >
                  <div className="flex items-center mb-2">
                    <group.icon className={`mr-2 h-6 w-6 ${group.color}`} />
                    <h3 className="text-lg font-semibold">{group.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {group.description}
                  </p>
                </motion.button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div>
        <Button className="w-full" onClick={onOpenCreate}>
          <PlusCircle className="mr-2 h-5 w-5" />
          Create New Group
          <span className="ml-2 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs">
            Custom
          </span>
        </Button>
      </div>
    </div>
  );
}

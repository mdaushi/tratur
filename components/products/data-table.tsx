"use client"

import { useState } from "react"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Button } from "../ui/button"
import { IconPlus } from "@tabler/icons-react"
import { DataTable as BaseDataTable } from "../data-table"
import Link from "next/link"

export function DataTable() {
  const [tabActive, setTabActice] = useState("barang")

  const getLinkCreate = () => {
    return tabActive === "barang"
      ? "/dashboard/products/create"
      : "/dashboard/warehouse/create"
  }
  return (
    <Tabs
      defaultValue="barang"
      value={tabActive}
      onValueChange={setTabActice}
      className="w-full flex-col justify-start gap-6"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
        <Select
          defaultValue="barang"
          value={tabActive}
          onValueChange={setTabActice}
        >
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="barang">Barang</SelectItem>
            <SelectItem value="gudang">Gudang</SelectItem>
          </SelectContent>
        </Select>
        <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="barang">Barang</TabsTrigger>
          <TabsTrigger value="gudang">Gudang</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          <Link href={getLinkCreate()}>
            <Button variant="outline" size="sm">
              <IconPlus />
              <span className="hidden lg:inline capitalize">
                Tambah {tabActive}
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <TabsContent
        value="barang"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <BaseDataTable data={[]} columns={[]} />
        </div>
      </TabsContent>
      <TabsContent
        value="gudang"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <BaseDataTable data={[]} columns={[]} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

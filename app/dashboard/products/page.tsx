import AppHeader from "@/components/app-header"
import { DataTable } from "@/components/products/data-table"
import { SectionCards } from "@/components/products/section-cards"

export default function Page() {
  return (
    <AppHeader title="Products">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />

            <DataTable />
          </div>
        </div>
      </div>
    </AppHeader>
  )
}

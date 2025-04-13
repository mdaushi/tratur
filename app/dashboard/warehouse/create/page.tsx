import AppHeader from "@/components/app-header"
import WarehouseForm from "@/components/wherehouse/form"

export default function CreateWarehousePage() {
  return (
    <AppHeader title="Gudang">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <WarehouseForm />
          </div>
        </div>
      </div>
    </AppHeader>
  )
}

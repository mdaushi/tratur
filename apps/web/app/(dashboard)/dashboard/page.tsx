import AppLayout from "@/components/app-layout"
import { BreadcrumbItem } from "@/types/breadcrumb"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
    },
]

export default function Page() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-1 flex-col gap-4 p-4">
                {Array.from({ length: 24 }).map((_, index) => (
                    <div
                        key={index}
                        className="aspect-video h-12 w-full rounded-lg bg-muted/50"
                    />
                ))}
            </div>
        </AppLayout>
    )
}

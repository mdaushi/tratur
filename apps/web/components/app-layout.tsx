import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import Breadcrumbs from "./breadcrumbs"
import { BreadcrumbItem } from "@/types/breadcrumb"
import React, { PropsWithChildren } from "react"

export default function AppLayout({
    breadcrumbs = [],
    children,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <React.Fragment>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
            </header>
            {children}
        </React.Fragment>
    )
}

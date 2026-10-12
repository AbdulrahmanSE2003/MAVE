import { Add01Icon } from "@hugeicons/core-free-icons"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { formatPostType } from "@/features/app/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ContentType } from "@/lib/generated/prisma/enums"

const TopBar = ({ type }: { type: ContentType }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/app">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/app/write">Write</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{formatPostType(type)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Action Buttons */}
      <Button
        asChild
        variant="outline"
        size="lg"
        className="gap-2 max-sm:w-full"
      >
        <Link href="/app/write">
          New Idea
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
        </Link>
      </Button>
    </div>
  )
}

export default TopBar

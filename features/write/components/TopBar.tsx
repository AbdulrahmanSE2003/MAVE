import { Add01Icon } from "@hugeicons/core-free-icons"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ContentType } from "@/lib/generated/prisma/enums"
import { getI18n } from "@/lib/i18n/server"

const TopBar = async ({ type }: { type: ContentType }) => {
  const { t, dict } = await getI18n()

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/app">
              {t("write.topBar.home")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/app/write">
              {t("write.topBar.write")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{dict.common.contentTypes[type]}</BreadcrumbPage>
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
          {t("write.topBar.newIdea")}
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
        </Link>
      </Button>
    </div>
  )
}

export default TopBar

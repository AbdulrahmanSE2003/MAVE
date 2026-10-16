"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ContentType } from "@/lib/generated/prisma/enums"
import { useI18n, useT } from "@/lib/i18n"

type SelectContentTypeProps = {
  value: ContentType
  onChange: (value: ContentType) => void
}

const SelectContentType = ({ value, onChange }: SelectContentTypeProps) => {
  const t = useT()
  const { dict } = useI18n()
  const types = Object.values(ContentType) as ContentType[]

  return (
    <Select value={value} onValueChange={(val) => onChange(val as ContentType)}>
      <SelectTrigger
        className="w-45 capitalize max-sm:w-full"
        aria-label={t("app.contentTypeSelect.ariaLabel")}
      >
        <SelectValue placeholder={t("app.contentTypeSelect.placeholder")} />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          {types.map((type) => (
            <SelectItem key={type} value={type} className={`capitalize`}>
              {dict.common.contentTypes[type]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectContentType

"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ContentType } from "../types"

type SelectContentTypeProps = {
  value: ContentType
  onChange: (value: ContentType) => void
}

const SelectContentType = ({ value, onChange }: SelectContentTypeProps) => {
  const types = Object.values(ContentType) as ContentType[]

  return (
    <Select value={value} onValueChange={(val) => onChange(val as ContentType)}>
      <SelectTrigger className="w-45 max-sm:w-full" aria-label="Content type">
        <SelectValue placeholder="Content Type" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectContentType

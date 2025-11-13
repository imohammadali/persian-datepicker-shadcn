"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import * as React from "react"
import { getDateLib } from "react-day-picker/persian"
import { cn } from "../lib/utils"
import { Button } from "./Button"
import { Calendar } from "./Calendar"
import { PersianCalendar } from "./PersianCalendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./Popover"

export default function DatePicker({language, placeholder}: {language: 'fa' | 'en', placeholder: string}) {
  const [date, setDate] = React.useState<Date>()
  const dateLib = getDateLib();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            language === 'fa' 
              ? dateLib.format(date, 'yyyy/MM/dd')
              : format(date, "PPP")
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {
            language === 'fa' ? (
                <PersianCalendar mode="single" selected={date} onSelect={setDate} autoFocus />
            ) : (
                <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
            )
        }
      </PopoverContent>
    </Popover>
  )
}
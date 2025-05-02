"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useHandleAddWork from "../hooks/work-experience/useHandleAddWork";

export function EndCalenderComponent() {
  const [date, setDate] = React.useState<string>();
  const { setValue } = useHandleAddWork();
  console.log("End", date)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[190px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              const formatted = format(selectedDate, "yyyy-MM-dd");
              setValue("end_date", formatted);
              setDate(formatted);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

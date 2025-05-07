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

interface EndCalenderComponentProps {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}

export function EndCalenderComponent({
  value,
  onChange,
}: EndCalenderComponentProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[190px] justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {value ? format(value, "PPP") : <span>End Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value ? new Date(value) : undefined}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              const formatted = format(selectedDate, "yyyy-MM-dd");
              onChange?.(formatted);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

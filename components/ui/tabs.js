import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

function TabsList({ className, ...props }) {
  return <TabsPrimitive.List className={cn("ui-tabs-list", className)} {...props} />
}

function TabsTrigger({ className, ...props }) {
  return <TabsPrimitive.Trigger className={cn("ui-tabs-trigger", className)} {...props} />
}

function TabsContent({ className, ...props }) {
  return <TabsPrimitive.Content className={cn("ui-tabs-content", className)} {...props} />
}

export { Tabs, TabsContent, TabsList, TabsTrigger }

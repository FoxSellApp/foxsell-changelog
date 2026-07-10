import * as SheetPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

function SheetOverlay({ className, ...props }) {
  return <SheetPrimitive.Overlay className={cn("ui-sheet-overlay", className)} {...props} />
}

function SheetContent({ className, children, side = "right", ...props }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content className={cn("ui-sheet-content", `ui-sheet-${side}`, className)} {...props}>
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return <div className={cn("ui-sheet-header", className)} {...props} />
}

function SheetTitle({ className, ...props }) {
  return <SheetPrimitive.Title className={cn("ui-sheet-title", className)} {...props} />
}

function SheetDescription({ className, ...props }) {
  return <SheetPrimitive.Description className={cn("ui-sheet-description", className)} {...props} />
}

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger }

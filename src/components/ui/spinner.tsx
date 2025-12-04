import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="flex items-center gap-1" >
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-5 animate-spin", className)}
        {...props}
      />
      <h2>Carregando...</h2>
    </div>
  )
}

export { Spinner }

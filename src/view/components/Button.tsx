import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";
import { sleep } from "../../app/utils/sleep";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  sleep(1111111)
  return (
    <button {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-blue-900 hover:bg-blue-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all flex items-center justify-center',
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6" />}

    </button>
  )
}

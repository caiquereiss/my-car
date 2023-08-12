import { ArrowUpIcon } from "@radix-ui/react-icons";

export function FooterPage() {
  return (
    <div className="flex  flex-col items-center justify-center bg-white text-center  p-4 shadow-[1px_1px_20px_-10px_#000] lg:px-36 text-base font-medium">
      <ArrowUpIcon className="w-10 h-10 animate-pulse" />
      <a href="#header" className="animate-pulse">
        Ir para o top
      </a>
    </div>
  )
}

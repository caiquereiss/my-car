import { ArrowUpIcon } from "@radix-ui/react-icons";

export function FooterPage() {
  return (
    <div className="flex  flex-col items-center justify-center bg-white text-center  p-4 shadow-[1px_1px_20px_-10px_#000] lg:px-36 text-base font-medium">
      <a href="#header" className="animate-pulse">
        <ArrowUpIcon className="w-10 h-10" />
      </a>
    </div>
  )
}

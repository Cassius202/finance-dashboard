import { navLinks } from "@/constants/assets"
import { cn } from "@/lib/cn"
import Link from "next/link"

const NavigationBar = ( {isClosed} : {isClosed: boolean}  ) => {
  return (
    <nav className={cn("mt-2 px-2 transition-[width_padding_margin]", isClosed && 'px-2')}>
      { navLinks.map((item) => {
        return (
          <div key={item.id} className="mb-2 text-xs">
            {!isClosed && <h3 className="text-slate-600 dark:text-slate-400 mb-1">{item.heading}</h3>}
            <menu className="flex flex-col gap-1">
              {item.links.map((link) => 
                <Link key={link.title} href={link.href} 
                className={cn("flex gap-2 p-2 pl-3 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-blue-800/90 relative group overflow-visible" ,link.variant === 'danger' && 'text-red-600 dark:text-red-400 hover:bg-red-500 dark:hover:bg-amber-900/50', isClosed && 'items-center justify-center p-2' )}
                >
                  <div className={cn("rounded dark:group-hover:text-blue-200 group-hover:text-primary transition-colors", link.variant === 'danger' && "group-hover:text-white dark:group-hover:text-white")}>
                    <link.icon size={18} />
                  </div>
                  <span className={cn(link.variant === 'danger' && "group-hover:text-white", isClosed && 'overflow-hidden p-0 m-0 hidden w-0 transition-[width_padding]' )} >
                    {link.title}
                  </span>
                  {link.badge && !isClosed && <div className="ml-auto absolute right-6 bg-slate-200 rounded-full size-4.25 flex items-center justify-center text-black text-[0.65rem]">
                    {link.badge}
                  </div>}
                  { isClosed && <span className="tooltip">
                    {link.title}
                  </span> }
                </Link>
              )}
            </menu>
          </div>
        )
      } ) }
    </nav>
  )
}

export default NavigationBar
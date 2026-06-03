import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example({ links = [], onSelect = () => {} }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white/15 border border-white/10 backdrop-blur-xl px-3 py-2 text-sm font-semibold text-gray-900 shadow-lg shadow-black/10 dark:bg-white/10 dark:text-white dark:border-white/10 transition hover:scale-110">
        Menu
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 h-5 w-5 text-gray-400 dark:text-gray-300"
        />
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white/15 border border-white/10 backdrop-blur-2xl shadow-lg shadow-black/20 outline-1 outline-black/5 dark:bg-white/10 dark:border-white/10 dark:outline-white/10">
        <div className="py-1">
          {links.length > 0 ? (
            links.map((link) => (
              <MenuItem key={link.href}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => onSelect(link.href)}
                    className={`block w-full px-4 py-2 text-left text-sm transition ${
                      active
                        ? "bg-accent text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-accent hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </MenuItem>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
              No links available
            </div>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}

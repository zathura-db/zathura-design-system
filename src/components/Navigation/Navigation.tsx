import { LinkText } from "../Link/Link";

/**
 * Navigation component – top navigation bar.
 */
export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex bg-white h-16 border-b border-gray-200 shadow-md">
      <div className="flex items-center">
        <a href="/" className="flex h-full items-center cursor-pointer">
          <div className="flex h-10 w-10 bg-themeRed rounded-full items-center justify-center mx-4 text-white text-xs font-semibold border border-gray-200 shadow-md hover:bg-themeRedOffset cursor-pointer">
            DB
          </div>
        </a>
      </div>
    </nav>
  );
}

export { LinkText };

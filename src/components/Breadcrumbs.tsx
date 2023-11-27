import { Children } from "react";

interface BreadcrumbsProps {
  children?: React.ReactNode;
}

export const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  return (
    <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      {Children.map(children, (child) => (
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-muted-foreground hover:text-accent-foreground"
            href="#"
          >
            {child}
          </a>
          <svg
            className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
      ))}
      <li
        className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
        aria-current="page"
      >
        Application
      </li>
    </ol>
  );
};

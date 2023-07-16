'use client';

import * as React from 'react';
import classNames from 'classnames';
import { CheckSelectorProps, Options } from '~/shared/types';

const CheckSelector: React.FC<CheckSelectorProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative m-2 w-fit">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={classNames('absolute left-0 top-12 z-20 w-fit min-w-full rounded-lg bg-white p-3 shadow', {
          hidden: !isOpen,
        })}
      >
        {/* <h6 className="mb-3 text-sm font-medium text-gray-900">Category</h6> */}
        <ul className="space-y-2 text-base" aria-labelledby="dropdownDefault">
          {options.map((item: Options, key: number) => (
            <li key={key} className="flex items-center">
              <input
                id={item.value}
                type="checkbox"
                value={item.value}
                className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
              />
              <label htmlFor={item.value} className="ml-2 cursor-pointer text-base font-medium text-gray-900">
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckSelector;

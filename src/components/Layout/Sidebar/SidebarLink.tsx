/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useEffect } from 'react';
import * as React from 'react';
import cn from 'classnames';
import { IconNavArrow } from 'components/Icon/IconNavArrow';
import Link from 'next/link';

interface SidebarLinkProps {
  href: string;
  selected?: boolean;
  title: string;
  level: number;
  wip: boolean | undefined;
  icon?: React.ReactNode;
  heading?: boolean;
  isExpanded?: boolean;
  isBreadcrumb?: boolean;
  hideArrow?: boolean;
  isPending: boolean;
}

export function SidebarLink({
  href,
  selected = false,
  title,
  wip,
  level,
  heading = false,
  isExpanded,
  isBreadcrumb,
  hideArrow,
  isPending,
}: SidebarLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (selected && ref && ref.current) {
      // @ts-ignore
      if (typeof ref.current.scrollIntoViewIfNeeded === 'function') {
        // @ts-ignore
        ref.current.scrollIntoViewIfNeeded();
      }
    }
  }, [ref, selected]);

  let target = '';
  if (href.startsWith('https://')) {
    target = '_blank';
  }
  return (
    <Link href={href}>
      <a
        ref={ref}
        title={title}
        target={target}
        aria-current={selected ? 'page' : undefined}
        className={cn(
          'p-2 pr-2 w-full rounded-none lg:rounded-r-lg text-left hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between',
          {
            'my-6': heading,
            'text-primary dark:text-primary-dark': heading && !isBreadcrumb,
            'text-sm pl-6': level > 0,
            'pl-5': level < 2,
            'text-base font-bold': level === 0,
            'dark:text-primary-dark text-primary ': level === 0 && !selected,
            'text-base text-link dark:text-link-dark': level === 1 && selected,
            'dark:text-primary-dark text-primary': heading,
            'text-base text-secondary dark:text-secondary-dark':
              !selected && !heading,
            'text-base text-link dark:text-link-dark bg-highlight dark:bg-highlight-dark border-blue-40 hover:bg-highlight hover:text-link dark:hover:bg-highlight-dark dark:hover:text-link-dark':
              selected,
            'dark:bg-gray-70 bg-gray-3 dark:hover:bg-gray-70 hover:bg-gray-3':
              isPending,
          }
        )}>
        {/* This here needs to be refactored ofc */}
        <span
          className={cn({
            'text-gray-400 dark:text-gray-500': wip,
          })}>
          {title}
        </span>
        {isExpanded != null && !heading && !hideArrow && (
          <span
            className={cn('pr-1', {
              'text-link': isExpanded,
              'text-gray-30': !isExpanded,
            })}>
            <IconNavArrow displayDirection={isExpanded ? 'down' : 'right'} />
          </span>
        )}
      </a>
    </Link>
  );
}

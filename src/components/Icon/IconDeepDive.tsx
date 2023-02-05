/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import { memo } from 'react';

export const IconDeepDive = memo<JSX.IntrinsicElements['svg']>(
  function IconDeepDive({ className }) {
    return (
      <svg
        className={className}
        width="0.78em"
        height="0.78em"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.62728 12.3491V13.6825H6.29395V12.3491H0.960612C0.783801 12.3491 0.614232 12.2789 0.489207 12.1539C0.364183 12.0288 0.293945 11.8593 0.293945 11.6825V1.01579C0.293945 0.838979 0.364183 0.669409 0.489207 0.544385C0.614232 0.419361 0.783801 0.349123 0.960612 0.349123H4.96061C5.339 0.348674 5.71313 0.42896 6.05803 0.584621C6.40292 0.740282 6.71063 0.967734 6.96061 1.25179C7.2106 0.967734 7.51831 0.740282 7.8632 0.584621C8.20809 0.42896 8.58222 0.348674 8.96061 0.349123H12.9606C13.1374 0.349123 13.307 0.419361 13.432 0.544385C13.557 0.669409 13.6273 0.838979 13.6273 1.01579V11.6825C13.6273 11.8593 13.557 12.0288 13.432 12.1539C13.307 12.2789 13.1374 12.3491 12.9606 12.3491H7.62728ZM12.2939 11.0158V1.68246H8.96061C8.60699 1.68246 8.26785 1.82293 8.0178 2.07298C7.76776 2.32303 7.62728 2.66217 7.62728 3.01579V11.0158H12.2939ZM6.29395 11.0158V3.01579C6.29395 2.66217 6.15347 2.32303 5.90342 2.07298C5.65337 1.82293 5.31423 1.68246 4.96061 1.68246H1.62728V11.0158H6.29395Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

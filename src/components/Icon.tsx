import type { ReactNode, SVGProps } from 'react'

type IconName =
  | 'arrow'
  | 'check'
  | 'edit'
  | 'file'
  | 'graduate'
  | 'lock'
  | 'monitor'
  | 'plus'
  | 'save'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export function Icon({ name, className = '', ...props }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </>
    ),
    file: (
      <>
        <path d="M6 2h9l5 5v15H6z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6M9 18h4" />
      </>
    ),
    graduate: (
      <>
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 10v5c3 2 9 2 12 0v-5" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4M8 9h8M8 12h5" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    save: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M8 4v6h8V4M8 20v-6h8v6" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

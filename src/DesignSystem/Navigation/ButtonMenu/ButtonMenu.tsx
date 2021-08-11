import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonMenuProps = {
  children: React.ReactNode
  isActive?: boolean
  className?: string
  icon?: JSX.Element
  href: string
} & ButtonTypes

export default function ButtonMenu({
  children,
  className,
  isActive = false,
  href,
  icon
}: ButtonMenuProps) {
  return (
    <S.Wrapper href={href} className={className} isActive={isActive}>
      {icon}
      {children}
    </S.Wrapper>
  )
}

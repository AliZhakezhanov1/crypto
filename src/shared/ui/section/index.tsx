import { FC, PropsWithChildren } from 'react'
import './styles.scss'
import { ISection } from './types'

export const Section: FC<PropsWithChildren<ISection>> = ({ className, children }) => {
	return <section className={className ? 'section' + className : 'section'}>{children}</section>
}

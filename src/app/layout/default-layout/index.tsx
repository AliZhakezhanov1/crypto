import { FC, PropsWithChildren } from 'react'
import './styles.scss'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return <main className='page_wrapper'>{children}</main>
}

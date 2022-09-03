import { FC, PropsWithChildren } from 'react'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return <main>{children}</main>
}

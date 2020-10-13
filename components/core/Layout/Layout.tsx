import cn from 'classnames'
import { FC } from 'react'
import s from './Layout.module.css'
import { CommerceProvider } from '@lib/bigcommerce'
import { Navbar, Featurebar, Footer } from '@components/core'
import { Container, Sidebar } from '@components/ui'
import { CartSidebarView } from '@components/cart'
import { UIProvider, useUI } from '@components/ui/context'

interface Props {
  className?: string
  children?: any
}

const CoreLayout: FC<Props> = ({ className, children }) => {
  const rootClassName = cn(s.root, className)
  const { displaySidebar, closeSidebar } = useUI()

  return (
    <div className={rootClassName}>
      <Featurebar
        title="Free Standard Shipping on orders over $99.99"
        description="Due to COVID-19, some orders may experience processing and delivery delays."
      />
      <Container>
        <Navbar />
      </Container>
      <main className={s.main}>{children}</main>
      <Footer />
      <Sidebar show={displaySidebar} close={closeSidebar}>
        <CartSidebarView />
      </Sidebar>
    </div>
  )
}

const Layout: FC<Props> = (props) => (
  <CommerceProvider locale="en-us">
    <UIProvider>
      <CoreLayout {...props} />
    </UIProvider>
  </CommerceProvider>
)

export default Layout

import Button from 'react-bootstrap/Button'

import SEO from 'components/SEO'
import { APP_NAME } from 'utils/constants'

export default function Index() {
  return (
    <div className="container">
      <SEO />

      <main className="d-flex">
        <h1>{APP_NAME} is coming.</h1>
      </main>
    </div>
  )
}

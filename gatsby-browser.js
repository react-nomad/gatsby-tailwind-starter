import './src/styles/global.css'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element }) => {
    return (
        <Layout>
            {element}
        </Layout>
    )
}
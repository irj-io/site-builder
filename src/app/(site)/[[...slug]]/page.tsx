import { DefaultPage } from '@/components/default-page'
import { bindGenerateStaticParams } from '@/utils/bind-generate-static-params'

export const dynamicParams = false

export const generateStaticParams = bindGenerateStaticParams()

export default DefaultPage

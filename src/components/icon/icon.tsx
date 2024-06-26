import * as S from './icon_style'

const Icon = ({ src, alt }: { src: string, alt: string }) => {
    return <S.Icon src={`${src}`} alt={`${alt}`} />
}

export default Icon
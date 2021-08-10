import * as S from './styles'
const Main = ({
  title = 'Next Blog',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/brain-logo-400.png"
      alt="Brain image - Logo Brain and Mind"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer front computer"
    />
  </S.Wrapper>
)

export default Main

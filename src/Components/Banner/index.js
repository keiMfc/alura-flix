import { styled } from 'styled-components'
import background from '../../img/banner.png'
import TitleCategory from '../TitleCategory'

const ContainerBanner = styled.section`
display: flex;
flex-direction: column;
background-image: url(${background});
width: 100%;
height: 52rem;
justify-content: flex-end;
align-items: center;
box-sizing: border-box;
`
const ContainerContent = styled.div`
display: flex;
flex-direction: row;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(23, 23, 23, 1) 99.99999999999997%);
width: 100%;
height: 34rem;
justify-content: space-between;
gap: 2.5rem ;
align-items: center;
box-sizing: border-box;
padding: 0px 2.5rem;
`
const ContainerText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
box-sizing: border-box;
align-Self: stretch;
width: 49%;
`

const TitleMedium = styled.h2`
    text-align: left;
    margin-top: 24px;
    font-size: var(--title-medium);
    color: var(--color-gray-light);
`
const Description = styled.p`
    text-align: left;
    margin-top: 24px;
    font-size: var(--body-medium) ;
    color: var(--color-gray-light);
`
const Video = styled.div`    
    background-color: #000 ;
    width: 49%;
    height:  333px;
    border-radius: 4px;
    border: 4px solid rgba(107, 209, 255, 1);
    box-sizing: border-box;
`
function Banner(){
    return <ContainerBanner>
                <ContainerContent>
                    <ContainerText>
                        <TitleCategory/>
                        <TitleMedium>Challenge React</TitleMedium>
                        <Description>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Description>
                    </ContainerText>
                    <Video />
                </ContainerContent>
            </ContainerBanner>
}

export default Banner


/*
const WrapperText = styled("div")({
  width: `661px`,
});


const ChallengeReact = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(245, 245, 245, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `400`,
  fontSize: `46px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `24px 0px 0px 0px`,
});

const EsteChallengeEsUnaFo = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(245, 245, 245, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `300`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `661px`,
  margin: `24px 0px 0px 0px`,
});

const Player = styled("div")({
  backgroundImage: `url(${PlayerImage})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  border: `4px solid rgba(107, 209, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `4px`,
  width: `646px`,
  height: `333.58px`,
  margin: `0px 0px 0px 53px`,
}); */



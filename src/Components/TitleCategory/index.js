import { styled } from 'styled-components';

const ContainerCategory = styled.div`
display: inline-flex;
padding: 11px 20px;
justify-content: center;
align-items: center;
border-radius: 4px;
background: var(--color-frontend);
`

const Category = styled.h1`
color: var(--color-gray-light);
text-align: center;
font-size: var(--title-big);
font-weight: 500;
`

function TitleCategory(){
    return <ContainerCategory>
        <Category>Front end</Category>
    </ContainerCategory>
}

export default TitleCategory

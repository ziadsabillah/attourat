import DetailsPageHeader from "../components/DetailsPageHeader";
import AutoContainer from "../components/AutoContainer";
import Layout from "../components/Layout";
import CallToActionSection from "../components/Sections/CallToActionSection";
import VideoSection from "../components/Sections/VideoSection";
import styled from 'styled-components'

const InnerContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 50px;
    margin-top: 90px;
`;


const Row = styled.div`

    display: flex;
    flex-wrap: wrap;
`;

const LeftColumn = styled.div`
    position: relative;
    margin-bottom: 40px;

    flex: 50%;

    @media screen and (max-width: 800px) {
        flex: 100%;
        text-align: center;
    }

    h2 {
        position: relative;
        color: #242424;
        font-size: 35px;
        font-weight: 600;
        line-height: 1.5em;
        margin-bottom: 18px;
    }

`;

const Paragraph = styled.div`
    position: relative;
    color: #797979;
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: 18px;
    font-family: 'Open Sans', sans-serif;
    /* @media screen and (max-width: 800px) {
        text-align: center;
    } */
`;

const List = styled.ul`
    position: relative;

    li {
        position: relative;
        color: #242424;
        font-size: 20px;
        font-style: italic;
        padding-left: 40px;
        margin-bottom: 15px;
        font-family: 'Lora', sans-serif;
    }
    li::before {
        position: absolute;
        content: ' ';
        background: url('/icons/check.png') center top;
        background-repeat: no-repeat;
        background-size: contain;
        left: 0px;
        top: 0px;
        height: 30px;
        width: 30px;
        line-height: 1em;
        font-size: 18px;
        font-family: "Flaticon";
    }
`;



const RightColumn = styled.div`
    position: relative;
    margin-top: 40px;

    flex: 40%;
    @media screen and (max-width: 800px) {
        flex: 100%;
        padding-top: 56.25%;
    }
`;


export default function About() {

    const lorem = `
    Pour les professionnels et particuliers partout au Maroc. Notre entreprise met son savoir-faire et ses compétences au service de ces projets que ce soit un gros ou un petit chantier. Fournir des prestations de qualité dans les délais fixés, maintenir la croissance de l’entreprise par le contrôle d’une saine gestion, et l’investissement durable en recherche et développement, tels sont les piliers du Société ATOURRATE.
Dans un environnement à très forte concurrence, Société ATOURRATE considère depuis toujours que la réussite de son équipe est due à la qualité de son capital humain. Grâce à la mise en place de plans de formation et l’accompagnement au développement personnel et professionnel de nos ressources humaines. Aujourd’hui, le groupe est très bien implanté au niveau de toutes les villes du Maroc. Dotée d’une forte notoriété nationale, l’entreprise bénéficie d’une très bonne image et connue par le sérieux de ses prestations.`

    return (
        <>
            <Layout title="Présentation">
                <DetailsPageHeader section={'Présentation'} />
                <AutoContainer>
                <InnerContainer>
                        <Row>
                            <LeftColumn>
                                <h2>STE Atourrate</h2>
                                <Paragraph>
                                    Construction, travaux divers et publiques, négoce, travaux routiers et voirie, assainissement-Conduites, étanchéité-Isolation, revêtement.
                                </Paragraph>
                                <List>
                                    <li>Construction</li>
                                    <li>Travaux divers et publiques</li>
                                    <li>Travaux routiers et voirie</li>
                                    <li>Assainissement-Conduite</li>
                                </List>
                            </LeftColumn>
                            <RightColumn>
                                 <div className="react-player">
                                     <img src='/img/logofooter.png' alt="Image Featured" />
                                 </div>
                            </RightColumn>
                        </Row>
                    </InnerContainer>
                </AutoContainer>
                <VideoSection />
                <CallToActionSection />
            </Layout>
        </>
    )
}
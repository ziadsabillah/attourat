import styled, { css } from 'styled-components'
import AutoContainer from '../AutoContainer';
import CustomCarousel from '../CustomCarousel';
import { SectionHeader } from '../SectionHeader';
import { useRef, useEffect } from 'react'


const InnerContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 80px;
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

const VideoSection = () => {

    // let video = useRef(null)

    // useEffect(() => {
    //     video.play()
    // }, [])

    return (
        <>
            <div style={{
                position: 'relative',
                marginTop: '-166px',
                padding: '194px 0 100px',
                // backgroundImage: "url('/img/7.jpeg')",
                backgroundColor: '#f4f4f4',
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat'
            }}>
                <AutoContainer>
                    {/* <InnerContainer>
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
                                     <img src='/img/d.jpeg' alt="Image Featured" />
                                 </div>
                            </RightColumn>
                        </Row>
                    </InnerContainer> */}
                    <SectionHeader>
                        <h2>Nos Services</h2>
                    </SectionHeader>
                    <CustomCarousel />
                </AutoContainer>
            </div>
        </>
    )
}

export default VideoSection;
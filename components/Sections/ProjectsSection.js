import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import  cardsDefault from '../../data/cardsDefault.js';
import AutoContainer from '../AutoContainer'
import { SectionHeader } from '../SectionHeader'


const ProjectWrapper = styled.section`
    position: relative;
    padding: 95px 0px 70px;
    min-height: 550px;
    background: #242424;
`;

const FilterTabs = styled.ul`
    position: relative;
    margin-bottom: 40px;
`;

const Filter = styled.li`
    position: relative;
    color: #d3d3d3;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    padding-left: 20px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    label::after {
        position: absolute;
        content: '';
        left: 23px;
        top: 33px;
        width: 10px;
        height: 1px;
        background: #303030;

        @media screen and (max-width: 1023px) {
        display: none;
        content: none;
        width: 0;
        height: 0;
    }
    }

    
    > input {
        width: 0;
        height: 0;

        &:checked {
            color: #FC6C58 !important;
            border-color: blue;
        }
    }

    > label {
        margin: 15px 15px 15px 0;
        padding: 6px 20px;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: #FC6C58;
            cursor: pointer;
        }
    }
    
`;

const Card = styled.div`

    
`;

const CardContent = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    margin: 5px;

    img {
        width: 100%;
        min-height: 100%;
        height: auto;
    }

    &:hover img {
        opacity: 0.4;
        transition: 0.3s;
    }

    &:hover {
        background: #000;
        .project-info {
        opacity: 1 ;
    }
    }

    
`;

const ProjectInfo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    opacity: 0;
    transition: 0.2s linear;

    h4 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }

    h4 a {
        color: #fff;
    }

    h4 a:hover {
        color: #FC6C58;
    }
    p {
        padding: 0;
        margin: 0;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
    }
`;




const filtersDefault = [
    { label: "Tout", isChecked: true },
    
];


const ProjectSection = () => {

    const [cards, setCards] = useState(null);

    useEffect(() => {
        setCards(cardsDefault);
    }, [])


    return (
        <>
            <ProjectWrapper>
                <AutoContainer>
                    <SectionHeader
                        style={{ color: '#d3d3d3' }}
                    >
                        <h2>Quelques Références</h2>
                    </SectionHeader>
                    <ResponsiveMasonry
                        className="masonry-wrapper"
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry className="masonry">
                        {
                                cards?.map((card, index) => (
                                    <Card key={card.id} className='card'>
                                        <CardContent>
                                            <img src={card.imgPath} />
                                            <ProjectInfo className="project-info">
                                                <h4><a href="/">{card.projectName}</a></h4>
                                            </ProjectInfo>
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </AutoContainer>
            </ProjectWrapper>




















            {/* <Container>
                 <IsoTopeGrid
                    className="grid"
                    gridLayout={cardsDefault}
                    noOfCols={4}
                    unitWidth={200}
                    unitHeight={350}
                    filters={filters}
                >
                    {cardsDefault.map(card => (
                        <Card key={card.id} className={`card ${card.filter[0]}`}>
                            <CardContent>
                                <img src="/img/team-4.jpg" />
                                <ProjectInfo className="project-info">
                                    <h4><a href="#">Projet 1</a></h4>
                                    <p>Description</p>
                                </ProjectInfo>
                            </CardContent>
                        </Card>
                    ))}

                </IsoTopeGrid> 
            </Container> */}

        </>
    )

}

export default ProjectSection;
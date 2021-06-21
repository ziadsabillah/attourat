import styled from "styled-components";
import AutoContainer from "../AutoContainer";
import { SectionHeader } from "../SectionHeader";
import { Form, FormGroup, Input, SubmitButton, TextArea } from '../General'
import { useState, useRef } from "react";


const ContactSection = styled.section`
    position: relative;
    padding: 90px 0px 60px;
    background-color: #f8f8f8;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const LeftColumn = styled.div`
    @media (min-width: 992px) {
        flex: 66.666667%;
    }

    @media (max-width: 500px) {
        margin-top: 1.4em;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

`;

const RightColumn = styled.div`
    @media (min-width: 992px) {
        flex: 33.33333%;
    }

    @media (max-width: 500px) {
        margin-top: 1.4em;
        padding: 10px;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

const InfoTitle = styled.h2`
    position: relative;
    color: #242424;
    font-size: 26px;
    font-weight: 600;
    padding-bottom: 12px;
    margin-bottom: 40px;

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 40px;
        height: 2px;
        background-color: #FC6C58;
    }
`;

const InfoList = styled.ul`
    position: relative;

    li {
        position: relative;
        margin-bottom: 15px;
        padding-left: 40px;
        color: #242424;
        font-weight: 500;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }
`;

const SmallHeader = styled.h3`
    
    position: relative;
    color: #242424;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4em;
    margin-top: 50px;
`;

const Times = styled.div`
    position: relative;
    color: #797979;
    font-size: 15px;
    font-weight: 500;
    padding-left: 40px;
    margin-top: 8px;
    line-height: 2em;
    font-family: 'Poppins', sans-serif;
`;




const Contact = () => {


    async function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {};

        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
    }
    return (
        <>

            <ContactSection>
                <AutoContainer>
                    <SectionHeader>
                        <h2>Envoyer nous un message</h2>
                        <p>Vous souhaitez nous contacter et avoir plus d’informations ? Il vous suffit de remplir le formulaire ci-dessous. Nous ferons en sorte de vous répondre dans les plus brefs délais.</p>
                    </SectionHeader>
                    <Row className="clearfix">
                        <LeftColumn>
                            <Form onSubmit={handleOnSubmit} method='post'>
                                <Row>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Votre Nom" />
                                    </FormGroup>

                                </Row>
                                <Row>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="tel"
                                            placeholder="Telephone" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Sujet" />
                                    </FormGroup>
                                </Row>
                                <FormGroup>
                                    <TextArea
                                        name="message"
                                        placeholder="Ecrire votre message..."
                                    />
                                </FormGroup>

                                <SubmitButton>
                                    Envoyer
                                </SubmitButton>
                            </Form>
                        </LeftColumn>
                        <RightColumn>
                            <InfoTitle>STE Atourrate</InfoTitle>
                            <InfoList>
                                <li>
                                    Lot12 Moulin Idrissia Etg2 Bur17 Et.2. Atlas, Fès 30000, Maroc
                                </li>
                                <li>
                                    +212 05356-44048
                                </li>
                                <li>
                                    contact@atourrate.com
                                </li>
                            </InfoList>
                        </RightColumn>
                    </Row>
                </AutoContainer>
            </ContactSection>

        </>
    )
}

export default Contact;
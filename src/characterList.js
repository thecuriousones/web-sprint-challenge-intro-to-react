import React from 'react';
import styled from 'styled-components';



function CharacterList(props) {
    return (
        <div>
            {props.characters.map(character => {
                return (
                    <CardWrapper>
                        <Name>Name: {character.name}</Name>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Eye Color: {character.eye_color}</h3>
                        <h3>Hair Color: {character.hair_color}</h3>
                        <h3>Birth Year: {character.birth_year}</h3>
                        <h3>Films: {character.films}</h3>
                    </CardWrapper>
                );
            })}
        </div>         
    );
}


export default CharacterList


const CardWrapper = styled.div`
border: 2px solid black;
margin-left: 3rem;
margin-right: 3rem;
margin-bottom: 3rem;`

const Name = styled.h2`
text-decoration: underline;`

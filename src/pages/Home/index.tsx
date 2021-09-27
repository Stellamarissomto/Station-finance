import React from 'react';
import Nav from '../../components/Nav';
import HomeCard from '../../components/HomeCard'
import { images } from '../../images'
import { HeroText, Section, Station,
     HeroP, CardImage, CardText} from './style'

const Home: React.FC = () => {
    return (
        <div>
            <Nav />
            <Section>   
                <HeroText>Welcome to</HeroText>
                <Station src={images.station} alt='station' />

                <HeroP>Select a service to get started </HeroP>
                <div>
                    <HomeCard>
                        <CardImage src={images.router_icon} alt='icon' />
                        <CardText>Smart Order Router</CardText>
                    </HomeCard>
                    <HomeCard>
                        <CardImage src={images.search_icon} alt='icon' />  
                        <CardText>Derivative Aggregator</CardText>
                    </HomeCard>
                    <HomeCard>
                        <CardImage src={images.bar_icon} alt='icon' />
                        <CardText>Subgraph</CardText>
                    </HomeCard>
                </div>
            </Section>
        </div>
    )
}

export default Home 

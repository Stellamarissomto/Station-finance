import React from 'react';
import Nav from '../../components/Nav';
import HomeCard from '../../components/HomeCard'
import { images } from '../../images'
import { HeroText, Section, Station,
     HeroP, CardImage, CardText, Welcome, Card} from './style'

const Home: React.FC = () => {
    return (
        <div>
            <Nav />
            <Section>   
                <Welcome>
                <HeroText>Welcome to</HeroText>
                <Station src={images.station} alt='station' />
                </Welcome>

                <HeroP>Select a service to get started </HeroP>
                <Card>
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
                </Card>
            </Section>
        </div>
    )
}

export default Home 

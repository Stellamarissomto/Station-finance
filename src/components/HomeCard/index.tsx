import React from 'react';
import { Card } from './style'

const HomeCard: React.FC = ({children}) => {
    return (
        <Card>
          {children}  
        </Card>
    )
}

export default HomeCard 

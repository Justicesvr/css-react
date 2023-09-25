import styled from 'styled-components';
import GTImage from './assets/GT.jpeg'; 
import { Star } from 'lucide-react';


const CardBackground = styled.div `
  width: 100vw;
  height: 100vh;
  margin: 0;

  background-image: url("./leaf.jpg");
  background-size: cover; 
  overflow: hidden;
`;

const CardContainer= styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  backdrop-filter: blur(20px);

  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: transparent;
  width: 550px;
  height: 300px;
  border-radius: 0.75rem;

  margin: auto;

  position: relative;
  top: 40%;
  transform: translateY(-50%);

`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
`;

const CardImage = styled.img`
  width:100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  color: #1a1a1a;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #888;
`;

const CardFooter = styled.div`
  color:  #888;
  grid-column: span 2;
  text-align: center;

`;

const Card = ({ title, description, footerText}) => (
  <CardBackground>
  <CardContainer>
      <CardImage src={GTImage} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
     <CardFooter>
      {footerText}    
    <Star size={20} color="#888" style={{ marginLeft: '10px', fontSize: '24px' }} />
    <Star size={20} color="#888" style={{ marginLeft: '10px', fontSize: '24px' }} />
    <Star size={20} color="#888" style={{ marginLeft: '10px', fontSize: '24px' }} />
    <Star size={20} color="#888" style={{ marginLeft: '10px', fontSize: '24px' }} />
    <Star size={20} color="#888" style={{ marginLeft: '10px', fontSize: '24px' }} />
    </CardFooter>
  </CardContainer>
  </CardBackground>
);


function App() {

  return (
    <>
   <Card
  title="Greentea Peng"
  description="Nah It Ain't The Same (2021)"
  footerText="Rate this album"
   />
  
    </>
  )
}

export default App

import { Card } from '@mui/material';
import Container from 'theme/components/Container';
import { H1PageTitle } from 'theme/components/PageTitles';

const Home = () => {
  return (
    <Container>
      <H1PageTitle variant="h3" sx={{ textAlign: 'center' }}>
        What for ?
      </H1PageTitle>
      <Card sx={{ mt: 2, p: 2 }}>
        Here I will show you what algorithms are, how they can be written in js and where they can be used! Enjoy
        reading!
      </Card>
    </Container>
  );
};

export default Home;

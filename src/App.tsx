import { useState } from 'react'
import { FormInput } from "./components/FormInput/FormInput"
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@mui/material';
import { isValidUser } from './contexts/userContext';
import DataTable from './components/DataTable/DataTable';
import DataList from './components/DataList/DataList';

type updateType = 0 | 1;
const App: React.FC = () => {
  const [update, setUpdate] = useState<updateType>(0);
  const userObject = isValidUser()

  return (
    <>
      <Container sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ textAlign: 'center', width: '90%' }}>
          <CardHeader title={(update) ? " Component 1" : "React form"} />
          <CardContent>
            {userObject.user == true ? <><DataTable /><DataList></DataList></> : <FormInput updated={setUpdate} />}
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default App

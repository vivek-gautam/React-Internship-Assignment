import {useEffect,useState} from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

interface ApiData{
    userId:number;
    id:number;
    title:string[];
    body:string[]
}

const DataTable = () => {
   const [tableData,setTableData] =useState<NonNullable<ApiData[]>>([])
    useEffect(()=>{
        const getApiData= async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'GET',
            });
            const data:ApiData[] = await response.json()!
           setTableData(data);
        }
        getApiData();
    },[])
  

  return (
      <Box sx={{ width: '100%', height: 520, overflow: 'auto',margin:'0 auto'}}>
        <DataGrid
          rows={tableData}
          columns={[
            {field: 'userId', headerName: 'UserID', width: 90 },
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'title', headerName: 'Title', width: 200 },
            { field: 'body', headerName: 'Body',width:800},
          ]}
          loading={tableData.length<=0?true:false}
        />
      </Box>   
  )
}

export default DataTable

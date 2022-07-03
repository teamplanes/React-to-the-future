import React,{useState,useEffect} from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import HistoryModal from './HistoryModal'



function History(){
    const[history, setHistory] = useState([])
    console.log(history)

    async function fetchResults(){
        const res = await fetch(
                'https://api.ambeedata.com/latest/by-lat-lng?lat=51.530112&lng=-0.0822173',
                {
                    method: 'GET',
                    headers: {
                      'x-api-key':
                        '98557c7e147dce2926573a404b7404eb6dccd673bc7044e4c0d13583b5bb6392',
                      'Content-type': 'application/json',
                    },
                  }
              );
              if (res.ok === true) {
                const data = await res.json();
                
                setHistory([...history,...data.stations]);
              }
    }


    return <div>
        <h1>History</h1>
        <Button onClick={fetchResults}> Fetch </Button>
        <HistoryModal history={history} />


    </div>
}

export default History
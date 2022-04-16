import React, {useEffect, useState} from 'react'
import { apiEdamam } from '../../services/apiEdamam'
import Card from '../card/Card'
import { BtMore, CtCards } from './Cards.styled'

export default function Cards() {

  const [list, setList] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10)

  const api = apiEdamam();

  
  useEffect(() => {
    api.nextPage(start, end).then((res) => {
      console.log(res.data.hits);
      setList([...list, res.data.hits]);
    }).catch((error) => error)
  }, [start, end]);

  const viewMore = () => {
    setStart(start + 10);
    setEnd(end + 10)
  };

  return (
      <>
      <CtCards>
        {
          list.map((item) => (
            item.map((dessert, index) => (
              <Card key={index} dessert={dessert} index={index}/>
            ))
          )) 
        }
        <BtMore onClick={viewMore}>More...</BtMore>
        </CtCards>
      </>
  )
}

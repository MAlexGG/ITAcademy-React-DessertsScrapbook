import React, { useEffect, useState } from 'react';
import { apiEdamam } from '../../services/apiEdamam';
import Card from '../card/Card';
import { BtMore, CtCards, CtSearch, InputSearch, BtSearch, ImgSearch } from './Cards.styled';
import lupa from '../../assets/img/search.svg';
import Loader from '../loader/Loader';

export default function Cards() {

  const [list, setList] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [search, setSearch] = useState('');
  const [loader, setLoader] = useState(false);

  const api = apiEdamam();
  
  useEffect(() => {
    setLoader(true);
    api.nextPage(start, end).then((res) => {
      setList([...list, res.data.hits]);
      setLoader(false);
    }).catch((error) => error)
  }, [start, end]);

  const viewMore = () => {
    setStart(start + 10);
    setEnd(end + 10)
  };
  
  const handleChange = (e) => {
    e.persist();
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => {
    api.getSearch(search.search, start, end).then((res) => {
      setList([res.data.hits]);
    }).catch((error) => error);
  };

  return (
    <>
      {loader && <Loader/>}
      <CtSearch>
        <InputSearch type='text' placeholder='search...' name='search' onChange={handleChange}/>
        <BtSearch onClick={handleSubmit}>
          <ImgSearch src={lupa} alt='search button'/>
        </BtSearch>
      </CtSearch>
      
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

import React, { ChangeEvent, useState, useMemo, useTransition } from 'react'
import { PhotosData } from './photosData';

const Photos: React.FC = () => {
  const [value, setValue] = useState('')

 const [isPending, startTransition] = useTransition()

 const filteredData = useMemo(() => {
  return PhotosData.filter(photo => photo.title.toLocaleLowerCase().includes(value))
 }, [value])

 const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
  startTransition(() => {
   setValue(e.target.value)
  })
 }

  return (
    <div>
      <div>
      <input type="text" onChange={onChangeHandler}/>
     </div>
     {isPending && <h1>Loading...</h1>}
     {filteredData.map(({id, title, url}) => (
      <div key={id}>
       <h1>{title}</h1>
       <h2>{url}</h2>
      </div>
     ))}
    </div>
  );
};

export default Photos;

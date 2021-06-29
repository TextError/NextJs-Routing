import { useRouter } from 'next/router';
import data from '../../data/backend';

const Id = () => {
  const { query: { id }} = useRouter();
  const item = data.list.filter(el => el.id === `${id}`)[0];
  
  if(!item) return <h1>No ID found!</h1>;
  const { title, description } = item;

  return (
    <>
      <h1>ID page!</h1>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
}

export default Id;
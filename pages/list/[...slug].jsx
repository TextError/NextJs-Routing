import { useRouter } from 'next/router';
import data from '../../data/backend';

const Slug = () => {
  const { query: { slug }} = useRouter();
  if(!slug) return <p className='center'>Loading</p>;
  const [ isId, isTitle ] = slug;

  const item = data.list.filter(el => el.id === isId && el.title === isTitle)[0];
  if(!item) return <h1>No &apos;Slug&apos; found!</h1>;
  const { title, description } = item;

  return (
    <>
      <h1>SLUG page!</h1>
      <p>{title}</p>
      <p>{description}</p>
    </>
  )
}

export default Slug;
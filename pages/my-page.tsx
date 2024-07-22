import axios from 'axios';

export async function getStaticProps() {
  const response = await axios.get('http://localhost:8090/');
  const data = response.data;
  return {
    props: {
      data
    },
  };
}

export default function hello({ data }: { data: any }) {
  // Use the fetched data in your page component
  return (
    <div>
      <h1>Your API Data</h1>
      <p>{data}</p>

    </div>
  );
}

'use client';
import useSWR from 'swr'
 
const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
    fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR('http://localhost:8090/api/book/', fetcher, { refreshInterval: 1000 })
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data)
 
  return (
    <div>
            <ul>
                {data.map((Book :any) => (
                    <li key={Book.id}>
                         <hr/>
                        id: {Book.id} <br/>
                        name : {Book.name} <br/>
                        Aauthor: {Book.author} <br/>
                        </li>
                ))}
            </ul>
    </div>
  )
}
export default Profile
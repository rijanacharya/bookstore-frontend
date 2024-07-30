'use client';
import useSWR from 'swr'
 
const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
    fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR('http://localhost:8090/api/v1/student/', fetcher)
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data)
 
  return (
    <div>
            <ul>
                {data.map((Book :any) => (
                    <li key={Book.id}>
                         <hr/>
                        {Book.name} <hr/>{Book.author}
                        </li>
                ))}
            </ul>
    </div>
  )
}
export default Profile
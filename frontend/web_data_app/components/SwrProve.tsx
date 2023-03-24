import useSWR from 'swr'
 
const fetcher = (args:any) => fetch(args).then(res => res.json())

export default function SwrProve () {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  // render data
  return <div> {data.title}</div>
}
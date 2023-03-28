import useSWR from 'swr'
import axios from 'axios'
// Funcion para get 
const fetcher = async (url:any) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Ha ocurrido un error: ${error}`);
    }
  }
//const fetcher = (args:any) => fetch(args).then(res => res.json())
// get post put delete path


//Funcion para put

const updateData1 = async (url:any, data:any) => {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//esta funcion hace el get
export default function SwrProve () {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  // render data
  return <div> {data.id}</div>
  
  
}


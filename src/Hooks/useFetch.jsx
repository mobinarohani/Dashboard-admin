import React ,{useState , useEffect} from 'react'

export default function useFetch(url) {
    const [getData, setGetData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        async function fetchIncomData() {
          await fetch(`http://localhost:3000/${url}`)
            .then((respons) => respons.json())
            .then((data) =>{
                setGetData(data)
                setIsPending(false);
            });
        }
    
        fetchIncomData();
      }, []);
      
      return{getData , isPending}

      
}

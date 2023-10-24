import fetcher from './_fetcher'
import useSWR from 'swr'

export default function useNetwork () {
  const { data, error, isLoading } = useSWR(`https://api.citybik.es/v2/networks/velo-antwerpen`, fetcher)
 
  return {
    network: data?.network,
    isLoading,
    isError: error
  }
}

/*
je importeerd fetcher en swr

je hebt een aangepaste hook useNetwork() die de useSWR hook gebruikt uit de bibliotheek swr

daarmee haal je je gevens op uit je api via de url en dan heb je je fetcher die defineerd hoe de gegevens moeten worden opgehaald

je hebt ook nog 3 eigenschappen data, error, isloading

in data staan je opgehaalde gegevens deze eigenschap wordt dan weer geplaatst in network

isLoading is om als je data nog wordt opgehaald dat je feedback kan geven

error wordt gezet in isError dit wordt gebruikt om mocht er iets foutlopen dat je een error melding krijgt


*/
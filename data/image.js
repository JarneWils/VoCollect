import fetcher from './_fetcher'
import useSWR from 'swr'

export default function useImage (station) {
  const { data, error, isLoading } = useSWR(
    `https://graph.mapillary.com/images?access_token=
    ${process.env.NEXT_PUBLIC_MAPILLARY_TOKEN}&fields=id,thumb_1024_url&bbox=
    ${station.longitude-0.0001},${station.latitude-0.0001},
    ${station.longitude+0.0001},${station.latitude+0.0001}&limit=1`, fetcher
    )
 
  return {
    image: data?.data[0]?.thumb_1024_url,
    isLoading,
    isError: error
  }
}

/*
je importeerd fetcher en swr

je hebt een aangepaste hook useNetwork() die de useSWR hook gebruikt uit de bibliotheek swr

daarmee haal je je gevens op uit je api via de url en dan heb je je fetcher die defineerd hoe de gegevens moeten worden opgehaald

je hebt ook nog 3 eigenschappen data, error, isloading

in data staan je opgehaalde gegevens deze eigenschap wordt dan weer geplaatst in image
Met "?" zorg je ervoor dat als er nog niks defined is in data dit geen error opleverd

isLoading is om als je data nog wordt opgehaald dat je feedback kan geven

error wordt gezet in isError dit wordt gebruikt om mocht er iets foutlopen dat je een error melding krijgt


*/
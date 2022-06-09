import useFetchData from "./UseFetchData";

export default function Repositorios(){

    const url = 'https://api.github.com/users/cassiano-dio/repos'

    const {data} = useFetchData(url)

    console.log(data)

    return(
        <div>
            {
                data && (
                    data.map(
                        (repostory) => {
                            <div key={repostory.id}>
                                <p>Id: {repostory.Id} - Name: {repostory.name}</p>

                            </div>
                        }
                    )
                )
            }
        </div>
    )
}
import { useEffect, useState } from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from '../interfaces/credits';
import { FullMovie } from "../interfaces/movie";

interface MovieDetails {
    isLoading: boolean;
    fullMovie?: FullMovie;
    cast: Cast[];
}

export const useDetails = ( movieId: number ) => {

    const [ state, setState ] = useState<MovieDetails>({
        isLoading: true,
        fullMovie: undefined,
        cast: []
    })

    const getMovieDetails = async() => {
        const detailsResponse = movieDB.get<FullMovie>(`/${ movieId }`)
        const creditsResponse = movieDB.get<CreditsResponse>(`/${ movieId }/credits`)
        
        const [ movieDetails, movieCredits] = await Promise.all([
            detailsResponse,
            creditsResponse,
        ])

        setState({
            isLoading: false,
            fullMovie: movieDetails.data,
            cast: movieCredits.data.cast,
        })
    }

    useEffect(() => {
      getMovieDetails()
    }, [])
    

    return {
        ...state
    }
}

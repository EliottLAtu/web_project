export interface GameDetails{

}

export interface rawgGameDetails{
    id : number,
    slug : string,
    name : string,
    released : string,
    tba : boolean,
    background_image : string,
    rating : number,
    rating_top : number,
    ratings : any[],
    ratings_count : number,
    reviews_text_count : string,
    added : number,
    added_by_status : any[],
    metacritic : number,
    playtime : number,
    suggestions_count : number,
    updated : string,
    esrb_rating : any[],
    platforms : any[],
}

export interface SearchResult
{
    count : number,
    next : string,
    previous : string,
    results : GameDetails[]

}
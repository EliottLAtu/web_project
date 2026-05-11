export interface nb_joueurs_response {
    response : {
        player_count : number
        response : number
    }
}
export interface steam_info {
    success : boolean,
    data : {
        type : string,
        name : string,
        steam_appid : number,
        required_age : number,
        isfree : boolean,
        detailed_description : string,
        about_the_game : string,
        short_description : string,
        header_image : string,
        website : string,
        screenshots : {
            id : number,
            path_thumbnail : string,
            path_full : string,
        }[],
    }
        
        
}

export interface steam_name_search{
    total : number,
    items : {
        type : string,
        name : string,
        id : number
        price : any[],
        tiny_image : string,
        metascore : number,
        platforms : any[],
        streamingvideo : boolean,
        controller_support : string,
    }[]

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
    results : rawgGameDetails[]

}
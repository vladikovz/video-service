export interface ITrailerResponse {
    id: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes" | "Bloopers";
}

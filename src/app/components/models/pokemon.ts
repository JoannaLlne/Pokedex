export interface Pokemon {
    url(url: any): unknown;
    id: number;
    name: string;
    type: string[];
    height: number;
    weight: number;
}
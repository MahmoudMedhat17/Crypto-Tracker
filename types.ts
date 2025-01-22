export interface Icurrency {
    name: string;
    symbol: string;
}




export interface IallCoins {
    id: string,
    market_cap_rank: number;
    image: string;
    name: string;
    symbol: string;
    current_price: string;
    market_cap_change_percentage_24h: number;
    market_cap: number;
}




export interface IsearchedCoin {
    id: string,
    market_cap_rank: number;
    image: string;
    name: string;
    symbol: string;
    current_price: string;
    market_cap_change_percentage_24h: number;
    market_cap: number;
}





export interface Icontext {
    allCoins: IallCoins[];
    currency: Icurrency;
    setCurrency: React.Dispatch<React.SetStateAction<Icurrency>>;
}




export interface IChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        borderColor: string;
        tension: number;
    }[];
}



export interface Iprice {
    _: null;
    price: number;
}

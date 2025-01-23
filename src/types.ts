// export interface Icurrency {
//     name: string;
//     symbol: string;
// }




// export interface IallCoins {
//     id: string,
//     symbol: string;
//     name: string;
//     image: string;
//     current_price: number;
//     market_cap: number;
//     market_cap_rank: number;
//     market_cap_change_percentage_24h: number;
// }





// export interface IsearchedCoin {
//     id: string,
//     market_cap_rank: number;
//     image: string;
//     name: string;
//     symbol: string;
//     current_price: string;
//     market_cap_change_percentage_24h: number;
//     market_cap: number;
// }





// export interface IcoinDesc {
//     id: string,
//     market_cap_rank: number;
//     market_data: {
//         current_price: {
//             [key: string]: number
//         };
//         market_cap_change_percentage_24h: number;
//         market_cap: {
//             [key: string]: number
//         }
//         high_24h: {
//             [key: string]: number
//         }
//         low_24h: {
//             [key: string]: number
//         }
//     };
// }





// export interface Icontext {
//     allCoins: IallCoins[];
//     currency: Icurrency;
//     setCurrency: React.Dispatch<React.SetStateAction<Icurrency>>;
//     searchedCoinState: IsearchedCoin[];
//     setSearchedCoinState: React.Dispatch<React.SetStateAction<IsearchedCoin>>;
//     coinsDesc: IcoinDesc;
//     setCoinDesc: React.Dispatch<React.SetStateAction<IcoinDesc>>;
//     getCoinDesc: () => void;
// }




// export interface IChartData {
//     labels: string[];
//     datasets: {
//         label: string;
//         data: number[];
//         fill: boolean;
//         borderColor: string;
//         tension: number;
//     }[];
// }





// // export interface Iprice {
// //     _: any;
// //     price: number;
// // }





// export interface IChartOptions {
//     responsive: boolean,
//     plugins: {
//         legend: {
//             position: string,
//         },
//         title: {
//             display: boolean,
//             text: string,
//         },
//     },
//     scales: {
//         x: {
//             title: {
//                 display: boolean,
//                 text: string,
//             },
//         },
//         y: {
//             title: {
//                 display: boolean,
//                 text: string,
//             },
//             beginAtZero: boolean,
//         },
//     },
// }
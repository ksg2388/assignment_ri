export type TDestinyColumn = {
    title: string;
    chineseTitle: string;
    cells: TDestinyCell[][];
}

export type TDestinyCell = {
    title: string;
    subTitle?: string;
    chineseTitle?: string;
}
interface RankItem {
    avatar: string;
    name: string;
    score: number;
}

//others rank props for others rank component
export interface OthersRankProps {
    list1: RankItem[];
    list2: RankItem[];
}

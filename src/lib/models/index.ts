export interface DROPDOWN {
    label: string;
    value: string | number;
}

export interface CALCULATE {
    slapTypeS: number;
    slapTypeL: number;
    inputBarSelected: number;
    totalSummaryResult?: number;
    slapType?: string;
}

export interface IMAGEBOX {
    topic: string;
    image: string;
    contents: string[];
}
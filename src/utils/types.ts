export interface ChecklistItem {
    name: string;
    completed: boolean;
}

export interface Area {
    id: number;
    name: string;
    abbr: string;
    mercadoLivre?: boolean;
    imgName?: string;
    location: string;
    description: string;
    status: number;
    checklist?: ChecklistItem[];
    preview: string;
}

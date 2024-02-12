
export type ChecklistItemData = {
    title: string,
    status: string,
    zone?: string,
    description?: string,
    hintImage?: string,
    sequenceImges?: string[]
};

export type ChecklistData = {
    id: string
    name: string
    items: ChecklistItemData[]
};

export type PlaneData = {
    id: string
    name: string
    description: string,
    checklists: ChecklistData[]
};
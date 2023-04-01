//SECTION - Interfaces
export interface PetitionProps {
 url: string;
 method?: string | undefined;
 body?: string | undefined | null;
 headers?: { [arg: string]: string } | undefined;
}
export type ResponseType = {
 nombre?: string;
 constelacion?: string;
 id: number;
};
//ANCHOR - IsType
export function isResponse(
 arg: ResponseType | ResponseType[] | void
): arg is ResponseType {
 return (arg as ResponseType)?.nombre !== undefined;
}

export function isResponseArray(
 arg: ResponseType | ResponseType[] | void
): arg is ResponseType[] {
 return (arg as ResponseType[])?.[0]?.nombre !== undefined;
}

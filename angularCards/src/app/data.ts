


export class Words {
    public constructor(init?: Partial<Words>) {
        if (init) { Object.assign(this, init); }
    }
    public name: string;
    public cardsID: number;
}
export class Cards {
    public constructor(init?: Partial<Cards>) {
        if (init) { Object.assign(this, init); }
    }
    public name: string;
    public ID: number;
    public OwnerID: number;
}
export class Table1 {
    public constructor(init?: Partial<Table1>) {
        if (init) { Object.assign(this, init); }
    }
    public name: string;
    public ID: number;
}
export { arrWords, arrCards, arrTable1, };
const arrWords = Array<Words>();
arrWords.push({
    name: 'async / await',
    cardsID: 1,
}); // end push toarrWords
arrWords.push({
    name: 'Auto implemented properties',
    cardsID: 1,
}); // end push toarrWords
arrWords.push({
    name: 'Anonymous methods',
    cardsID: 1,
}); // end push toarrWords
arrWords.push({
    name: 'attributes',
    cardsID: 1,
}); // end push toarrWords
arrWords.push({
    name: 'Asp.Net',
    cardsID: 1,
}); // end push toarrWords
arrWords.push({
    name: 'Boxing',
    cardsID: 2,
}); // end push toarrWords
arrWords.push({
    name: 'CallerInfo attributes',
    cardsID: 3,
}); // end push toarrWords
arrWords.push({
    name: 'classes',
    cardsID: 3,
}); // end push toarrWords
arrWords.push({
    name: 'Delegates',
    cardsID: 4,
}); // end push toarrWords
arrWords.push({
    name: 'Dynamic',
    cardsID: 4,
}); // end push toarrWords
arrWords.push({
    name: 'Expando',
    cardsID: 5,
}); // end push toarrWords
arrWords.push({
    name: 'Expression bodied members',
    cardsID: 5,
}); // end push toarrWords
arrWords.push({
    name: 'Exception filters',
    cardsID: 5,
}); // end push toarrWords
arrWords.push({
    name: 'extension methods',
    cardsID: 5,
}); // end push toarrWords
arrWords.push({
    name: 'Entity Framework',
    cardsID: 5,
}); // end push toarrWords
arrWords.push({
    name: 'Events',
    cardsID: 5,
}); // end push toarrWords
arrWords.push({
    name: 'Generic Constraints',
    cardsID: 6,
}); // end push toarrWords
arrWords.push({
    name: 'Generics covariance / contravariance',
    cardsID: 6,
}); // end push toarrWords
arrWords.push({
    name: 'Generics',
    cardsID: 6,
}); // end push toarrWords
arrWords.push({
    name: 'health check',
    cardsID: 7,
}); // end push toarrWords
arrWords.push({
    name: 'IDisosable',
    cardsID: 8,
}); // end push toarrWords
arrWords.push({
    name: 'Iterators',
    cardsID: 8,
}); // end push toarrWords
arrWords.push({
    name: 'interfaces',
    cardsID: 8,
}); // end push toarrWords
arrWords.push({
    name: ' jwt validation, authorization ,authentication ',
    cardsID: 9,
}); // end push toarrWords
arrWords.push({
    name: 'kestrel',
    cardsID: 10,
}); // end push toarrWords
arrWords.push({
    name: 'Local functions',
    cardsID: 11,
}); // end push toarrWords
arrWords.push({
    name: 'Linq',
    cardsID: 11,
}); // end push toarrWords
arrWords.push({
    name: 'Lambda',
    cardsID: 11,
}); // end push toarrWords
arrWords.push({
    name: 'Memory<T>',
    cardsID: 12,
}); // end push toarrWords
arrWords.push({
    name: 'Nameof',
    cardsID: 13,
}); // end push toarrWords
arrWords.push({
    name: 'Null propagator',
    cardsID: 13,
}); // end push toarrWords
arrWords.push({
    name: 'Nullable types',
    cardsID: 13,
}); // end push toarrWords
arrWords.push({
    name: 'Out',
    cardsID: 14,
}); // end push toarrWords
arrWords.push({
    name: 'Pattern matching',
    cardsID: 15,
}); // end push toarrWords
arrWords.push({
    name: 'Property initializers',
    cardsID: 15,
}); // end push toarrWords
arrWords.push({
    name: 'Partial types + methods',
    cardsID: 15,
}); // end push toarrWords
arrWords.push({
    name: 'Ref variables ( in function + local )',
    cardsID: 16,
}); // end push toarrWords
arrWords.push({
    name: 'Razor',
    cardsID: 16,
}); // end push toarrWords
arrWords.push({
    name: 'Roslyn',
    cardsID: 16,
}); // end push toarrWords
arrWords.push({
    name: '(.NET) Standard',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'Span<T>',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'string interpolation',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'Static imports',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'SignalR',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'structs',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'Static classes',
    cardsID: 17,
}); // end push toarrWords
arrWords.push({
    name: 'tuple',
    cardsID: 18,
}); // end push toarrWords
arrWords.push({
    name: 'task',
    cardsID: 18,
}); // end push toarrWords
arrWords.push({
    name: 'Using for IDisposable',
    cardsID: 19,
}); // end push toarrWords
arrWords.push({
    name: 'unboxing',
    cardsID: 19,
}); // end push toarrWords
arrWords.push({
    name: 'var',
    cardsID: 20,
}); // end push toarrWords
arrWords.push({
    name: 'yield',
    cardsID: 21,
}); // end push toarrWords
const arrCards = Array<Cards>();
arrCards.push({
    name: 'A',
    ID: 1,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'B',
    ID: 2,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'C',
    ID: 3,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'D',
    ID: 4,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'E',
    ID: 5,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'G',
    ID: 6,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'H',
    ID: 7,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'I',
    ID: 8,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'J',
    ID: 9,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'K',
    ID: 10,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'L',
    ID: 11,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'M',
    ID: 12,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'N',
    ID: 13,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'O',
    ID: 14,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'P',
    ID: 15,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'R',
    ID: 16,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'S',
    ID: 17,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'T',
    ID: 18,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'U',
    ID: 19,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'V',
    ID: 20,
    OwnerID: 1,
}); // end push toarrCards
arrCards.push({
    name: 'Y',
    ID: 21,
    OwnerID: 1,
}); // end push toarrCards
const arrTable1 = Array<Table1>();
arrTable1.push({
    name: '.net Core A To Z',
    ID: 1,
}); // end push toarrTable1


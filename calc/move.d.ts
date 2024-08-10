import * as I from './data/interface';
import { State } from './state';
export declare class Move implements State.Move {
    gen: I.Generation;
    name: I.MoveName;
    originalName: string;
    ability?: I.AbilityName;
    item?: I.ItemName;
    species?: I.SpeciesName;
    useZ?: boolean;
    useMax?: boolean;
    overrides?: Partial<I.Move>;
    hits: number;
    timesUsed?: number;
    timesUsedWithMetronome?: number;
    bp: number;
    type: I.TypeName;
    category: I.MoveCategory;
    flags: I.MoveFlags;
    secondaries: any;
    target: I.MoveTarget;
    recoil?: [number, number];
    hasCrashDamage: boolean;
    mindBlownRecoil: boolean;
    struggleRecoil: boolean;
    isCrit: boolean;
    isStellarFirstUse: boolean;
    drain?: [number, number];
    priority: number;
    dropsStats?: number;
    ignoreDefensive: boolean;
    overrideOffensiveStat?: I.StatIDExceptHP;
    overrideDefensiveStat?: I.StatIDExceptHP;
    overrideOffensivePokemon?: 'target' | 'source';
    overrideDefensivePokemon?: 'target' | 'source';
    breaksProtect: boolean;
    isZ: boolean;
    isMax: boolean;
    multiaccuracy: boolean;
    constructor(gen: I.Generation, name: string, options?: Partial<State.Move> & {
        ability?: I.AbilityName;
        item?: I.ItemName;
        species?: I.SpeciesName;
    });
    named(...names: string[]): boolean;
    hasType(...types: Array<(I.TypeName | undefined)>): boolean;
    clone(): Move;
}
export declare function getZMoveName(moveName: string, moveType: I.TypeName, item?: string): string;
export declare function getMaxMoveName(moveType: I.TypeName, moveName?: string, pokemonSpecies?: string, isStatus?: boolean, pokemonAbility?: string): string;

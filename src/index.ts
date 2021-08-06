import { RecordHandler, loader } from "./loader";

interface BaseRecord {
    id: string
}

interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}

interface Pokemon {
    id: string;
    attack: number;
    defense: number;
}

// Factory pattern
function createDatabase<T extends BaseRecord>() {
    class InMemoryDatabase implements Database<T> {
        private db: Record<string, T> = {};

        public set(newValue: T): void {
            this.db[newValue.id] = newValue;

        }

        public get(id: string): T | undefined {
            return this.db[id];
        }
    }
    return InMemoryDatabase;
}

// const pokemonDB = new InMemoryDatabase<Pokemon>();
const PokemonDB = createDatabase<Pokemon>();
const pokemonDB = new PokemonDB();
pokemonDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(pokemonDB.get('Bulbasaur'));
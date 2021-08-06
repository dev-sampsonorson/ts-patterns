/* // Factory pattern
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


const PokemonDB = createDatabase<Pokemon>();
const pokemonDB = new PokemonDB(); */
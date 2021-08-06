/*
function createDatabase<T extends BaseRecord>() {
    class InMemoryDatabase implements Database<T> {
        private db: Record<string, T> = {};

        static instance: InMemoryDatabase = new InMemoryDatabase();

        private constructor() { }

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
PokemonDB.instance.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(PokemonDB.instance.get('Bulbasaur'));
*/
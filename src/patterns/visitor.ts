/*
import { RecordHandler, loader } from "./loader";

interface BaseRecord {
    id: string
}

interface Pokemon {
    id: string;
    attack: number;
    defense: number;
}

// Observer
interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;

    visit(visitor: (item: T) => void): void;
}

type Listener<EventType> = (ev: EventType) => void;
function createObserver<EventType>(): {
    subscribe: (listener: Listener<EventType>) => () => void;
    publish: (event: EventType) => void;
} {

    let listerners: Listener<EventType>[] = [];
    return {
        subscribe: (listener: Listener<EventType>): () => void => {
            listerners.push(listener);
            return () => {
                listerners = listerners.filter(l => l !== listener);
            };
        },
        publish: (event: EventType): void => {
            listerners.forEach(l => l(event));
        }
    }

}

interface BeforeSetEvent<T> {
    value: T;
    newValue: T;
}

interface AfterSetEvent<T> {
    value: T;
}

function createDatabase<T extends BaseRecord>() {
    class InMemoryDatabase implements Database<T> {
        private db: Record<string, T> = {};

        static instance: InMemoryDatabase = new InMemoryDatabase();

        private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
        private afterAddListeners = createObserver<AfterSetEvent<T>>();

        private constructor() { }

        public set(newValue: T): void {
            this.beforeAddListeners.publish({
                value: this.db[newValue.id],
                newValue: newValue
            });

            this.db[newValue.id] = newValue;

            this.afterAddListeners.publish({
                value: newValue
            });
        }

        public get(id: string): T | undefined {
            return this.db[id];
        }

        onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
            return this.beforeAddListeners.subscribe(listener);
        }
        onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
            return this.afterAddListeners.subscribe(listener);
        }

        // Visitor
        visit(visitor: (item: T) => void): void {
            Object.values(this.db).forEach(visitor);
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

const unsubscribe = PokemonDB.instance.onAfterAdd(({ value }) => {
    console.log(value);
});

PokemonDB.instance.set({
    id: 'Spinosaur',
    attack: 100,
    defense: 20
});

unsubscribe();
// console.log(PokemonDB.instance.get('Bulbasaur'));

PokemonDB.instance.visit((item) => {
    console.log(item.id);
});
*/
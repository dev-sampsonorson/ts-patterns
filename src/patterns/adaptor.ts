/*

class PokemonDBAdapter implements RecordHandler<Pokemon> {
    addRecord(record: Pokemon) {
        PokemonDB.instance.set(record);
    }
}

const unsubscribe = PokemonDB.instance.onAfterAdd(({ value }) => {
    console.log(value);
});
loader('./data.json', new PokemonDBAdapter());
*/
import Card from "./Card";

const Movies = ({results}) => {
    return ( 
        <div>
            {results.map((result) => (
                <Card key={result.id} result={result} />
            ))}
        </div>
     );
}
 
export default Movies;
const Movies = ({results}) => {
    return ( 
        <div>
            {results.map((result) => (
                <h1>{result.title}</h1>
            ))}
        </div>
     );
}
 
export default Movies;
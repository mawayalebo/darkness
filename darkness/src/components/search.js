const Search = () => {
    return ( 
        <div className="container">
            <div className="search-box container center">
                <div className="input-field">
                    <input  class="transparent white-text" type="search" name="city_name" id="city_name"/>
                    <label htmlFor="city_name"></label>
                </div>
                <i className="material-icons white-text center">search</i>
            </div>
        </div>
     );
}
export default Search;
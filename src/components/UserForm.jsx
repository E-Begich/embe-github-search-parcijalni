
export default function UserForm ({ onSubmit, onChange, value}){
    return (
        <form className="form-search" onSubmit={onSubmit}> 
             <input
              id="search"
              txpe="text"
              placeholder="Input Name..."
              onChange={onChange}
              value={value}
              />
              <button type="submit">Search</button>

        </form>
    );
}
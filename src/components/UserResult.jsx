
export default function UserResult({ avatar, username, url, u_location, email, bio, repos_url }){
    console.log(username);
    return (
        
        <div className="user-result">
            <div className="clearfix">
            <img src={avatar} alt="img-profile" height="50" width="50" />
            <p>Username: {username}</p>
            {/* ovo Ggole kaze da moram stavit */}
             <a href={url} target="_blank" rel="noopener noreferrer"> 
                Link to profile
            </a> 
            <p>Location: {u_location}</p>
            <p>Bio: {bio}</p>
            <a href={repos_url} target="_blank" rel="noopener noreferrer">Repos url </a>

            </div>
        </div>
    );
}
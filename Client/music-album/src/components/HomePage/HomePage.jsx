import HomeIcon from "../logos/home_pic.jpg"

export const HomePage = () => {
    return <>
        <div >
            <img src={HomeIcon} alt="" className="home_Icon"/>
            <h2>HELLO</h2>
            <div>{Date()}</div>
        </div>
    </>
}
import Mountain1 from "../assets/mountain1.jpg";
import Mountain2 from "../assets/mountain2.jpg";
import Mountain3 from "../assets/mountain3.jpg";
import Mountain4 from "../assets/mountain4.jpg";
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationData
            className="first-des"
            heading = "Spiti-Valley,Himachal Pradesh"
            text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur neque quis est eum. Consequuntur quisquam error natus ab praesentium et dignissimos, repudiandae quos deleniti quasi non voluptates nobis omnis?"
            img1 = {Mountain1}
            img2 = {Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading = "Kangchenjunga peak"
            text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur neque quis est eum. Consequuntur quisquam error natus ab praesentium et dignissimos, repudiandae quos deleniti quasi non voluptates nobis omnis?"
            img1 = {Mountain3}
            img2 = {Mountain4}
            />
            
        </div>

    )
}

export default Destination
import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/mysore.jpg";
import Trip2 from "../assets/switzerland.jpg";
import Trip3 from "../assets/norway.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Maps.</p>
            <div className="tripcard">
                <TripData
                imgs = {Trip1}
                heading = "Trip in Mysore"
                text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur neque quis est eum. Consequuntur quisquam error natus ab praesentium et dignissimos, repudiandae quos deleniti quasi non voluptates nobis omnis?"
                />
                <TripData
                imgs = {Trip2}
                heading = "Trip in Shimla"
                text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur neque quis est eum. Consequuntur quisquam error natus ab praesentium et dignissimos, repudiandae quos deleniti quasi non voluptates nobis omnis?"
                />

                <TripData
                imgs = {Trip3}
                heading = "Trip in Ladakh"
                text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur neque quis est eum. Consequuntur quisquam error natus ab praesentium et dignissimos, repudiandae quos deleniti quasi non voluptates nobis omnis?"
                />
            </div>
        </div>
        
    )
}

export default Trip;
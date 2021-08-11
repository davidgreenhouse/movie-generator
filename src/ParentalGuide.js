import React from "react";
import Footer from "./Footer";

const ParentalGuide = () => {
    return (
        <div>
            <h2 class="text-center">Motion Picture Rating</h2>

            <div class="guidance">
                <button class="guidance-box">G</button>
                <button class="guidance-box">PG</button>
                <button class="guidance-box">PG-13</button>
                <button class="guidance-box">R</button>
            </div>
            <Footer currentPage={"parental-guide"} nextPage={"production"} skipButton/>

        </div>

    )
}

export default ParentalGuide;
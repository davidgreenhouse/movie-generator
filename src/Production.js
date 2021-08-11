import React from "react";
import Footer from "./Footer";

const Production = () => {
    return (
        <div>
            <h2 class="text-center">Production Type</h2>
            <div class="productions">
                <div class="production-item">
                    <input id="animated" type="checkbox" />
                    <label for="animated">Animated</label>
                </div>

                <div class="production-item">
                    <input id="blockbuster" type="checkbox" />
                    <label for="blockbuster">Blockbuster</label>
                </div>

                <div class="production-item">
                    <input id="foreign" type="checkbox" />
                    <label for="foreign">Foreign</label>
                </div>

                <div class="production-item">
                    <input id="indie" type="checkbox" />
                    <label for="indie">Indie</label>
                </div>
            </div>

            <Footer currentPage={"production"} nextPage={"stars"} skipButton={"stars"}/>
        </div>
    )
}

export default Production;
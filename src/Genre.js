import React from "react";
import Footer from "./Footer";


function Genre() {
    
    
    
    return (
        <div>
            <h2 class="text-center">Genre</h2>
            <div class="container subGenres">
                <div class="subGenres-col">
                    <div class="subGenres-item">
                        <input id="action" type="checkbox" />
                        <label for="action">Action</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="adventure" type="checkbox" />
                        <label for="adventure">Adventure</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="family" type="checkbox" />
                        <label for="family">Family</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="fantasy" type="checkbox" />
                        <label for="fantasy">Fantasy</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="horror" type="checkbox" />
                        <label for="horror">Horror</label>
                    </div>
                </div>
                <div class="subGenres-col">
                    <div class="subGenres-item">
                        <input id="mystery" type="checkbox" />
                        <label for="mystery">Mystery</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="romance" type="checkbox" />
                        <label for="romance">Romance</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="sci-Fi" type="checkbox" />
                        <label for="sci-Fi">Sci-Fi</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="thriller" type="checkbox" />
                        <label for="thriller">Thriller</label>
                    </div>

                    <div class="subGenres-item">
                        <input id="western" type="checkbox" />
                        <label for="western">Western</label>
                    </div>
                </div>
            </div>

            <Footer currentPage={"genre"} nextPage={"parental-guide"}/>
        </div>
    )
}

export default Genre;
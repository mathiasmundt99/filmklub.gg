let movies = [
    {
    rank: "1",
    MovieName: "The Lord of The Rings: The Return of The King",
    picture: "batmanTest.jpg",
    rating: "9.4",
    noOfViews: "4",
    icons: {
        netflix: "../Assets/images/netflixIkon.png",
        hbo: "../Assets/images/hboIkon.jpeg",
        viaplay: "../Assets/images/viaplayIkon.png",
        disney: "../Assets/images/DisneyIkon.jpg",
        pirate: "../Assets/images/pirateIkon.jpeg",
    },
    userProfile: {
        userIcon: "../Assets/images/netflixIkon.png", 
        userRating: "",
    }
    },
]

const movieCardEl = document.querySelector(".movieCard"); 

function generateIconsHTML(icons) {
    let iconsHTML = '';
  

    Object.entries(icons).forEach(([key, value]) => {
      if (value !== null) {
        iconsHTML += `<img src="${value}" alt="${key}">`;
      }
    });
    
    return iconsHTML;
  }


movies.forEach(function (movie) {
    movieCardEl.innerHTML += `
    <div class="movieRankDiv">
    <p class="movieRank">${movie.rank}</p>
          </div>
    <div class="moviePicture">
      <img
        src="../Assets/images/${movie.picture}"
        alt=""
      />
    </div>
    <div class="movieNameDiv">
    <p>${movie.MovieName}</p>
    </div>
    <div class="icons">
    <i class="fa-solid fa-star"></i>
    <p>${movie.rating}</p>
    <i class="fa-solid fa-ticket"></i>
    <p>${movie.noOfViews}</p>
    </div>
    <div class="platformIcons">
    ${generateIconsHTML(movie.icons)}
    </div>
    <div class="userRatings">
      <img src="" alt="" />
      <div>
        <p></p>
      </div>
    </div>
    `;
  });

  
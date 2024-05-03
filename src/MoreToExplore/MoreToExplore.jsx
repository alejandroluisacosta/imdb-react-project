import Chart from "../MoreToExploreChart/MoreToExploreChart";

const charts = [
    { title: "Películas más taquilleras (EE. UU.)", subtitle: "Del fin de semana pasado", link: "topUSMoviesLastWeekend" },
    { title: "Películas más populares", subtitle: "Según lo indicado por los usuarios de IMDb", link: "popularMoviesByIMDbUsers" },
    { title: "Películas inglesas mejor valoradas", subtitle: "Películas en inglés calificadas por los usuarios de IMDb", link: "topRatedEnglishMoviesByIMDbUsers" },
    { title: "Series más populares", subtitle: "Según lo indicado por los usuarios de IMDb", link: "popularSeriesByIMDbUsers" },
    { title: "Las 250 mejores series", subtitle: "", link: "top250Movies" },
    { title: "Películas peor valoradas", subtitle: "Las 100 películas peor valoradas por los usuarios de IMDb", link: "lowestRatedMoviesByIMDbUsers" },
    { title: "Famosos más populares", subtitle: "Según lo indicado por los usuarios de IMDb", link: "popularCelebritiesByIMDbUsers" }
  ];

const MoreToExplore = () => {
    return (
        <div className="MoreToExplore">
            {charts.map((chart, index) => {
                return <Chart title={chart.title} subtitle={chart.subtitle} link={chart.link}/>
            })}
        </div>
    )
}

export default MoreToExplore;
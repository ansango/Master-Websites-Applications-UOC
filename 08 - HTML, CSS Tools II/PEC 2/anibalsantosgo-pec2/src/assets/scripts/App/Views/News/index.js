import React from "react";
import Parallax from "../../Components/Parallax";
import neon2 from "../../../../images/parallax/neon2.jpg";
import clouds2 from "../../../../images/parallax/clouds2.jpg";
import big2 from "../../../../images/hero/big2.jpg";
import tracks from "../../Data/album";
const News = () => {
  return (
    <div className="view view_news">
      <Parallax
        img={clouds2}
        height={500}
        isTitle
        isAlbum
        title={"the storm it's out!"}
        album={big2}
      />
      <div className="container p-5">
        <div>
          <h2 className="pb-3 p-lg-5">
            {
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          </h2>
        </div>
        <h4 className="pb-3 p-lg-5">
          {
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
        </h4>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <ol className="px-lg-5">
              <li className="px-lg-5 mb-lg-5">
                <strong>{"Item One"}</strong>
                <p>
                  {
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                </p>
              </li>
              <li className="px-lg-5 mb-lg-5">
                <strong>{"Item Two"}</strong>
                <p>
                  {
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                </p>
              </li>
              <li className="px-lg-5 mb-lg-5">
                <strong>{"Item Three"}</strong>
                <p>
                  {
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="row px-lg-5">
          <div className="col-md-6 mb-5 px-lg-4">
            <h2>
              {
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
              }
            </h2>
          </div>
          <div className="col-md-6 mb-5 px-lg-4">
            <h4>
              {
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove"
              }
            </h4>
          </div>
        </div>
      </div>
      <Parallax
        img={neon2}
        height={500}
        isSocial
        socialTitle={"Check the list!"}
        tracks={tracks}
      />
      <div className="container">
        <p className="p-5">
          {
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains"
          }
        </p>
      </div>
      <div className="container d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default News;

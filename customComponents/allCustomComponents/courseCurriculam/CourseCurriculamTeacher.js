"use client";
import { useEffect } from "react";
import "./CourseCurriculam.css";



function CourseCurriculamTeacher() {
  useEffect(() => {
    var link = document.getElementsByTagName("a"),
      tutVid = document.getElementById("tutVidTitle");

    for (var i = 0; i < 5; i++) {
      link[i].onclick = function () {
        tutVid.innerHTML = this.innerHTML;
      };
    }
  }, []);
  return (
    <div id="wrapper">
      <div id="mainContent">
        <div id="videoSizer">
          <div id="videoWrapper">
            <iframe
              name="tutorial"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v6KsnmtbqyY?si=ZyDBew6APC2k82hs
              "
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          
        </div>
        <div id="videoList">
          <a
            href="https://www.youtube.com/embed/tT8j-sQxdgU?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 1
          </a>
          <a
            href="https://www.youtube.com/embed/dSdscZ2oJYM?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 2
          </a>
          <a
            href="https://www.youtube.com/embed/ooQbCGlyfxY?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 3
          </a>
          <a
            href="https://www.youtube.com/embed/1CkgKe2VPMU?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 4
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
          <a
            href="https://www.youtube.com/embed/gPZ7jln6x3c?rel=0&amp;showinfo=0"
            target="tutorial"
          >
            CSS Toggle Tutorial Part 5
          </a>
        </div>
     
      </div>
      
      <div className="blur_system">
        <p style={{ textAlign: "center" }}>Coming soon ...</p>
      </div>
    </div>
  );
}

export default CourseCurriculamTeacher;

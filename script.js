const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top <= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.add("navbarDark");
  }
};
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

let dataObj = undefined;

function ajax_get(url) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      try {
        var data = JSON.parse(xmlhttp.responseText);
        dataObj = data;
        console.log(dataObj);

        const dummyData = {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        };

        document.getElementById("cardrow").innerHTML = dataObj
          .map(
            (item) => `<div class="col-sm-6 mb-4">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-0">${item.name}</h3>
      <p>(${item.username})</p>
      <p class="card-text">
        <b>Email : </b><span>${item.email}</span>
      </p>
      <!-- address -->
      <p class="card-text">
        <b>Address : </b><span>${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</span>
      </p>
      <!-- latitude and longitude -->
      <p class="card-text">
        <b>Latitude : </b
        ><span>
          <a
            href="https://www.latlong.net/c/?lat=40.714224&long=${item.address.geo.lat}"
          >
            ${item.address.geo.lat}
          </a>
        </span>
      </p>
      <p class="card-text">
        <b>Longitude : </b
        ><span>
          <a
            href="https://www.latlong.net/c/?lat=40.714224&long=${item.address.geo.lng}"
          >
            ${item.address.geo.lng}
          </a>
        </span>
      </p>
      <!-- phone -->
      <p class="card-text"><b>Phone : </b><span>${item.phone}</span></p>
      <!-- website -->
      <p class="card-text">
        <b>Website : </b
        ><span><a href="https://${item.website}">${item.website}</a></span>
      </p>
      <!-- company -->
      <p class="card-text">
        <b>Company : </b><span>${item.company.name} - </span
        ><span>${item.company.catchPhrase}</span> &
        <span>${item.company.bs}</span>
      </p>
    </div>
  </div>
</div>`
          )
          .join("");
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

ajax_get(
  "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
);

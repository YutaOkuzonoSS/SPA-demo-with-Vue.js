 var topTemplate = `
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://placehold.jp/1500x700.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://placehold.jp/1500x700.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://placehold.jp/1500x700.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;

  var topJumbotron =`
        <div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4">
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>`;

    var usersTemplate = `
      <div>
          <table class="table table-hover table-striped" id=userListTable>
            <thead>
              <tr>
                <th>#</th>
                <th>名前</th>
                <th>メールアドレス</th>
                <th>電話番号</th>
              </tr>
            </thead>
            <tbody>
              <tr data-href="/user/00001">
                <th scope="row">1</th>
                  <td>煌木 太郎</td>
                  <td>taro.kirameki@example.com</td>
                  <td>09011112222</td>
              </tr>
              <tr data-href="/user/00002">
                <th scope="row">2</th>
                  <td>煌木 次郎</td>
                  <td>jiro.kirameki@example.com</td>
                  <td>09033334444</td>
              </tr>
              <tr data-href="/user/00003">
                <th scope="row">3</th>
                  <td>煌木 花子</td>
                  <td>hanako.kirameki@example.com</td>
                  <td>09055556666</td>
              </tr>
            </tbody>
          </table>
      </div>
    `;


    var userDetailTemplate = `
      <div>ユーザーIDは {{ $route.params.userId }} です。</div>
    `;

    var itemsTemplate = `
    <div class="card-columns">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://placehold.jp/150x150.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://placehold.jp/150x200.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://placehold.jp/150x100.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img" src="https://placehold.jp/240x320.png" alt="Card image cap">
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
    </div>
    `;

    var formTemplate =`
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="form-group">
    <label for="comment">Comment:</label>
    <textarea class="form-control" rows="5" id="comment"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
    `;

var svgDemoTemplate =`
        <div class="jumbotron">
          <h1 class="display-4">Vue.js + SVG</h1>
          <p class="lead">SVG is compatible with binding. Vue.js makes it easy to describe binds, so it can be said that compatibility with SVG is good.</p>
          <hr class="my-4">
          <p>Here are some demonstrations with SVG and Vue.js.</p>
          <p class="lead">
            <a href="svgDemo.html" class="btn btn-primary btn-lg" role="button">Check Demo</a>
          </p>
        </div>
`;


var animationDemoTemplate = `
        <div class="jumbotron">
          <h1 class="display-4">Animation</h1>
          <p class="lead">Vue supprots front animation rendering. It give some classes to display some animation.</p>
          <hr class="my-4">
          <p>Here are some demonstrations of Animation made with Vue.js</p>
          <p class="lead">
            <a href="vueAnimationDemo.html" class="btn btn-primary btn-lg" role="button">Check Demo</a>
          </p>
        </div>
`;

var todoDemoTemplate = `
        <div class="jumbotron">
          <h1 class="display-4">TODO App DEMO</h1>
          <p class="lead">Easy TODO App made with Vue.js</p>
          <hr class="my-4">
          <p>It is able to save the data using WebStorage. Here is demo TODO app</p>
          <p class="lead">
            <a href="TODO_DEMO.html" class="btn btn-primary btn-lg" role="button">Try TODO App</a>
          </p>
        </div>
`;


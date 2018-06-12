# jQueryとVue.jsの差

## jQueryの場合

HTML
```HTML
<svg id="line" viewbox="0 0 300 300" width="300" height="300">
  <line x1="100" y1="100" x2="200" y2="200" stroke="black"></line>
</svg>
<p>start x</p><input class="changer" id="x1" type="range" max=300 min=0>
<p>start y</p><input class="changer" id="y1" type="range" max=300 min=0>
<p>e.n.d x</p><input class="changer" id="x2" type="range" max=300 min=0>
<p>e.n.d y</p><input class="changer" id="y2" type="range" max=300 min=0>
```

JS
```JS
//inputの変更を監視する処理
$('.changer').change(function(){
  target_param = $(this).attr("id");
  value = $(this).val();
  rewrite(target_param, value); //再描画する関数の呼び出し
});

//再描画する関数
function rewrite(target_param, value){
  target = $('#line').find("line");
  target.attr(target_param,value); 
}
```

## Vue.jsの場合

HTML
```HTML
<div id="svg_demo_app1">
  <svg viewbox="0 0 300 300" width="300" height="300">
    <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" stroke="black"></line>
  </svg>
  <div>
    <p>start x</p><input type="range" v-model="x1" max=300 min=0>
    <p>start y</p><input type="range" v-model="y1" max=300 min=0>
    <p>e.n.d x</p><input type="range" v-model="x2" max=300 min=0>
    <p>e.n.d y</p><input type="range" v-model="y2" max=300 min=0>
  </div>
</div>
```

JS
```JS
new Vue({
  el: "#svg_demo_app1", //elでVueの接続先を宣言
  data: {
    x1: 100,//dataパラメータがバインドされる
    y1: 100,
    x2: 200,
    y2: 200,
  }
})
```

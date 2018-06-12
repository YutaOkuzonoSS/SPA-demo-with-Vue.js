  window.onload = function (){


    // ルートオプションを渡してルーターインスタンスを生成します
    var router = new VueRouter({
      // 各ルートにコンポーネントをマッピングします
      // コンポーネントはVue.extend() によって作られたコンポーネントコンストラクタでも
      // コンポーネントオプションのオブジェクトでも構いません
      routes: [
        {
          path: '/top',
          component: {
            template: topTemplate + topJumbotron
          }
        },
        {
          path: '/users',
          component: {
            template: usersTemplate
          }
        },
        {
          path: '/user/:userId',
          component: {
            template: userDetailTemplate
          }
        },
        {
          path: '/items',
          component: {
            template: itemsTemplate
          }
        },
        {
          path: '/form',
          component: {
            template: formTemplate
          }
        },
        {
          path: '/svg_demo',
          component: {
            template: svgDemoTemplate
          }
        },
        {
          path: '/vue_animation_demo',
          component: {
            template: animationDemoTemplate
          }
        },
        {
          path: '/todo_demo',
          component: {
            template: todoDemoTemplate
          }
        }
      ]
  });

  // ルーターのインスタンスをrootとなるVueインスタンスに渡します
  var app = new Vue({
    router: router
  }).$mount('#app')

  var headerTemplate = `
        <div style="background: white;">
        <slot name="header"></slot>
        </div>`

  Vue.component('page-header', {
    template: headerTemplate
  });

  new Vue({
    el: "#header"
  });

  // 
  $(document).on('click',"#userListTable tr", function(){
    linkTarget = $(this).data('href');
    router.push({ path: linkTarget });
  });

  $('.nav-link').click(function(){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });
};


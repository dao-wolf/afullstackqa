(function(){
  function createNav() {
    // set up body
    function createNavList() {
      var listOfLinks = [
        {name: 'GitHub', url: 'https://github.com/opantsjoha'}, 
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/opantsjoha/'},
        {name: 'Medium', url: 'https://medium.com/@opantsjoha'}
      ];
      var navList = document.getElementById('navbar-list');
      navList.className = 'navbar-nav';

      listOfLinks.forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'nav-item';
        var alink = document.createElement('a');
        alink.className = 'nav-link text-light';
        alink.href = item.url;
        var menuOpt = document.createTextNode(item.name);
        navList.appendChild(li).appendChild(alink).appendChild(menuOpt);
      })

    }
    createNavList();
  }
  createNav();
})();

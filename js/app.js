(function(){
  function createNav() {
    // set up body
    var nav = document.getElementById('navbar-expand-sm-dark');
    nav.className = 'navbar navbar-expand-sm bg-dark navbar-dark';
    function createNavList() {
      var listOfLinks = ['JS','Swift','Java','C#'];
      var navList = document.getElementById('navbar-list');
      navList.className = 'navbar-nav';

      listOfLinks.forEach(function (item) {
        var li = document.createElement('LI');
        li.className = 'nav-item';
        var alink = document.createElement('A');
        alink.className = 'nav-link';
        alink.href = '#';
        var menuOpt = document.createTextNode(item);
        navList.appendChild(li).appendChild(alink).appendChild(menuOpt);
      })

    }
    createNavList();
  }
  createNav();
})();

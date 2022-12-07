
  document.getElementById('search_icon').addEventListener('click', function(){
    document.querySelector('.search-input').classList.toggle('active')
    document.getElementById('search_icon').classList.toggle('fa-xmark')
  })
  
  
  
  
// search 
function myFunction() {
    var input, filter, parent, childs, name, i, txtValue;
    input = document.getElementById("search__input");
    filter = input.value.toUpperCase();
    parent = document.querySelectorAll(".property-parent");
    childs = document.querySelectorAll(".each-property");
  
    console.log(childs)
    
    for (i = 0; i < childs.length; i++) {
        name = childs[i].getElementsByTagName("span")[1];
        txtValue = name.textContent || name.innerText;
    
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            childs[i].style.display = "";
        } else {
            childs[i].style.display = "none";
        }
    }
  }


  document.getElementById('search__input').addEventListener('input', myFunction)
  
  
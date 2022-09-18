function _add_tag(_tag) {
  var _tag_selected = document.getElementById(_tag);
  if (_tag_selected) { 
   let _temp = `
   <p onclick="_remove_tag('${_tag}')" id="${_tag}" class="_selection_p"><span class="_selection_span">${_tag_selected.innerText}</span></p>
   `
   document.getElementById("_div_tags").innerHTML += _temp;
document.getElementById("_tags").value += _tag.replace("_", "") + ",";
    document.getElementById(_tag).parentNode.removeChild(document.getElementById(_tag))
  }
}

function _remove_tag(_tag) {
  var _selected_tag = document.getElementById(_tag);
  if (_selected_tag) {
document.getElementById(_tag).parentNode.removeChild(document.getElementById(_tag));
    var _new_value = document.getElementById("_tags").value.replace(_tag.replace("_", "")+",", "")
    document.getElementById("_tags").value = _new_value;
    let _temp = `
   <p onclick="_add_tag('${_tag}')" id="${_tag}" class="_selection_p"><span class="_selection_span">${_selected_tag.innerText}</span></p>
   `
    document.getElementById("_selection_tags").innerHTML += _temp;
  }
}

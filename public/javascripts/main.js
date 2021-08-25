function search() {
    var a = document.getElementById("search-input").value;

    if (a.length > 0) {
        window.location.href = "/search/" + a;
    }
}
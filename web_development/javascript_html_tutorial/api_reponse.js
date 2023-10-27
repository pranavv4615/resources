
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("get_data_button").addEventListener("click", function () {
        var xhr = new XMLHttpRequest();

        var apiUrl = "https://dummyjson.com/products/1";

        xhr.open("GET", apiUrl, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var response = JSON.parse(xhr.responseText);
                console.log(response)

                var title = document.getElementById("title").innerHTML
                title.innerHTML = response.title

                var description = document.getElementById("description")
                description.innerHTML = response.description

                var price = document.getElementById("price")
                price.innerHTML = response.price

                var stock = document.getElementById("stock")
                stock.innerHTML = response.stock

                var brand = document.getElementById("brand")
                brand.innerHTML = response.brand

                var category = document.getElementById("category")
                category.innerHTML = response.category



            } else {
                // Request failed
                var resultDiv = document.getElementById("show_data_field");
                resultDiv.innerHTML = "Request failed with status code: " + xhr.status;
            }
        };

        // Send the request
        xhr.send();
    });
});

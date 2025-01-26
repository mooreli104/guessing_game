<script setup>

//Get anime image 
    fetch('http://127.0.0.1:5000')
        .then(response => response.json())
        .then(data => { 
            for (let index = 0; index < data.length; index++) {
                const image_url = data[index]['image_url']
                var image = document.createElement("img");
                var imageParent = document.body;
                image.src = image_url;       
                imageParent.appendChild(image);
            }
        }); 

</script>


<template>
</template>


<styles scoped>

</styles>
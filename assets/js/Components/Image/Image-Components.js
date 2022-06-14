function ImageAdd(id,source,text){
    return ''+
        `<div class="image-container">`+
            `<img `+
            `id="image${id}" `+
            `src="${source}" `+
            `onerror="$('#'+this.id).parent().remove()">`+
                `<span id="image${id}">${text}</span>`+
            `</img>`+
        `</div>`

}
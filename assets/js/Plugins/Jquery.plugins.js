(function($)
{
    $.fn.removeStyle = function(style)
    {
        var search = new RegExp(style + '[^;]+;?', 'g');

        return this.each(function()
        {
            $(this).attr('style', function(i, style)
            {
                return style && style.replace(search, '');
            });
        });
    };
}(jQuery));

function getDifferences(oldObj, newObj) {
   var diff = {};

   for (var k in oldObj) {
      if (!(k in newObj))
         diff[k] = undefined;  // property gone so explicitly set it undefined
      else if (oldObj[k] !== newObj[k])
         diff[k] = newObj[k];  // property in both but has changed
   }

   for (k in newObj) {
      if (!(k in oldObj))
         diff[k] = newObj[k]; // property is new
   }

   return diff;
}

function ValidDate(dateStr) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    
    try {
        if (dateStr.match(regex) === null) {
        return false;
        }

        const [day, month, year] = dateStr.split('/');

        //format Date string as `yyyy-mm-dd`
        const isoFormattedStr = `${year}-${month}-${day}`;
        const date = new Date(isoFormattedStr);
        const timestamp = date.getTime();

        if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
        }

        return date.toISOString().startsWith(isoFormattedStr);
    } catch {
        return false
    }

}

function GetFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

// jQuery(document).ready(function() { 
//          jQuery('input').each( function() { 

//                // Add your read only attribute and remove it onClick/focus
//                 jQuery(this).attr('readonly', 'true').attr('onClick', "this.removeAttribute('readonly');"); 

//                // Reintroduce the readonly attribute on mouseleave
//                 jQuery(this).on('mouseleave', function() {
//                       jQuery(this).attr('readonly', 'true')
//                 });
//          });
//  }); 
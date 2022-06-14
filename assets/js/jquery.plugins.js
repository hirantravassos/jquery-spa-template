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
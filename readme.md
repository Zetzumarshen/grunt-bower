.bower.json is pointed by bower-concat mainFiles. Remove or alter it to pick adminLTE skin.
 
 listed plugin in adminLTE folder (excluding jQuery)
 
`bower install bootstrap-slider bootstrap-wysihtml5 chartjs ckeditor colorpicker datatables datepicker fastclick flot fullcalendar iCheck jquery.inputmask ionrangeslider jquery-ui jvectormap knob morrisjs pace select2 slimScroll sparkline bootstrap-timepicker bootstrap components-font-awesome ionicons modernize jquery-knob --savegrunt -S`

These bowerpackages are broken; using AdminLTE/plugins/<plugin_name> instead
`daterangepicker` `moment` `jquery.knob` 
 
These bower packages do not have main in their .bower.json
 `datepicker` `fullcalendar` `bootstrap`

jQuery and jQuery-UI is using external static file 

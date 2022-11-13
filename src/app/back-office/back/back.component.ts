
import { Component, OnInit, Renderer2 } from "@angular/core";
import { ScriptServiceService } from "../../script-service.service";

const SCRIPT_PATH_LIST =[
"../../../assets/BackOffice/plugins/jquery/jquery.min.js",
"../../../assets/BackOffice/plugins/bootstrap/js/bootstrap.js",
"../../../assets/BackOffice/plugins/bootstrap-select/js/bootstrap-select.js",
"../../../assets/BackOffice/plugins/jquery-slimscroll/jquery.slimscroll.js",
"../../../assets/BackOffice/plugins/node-waves/waves.js",
"../../../assets/BackOffice/plugins/jquery-countto/jquery.countTo.js",
"../../../assets/BackOffice/plugins/raphael/raphael.min.js",
"../../../assets/BackOffice/plugins/morrisjs/morris.js",
"../../../assets/BackOffice/plugins/chartjs/Chart.bundle.js",
"../../../assets/BackOffice/plugins/flot-charts/jquery.flot.js",
"../../../assets/BackOffice/plugins/flot-charts/jquery.flot.resize.js",
"../../../assets/BackOffice/plugins/flot-charts/jquery.flot.pie.js",
"../../../assets/BackOffice/plugins/flot-charts/jquery.flot.categories.js",
"../../../assets/BackOffice/plugins/flot-charts/jquery.flot.time.js",
"../../../assets/BackOffice/plugins/jquery-sparkline/jquery.sparkline.js",
"../../../assets/BackOffice/js/admin.js",
"../../../assets/BackOffice/js/pages/index.js",
"../../../assets/BackOffice/js/demo.js"
] 

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(   private renderer: Renderer2,
    private ScriptServiceService: ScriptServiceService) { }

   ngOnInit() {
    SCRIPT_PATH_LIST.forEach(e=> {
      const scriptElement = this.ScriptServiceService.loadJsScript(this.renderer, e);
      scriptElement.onload = () => {
       console.log('loaded');
     
      }
      scriptElement.onerror = () => {
        console.log('Could not load the script!');
      }

    })
   
  }

}
